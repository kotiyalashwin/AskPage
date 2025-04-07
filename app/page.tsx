import { Appbar } from "@/components/appbar";
import { HeroSection } from "@/components/herosection";
import { usePatternClass } from "@/hooks/patternclass";

export default function Home() {
  return (
    <div>
      <Appbar />
      <HeroSection getPattern={usePatternClass} />
    </div>
  );
}
