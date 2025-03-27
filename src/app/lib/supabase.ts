import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

// This function creates a Supabase client for server components
export const createClient = async () => {
  // Get cookies from the request
  try {
    const cookieStore = cookies();

    return createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            try {
              return cookieStore.getAll().map(({ name, value }) => ({
                name,
                value,
              }));
            } catch (error) {
              console.error("Error accessing cookies:", error);
              return [];
            }
          },
          // Only set cookies in a Server Action or Route Handler
          setAll() {
            // Do nothing - cookies will be set in the client side
            // This prevents the "Cookies can only be modified in a Server Action or Route Handler" error
            return;
          },
        },
      },
    );
  } catch (error) {
    console.error("Error accessing cookies:", error);
    throw new Error("Failed to access cookies");
  }
};
