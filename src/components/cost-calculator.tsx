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

const FULL_TIME_SALARY = 125000; // Annual salary for full-time product marketer
const AGENCY_MONTHLY = 15000; // Monthly agency retainer
const FRACTIONAL_HOURLY = 50; // Hourly rate for fractional product marketer

export default function CostCalculator() {
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(20);
  const [duration, setDuration] = useState<number>(6); // months
  const [comparisonType, setComparisonType] = useState<"fulltime" | "agency">(
    "fulltime",
  );
  const [isHovered, setIsHovered] = useState(false);
  const [showAssumptions, setShowAssumptions] = useState(false);

  // Calculate costs
  const fractionalCost = hoursPerWeek * FRACTIONAL_HOURLY * 4 * duration; // $50/hr, 4 weeks per month
  const comparisonCost =
    comparisonType === "fulltime"
      ? (FULL_TIME_SALARY / 12) * duration // Monthly salary cost
      : AGENCY_MONTHLY * duration; // Monthly agency cost

  const savings = comparisonCost - fractionalCost;
  const savingsPercentage = Math.round((savings / comparisonCost) * 100);

  // Animation for numbers
  const [animatedSavings, setAnimatedSavings] = useState(0);

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
      className="w-full bg-card overflow-hidden relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Interactive corners */}
      <div
        className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-transparent transition-colors duration-300 rounded-tl-md"
        style={{
          borderColor: isHovered ? "rgba(47, 129, 247, 0.8)" : "transparent",
        }}
      />
      <div
        className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-transparent transition-colors duration-300 rounded-tr-md"
        style={{
          borderColor: isHovered ? "rgba(47, 129, 247, 0.8)" : "transparent",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-transparent transition-colors duration-300 rounded-bl-md"
        style={{
          borderColor: isHovered ? "rgba(47, 129, 247, 0.8)" : "transparent",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-transparent transition-colors duration-300 rounded-br-md"
        style={{
          borderColor: isHovered ? "rgba(47, 129, 247, 0.8)" : "transparent",
        }}
      />

      <CardHeader className="pb-4">
        <CardTitle className="text-2xl font-bold">
          Cost Savings Calculator
        </CardTitle>
        <CardDescription>
          See how much you can save with our fractional product marketing
          services
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="hours-needed">Hours needed per week</Label>
              <span className="text-sm font-medium">{hoursPerWeek} hrs</span>
            </div>
            <Slider
              id="hours-needed"
              min={5}
              max={40}
              step={5}
              value={[hoursPerWeek]}
              onValueChange={(value) => setHoursPerWeek(value[0])}
              className="cursor-pointer"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="duration">Project duration</Label>
              <span className="text-sm font-medium">{duration} months</span>
            </div>
            <Slider
              id="duration"
              min={1}
              max={12}
              step={1}
              value={[duration]}
              onValueChange={(value) => setDuration(value[0])}
              className="cursor-pointer"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="comparison">Compare with</Label>
            <Select
              value={comparisonType}
              onValueChange={(value) =>
                setComparisonType(value as "fulltime" | "agency")
              }
            >
              <SelectTrigger id="comparison">
                <SelectValue placeholder="Select comparison" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="fulltime">Full-time hire</SelectItem>
                <SelectItem value="agency">Agency retainer</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="pt-4 border-t border-border">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Fractional Cost</p>
              <p className="text-2xl font-bold">
                ${fractionalCost.toLocaleString()}
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">
                {comparisonType === "fulltime"
                  ? "Full-time Cost"
                  : "Agency Cost"}
              </p>
              <p className="text-2xl font-bold">
                ${comparisonCost.toLocaleString()}
              </p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-primary/10 rounded-lg">
            <div className="flex justify-between items-baseline">
              <p className="text-lg font-medium">Your Savings</p>
              <p className="text-3xl font-bold text-primary">
                ${animatedSavings.toLocaleString()}
              </p>
            </div>
            <div className="mt-2 w-full bg-muted rounded-full h-2.5">
              <div
                className="bg-primary h-2.5 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${savingsPercentage}%` }}
              ></div>
            </div>
            <p className="text-right text-sm mt-1 text-muted-foreground">
              {savingsPercentage}% savings vs{" "}
              {comparisonType === "fulltime" ? "full-time hire" : "agency"}
            </p>
          </div>

          {/* Assumptions box */}
          <div className="mt-4">
            <button
              onClick={() => setShowAssumptions(!showAssumptions)}
              className="text-xs text-muted-foreground/70 hover:text-primary transition-colors"
            >
              {showAssumptions ? "Hide assumptions" : "Show assumptions"}
            </button>

            {showAssumptions && (
              <div className="mt-2 p-3 bg-muted/30 border border-border/30 rounded-md text-xs text-muted-foreground/80">
                <p className="mb-1">Calculation assumptions:</p>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Full-time product marketing manager: $125,000/year</li>
                  <li>Fractional product marketing manager: $50/hour</li>
                  <li>Agency retainer: $15,000/month</li>
                  <li>4 weeks per month</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
