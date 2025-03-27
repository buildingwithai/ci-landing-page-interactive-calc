import Link from "next/link";
import { Button } from "./ui/button";

export default function Navbar() {
  // Removed Supabase client initialization
  const user = null;

  return (
    <nav className="w-full border-b border-[#E8F4E3] bg-white py-4 sticky top-0 z-50 backdrop-blur-sm bg-white/80">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link
          href="/"
          prefetch
          className="text-xl font-bold text-black flex items-center"
        >
          <span className="text-black hover:text-[#99F67E] transition-colors mr-1">
            GTM
          </span>
          LABS
        </Link>
        <div className="flex gap-4 items-center">
          <Link
            href="/#benefits"
            className="text-sm font-medium text-black/80 hover:text-[#99F67E] transition-colors"
          >
            Benefits
          </Link>
          <Link
            href="/#how-it-works"
            className="text-sm font-medium text-black/80 hover:text-[#99F67E] transition-colors"
          >
            How It Works
          </Link>
          <Link
            href="/#strategy-session"
            className="text-sm font-medium text-black/80 hover:text-[#99F67E] transition-colors"
          >
            Book a Chat
          </Link>
          {user ? (
            <>
              <Link href="/dashboard">
                <Button
                  size="sm"
                  className="bg-black hover:bg-[#99F67E] text-white hover:text-black transition-colors"
                >
                  Dashboard
                </Button>
              </Link>
            </>
          ) : null}
        </div>
      </div>
    </nav>
  );
}
