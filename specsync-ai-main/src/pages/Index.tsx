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
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <section id="overview">
        <Hero />
      </section>
      <section id="problem">
        <Problem_Enhanced />
      </section>
      <section id="solution">
        <SolutionEnhanced />
      </section>
      <section id="how-it-works">
        <HowItWorks />
      </section>
      <DemoVideo />
      <section id="benefits">
        <Benefits />
      </section>
      <AIAgent />
      <section id="coming-soon">
        <ComingSoon />
      </section>
      <section id="cta">
        <CTA />
      </section>
      <Footer />
    </div>
  );
};

export default Index;
