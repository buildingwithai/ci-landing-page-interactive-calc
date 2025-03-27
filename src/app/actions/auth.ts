"use server";

import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

// This function creates a Supabase client for server actions
export async function createServerActionClient() {
  const cookieStore = cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll().map(({ name, value }) => ({
            name,
            value,
          }));
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            cookieStore.set(name, value, options);
          });
        },
      },
    },
  );
}

export async function refreshSession() {
  "use server";
  const supabase = await createServerActionClient();
  await supabase.auth.refreshSession();
  return { success: true };
}
