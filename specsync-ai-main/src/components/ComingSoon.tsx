import { Clock, Link2, Monitor, Sparkles, Zap, Brain, GitBranch, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ComingSoon = () => {
  const futureFeatures = [
    {
      icon: Brain,
      title: "AI Context Enrichment",
      description: "Automatically inject relevant context from past decisions, related features, and system dependencies directly into your specs.",
      impact: "Never lose tribal knowledge again",
      color: "from-purple-500 to-pink-500",
      timeline: "Q1 2026"
    },
    {
      icon: GitBranch,
      title: "Cross-Repository Intelligence",
      description: "Link specs across multiple repos and services. See how changes ripple through your entire system architecture.",
      impact: "End siloed development forever",
      color: "from-blue-500 to-cyan-500",
      timeline: "Q2 2026"
    },
    {
      icon: Users,
      title: "Team Knowledge Graph",
      description: "Build dynamic knowledge maps showing who knows what, when decisions were made, and how features connect.",
      impact: "Accelerate onboarding by 10x",
      color: "from-green-500 to-emerald-500",
      timeline: "Q3 2026"
    }
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-purple-500/5"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-[10%] w-64 h-64 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse-soft"></div>
      <div className="absolute bottom-20 right-[15%] w-80 h-80 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-3 text-sm font-medium text-primary mb-6">
            <Sparkles size={16} className="animate-pulse" />
            The Future of Development
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="text-foreground">Beyond Sync:</span>
            <br />
            <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-600 bg-clip-text text-transparent animate-gradient">
              Intelligent Workflows
            </span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We're not just solving documentation debt — we're reimagining how teams build software. 
            Here's what's coming to transform your <span className="font-semibold text-primary">entire development experience</span>.
          </p>
        </div>

        {/* Future Features Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {futureFeatures.map((feature, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden bg-card/80 backdrop-blur-sm border border-border/50 rounded-3xl p-10 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-700 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Animated Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-700`}></div>
              
              {/* Timeline Badge */}
              <div className="absolute top-6 right-6 bg-primary/10 border border-primary/20 rounded-full px-3 py-1 text-xs font-medium text-primary">
                {feature.timeline}
              </div>
              
              {/* Icon */}
              <div className={`relative w-16 h-16 mb-6 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              {/* Content */}
              <h3 className="text-2xl font-bold mb-4 leading-tight group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                {feature.description}
              </p>
              
              {/* Impact Statement */}
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-sm font-medium text-primary">
                <Zap size={14} />
                {feature.impact}
              </div>
              
              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-primary/20 transition-colors duration-500"></div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="relative bg-gradient-to-r from-primary/10 via-purple-500/10 to-pink-500/10 rounded-3xl p-12 text-center border border-primary/20 backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-500/5 rounded-3xl"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-primary/20 rounded-full px-6 py-3 text-sm font-medium text-primary mb-6">
              <Clock size={16} />
              Be Part of the Revolution
            </div>
            
            <h3 className="text-3xl lg:text-4xl font-bold mb-6">
              Shape the Future of <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Spec-as-Code</span>
            </h3>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our early access program and help us build the development workflow of tomorrow. 
              Your feedback shapes these groundbreaking features.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="hero" 
                size="lg"
                className="text-lg px-8 py-4 group"
              >
                Join Early Access
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="hero-outline" 
                size="lg"
                className="text-lg px-8 py-4 group"
              >
                <Monitor size={20} className="mr-2 group-hover:scale-110 transition-transform" />
                Watch Roadmap
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};