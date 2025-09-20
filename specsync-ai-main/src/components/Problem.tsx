import { AlertTriangle, Search, MessageSquareX } from "lucide-react";

export const Problem = () => {
  const problems = [
    {
      icon: Search,
      title: "Specs are outdated and hard to find",
      description: "Critical documentation gets scattered across folders, becoming stale and unreliable."
    },
    {
      icon: AlertTriangle,
      title: "Code drifts from design docs",
      description: "Implementations evolve but specs don’t keep up."
    },
    {
      icon: MessageSquareX,
      title: "Knowledge lives in people's heads",
      description: "Critical context stays in experts’ heads and codebase, not in shared docs"
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Why Specs and Code Drift Apart
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            PM specs and design docs are critical for alignment, but too often they're scattered, 
            outdated, and disconnected from the code.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index} 
              className="bg-card border border-border/50 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-destructive/10 rounded-full flex items-center justify-center">
                <problem.icon className="w-8 h-8 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{problem.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};