import { createClient } from "@supabase/supabase-js";
import { createServerClient as createSSRServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY ?? "";
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

export const isSupabaseConfigured = Boolean(
  url &&
  (serviceKey || anonKey) &&
  !url.includes("placeholder") &&
  !(serviceKey.includes("placeholder") && anonKey.includes("placeholder")) &&
  url.startsWith("http")
);

export function createServerClient() {
  const safeUrl = isSupabaseConfigured ? url : "https://placeholder.supabase.co";
  const rawKey = (!serviceKey || serviceKey.includes("placeholder")) ? anonKey : serviceKey;
  const safeKey = rawKey && !rawKey.includes("placeholder") ? rawKey : "placeholder-service-role-key";
  return createClient(safeUrl, safeKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}

export async function createServerClientWithCookies() {
  const cookieStore = await cookies();
  const safeUrl = isSupabaseConfigured ? url : "https://placeholder.supabase.co";
  const anonKeyValue = anonKey && !anonKey.includes("placeholder") ? anonKey : "placeholder-anon-key";

  return createSSRServerClient(safeUrl, anonKeyValue, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet: { name: string; value: string; options?: Record<string, unknown> }[]) {
        try {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options)
          );
        } catch {
          // setAll called from a Server Component — ignore
        }
      },
    },
  });
}
