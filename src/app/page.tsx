import Hero from "@/components/hero";
import Navbar from "@/components/navbar-no-supabase";
import Footer from "@/components/footer";
import BenefitsSection from "@/components/benefits-section";
import HowItWorks from "@/components/how-it-works";
import StrategySession from "@/components/strategy-session";
import CompetitiveServices from "@/components/competitive-services";
import FaqSection from "@/components/faq-section";
import { ArrowRight, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/animated-section";
import Link from "next/link";
import dynamicImport from "next/dynamic";
import { ErrorBoundary } from "@/components/error-boundary";
import ClientPortalDemoFallback from "@/components/client-portal-demo-fallback";

// Dynamically import the ClientPortalDemo component with SSR disabled
const ClientPortalDemo = dynamicImport(
  () => import("@/components/client-portal-demo"),
  { ssr: false, loading: () => <ClientPortalDemoFallback /> },
);

export const dynamic = "force-dynamic";

export default async function Home() {
  // Removed Supabase client initialization
  const user = null;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />

      {/* Benefits Section */}
      <BenefitsSection />

      {/* How It Works Section */}
      <HowItWorks />

      {/* Competitive Services Section */}
      <CompetitiveServices />

      {/* Client Portal Demo Section */}
      <ErrorBoundary fallback={<ClientPortalDemoFallback />}>
        <ClientPortalDemo />
      </ErrorBoundary>

      {/* Stats Section */}
      <section className="py-24 bg-[#E2F4D7]">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-10">
            <div className="inline-block px-4 py-1 bg-[#99F67E]/30 rounded-full text-black text-sm font-medium mb-4">
              BY THE NUMBERS
            </div>
            <h2 className="text-4xl font-bold mb-4 text-black">
              Results That Speak For Themselves
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">
            <AnimatedSection>
              <div className="bg-white rounded-xl p-8 border border-[#E8F4E3] shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#99F67E]">
                <div className="text-5xl font-bold mb-3 text-black">80%</div>
                <div className="text-[#4A4A4A] font-medium">
                  Average Cost Savings
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <div className="bg-white rounded-xl p-8 border border-[#E8F4E3] shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#99F67E]">
                <div className="text-5xl font-bold mb-3 text-black">24hr</div>
                <div className="text-[#4A4A4A] font-medium">
                  Average Response Time
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="bg-white rounded-xl p-8 border border-[#E8F4E3] shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#99F67E]">
                <div className="text-5xl font-bold mb-3 text-black">100%</div>
                <div className="text-[#4A4A4A] font-medium">
                  Flexible Scaling
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials Section removed as requested */}

      {/* FAQ Section */}
      <FaqSection />

      {/* Strategy Session Section */}
      <StrategySession />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#99F67E]/20 via-white to-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-bold mb-4 text-black">
              Ready to Transform Your Competitive Intelligence?
            </h2>
            <p className="text-[#4A4A4A] mb-8 max-w-2xl mx-auto">
              Join innovative companies who are achieving more with less using
              our fractional competitive intelligence services.
            </p>
            <Button
              asChild
              size="lg"
              className="rounded-md bg-black hover:bg-[#99F67E] text-white hover:text-black transition-colors"
            >
              <Link href="#strategy-session">
                Schedule a Coffee Chat
                <Coffee className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
