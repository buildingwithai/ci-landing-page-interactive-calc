import { Check, Coffee } from "lucide-react";
import AnimatedSection from "./animated-section";

export default function StrategySession() {
  const benefits = [
    "Cancel anytime - no long-term contracts",
    "Scale hours up or down as needed",
    "Expert-level competitive intelligence",
    "Save 40-60% compared to alternatives",
  ];

  return (
    <section
      id="strategy-session"
      className="py-24 relative"
      style={{ background: "#E2F4D7" }}
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#99F67E]/20 via-[#E2F4D7] to-[#E2F4D7] opacity-70" />

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-black">
            Ready to Transform Your Competitive Intelligence?
          </h2>
          <p className="text-[#4A4A4A] max-w-2xl mx-auto">
            Get expert competitive intelligence without the overhead. Start with
            a no-obligation coffee chat.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg border border-[#E8F4E3] overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left column - Content */}
              <div className="p-8 md:p-10 space-y-6">
                <div>
                  <h3 className="text-3xl font-bold mb-3 text-black">
                    Let's Chat
                  </h3>
                  <p className="text-[#4A4A4A]">
                    Book a 30-minute coffee chat to discuss your competitive
                    intelligence needs.
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3 group">
                      <div className="w-6 h-6 rounded-full bg-[#E8F4E3] flex items-center justify-center text-[#99F67E] shrink-0 mt-0.5 group-hover:bg-[#99F67E]/30 transition-all duration-300">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="group-hover:text-[#000000] text-[#4A4A4A] transition-colors">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full bg-[#FFE8D1] flex items-center justify-center text-[#FF9064] border-2 border-[#FFE8D1]">
                      <Coffee className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-black">
                        Jovanny Tovar
                      </h4>
                      <p className="text-sm text-[#4A4A4A]">
                        Fractional Competitive Intelligence Specialist
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-[#4A4A4A]">
                    Get hands-on, personalized competitive intelligence support
                    from an experienced professional who understands your
                    industry challenges.
                  </p>
                </div>
              </div>

              {/* Right column - Calendar */}
              <div className="bg-[#F2F2F2] p-4 rounded-r-xl overflow-hidden">
                <div className="bg-white rounded-xl h-full overflow-hidden border border-[#E8F4E3] shadow-sm">
                  <iframe
                    src="https://zcal.co/i/mbIVKLmm?embed=1&embedType=iframe"
                    loading="lazy"
                    style={{
                      border: "none",
                      width: "100%",
                      height: "600px",
                      minHeight: "544px",
                      borderRadius: "0.75rem",
                    }}
                    id="zcal-invite"
                    title="Schedule a coffee chat"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
