import { Zap, Target, Users } from "lucide-react";

export const Benefits = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Zero Setup Friction",
      description: "Works with your existing ADO workflow",
      metric: "5min"
    },
    {
      icon: Target,
      title: "Perfect Alignment",
      description: "Specs and code automatically stay in sync",
      metric: "100%"
    },
    {
      icon: Users,
      title: "Faster Onboarding",
      description: "New teammates get context instantly",
      metric: "10x"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Why Teams Choose Spec-as-Code
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The results speak for themselves
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-background/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 text-center hover:shadow-xl hover:border-primary/30 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <benefit.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{benefit.metric}</div>
              <h3 className="font-semibold mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};