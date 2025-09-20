import { Clock, Link2, Monitor } from "lucide-react";

export const ComingSoon = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-muted/30 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Coming Soon
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're building the future of documentation that never falls behind
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-card/50 backdrop-blur-sm rounded-xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-300 group">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-primary/10 rounded-lg mr-4 group-hover:bg-primary/20 transition-colors">
                <Monitor className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Continuous Monitoring</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Beyond one-time linkage — specs and code stay aligned for all future changes. 
              Real-time sync that never sleeps.
            </p>
          </div>

          <div className="bg-card/50 backdrop-blur-sm rounded-xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-300 group">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-primary/10 rounded-lg mr-4 group-hover:bg-primary/20 transition-colors">
                <Link2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Context Linker</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Automatically enrich specs with references to code, systems, and past work — 
              like Wikipedia-style references for internal knowledge.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-sm text-primary font-medium">
            <Clock className="w-4 h-4 mr-2" />
            Stay tuned for these exciting features
          </div>
        </div>
      </div>
    </section>
  );
};