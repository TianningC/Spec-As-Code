import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 gradient-hero opacity-5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Ready to Sync Your{" "}
            <span className="gradient-hero bg-clip-text text-transparent">
              Specs and Code?
            </span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Join the movement of PMs and engineers who've eliminated documentation debt forever.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              variant="hero" 
              size="lg"
              className="text-lg px-8 py-4 group"
            >
              Check in your next spec
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="hero-outline" 
              size="lg"
              className="text-lg px-8 py-4"
            >
              Book a Demo
            </Button>
          </div>
          
          {/* Value props */}
          <div className="grid md:grid-cols-3 gap-6 text-left max-w-3xl mx-auto">
            {[
              "No more outdated documentation",
              "Seamless PM-Engineer alignment", 
              "AI-powered spec maintenance"
            ].map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">{benefit}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              Experience Spec-as-Code and transform how your team builds software
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};