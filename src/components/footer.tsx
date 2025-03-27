import Link from "next/link";
import { Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border/40 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="md:col-span-1">
            <Link
              href="/"
              className="text-xl font-bold text-foreground flex items-center mb-4"
            >
              <span className="text-white hover:text-[#99F67E] transition-colors mr-1">
                GTM
              </span>
              LABS
            </Link>
            <p className="text-muted-foreground text-sm mb-4">
              Expert product marketing services on-demand, at a fraction of the
              cost.
            </p>
          </div>

          <div className="md:col-span-1">
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="https://gtmlabs.io/privacy-policy"
                  target="_blank"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="https://gtmlabs.io/terms-of-service"
                  target="_blank"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/40">
          <div className="text-muted-foreground mb-4 md:mb-0">
            © {currentYear}{" "}
            <span className="text-white hover:text-[#99F67E] transition-colors font-medium">
              GTM
            </span>
            LABS. All rights reserved.
          </div>

          <div className="flex space-x-6">
            <a
              href="https://x.com/GTMjo_"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="sr-only">Twitter</span>
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/company/gtm-labs"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
