"use client";

import { useState, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const CI_MANAGER_SALARY = 102938; // Annual salary for competitive intelligence manager
const PMM_SALARY = 144961; // Annual salary for product marketing manager
const FRACTIONAL_HOURLY = 45; // Hourly rate for fractional competitive intelligence

export default function CompetitiveIntelCalculator() {
  // Initialize eventBus only on client side
  const [eventBus, setEventBus] = useState<{
    subscribe: (
      event: string,
      callback: (...args: any[]) => void,
    ) => () => void;
  } | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("@/lib/event-bus").then((module) => {
        setEventBus(module.default);
      });
    }
  }, []);
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(20);
  const [duration, setDuration] = useState<number>(6); // months
  const [comparisonType, setComparisonType] = useState<
    "fulltime" | "productmarketing"
  >("fulltime");
  const [isHovered, setIsHovered] = useState(false);
  const [showAssumptions, setShowAssumptions] = useState(false);
  const [isGlowing, setIsGlowing] = useState(false);

  // Calculate costs
  const fractionalCost = hoursPerWeek * FRACTIONAL_HOURLY * 4 * duration; // $45/hr, 4 weeks per month
  const comparisonCost =
    comparisonType === "fulltime"
      ? (CI_MANAGER_SALARY / 12) * duration // Monthly CI manager salary cost
      : (PMM_SALARY / 12) * duration; // Monthly PMM salary cost

  const savings = comparisonCost - fractionalCost;
  const savingsPercentage = Math.round((savings / comparisonCost) * 100);

  // Animation for numbers
  const [animatedSavings, setAnimatedSavings] = useState(0);

  // Function to set random values for the calculator
  const randomizeCalculator = () => {
    // Random hours between 5 and 40, in steps of 5
    const randomHours = Math.floor(Math.random() * 8) * 5 + 5;

    // Random duration between 1 and 12 months
    const randomDuration = Math.floor(Math.random() * 12) + 1;

    // Randomly select comparison type
    const randomComparison =
      Math.random() > 0.5 ? "fulltime" : "productmarketing";

    // Set the new values with a slight delay between each for visual effect
    setTimeout(() => setHoursPerWeek(randomHours), 100);
    setTimeout(() => setDuration(randomDuration), 300);
    setTimeout(() => setComparisonType(randomComparison as any), 500);

    // Trigger glow effect
    setIsGlowing(true);
    setTimeout(() => setIsGlowing(false), 2000);
  };

  // Listen for the "try-calculator" event
  useEffect(() => {
    if (eventBus) {
      const unsubscribe = eventBus.subscribe(
        "try-calculator",
        randomizeCalculator,
      );
      return () => unsubscribe();
    }
  }, [eventBus]);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedSavings((prev) => {
        const diff = savings - prev;
        const increment = Math.ceil(diff / 10);
        if (Math.abs(diff) < 10) return savings;
        return prev + increment;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [savings]);

  return (
    <Card
      className={`w-full overflow-hidden relative group bg-white border-[#E8F4E3] transition-all duration-500 ${isGlowing ? "glow-effect" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        boxShadow: isGlowing
          ? "0 0 30px rgba(153, 246, 126, 0.8)"
          : "0 4px 20px rgba(0, 0, 0, 0.05)",
      }}
    >
      {/* Interactive corners */}
      <div
        className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-transparent transition-colors duration-300 rounded-tl-md"
        style={{
          borderColor: isHovered || isGlowing ? "#99F67E" : "transparent",
        }}
      />
      <div
        className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-transparent transition-colors duration-300 rounded-tr-md"
        style={{
          borderColor: isHovered || isGlowing ? "#99F67E" : "transparent",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-transparent transition-colors duration-300 rounded-bl-md"
        style={{
          borderColor: isHovered || isGlowing ? "#99F67E" : "transparent",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-transparent transition-colors duration-300 rounded-br-md"
        style={{
          borderColor: isHovered || isGlowing ? "#99F67E" : "transparent",
        }}
      />

      {/* Glow overlay */}
      {isGlowing && (
        <div className="absolute inset-0 bg-[#99F67E]/10 animate-pulse z-0"></div>
      )}

      <CardHeader className="pb-4 relative z-10">
        <CardTitle className="text-2xl font-bold text-black">
          Cost Savings Calculator
        </CardTitle>
        <CardDescription className="text-[#4A4A4A]">
          See how much you can save with our fractional competitive intelligence
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6 relative z-10">
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="hours-needed" className="text-black">
                Hours needed per week
              </Label>
              <span className="text-sm font-medium text-black">
                {hoursPerWeek} hrs
              </span>
            </div>
            <Slider
              id="hours-needed"
              min={5}
              max={40}
              step={5}
              value={[hoursPerWeek]}
              onValueChange={(value) => setHoursPerWeek(value[0])}
              className={`cursor-pointer ${isGlowing ? "animate-bounce-subtle" : ""}`}
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="duration" className="text-black">
                Project duration
              </Label>
              <span className="text-sm font-medium text-black">
                {duration} months
              </span>
            </div>
            <Slider
              id="duration"
              min={1}
              max={12}
              step={1}
              value={[duration]}
              onValueChange={(value) => setDuration(value[0])}
              className={`cursor-pointer ${isGlowing ? "animate-bounce-subtle" : ""}`}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="comparison" className="text-black">
              Compare with
            </Label>
            <Select
              value={comparisonType}
              onValueChange={(value) =>
                setComparisonType(value as "fulltime" | "productmarketing")
              }
            >
              <SelectTrigger
                id="comparison"
                className={`border-[#E8F4E3] text-black ${isGlowing ? "border-[#99F67E]" : ""}`}
              >
                <SelectValue placeholder="Select comparison" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="fulltime">
                  Competitive Intelligence Manager
                </SelectItem>
                <SelectItem value="productmarketing">
                  Product Marketing Manager
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="pt-4 border-t border-[#E8F4E3]">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <p className="text-sm text-[#4A4A4A]">Fractional Cost</p>
              <p className="text-2xl font-bold text-black">
                ${fractionalCost.toLocaleString()}
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-[#4A4A4A]">
                {comparisonType === "fulltime"
                  ? "Full-time CI Manager Cost"
                  : "Full-time PMM Cost"}
              </p>
              <p className="text-2xl font-bold text-black">
                ${comparisonCost.toLocaleString()}
              </p>
            </div>
          </div>

          <div
            className={`mt-6 p-4 bg-[#E8F4E3] rounded-lg ${isGlowing ? "animate-pulse-subtle" : ""}`}
          >
            <div className="flex justify-between items-baseline">
              <p className="text-lg font-medium text-black">Your Savings</p>
              <p className="text-3xl font-bold text-[#000000]">
                ${animatedSavings.toLocaleString()}
              </p>
            </div>
            <div className="mt-2 w-full bg-white rounded-full h-2.5">
              <div
                className="bg-[#99F67E] h-2.5 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${savingsPercentage}%` }}
              ></div>
            </div>
            <p className="text-right text-sm mt-1 text-[#4A4A4A]">
              {savingsPercentage}% savings vs{" "}
              {comparisonType === "fulltime"
                ? "full-time CI manager"
                : "full-time PMM"}
            </p>
          </div>

          {/* Assumptions box */}
          <div className="mt-4">
            <button
              onClick={() => setShowAssumptions(!showAssumptions)}
              className="text-xs text-[#4A4A4A] hover:text-[#000000] transition-colors"
            >
              {showAssumptions ? "Hide assumptions" : "Show assumptions"}
            </button>

            {showAssumptions && (
              <div className="mt-2 p-3 bg-[#F2F2F2] border border-[#E8F4E3] rounded-md text-xs text-[#4A4A4A]">
                <p className="mb-1">Calculation assumptions:</p>
                <ul className="list-disc pl-4 space-y-1">
                  <li>
                    Full-time competitive intelligence manager: $102,938/year
                  </li>
                  <li>Full-time product marketing manager: $144,961/year</li>
                  <li>Fractional competitive intelligence: $45/hour</li>
                  <li>4 weeks per month</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </CardContent>

      <style jsx global>{`
        @keyframes glow {
          0% {
            box-shadow: 0 0 10px rgba(153, 246, 126, 0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(153, 246, 126, 0.8);
          }
          100% {
            box-shadow: 0 0 10px rgba(153, 246, 126, 0.3);
          }
        }

        .glow-effect {
          animation: glow 2s ease-in-out;
        }

        @keyframes bounce-subtle {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-3px);
          }
        }

        .animate-bounce-subtle {
          animation: bounce-subtle 0.5s ease-in-out;
        }

        @keyframes pulse-subtle {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }

        .animate-pulse-subtle {
          animation: pulse-subtle 1s ease-in-out infinite;
        }
      `}</style>
    </Card>
  );
}
