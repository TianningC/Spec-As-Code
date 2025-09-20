import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Solution } from "@/components/Solution";
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
      <Problem />
      <Solution />
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
