import { Bot, Zap, Brain, GitCompare } from "lucide-react";

export const AIAgent = () => {
  const features = [
    {
      icon: Brain,
      title: "Intelligent Code Analysis",
      description: "Understands your code architecture, patterns, and design decisions to provide meaningful spec updates"
    },
    {
      icon: GitCompare,
      title: "Smart Diff Detection", 
      description: "Automatically identifies when code changes impact documented specifications and requirements"
    },
    {
      icon: Zap,
      title: "Autonomous Updates",
      description: "Proactively suggests spec changes and creates draft PRs without manual intervention"
    }
  ];

  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20">
          <Bot size={120} className="text-primary animate-float" />
        </div>
        <div className="absolute bottom-20 right-20">
          <Bot size={80} className="text-primary animate-float" style={{ animationDelay: '3s' }} />
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <Bot className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary">AI-NATIVE BY DESIGN</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            AI Native Solution
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our AI agents don't just link specs and code — they understand both, 
            making intelligent updates that keep your documentation alive and accurate.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-card border border-border/50 rounded-xl p-8 text-center hover:shadow-lg hover:border-primary/20 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-6 gradient-hero rounded-full flex items-center justify-center">
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <div className="inline-block bg-card border border-primary/20 rounded-2xl p-8 max-w-2xl">
            <h3 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
              <Zap className="w-6 h-6 text-primary" />
              The Future is AI-Native
            </h3>
            <p className="text-muted-foreground">
              While others treat AI as an add-on, we treat AI as an intrinsic part of the product development workflow. 
              Every code change triggers smart analysis, every spec update is contextually aware.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};