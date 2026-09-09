import { createBrowserClient } from "@supabase/ssr";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

export const isSupabaseConfigured = Boolean(
  url &&
  anonKey &&
  !url.includes("placeholder") &&
  !anonKey.includes("placeholder") &&
  url.startsWith("http")
);

export function createClient() {
  const safeUrl = isSupabaseConfigured ? url : "https://placeholder.supabase.co";
  const safeKey = isSupabaseConfigured ? anonKey : "placeholder-anon-key";
  return createBrowserClient(safeUrl, safeKey);
}
