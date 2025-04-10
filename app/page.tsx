import { Appbar } from "@/components/appbar";
import { HeroSection } from "@/components/herosection";
import { WorkingSection } from "@/components/workingsection";
import { usePatternClass } from "@/hooks/patternclass";

export default function Home() {
  return (
    <div>
      <Appbar />
      <HeroSection getPattern={usePatternClass} />
      {/* Working Section */}
      <WorkingSection />
      {/* Feature Section */}
      {/* Pricing Section */}
    </div>
  );
}
