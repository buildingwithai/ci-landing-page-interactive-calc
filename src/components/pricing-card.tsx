"use client";

import { Button } from "./ui/button";
import { Check } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function PricingCard({
  item,
  user,
}: {
  item: any;
  user: any | null;
}) {
  // Handle checkout process
  const handleCheckout = async (priceId: string) => {
    if (!user) {
      // Redirect to login if user is not authenticated
      window.location.href = "/sign-in?redirect=pricing";
      return;
    }

    // Placeholder for checkout functionality
    alert("Checkout functionality requires Supabase setup");
  };

  // Define features based on plan type
  const getFeatures = (planName: string) => {
    const baseFeatures = [
      "Expert product marketers",
      "No long-term contracts",
      "Cancel anytime",
    ];

    if (planName.toLowerCase().includes("starter")) {
      return [
        ...baseFeatures,
        "Up to 20 hours per month",
        "1 dedicated marketer",
        "Basic messaging support",
      ];
    } else if (planName.toLowerCase().includes("pro")) {
      return [
        ...baseFeatures,
        "Up to 40 hours per month",
        "1 dedicated marketer",
        "Full launch support",
        "Messaging & positioning",
      ];
    } else {
      return [
        ...baseFeatures,
        "Up to 80 hours per month",
        "2 dedicated marketers",
        "Full launch support",
        "Messaging & positioning",
        "Go-to-market strategy",
      ];
    }
  };

  const features = getFeatures(item.name || "");
  const isPopular = item.name?.toLowerCase().includes("pro");

  return (
    <Card
      className={`w-full h-full relative overflow-hidden transition-all duration-300 ${isPopular ? "border-primary shadow-lg shadow-primary/10 scale-[1.02]" : "border-border/50 hover:border-primary/50"}`}
    >
      {isPopular && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
      )}
      <CardHeader className="relative pb-0">
        {isPopular && (
          <div className="px-4 py-1.5 text-sm font-medium text-white bg-primary rounded-full w-fit mb-4">
            Most Popular
          </div>
        )}
        <CardTitle className="text-2xl font-bold">{item.name}</CardTitle>
        <CardDescription className="flex items-baseline gap-2 mt-2">
          <span className="text-4xl font-bold">${item?.amount / 100}</span>
          <span className="text-muted-foreground">/{item?.interval}</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <ul className="space-y-3">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2">
              <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="relative">
        <Button
          onClick={async () => {
            await handleCheckout(item.id);
          }}
          variant={isPopular ? "default" : "outline"}
          className="w-full py-6 text-base font-medium"
        >
          {isPopular ? "Get Started" : "Choose Plan"}
        </Button>
      </CardFooter>
    </Card>
  );
}
