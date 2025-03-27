import Link from "next/link";
import { createClient } from "../app/lib/supabase";
import { Button } from "./ui/button";
import { UserCircle } from "lucide-react";
import UserProfile from "./user-profile";

export default async function Navbar() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <nav className="w-full border-b border-border/40 bg-background py-4 sticky top-0 z-50 backdrop-blur-sm bg-background/80">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link
          href="/"
          prefetch
          className="text-xl font-bold text-foreground flex items-center"
        >
          <span className="text-primary mr-1">Fractional</span>PMO
        </Link>
        <div className="flex gap-4 items-center">
          <Link
            href="/#benefits"
            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
          >
            Benefits
          </Link>
          <Link
            href="/#how-it-works"
            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
          >
            How It Works
          </Link>
          <Link
            href="/#strategy-session"
            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
          >
            Book a Call
          </Link>
          {user ? (
            <>
              <Link href="/dashboard">
                <Button variant="default" size="sm">
                  Dashboard
                </Button>
              </Link>
              <UserProfile />
            </>
          ) : (
            <>
              <Link
                href="/sign-in"
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                Sign In
              </Link>
              <Link href="#strategy-session">
                <Button variant="glassmorphic" size="sm">
                  Get Started
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
