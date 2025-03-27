import {
  CheckCircle2,
  MessageSquare,
  Calendar,
  Zap,
  Users,
  FileText,
  Clock,
  Layers,
} from "lucide-react";
import AnimatedSection from "./animated-section";

export default function HowItWorks() {
  const steps = [
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Discovery & Alignment",
      description:
        "Short call to identify key competitors, threats, and your team's gaps.",
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Client Portal Access",
      description: "All assets, tasks, and feedback in one place.",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Choose Your Hours",
      description: "Start at 5 hours/week, scale up or down anytime.",
    },
    {
      icon: <Layers className="h-6 w-6" />,
      title: "Flexible Scaling",
      description: "Ramp up, scale down, pause, or cancel anytime.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-24"
      style={{ background: "#F2F2F2" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
          <div className="lg:w-1/2">
            <AnimatedSection>
              <div className="inline-block px-4 py-1 bg-[#E8F4E3] rounded-full text-black text-sm font-medium mb-4">
                THE PROCESS
              </div>
              <h2 className="text-4xl font-bold mb-4 text-black">
                How It Works
              </h2>
              <p className="text-[#4A4A4A] mb-10">
                Our streamlined process gets you the competitive intelligence
                you need without unnecessary complexity.
              </p>

              <div className="space-y-8">
                {steps.map((step, index) => (
                  <AnimatedSection
                    key={index}
                    delay={index * 100}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#E8F4E3] flex items-center justify-center shrink-0 text-black transition-all duration-300 hover:bg-[#99F67E] hover:scale-110 group-hover:bg-[#99F67E]/70">
                      {step.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1 text-black">
                        {step.title}
                      </h3>
                      <p className="text-[#4A4A4A]">{step.description}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={200} className="lg:w-1/2">
            <div className="bg-white rounded-xl overflow-hidden border border-[#E8F4E3] shadow-lg p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#E8F4E3] flex items-center justify-center text-black">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-black">Client Portal</h4>
                  <p className="text-sm text-[#4A4A4A]">
                    Track hours and projects
                  </p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-black">Weekly hours used</span>
                    <span className="text-[#99F67E] font-medium">16/20</span>
                  </div>
                  <div className="w-full bg-[#F2F2F2] rounded-full h-2">
                    <div
                      className="bg-[#99F67E] h-2 rounded-full"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </div>

                <div className="flex justify-between text-black">
                  <span className="text-sm">Active projects</span>
                  <span>2</span>
                </div>

                <div className="flex justify-between text-black">
                  <span className="text-sm">Next meeting</span>
                  <span>Tomorrow, 2:00 PM</span>
                </div>
              </div>

              <div className="py-3 px-4 bg-[#F2F2F2] rounded-lg flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#FFE8D1] flex items-center justify-center text-[#FF9064]">
                    <Users className="h-3.5 w-3.5" />
                  </div>
                  <span className="text-sm text-black">Pause service</span>
                </div>
                <div className="w-10 h-5 bg-[#E8F4E3] rounded-full relative">
                  <div className="absolute right-0.5 top-0.5 w-4 h-4 rounded-full bg-[#99F67E]"></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#E9EEFE] rounded-lg p-4 text-center">
                  <div className="text-[#C5BAFF] hover:text-[#C5BAFF]/80 transition-colors text-sm mb-1 font-medium">
                    Tasks Completed
                  </div>
                  <div className="text-2xl font-bold text-black">12</div>
                </div>
                <div className="bg-[#FFE8D1] rounded-lg p-4 text-center">
                  <div className="text-[#FF9064] hover:text-[#FF9064]/80 transition-colors text-sm mb-1 font-medium">
                    Hours saved
                  </div>
                  <div className="text-2xl font-bold text-black">128</div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
