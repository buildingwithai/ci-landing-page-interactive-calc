import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import BenefitsSection from "@/components/benefits-section";
import HowItWorks from "@/components/how-it-works";
import StrategySession from "@/components/strategy-session";
import { ArrowRight, CheckCircle2, Zap, BarChart, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/animated-section";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function Home() {
  // Removed Supabase client initialization
  const user = null;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />

      {/* Benefits Section */}
      <BenefitsSection />

      {/* How It Works Section */}
      <HowItWorks />

      {/* Stats Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <AnimatedSection>
              <div className="text-4xl font-bold mb-2">85%</div>
              <div className="text-primary-foreground/80">
                Average Cost Savings
              </div>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-primary-foreground/80">
                Successful Product Launches
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="text-4xl font-bold mb-2">24hr</div>
              <div className="text-primary-foreground/80">
                Average Response Time
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear from product leaders who've transformed their marketing with
              our fractional approach
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                quote:
                  "The fractional model gave us enterprise-quality product marketing at startup prices. Game changer for our launch.",
                name: "Sarah Johnson",
                title: "VP of Product, TechStart",
              },
              {
                quote:
                  "We scaled our product marketing resources up during launch and down during quiet periods. Saved us over $120K this year.",
                name: "Michael Chen",
                title: "CEO, DataFlow",
              },
              {
                quote:
                  "The messaging work transformed how we talk about our product. Sales cycles shortened by 40% after implementation.",
                name: "Priya Patel",
                title: "CMO, CloudSecure",
              },
            ].map((testimonial, index) => (
              <AnimatedSection
                key={index}
                delay={index * 100}
                className="p-6 bg-background rounded-xl border border-border/50"
              >
                <div className="flex flex-col h-full">
                  <div className="text-primary mb-4">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 11L8 17H5L7 11H5V8H10V11ZM19 11L17 17H14L16 11H14V8H19V11Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <p className="text-foreground mb-6 flex-grow">
                    {testimonial.quote}
                  </p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Strategy Session Section */}
      <StrategySession />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/20 via-background to-background">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-bold mb-4">
              Ready to Transform Your Product Marketing?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join innovative companies who are achieving more with less using
              our fractional product marketing services.
            </p>
            <Button
              asChild
              size="lg"
              className="rounded-md"
              variant="glassmorphic"
            >
              <Link href="#strategy-session">
                Schedule a Strategy Session
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
