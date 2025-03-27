// This file replaces middleware functionality with a server-side approach
// to avoid Edge Runtime compatibility issues with native modules

import { createClient } from "./lib/supabase";
import { redirect } from "next/navigation";

export async function checkSession() {
  try {
    const supabase = await createClient();
    const {
      data: { session },
    } = await supabase.auth.getSession();
    return session;
  } catch (error) {
    console.error("Error checking session:", error);
    return null;
  }
}

export async function requireAuth() {
  const session = await checkSession();
  if (!session) {
    redirect("/sign-in");
  }
  return session;
}
