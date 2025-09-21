import { Button } from "@/components/ui/button";
import { GitBranch, FileText, Zap, ArrowRight, Sparkles, Code, BookOpen } from "lucide-react";
import heroIllustration from "@/assets/spec-code-connection.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 pt-16">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>
      
      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-[10%] text-primary/30 animate-float">
          <div className="p-3 bg-primary/10 rounded-full backdrop-blur-sm">
            <GitBranch size={28} />
          </div>
        </div>
        <div className="absolute top-1/3 right-[15%] text-blue-500/30 animate-float" style={{ animationDelay: '1s' }}>
          <div className="p-3 bg-blue-500/10 rounded-full backdrop-blur-sm">
            <Code size={24} />
          </div>
        </div>
        <div className="absolute bottom-1/3 left-[8%] text-purple-500/30 animate-float" style={{ animationDelay: '3s' }}>
          <div className="p-3 bg-purple-500/10 rounded-full backdrop-blur-sm">
            <BookOpen size={26} />
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 text-primary/20 animate-float" style={{ animationDelay: '2s' }}>
          <Sparkles size={20} />
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in-up space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-3 text-sm font-medium text-primary">
              <Sparkles size={16} className="animate-pulse" />
              AI-Powered Spec Synchronization
            </div>
            
            {/* Main Headline */}
            <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
              <span className="text-foreground">Spec and Code,</span>
              <br />
              <span className="bg-gradient-to-r from-primary via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
                Forever in Sync
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
              The <span className="font-semibold text-foreground">AI-native</span> solution that keeps your product specifications perfectly aligned with code changes. No more documentation debt.
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start text-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-muted-foreground">Sync Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">80%</div>
                <div className="text-muted-foreground">Time Saved</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">Minimal</div>
                <div className="text-muted-foreground">Manual Updates</div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="hero" 
                size="lg"
                className="text-lg px-8 py-4 group"
              >
                Start Free Today
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="hero-outline" 
                size="lg"
                className="text-lg px-8 py-4 group"
              >
                Watch Demo
                <Zap size={20} className="ml-2 group-hover:scale-110 transition-transform" />
              </Button>
            </div>
          </div>
          
          {/* Right Illustration */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative group">
              {/* Glowing border effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 via-blue-500/50 to-purple-600/50 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-all duration-1000 animate-pulse"></div>
              
              {/* Main image */}
              <div className="relative bg-background/80 backdrop-blur-sm rounded-2xl p-2">
                <img 
                  src={heroIllustration} 
                  alt="AI-powered specs and code synchronization"
                  className="w-full h-auto rounded-xl shadow-2xl transform group-hover:scale-[1.02] transition-all duration-700"
                />
                
                {/* Overlay elements */}
                <div className="absolute top-4 right-4 bg-green-500/90 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm animate-pulse">
                  ✓ LIVE SYNC
                </div>
                
                {/* Floating badges */}
                <div className="absolute -bottom-4 -left-4 bg-primary/90 text-primary-foreground text-sm font-semibold px-4 py-2 rounded-lg backdrop-blur-sm shadow-lg animate-bounce">
                  🤖 AI Agent Active
                </div>
                <div className="absolute -top-4 -right-4 bg-blue-500/90 text-white text-sm font-semibold px-4 py-2 rounded-lg backdrop-blur-sm shadow-lg animate-bounce" style={{ animationDelay: '1s' }}>
                  📝 Auto-Updated
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Trust indicators */}
        <div className="mt-20 text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <p className="text-sm text-muted-foreground mb-6">🎉 Trusted by forward-thinking development teams</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="bg-primary/10 px-6 py-3 rounded-full border border-primary/20">
              <p className="text-lg font-bold bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
          👨‍💻 Product Managers
              </p>
              <p className="text-xs text-muted-foreground">Spec Owners</p>
            </div>
            <div className="bg-primary/10 px-6 py-3 rounded-full border border-primary/20">
              <p className="text-lg font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          👩‍💼 Engineers
              </p>
              <p className="text-xs text-muted-foreground">Code Builders</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 italic">
            * Built with ✨ magic and creativity 🪄 during CY25H2 Hackathon
          </p>
        </div>
      </div>
      
      {/* Bottom fade with subtle pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};