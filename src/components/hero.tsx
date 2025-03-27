"use client";

import Link from "next/link";
import { ArrowRight, Check, Calculator } from "lucide-react";
import { Button } from "./ui/button";
import CompetitiveIntelCalculator from "./competitive-intel-calculator";
import AnimatedSection from "./animated-section";
import { useCallback } from "react";

export default function Hero() {
  // Function to trigger the calculator animation
  const triggerCalculator = useCallback(() => {
    // Use window to access the global eventBus
    if (typeof window !== "undefined") {
      // Import directly to avoid TypeScript issues
      import("@/lib/event-bus").then((module) => {
        const eventBus = module.default;
        eventBus.publish("try-calculator");
      });
    }
  }, []);

  return (
    <div
      className="relative overflow-hidden pt-16 pb-24"
      style={{ background: "#E2F4D7" }}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#99F67E]/20 via-[#E2F4D7] to-[#E2F4D7]" />

      <div className="relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-black">
                Competitive Intel Without the Full-Time Cost.
              </h1>

              <p className="text-xl text-[#4A4A4A] mb-8 leading-relaxed">
                Fractional competitive intelligence that scales with your needs,
                pause or cancel anytime.
              </p>

              <div className="flex flex-col items-start gap-4 mb-8 text-sm text-[#4A4A4A]">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-[#99F67E]" />
                  <span>No long-term contracts</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-[#99F67E]" />
                  <span>Expert competitive intelligence</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-[#99F67E]" />
                  <span>Pause or cancel anytime</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  onClick={triggerCalculator}
                  size="lg"
                  variant={undefined} // remove shadcn/ui default variant
                  className="
    !bg-black             /* Default background: Black */
    !text-white           /* Default text: White */
    !from-transparent 
    !to-transparent 
    !bg-none              /* Remove any leftover gradient classes */
    !border-none
    !shadow-none
    transition-colors
    hover:!bg-[#99F67E]   /* Hover background: #99F67E */
    hover:!text-black     /* Hover text: black (optional) */
    focus-visible:!ring-0
    rounded-md
    group
  "
                >
                  Try Calculator
                  <Calculator className="ml-2 w-4 h-4 group-hover:animate-bounce-once" />
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection
              delay={200}
              className="w-full max-w-xl mx-auto lg:mx-0"
            >
              <CompetitiveIntelCalculator />
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
}
