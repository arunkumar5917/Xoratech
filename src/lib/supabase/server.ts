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
  if (!isSupabaseConfigured) {
    throw new Error(
      "Supabase is not configured. Add NEXT_PUBLIC_SUPABASE_URL and the appropriate keys to your environment."
    );
  }
  const key = (!serviceKey || serviceKey.includes("placeholder")) ? anonKey : serviceKey;
  return createClient(url, key, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}
