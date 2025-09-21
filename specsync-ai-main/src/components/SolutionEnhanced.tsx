import { CheckCircle, GitPullRequest, Link, Sparkles, Zap } from "lucide-react";

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
      benefit: "Low manual overhead",
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

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            <div className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50">
              <div className="text-2xl font-bold text-primary mb-2">Always</div>
              <div className="text-sm text-muted-foreground">In Sync</div>
            </div>
            <div className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50">
              <div className="text-2xl font-bold text-green-600 mb-2">Zero</div>
              <div className="text-sm text-muted-foreground">Manual Updates</div>
            </div>
            <div className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50">
              <div className="text-2xl font-bold text-blue-600 mb-2">Instant</div>
              <div className="text-sm text-muted-foreground">Setup</div>
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
      </div>
    </section>
  );
};