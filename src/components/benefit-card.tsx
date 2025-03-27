"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function BenefitCard({
  icon,
  title,
  description,
}: BenefitCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className={cn(
        "h-full transition-all duration-300 overflow-hidden bg-white",
        isHovered
          ? "border-[#99F67E] shadow-lg shadow-[#99F67E]/10 scale-[1.02]"
          : "border-[#E8F4E3]",
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardHeader className="pb-2">
        <div
          className={cn(
            "w-12 h-12 rounded-lg flex items-center justify-center text-black bg-[#E8F4E3] mb-4 transition-all duration-300",
            isHovered ? "bg-[#99F67E]/50 scale-110" : "",
          )}
        >
          {icon}
        </div>
        <CardTitle
          className={cn(
            "text-xl transition-all duration-300 text-black",
            isHovered ? "text-[#000000]" : "",
          )}
        >
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-[#4A4A4A]">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
