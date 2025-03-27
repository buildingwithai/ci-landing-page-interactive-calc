"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import AnimatedSection from "./animated-section";

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
}

function FaqItem({ question, answer, isOpen, toggleOpen }: FaqItemProps) {
  return (
    <div className="border-b border-[#E8F4E3] last:border-0">
      <button
        onClick={toggleOpen}
        className="w-full py-4 px-0 flex justify-between items-center text-left focus:outline-none"
      >
        <h3 className="text-lg font-medium text-black">{question}</h3>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-[#99F67E]" />
        ) : (
          <ChevronDown className="h-5 w-5 text-[#4A4A4A]" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 pb-4" : "max-h-0"}`}
      >
        <p className="text-[#4A4A4A]">{answer}</p>
      </div>
    </div>
  );
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Can I really pause or cancel anytime?",
      answer:
        "Yep—no strings attached, pause or cancel whenever your needs change. We believe in earning your business every month, not locking you into contracts.",
    },
    {
      question: "What's actually included in the fractional hours?",
      answer:
        "Every competitive intelligence project gets broken down into clear, minimalist tasks. We'll tackle each task strategically within the hours you've booked, focusing on high-impact deliverables first.",
    },
    {
      question: "How quickly can I expect deliverables?",
      answer:
        "Initial deliverables typically arrive within the first week. We prioritize quick wins while building toward comprehensive competitive intelligence. Our client portal shows real-time progress on all tasks.",
    },
    {
      question: "Can we adjust fractional hours mid-project?",
      answer:
        "Absolutely! You can scale hours up during critical competitive situations or scale down during quieter periods. Changes take effect in the next billing cycle with just 48 hours notice.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-black">
            Frequently Asked Questions
          </h2>
          <p className="text-[#4A4A4A] max-w-2xl mx-auto">
            Everything you need to know about our fractional competitive
            intelligence services
          </p>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto bg-white rounded-xl overflow-hidden border border-[#E8F4E3] shadow-sm p-6">
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              toggleOpen={() => toggleFaq(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
