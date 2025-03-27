"use client";

import { createContext, useContext, useEffect } from "react";
import { createClient } from "../../supabase/client";
import { refreshSession } from "@/app/actions/auth";

const AuthContext = createContext<{ refreshSession: () => Promise<void> }>({
  refreshSession: async () => {},
});

export function useAuth() {
  return useContext(AuthContext);
}

export function ClientAuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createClient();

  // Handle auth state changes on the client side
  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event) => {
      if (event === "SIGNED_IN" || event === "TOKEN_REFRESHED") {
        // Refresh the server-side session when auth state changes
        await refreshSession();
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [supabase]);

  const value = {
    refreshSession: async () => {
      await refreshSession();
    },
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
