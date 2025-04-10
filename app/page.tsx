import { Appbar } from "@/components/appbar";
import { HeroSection } from "@/components/landing/herosection";
import { PricingSection } from "@/components/landing/pricing-section";
import { WorkingSection } from "@/components/landing/workingsection";
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
      <PricingSection />
    </div>
  );
}
