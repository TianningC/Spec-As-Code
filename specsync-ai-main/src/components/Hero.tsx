import { Button } from "@/components/ui/button";
import { GitBranch, FileText, Zap } from "lucide-react";
import heroIllustration from "@/assets/spec-code-connection.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 gradient-subtle"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 text-primary/20">
        <GitBranch size={40} className="animate-float" />
      </div>
      <div className="absolute top-32 right-16 text-primary/20">
        <FileText size={32} className="animate-float" style={{ animationDelay: '2s' }} />
      </div>
      <div className="absolute bottom-20 left-20 text-primary/20">
        <Zap size={36} className="animate-float" style={{ animationDelay: '4s' }} />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="text-foreground">Specs and Code,</span>
              <br />
              <span className="gradient-hero bg-clip-text text-transparent">
                Forever in Sync
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-2xl">
              Check in Specs as code. Let AI Agent keep them updated with every change.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="hero" 
                size="lg"
                className="text-lg px-8 py-4"
              >
                Start Spec-as-Code Today
              </Button>
              <Button 
                variant="hero-outline" 
                size="lg"
                className="text-lg px-8 py-4"
              >
                Read the Docs
              </Button>
            </div>
          </div>
          
          {/* Right Illustration */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <img 
                src={heroIllustration} 
                alt="Specs and code synchronization visualization"
                className="w-full h-auto rounded-2xl glow-primary"
              />
              <div className="absolute inset-0 gradient-hero opacity-10 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};