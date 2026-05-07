"use client";

import DotGrid from "@/components/DotGrid";

export default function DotGridBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <DotGrid
        dotSize={8}
        gap={18}
        baseColor="#28314E"
        activeColor="##3F4D73"
        proximity={60}
        speedTrigger={30}
        shockRadius={400}
        shockStrength={1}
        maxSpeed={5000}
        resistance={900}
        returnDuration={5}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-[#28314E]/10 via-[#28314E]/30 to-[#28314E]" />
    </div>
  );
}