import { CheckCircle, GitPullRequest, Link, Sparkles, Zap, Shield, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

export const SolutionEnhanced = () => {
  const solutions = [
    {
      icon: GitPullRequest,
      title: "Specs stored alongside code",
      description: "Documentation lives in your repo, reviewed via PR process like any other code change.",
      benefit: "Single source of truth",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Sparkles,
      title: "AI-powered automatic updates",
      description: "Intelligent agents detect PR commits and propose spec updates, keeping everything in sync.",
      benefit: "Zero manual overhead",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Link,
      title: "Requirement-level traceability",
      description: "Maintain precise links between specs and code to avoid hallucinations in complex systems.",
      benefit: "Complete visibility",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-blue-500/5"></div>
      
      {/* Floating Decorative Elements */}
      <div className="absolute top-20 left-[5%] text-primary/20">
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-blue-500/20 blur-xl animate-pulse-soft"></div>
      </div>
      <div className="absolute bottom-20 right-[8%] text-blue-500/20">
        <div className="w-40 h-40 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-xl animate-pulse-soft" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-3 text-sm font-medium text-primary mb-6">
            <Zap size={16} className="animate-pulse" />
            The AI-Native Solution
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="gradient-text">Spec-as-Code</span>
            <br />
            <span className="text-foreground">Changes Everything</span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-12">
            We treat specs like code: checked into repos, reviewed via PRs, and automatically 
            kept in sync with evolving codebases using <span className="font-semibold text-primary">advanced AI</span>.
          </p>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            <div className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Sync Accuracy</div>
            </div>
            <div className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50">
              <div className="text-4xl font-bold text-green-600 mb-2">80%</div>
              <div className="text-sm text-muted-foreground">Less Doc Debt</div>
            </div>
            <div className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50">
              <div className="text-4xl font-bold text-blue-600 mb-2">5min</div>
              <div className="text-sm text-muted-foreground">Setup Time</div>
            </div>
          </div>
        </div>
        
        {/* Solutions Grid */}
        <div className="grid lg:grid-cols-3 gap-10 mb-20">
          {solutions.map((solution, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden bg-card/80 backdrop-blur-sm border border-border/50 rounded-3xl p-8 text-center hover:shadow-2xl hover:shadow-primary/10 transition-all duration-700 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Animated Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-0 group-hover:opacity-5 transition-opacity duration-700`}></div>
              
              {/* Icon with Gradient Background */}
              <div className={`relative w-24 h-24 mx-auto mb-8 bg-gradient-to-br ${solution.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                <solution.icon className="w-12 h-12 text-white" />
              </div>
              
              {/* Benefit Badge */}
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-xs font-medium text-primary mb-4">
                <CheckCircle size={14} />
                {solution.benefit}
              </div>
              
              {/* Content */}
              <h3 className="text-2xl font-bold mb-4 leading-tight group-hover:text-primary transition-colors duration-300">
                {solution.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {solution.description}
              </p>
              
              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-primary/20 transition-colors duration-500"></div>
            </div>
          ))}
        </div>
        
        {/* Call to Action Section */}
        <div className="relative bg-gradient-to-r from-primary/10 via-blue-500/10 to-purple-500/10 rounded-3xl p-12 text-center border border-primary/20 backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-blue-500/5 rounded-3xl"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-primary/20 rounded-full px-6 py-3 text-sm font-medium text-primary mb-6">
              <Rocket size={16} />
              Ready to Transform Your Workflow?
            </div>
            
            <h3 className="text-3xl lg:text-4xl font-bold mb-6">
              Join the <span className="gradient-text">Spec-as-Code</span> Revolution
            </h3>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Stop wasting time on documentation debt. Start building with confidence, 
              knowing your specs and code tell the same story.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="hero" 
                size="lg"
                className="text-lg px-8 py-4 group"
              >
                Start Free Trial
                <Sparkles size={20} className="ml-2 group-hover:scale-110 transition-transform" />
              </Button>
              <Button 
                variant="hero-outline" 
                size="lg"
                className="text-lg px-8 py-4 group"
              >
                <Shield size={20} className="mr-2 group-hover:scale-110 transition-transform" />
                Enterprise Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};