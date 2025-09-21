import { Hero } from "@/components/Hero";
import { Problem_Enhanced } from "@/components/Problem_Enhanced";
import { SolutionEnhanced } from "@/components/SolutionEnhanced";
import { HowItWorks } from "@/components/HowItWorks";
import { DemoVideo } from "@/components/DemoVideo";
import { Benefits } from "@/components/Benefits";
import { AIAgent } from "@/components/AIAgent";
import { ComingSoon } from "@/components/ComingSoon";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Problem_Enhanced />
      <SolutionEnhanced />
      <HowItWorks />
      <DemoVideo />
      <Benefits />
      <AIAgent />
      <ComingSoon />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
