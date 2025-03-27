import { Zap, Target, Clock } from "lucide-react";
import BenefitCard from "./benefit-card";
import AnimatedSection from "./animated-section";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Competitive Advantage",
      description:
        "Gain strategic insights into competitor moves, positioning, and vulnerabilities that help you outmaneuver the competition and win more deals.",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Faster Response",
      description:
        "Quickly adapt to market changes with real-time competitive intelligence that keeps your team informed and ready to respond to competitive threats.",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Flexible Scaling",
      description:
        "Scale your competitive intelligence resources up or down as needed, with the ability to pause or cancel anytime—no long-term commitments.",
    },
  ];

  return (
    <section id="benefits" className="py-24" style={{ background: "#F2F2F2" }}>
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-black">
            Why Choose Fractional Competitive Intelligence
          </h2>
          <p className="text-[#4A4A4A] max-w-2xl mx-auto">
            Get all the benefits of expert competitive intelligence without the
            overhead of a full-time hire
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <BenefitCard
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
