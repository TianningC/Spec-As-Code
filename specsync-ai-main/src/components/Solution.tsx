import { CheckCircle, GitPullRequest, Link, Sparkles } from "lucide-react";

export const Solution = () => {
  const solutions = [
    {
      icon: GitPullRequest,
      title: "Specs stored alongside code",
      description: "Documentation lives in your repo, reviewed via PR process like any other code change."
    },
    {
      icon: Sparkles,
      title: "Automatic updates when code changes",
      description: "AI agents detect PR commits and propose spec updates, keeping everything in sync."
    },
    {
      icon: Link,
      title: "Requirement-level traceability",
      description: "Maintain precise links between specs and code to avoid hallucinations in complex systems."
    }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-hero bg-clip-text text-transparent">
              Spec-as-Code
            </span>{" "}
            Ensures
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We treat specs like code: checked into repos, reviewed via PRs, and automatically 
            kept in sync with evolving codebases.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={index} 
              className="bg-card border border-border/50 rounded-xl p-8 text-center hover:shadow-lg hover:border-primary/20 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-6 gradient-hero rounded-full flex items-center justify-center">
                <solution.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{solution.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground">
            Documentation stops being a neglected afterthought — instead, it becomes a{" "}
            <span className="font-semibold text-primary">living, trustworthy part</span>{" "}
            of the development workflow.
          </p>
        </div>
      </div>
    </section>
  );
};