"use client";

import DotGrid from "@/components/DotGrid";

export default function DotGridBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <DotGrid
        dotSize={8}
        gap={14}
        baseColor="#28314E"
        activeColor="#AA2B3A"
        proximity={90}
        speedTrigger={30}
        shockRadius={400}
        shockStrength={3}
        maxSpeed={5000}
        resistance={900}
        returnDuration={5}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-[#28314E]/10 via-[#28314E]/30 to-[#28314E]" />
    </div>
  );
}