import { createClient } from "@supabase/supabase-js";

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
