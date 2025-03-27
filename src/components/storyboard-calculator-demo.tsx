"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Calculator } from "lucide-react";
import CompetitiveIntelCalculator from "./competitive-intel-calculator";

// Define interface for the event bus
interface IEventBus {
  publish(event: string, ...args: any[]): void;
  subscribe(event: string, callback: (...args: any[]) => void): () => void;
}

export default function StoryboardCalculatorDemo() {
  // Initialize eventBus only on client side with proper typing
  const [eventBus, setEventBus] = useState<IEventBus | null>(null);
  const [demoCount, setDemoCount] = useState(0);

  useEffect(() => {
    // Import eventBus dynamically only on client side
    import("@/lib/event-bus").then((module) => {
      setEventBus(module.default);
    });
  }, []);

  // Function to trigger the calculator animation
  const triggerCalculator = () => {
    if (eventBus) {
      eventBus.publish("try-calculator");
      setDemoCount((prev) => prev + 1);
    }
  };

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Calculator Demo</h2>
        <p className="text-muted-foreground mb-6">
          Click the button below to see the calculator in action. It will
          randomly adjust values and show the cost savings.
        </p>
        <Button
          onClick={triggerCalculator}
          size="lg"
          className="bg-black hover:bg-[#99F67E] text-white hover:text-black transition-colors"
        >
          Try Calculator
          <Calculator className="ml-2 w-4 h-4" />
        </Button>
        {demoCount > 0 && (
          <p className="mt-4 text-sm text-muted-foreground">
            Calculator triggered {demoCount}{" "}
            {demoCount === 1 ? "time" : "times"}
          </p>
        )}
      </div>

      <div className="max-w-xl mx-auto">
        <CompetitiveIntelCalculator />
      </div>
    </div>
  );
}
