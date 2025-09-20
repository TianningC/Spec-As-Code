import { Rocket, Users, BookOpen, Clock } from "lucide-react";

export const Benefits = () => {
  const benefits = [
    {
      icon: Rocket,
      title: "ADO Integrated Onboarding",
      description: "Stick with your existing dev flow. Minimal setup, maximum impact.",
      metric: "Seamless Onboarding"
    },
    {
      icon: BookOpen,
      title: "Reduced Misalignment",
      description: "Specs and code evolve together. Docs actually reflect reality—auto-updated as code changes.",
      metric: "Always Aligned"
    },
    {
      icon: Clock,
      title: "AI Native",
      description: "No more manual spec updates or chasing tribal knowledge. Focus on building, not bookkeeping.",
      metric: "Time Saved"
    },
    {
      icon: Users,
      title: "Team Clarity",
      description: "Shared source of truth removes back-and-forth and stale context. Onboard new team members faster.",
      metric: "Clear Context"
    }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Benefits That Transform Teams
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            When specs and code stay in sync, everything else falls into place
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative flex flex-col h-full bg-card border border-border/50 rounded-xl p-6 text-center shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 animate-fade-in-up overflow-hidden"
              style={{ animationDelay: `${index * 0.12}s` }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 transition-opacity" />
              <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center group-hover:gradient-hero transition-all duration-300">
                <benefit.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <div className="text-2xl font-bold text-primary mb-2 tracking-tight">{benefit.metric}</div>
              <h3 className="text-lg font-semibold mb-3 leading-snug">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{benefit.description}</p>
              <div className="pt-3 mt-auto text-xs uppercase tracking-wider font-medium text-primary/70 group-hover:text-primary transition-colors">Outcome</div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center bg-muted/50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4">The Bottom Line</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stop wasting time on documentation debt. Start building with confidence, 
            knowing your specs and code tell the same story.
          </p>
        </div>
      </div>
    </section>
  );
};