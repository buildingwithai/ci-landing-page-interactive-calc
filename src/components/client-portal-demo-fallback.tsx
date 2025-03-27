import { CheckCircle2, Slack, MessageSquare } from "lucide-react";

export default function ClientPortalDemoFallback() {
  return (
    <section className="py-24" style={{ background: "#E9EEFE" }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-[#C5BAFF]/30 rounded-full text-black text-sm font-medium mb-4">
            CLIENT EXPERIENCE
          </div>
          <h2 className="text-4xl font-bold mb-4 text-black">
            Client Portal Interactive Demo
          </h2>
          <p className="text-[#4A4A4A] max-w-2xl mx-auto">
            See how our client portal makes competitive intelligence
            collaboration seamless
          </p>
        </div>

        <div className="max-w-6xl mx-auto bg-white rounded-xl overflow-hidden border border-[#C5BAFF]/30 shadow-lg">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left column - Features */}
            <div className="p-8 space-y-6">
              {[
                {
                  id: "task-tracking",
                  icon: <CheckCircle2 className="h-6 w-6" />,
                  bgColor: "bg-[#E8F4E3]",
                  title: "Task Assignment & Progress Tracking",
                  description:
                    "Tasks broken down into clear, actionable items with real-time progress updates.",
                },
                {
                  id: "slack-integration",
                  icon: <Slack className="h-6 w-6" />,
                  bgColor: "bg-[#FFE8D1]",
                  title: "Real-time Slack Integration",
                  description:
                    "Communication streamlined directly into your existing channels for seamless updates.",
                },
                {
                  id: "annotation-tool",
                  icon: <MessageSquare className="h-6 w-6" />,
                  bgColor: "bg-[#E9EEFE]",
                  title: "Interactive Annotation Tool",
                  description:
                    "Highlight, circle, and leave notes directly on deliverables for clear feedback.",
                },
              ].map((feature, index) => (
                <div
                  key={feature.id}
                  className="w-full text-left relative overflow-hidden rounded-lg"
                >
                  <div className="flex items-start gap-4 group">
                    <div
                      className={`w-12 h-12 rounded-full ${feature.bgColor} flex items-center justify-center shrink-0 text-black`}
                    >
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 text-black flex items-center justify-between">
                        <span>{feature.title}</span>
                      </h3>
                      <p className="text-[#4A4A4A]">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right column - Portal Demo */}
            <div className="bg-[#F2F2F2] p-6">
              <div className="bg-white rounded-xl h-full overflow-hidden border border-[#E8F4E3] shadow-sm p-4">
                <div className="flex justify-center items-center h-full">
                  <div className="text-center p-8">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#E8F4E3] flex items-center justify-center">
                      <CheckCircle2 className="h-8 w-8 text-black" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-black">
                      Interactive Demo
                    </h3>
                    <p className="text-[#4A4A4A] mb-4">
                      Experience our full interactive demo by visiting our site
                      on a desktop browser.
                    </p>
                    <a
                      href="#strategy-session"
                      className="inline-block px-4 py-2 bg-black text-white rounded-md text-sm font-medium hover:bg-[#99F67E] hover:text-black transition-colors"
                    >
                      Book a Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
