"use client";

import { useState } from "react";
import { FileText, Users, Coffee, Bell } from "lucide-react";
import AnimatedSection from "./animated-section";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="h-64 perspective-1000 w-full cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${isFlipped ? "rotate-y-180" : ""}`}
      >
        {/* Front of card */}
        <div
          className={`absolute w-full h-full backface-hidden rounded-xl p-6 flex flex-col items-center justify-center text-center transition-all duration-300 ${isHovered ? "shadow-lg" : "shadow-md"}`}
          style={{
            background: isHovered ? "#E8F4E3" : "white",
            borderColor: "#E2F4D7",
            borderWidth: "1px",
            transform: "rotateY(0)",
            backfaceVisibility: "hidden",
          }}
        >
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all duration-300"
            style={{
              background: isHovered ? "#99F67E" : "#E8F4E3",
            }}
          >
            {icon}
          </div>
          <h3 className="text-xl font-bold mb-2 text-black">{title}</h3>
          <p className="text-[#4A4A4A] text-sm">Click to learn more</p>
        </div>

        {/* Back of card */}
        <div
          className="absolute w-full h-full backface-hidden rounded-xl p-6 flex flex-col items-center justify-center shadow-lg"
          style={{
            background: "#99F67E",
            borderColor: "#99F67E",
            borderWidth: "1px",
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
          }}
        >
          <p className="text-black text-center">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function CompetitiveServices() {
  const services = [
    {
      icon: <Bell className="h-8 w-8 text-black" />,
      title: "Track Competitors",
      description:
        "Regular updates via Slack channels and internal newsletters to keep your team informed of competitor moves.",
    },
    {
      icon: <FileText className="h-8 w-8 text-black" />,
      title: "Battle Cards & Cheat Sheets",
      description: "Clear, concise intel your sales team can use immediately.",
    },
    {
      icon: <Users className="h-8 w-8 text-black" />,
      title: "Competitive Intel Workshops",
      description:
        "Hands-on sessions training your team to spot and respond to competitive moves.",
    },
    {
      icon: <Coffee className="h-8 w-8 text-black" />,
      title: "Coffee & Compete Sessions",
      description:
        "Regular drop-in office hours to discuss competitive trends and strategies.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-[#E8F4E3] rounded-full text-black text-sm font-medium mb-4">
            OUR SERVICES
          </div>
          <h2 className="text-4xl font-bold mb-4 text-black">
            Competitive Intel Services
          </h2>
          <p className="text-[#4A4A4A] max-w-2xl mx-auto">
            Actionable competitive intelligence delivered in flexible formats to
            meet your team's needs
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
}
