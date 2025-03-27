"use client";

import { useState, useEffect } from "react";
import {
  CheckCircle2,
  Slack,
  MessageSquare,
  Edit3,
  Bell,
  ArrowRight,
  User,
  Send,
} from "lucide-react";
import AnimatedSection from "./animated-section";

type Task = {
  id: string;
  text: string;
  completed: boolean;
};

type Comment = {
  id: string;
  text: string;
  user: string;
  timestamp: string;
  avatar?: string;
};

export default function ClientPortalDemo() {
  // Add a state to track if the component is mounted on the client
  const [isMounted, setIsMounted] = useState(false);

  // Set mounted state when component mounts on client
  useEffect(() => {
    console.log("ClientPortalDemo mounted");
    setIsMounted(true);

    // Log browser information for debugging
    console.log("Browser info:", {
      userAgent: window.navigator.userAgent,
      vendor: window.navigator.vendor,
      platform: window.navigator.platform,
    });

    return () => {
      console.log("ClientPortalDemo unmounted");
    };
  }, []);

  // Add error handling for animations
  useEffect(() => {
    try {
      // Check if the browser supports the required animation features
      const supportsAnimations =
        typeof document !== "undefined" &&
        "animate" in document.documentElement &&
        window.CSS &&
        CSS.supports &&
        CSS.supports("animation", "name");

      console.log("Animation support:", supportsAnimations);

      // Apply a class to the body to indicate animation support
      if (supportsAnimations) {
        document.body.classList.add("supports-animations");
      } else {
        document.body.classList.add("no-animation-support");
      }
    } catch (error) {
      console.error("Error checking animation support:", error);
    }
  }, []);
  const [activeTab, setActiveTab] = useState<string>("task-tracking");
  const [isHovered, setIsHovered] = useState(false);

  // Task tracking state
  const [project1Tasks, setProject1Tasks] = useState<Task[]>([
    { id: "task1", text: "Initial data gathering", completed: true },
    { id: "task2", text: "Feature comparison matrix", completed: true },
    { id: "task3", text: "Pricing strategy analysis", completed: false },
  ]);

  const [project2Tasks, setProject2Tasks] = useState<Task[]>([
    { id: "task4", text: "Competitor positioning", completed: true },
    { id: "task5", text: "Key differentiators", completed: true },
    { id: "task6", text: "Objection handling", completed: true },
  ]);

  // Slack integration state
  const [slackMessage, setSlackMessage] = useState("");
  const [slackMessages, setSlackMessages] = useState<Comment[]>([
    {
      id: "msg1",
      text: "New competitor alert: TechRival Inc launched a new feature",
      user: "CI-Bot",
      timestamp: "Just now",
    },
    {
      id: "msg2",
      text: "Task completed: Feature comparison matrix for TechRival Inc",
      user: "CI-Bot",
      timestamp: "2h ago",
    },
    {
      id: "msg3",
      text: "New comment on Battle Cards from Sarah",
      user: "CI-Bot",
      timestamp: "Yesterday",
    },
  ]);

  // Annotation tool state
  const [annotationComment, setAnnotationComment] = useState("");
  const [annotationComments, setAnnotationComments] = useState<Comment[]>([
    {
      id: "anno1",
      text: "Can we add more specific metrics for the pricing comparison?",
      user: "John Doe",
      timestamp: "10 min ago",
    },
  ]);

  // Toggle task completion
  const toggleTaskCompletion = (taskId: string, projectNum: number) => {
    if (projectNum === 1) {
      setProject1Tasks(
        project1Tasks.map((task) =>
          task.id === taskId ? { ...task, completed: !task.completed } : task,
        ),
      );
    } else {
      setProject2Tasks(
        project2Tasks.map((task) =>
          task.id === taskId ? { ...task, completed: !task.completed } : task,
        ),
      );
    }
  };

  // Add slack message
  const addSlackMessage = () => {
    if (slackMessage.trim() === "") return;

    const newMessage: Comment = {
      id: `msg${Date.now()}`,
      text: slackMessage,
      user: "You",
      timestamp: "Just now",
    };

    setSlackMessages([...slackMessages, newMessage]);
    setSlackMessage("");
  };

  // Add annotation comment
  const addAnnotationComment = () => {
    if (annotationComment.trim() === "") return;

    const newComment: Comment = {
      id: `anno${Date.now()}`,
      text: annotationComment,
      user: "You",
      timestamp: "Just now",
    };

    setAnnotationComments([...annotationComments, newComment]);
    setAnnotationComment("");
  };

  const features = [
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
  ];

  // If not mounted yet (server-side), return a simple placeholder
  if (!isMounted) {
    return (
      <section className="py-24" style={{ background: "#E9EEFE" }}>
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block px-4 py-1 bg-[#C5BAFF]/30 rounded-full text-black text-sm font-medium mb-4">
            CLIENT EXPERIENCE
          </div>
          <h2 className="text-4xl font-bold mb-4 text-black">
            Client Portal Interactive Demo
          </h2>
          <p className="text-[#4A4A4A] max-w-2xl mx-auto mb-8">
            Loading interactive demo...
          </p>
          <div className="w-16 h-16 mx-auto rounded-full border-4 border-[#C5BAFF] border-t-transparent animate-spin"></div>
        </div>
      </section>
    );
  }

  // Client-side rendering with error handling
  try {
    return (
      <section className="py-24" style={{ background: "#E9EEFE" }}>
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
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
          </AnimatedSection>

          <div className="max-w-6xl mx-auto bg-white rounded-xl overflow-hidden border border-[#C5BAFF]/30 shadow-lg">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left column - Features */}
              <div className="p-8 space-y-6">
                {features.map((feature, index) => (
                  <AnimatedSection key={feature.id} delay={index * 100}>
                    <button
                      onClick={() => setActiveTab(feature.id)}
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                      className={`w-full text-left transition-all duration-300 relative overflow-hidden rounded-lg ${activeTab === feature.id ? "scale-105" : "opacity-80 hover:opacity-100"}`}
                    >
                      <div className="flex items-start gap-4 group">
                        <div
                          className={`w-12 h-12 rounded-full ${feature.bgColor} flex items-center justify-center shrink-0 text-black transition-all duration-300 ${activeTab === feature.id ? "scale-110 shadow-md" : "group-hover:scale-105"}`}
                        >
                          {feature.icon}
                        </div>
                        <div className="flex-1">
                          <h3
                            className={`text-xl font-semibold mb-2 text-black flex items-center justify-between ${activeTab === feature.id ? "text-black" : ""}`}
                          >
                            <span>{feature.title}</span>
                            <ArrowRight
                              className={`ml-2 h-6 w-6 ${
                                activeTab === feature.id
                                  ? feature.id === "task-tracking"
                                    ? "text-[#99F67E] animate-pulse"
                                    : feature.id === "slack-integration"
                                      ? "text-[#FF9064] animate-pulse"
                                      : "text-[#C5BAFF] animate-pulse"
                                  : feature.id === "task-tracking"
                                    ? "text-[#99F67E]/0 group-hover:text-[#99F67E] group-hover:animate-bounce-once"
                                    : feature.id === "slack-integration"
                                      ? "text-[#FF9064]/0 group-hover:text-[#FF9064] group-hover:animate-bounce-once"
                                      : "text-[#C5BAFF]/0 group-hover:text-[#C5BAFF] group-hover:animate-bounce-once"
                              } transition-all duration-300 ${
                                feature.id === "task-tracking"
                                  ? "shadow-[0_0_12px_rgba(153,246,126,0.7)] group-hover:shadow-[0_0_16px_rgba(153,246,126,0.9)]"
                                  : feature.id === "slack-integration"
                                    ? "shadow-[0_0_12px_rgba(255,144,100,0.7)] group-hover:shadow-[0_0_16px_rgba(255,144,100,0.9)]"
                                    : "shadow-[0_0_12px_rgba(197,186,255,0.7)] group-hover:shadow-[0_0_16px_rgba(197,186,255,0.9)]"
                              }`}
                            />
                          </h3>
                          <p className="text-[#4A4A4A]">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                      {/* Animated border effect */}
                      <div
                        className={`absolute inset-0 pointer-events-none border-2 border-transparent rounded-lg ${
                          activeTab === feature.id
                            ? feature.id === "task-tracking"
                              ? "border-[#99F67E] animate-border-pulse-green"
                              : feature.id === "slack-integration"
                                ? "border-[#FF9064] animate-border-pulse-orange"
                                : "border-[#C5BAFF] animate-border-pulse-blue"
                            : isHovered
                              ? feature.id === "task-tracking"
                                ? "border-[#99F67E] animate-border-pulse-green"
                                : feature.id === "slack-integration"
                                  ? "border-[#FF9064] animate-border-pulse-orange"
                                  : "border-[#C5BAFF] animate-border-pulse-blue"
                              : ""
                        }`}
                      ></div>
                      {/* Animated laser effect on hover */}
                      <div
                        className={`absolute inset-0 pointer-events-none overflow-hidden rounded-lg`}
                      >
                        <div
                          className={`h-full w-full ${
                            feature.id === "task-tracking"
                              ? "laser-border-green"
                              : feature.id === "slack-integration"
                                ? "laser-border-orange"
                                : "laser-border-blue"
                          } opacity-0 group-hover:opacity-100`}
                        >
                          <div className="left-border"></div>
                          <div className="right-border"></div>
                        </div>
                      </div>
                      <div
                        className="absolute inset-0 bg-transparent transition-all duration-700 origin-left scale-x-0 group-hover:scale-x-100 group-hover:animate-pulse-subtle rounded-lg"
                        style={{
                          background:
                            activeTab === feature.id
                              ? "transparent"
                              : "transparent",
                          backgroundColor:
                            feature.id === "task-tracking"
                              ? isHovered || activeTab === feature.id
                                ? "rgba(232, 244, 227, 0.4)"
                                : "transparent"
                              : feature.id === "slack-integration"
                                ? isHovered || activeTab === feature.id
                                  ? "rgba(255, 232, 209, 0.4)"
                                  : "transparent"
                                : isHovered || activeTab === feature.id
                                  ? "rgba(233, 238, 254, 0.4)"
                                  : "transparent",
                        }}
                      ></div>
                    </button>
                  </AnimatedSection>
                ))}
              </div>

              {/* Right column - Portal Demo */}
              <AnimatedSection delay={300} className="bg-[#F2F2F2] p-6">
                {/* Task Assignment & Progress Tracking Demo */}
                {activeTab === "task-tracking" && (
                  <div className="bg-white rounded-xl h-full overflow-hidden border border-[#E8F4E3] shadow-sm p-4 transition-all duration-500">
                    <div className="border-b border-[#E8F4E3] pb-4 mb-4">
                      <h4 className="font-semibold text-black mb-1">
                        Current Projects
                      </h4>
                      <p className="text-sm text-[#4A4A4A]">
                        2 active projects
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-[#F2F2F2] rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <h5 className="font-medium text-black">
                            Competitor Analysis: TechRival Inc
                          </h5>
                          <span className="text-xs bg-[#E8F4E3] text-black px-2 py-1 rounded-full">
                            In Progress
                          </span>
                        </div>
                        <div className="space-y-2">
                          {project1Tasks.map((task) => (
                            <div
                              key={task.id}
                              className="flex items-center gap-2 cursor-pointer group"
                              onClick={() => toggleTaskCompletion(task.id, 1)}
                            >
                              <div
                                className={`w-4 h-4 rounded-full ${task.completed ? "bg-[#99F67E]" : "border border-[#4A4A4A]"} 
                                flex items-center justify-center text-white text-xs transition-colors 
                                group-hover:${task.completed ? "bg-[#99F67E]/80" : "border-black"}`}
                              >
                                {task.completed && "✓"}
                              </div>
                              <span
                                className={`text-sm ${task.completed ? "text-[#4A4A4A] line-through" : "text-black"}`}
                              >
                                {task.text}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-[#F2F2F2] rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <h5 className="font-medium text-black">
                            Battle Cards: Sales Enablement
                          </h5>
                          <span className="text-xs bg-[#FFE8D1] text-[#FF9064] px-2 py-1 rounded-full">
                            Review
                          </span>
                        </div>
                        <div className="space-y-2">
                          {project2Tasks.map((task) => (
                            <div
                              key={task.id}
                              className="flex items-center gap-2 cursor-pointer group"
                              onClick={() => toggleTaskCompletion(task.id, 2)}
                            >
                              <div
                                className={`w-4 h-4 rounded-full ${task.completed ? "bg-[#99F67E]" : "border border-[#4A4A4A]"} 
                                flex items-center justify-center text-white text-xs transition-colors 
                                group-hover:${task.completed ? "bg-[#99F67E]/80" : "border-black"}`}
                              >
                                {task.completed && "✓"}
                              </div>
                              <span
                                className={`text-sm ${task.completed ? "text-[#4A4A4A] line-through" : "text-black"}`}
                              >
                                {task.text}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-4 text-center">
                        <a
                          href="#strategy-session"
                          className="inline-block px-4 py-2 bg-black text-white rounded-md text-sm font-medium hover:bg-[#99F67E] hover:text-black transition-colors"
                        >
                          View Full Dashboard
                        </a>
                      </div>
                    </div>
                  </div>
                )}

                {/* Slack Integration Demo */}
                {activeTab === "slack-integration" && (
                  <div className="bg-white rounded-xl h-full overflow-hidden border border-[#FFE8D1] shadow-sm p-4 transition-all duration-500 flex flex-col">
                    <div className="border-b border-[#FFE8D1] pb-4 mb-4 flex justify-between items-center">
                      <div>
                        <h4 className="font-semibold text-black mb-1 flex items-center">
                          <Slack className="h-5 w-5 mr-2 text-[#FF9064]" />
                          Slack Integration
                        </h4>
                        <p className="text-sm text-[#4A4A4A]">
                          Real-time updates in your channels
                        </p>
                      </div>
                      <div className="bg-[#FFE8D1] p-1 rounded-md">
                        <Bell className="h-5 w-5 text-[#FF9064]" />
                      </div>
                    </div>

                    <div
                      className="space-y-4 overflow-y-auto flex-1 mb-4 pr-1"
                      style={{ maxHeight: "320px" }}
                    >
                      {slackMessages.map((message, index) => (
                        <div
                          key={message.id}
                          className={`bg-[#F2F2F2] rounded-lg p-3 ${index === slackMessages.length - 1 && message.user === "CI-Bot" ? "border-l-4 border-[#FF9064] animate-pulse-subtle" : ""}`}
                        >
                          <div className="flex items-start gap-2">
                            <div className="w-8 h-8 rounded bg-[#FFE8D1] flex items-center justify-center shrink-0">
                              {message.user === "You" ? (
                                <User className="h-4 w-4 text-[#FF9064]" />
                              ) : message.text.includes("Task completed") ? (
                                <CheckCircle2 className="h-4 w-4 text-black" />
                              ) : message.text.includes("comment") ? (
                                <MessageSquare className="h-4 w-4 text-black" />
                              ) : (
                                <Bell className="h-4 w-4 text-[#FF9064]" />
                              )}
                            </div>
                            <div>
                              <p className="text-xs text-[#4A4A4A] mb-1">
                                {message.user} • {message.timestamp}
                              </p>
                              <p className="text-sm font-medium text-black">
                                {message.text}
                              </p>
                              {message.text.includes(
                                "comment on Battle Cards",
                              ) && (
                                <div className="mt-1 p-2 bg-white rounded text-xs text-black">
                                  "Great work on the objection handling section!
                                  Can we add more about their pricing model?"
                                </div>
                              )}
                              <div className="mt-2 text-xs text-[#4A4A4A] flex items-center gap-2">
                                {message.text.includes("competitor alert") && (
                                  <span className="bg-[#FFE8D1]/50 px-2 py-0.5 rounded text-[#FF9064]">
                                    High Priority
                                  </span>
                                )}
                                {message.text.includes("Task completed") && (
                                  <span className="bg-[#E8F4E3]/50 px-2 py-0.5 rounded text-black">
                                    Task Update
                                  </span>
                                )}
                                {message.text.includes("comment") && (
                                  <span className="bg-[#E9EEFE]/50 px-2 py-0.5 rounded text-black">
                                    Comment
                                  </span>
                                )}
                                {message.user === "You" ? (
                                  <span className="text-[#FF9064]">Sent ✓</span>
                                ) : (
                                  <span>
                                    {message.text.includes("comment")
                                      ? "Reply →"
                                      : "View Details →"}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto flex border-t border-[#FFE8D1] pt-4">
                      <input
                        type="text"
                        placeholder="Type a message..."
                        className="flex-1 p-2 text-sm border border-[#FFE8D1] rounded-l-md focus:outline-none focus:ring-1 focus:ring-[#FF9064]"
                        value={slackMessage}
                        onChange={(e) => setSlackMessage(e.target.value)}
                        onKeyDown={(e) =>
                          e.key === "Enter" && addSlackMessage()
                        }
                      />
                      <button
                        className={`${slackMessage.trim() ? "bg-[#FF9064]" : "bg-[#FF9064]/50"} text-white px-4 py-2 rounded-r-md text-sm font-medium transition-colors flex items-center gap-1`}
                        onClick={addSlackMessage}
                        disabled={!slackMessage.trim()}
                      >
                        <Send className="h-4 w-4" />
                        Send
                      </button>
                    </div>
                  </div>
                )}

                {/* Annotation Tool Demo */}
                {activeTab === "annotation-tool" && (
                  <div className="bg-white rounded-xl h-full overflow-hidden border border-[#E9EEFE] shadow-sm p-4 transition-all duration-500 flex flex-col">
                    <div className="border-b border-[#E9EEFE] pb-4 mb-4 flex justify-between items-center">
                      <div>
                        <h4 className="font-semibold text-black mb-1 flex items-center">
                          <Edit3 className="h-5 w-5 mr-2 text-[#C5BAFF]" />
                          Interactive Annotation Tool
                        </h4>
                        <p className="text-sm text-[#4A4A4A]">
                          Provide clear visual feedback
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <button className="bg-[#E9EEFE] p-1 rounded-md hover:bg-[#C5BAFF]/30 transition-colors">
                          <Edit3 className="h-4 w-4 text-[#C5BAFF]" />
                        </button>
                        <button className="bg-[#E9EEFE] p-1 rounded-md hover:bg-[#C5BAFF]/30 transition-colors">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="#C5BAFF"
                              strokeWidth="2"
                              fill="none"
                            />
                          </svg>
                        </button>
                        <button className="bg-[#E9EEFE] p-1 rounded-md hover:bg-[#C5BAFF]/30 transition-colors">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="2"
                              y="2"
                              width="20"
                              height="20"
                              rx="2"
                              stroke="#C5BAFF"
                              strokeWidth="2"
                              fill="none"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>

                    <div className="relative flex-1 flex flex-col">
                      {/* Document being annotated */}
                      <div className="bg-[#F2F2F2] rounded-lg p-4 mb-4">
                        <h5 className="font-medium text-black mb-3">
                          Competitor Battle Card: TechRival Inc
                        </h5>
                        <div className="space-y-3">
                          <p className="text-sm text-[#4A4A4A]">
                            Key Differentiators:
                          </p>
                          <ul className="text-sm text-[#4A4A4A] list-disc pl-5 space-y-1">
                            <li>Our solution offers 24/7 customer support</li>
                            <li>
                              We provide custom integrations at no extra cost
                            </li>
                            <li>
                              Our pricing is 15% lower for enterprise plans
                            </li>
                            <li>We have a more intuitive user interface</li>
                          </ul>
                        </div>
                      </div>

                      {/* Annotation overlays */}
                      <div className="absolute top-[4.5rem] left-[3rem] w-[70%] h-[2rem] border-2 border-[#C5BAFF] rounded-md opacity-70 pointer-events-none">
                        <div className="absolute -top-7 left-0 bg-[#E9EEFE] px-2 py-1 rounded text-xs text-[#4A4A4A]">
                          Add more specific numbers here
                        </div>
                      </div>

                      <div className="absolute top-[7.5rem] right-[2rem] w-[8rem] h-[2rem]">
                        <svg viewBox="0 0 100 100" className="w-full h-full">
                          <circle
                            cx="50"
                            cy="50"
                            r="45"
                            fill="none"
                            stroke="#C5BAFF"
                            strokeWidth="3"
                            strokeDasharray="5,5"
                          />
                        </svg>
                        <div className="absolute -top-7 right-0 bg-[#E9EEFE] px-2 py-1 rounded text-xs text-[#4A4A4A]">
                          Highlight this point!
                        </div>
                      </div>

                      {/* Comment section */}
                      <div className="mt-4 border-t border-[#E9EEFE] pt-4 flex flex-col flex-1">
                        <h6 className="text-sm font-medium text-black mb-2">
                          Comments
                        </h6>

                        <div
                          className="overflow-y-auto pr-1 flex-1"
                          style={{ maxHeight: "180px" }}
                        >
                          {annotationComments.map((comment) => (
                            <div
                              key={comment.id}
                              className="bg-[#E9EEFE]/30 p-3 rounded-lg mb-3"
                            >
                              <div className="flex items-start gap-2">
                                <div className="w-6 h-6 rounded-full bg-[#C5BAFF]/30 flex items-center justify-center text-xs font-medium">
                                  {comment.user === "You" ? "You" : "JD"}
                                </div>
                                <div>
                                  <p className="text-xs font-medium text-black">
                                    {comment.user}{" "}
                                    {comment.user === "You" && (
                                      <span className="text-[#C5BAFF] text-xs">
                                        • {comment.timestamp}
                                      </span>
                                    )}
                                  </p>
                                  <p className="text-xs text-[#4A4A4A]">
                                    {comment.text}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="flex gap-2 mt-4 border-t border-[#E9EEFE] pt-4">
                          <input
                            type="text"
                            placeholder="Add a comment..."
                            className="flex-1 p-2 text-sm border border-[#E9EEFE] rounded-md focus:outline-none focus:ring-1 focus:ring-[#C5BAFF]"
                            value={annotationComment}
                            onChange={(e) =>
                              setAnnotationComment(e.target.value)
                            }
                            onKeyDown={(e) =>
                              e.key === "Enter" && addAnnotationComment()
                            }
                          />
                          <button
                            className={`${annotationComment.trim() ? "bg-[#C5BAFF]" : "bg-[#C5BAFF]/50"} text-white px-3 py-1 rounded-md text-sm font-medium transition-colors`}
                            onClick={addAnnotationComment}
                            disabled={!annotationComment.trim()}
                          >
                            Add
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error("Error rendering ClientPortalDemo:", error);
    return (
      <section className="py-24" style={{ background: "#E9EEFE" }}>
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block px-4 py-1 bg-[#C5BAFF]/30 rounded-full text-black text-sm font-medium mb-4">
            CLIENT EXPERIENCE
          </div>
          <h2 className="text-4xl font-bold mb-4 text-black">
            Client Portal Interactive Demo
          </h2>
          <p className="text-[#4A4A4A] max-w-2xl mx-auto mb-4">
            We're experiencing technical difficulties loading the interactive
            demo.
          </p>
          <a
            href="#strategy-session"
            className="inline-block px-4 py-2 bg-black text-white rounded-md text-sm font-medium hover:bg-[#99F67E] hover:text-black transition-colors"
          >
            Book a Demo Instead
          </a>
        </div>
      </section>
    );
  }
}
