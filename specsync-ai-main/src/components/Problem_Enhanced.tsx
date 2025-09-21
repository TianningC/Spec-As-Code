import { AlertTriangle, Search, MessageSquareX, TrendingDown, Clock, Users } from "lucide-react";

export const Problem = () => {
  const problems = [
    {
      icon: Search,
      title: "Specs are outdated and hard to find",
      description: "Critical documentation gets scattered across folders, becoming stale and unreliable.",
      stat: "73%",
      statLabel: "of devs struggle to find current specs"
    },
    {
      icon: AlertTriangle,
      title: "Code drifts from design docs",
      description: "Implementations evolve but specs don't keep up, creating dangerous misalignment.",
      stat: "2.5x",
      statLabel: "more bugs when specs are outdated"
    },
    {
      icon: MessageSquareX,
      title: "Knowledge lives in people's heads",
      description: "Critical context stays in experts' heads and codebase, not in shared docs.",
      stat: "40%",
      statLabel: "of onboarding time spent hunting context"
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 via-background to-orange-50/50 dark:from-red-950/20 dark:via-background dark:to-orange-950/20"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 text-red-200 dark:text-red-800">
        <TrendingDown size={60} className="opacity-30" />
      </div>
      <div className="absolute bottom-10 right-10 text-orange-200 dark:text-orange-800">
        <Clock size={50} className="opacity-30" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-red-100 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-full px-6 py-3 text-sm font-medium text-red-700 dark:text-red-300 mb-6">
            <AlertTriangle size={16} />
            The Documentation Crisis
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Why Specs and Code
            <br />
            <span className="text-red-600 dark:text-red-400">Drift Apart</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            PM specs and design docs are critical for alignment, but too often they're scattered, 
            outdated, and disconnected from the code that actually ships.
          </p>
        </div>
        
        {/* Problems Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {problems.map((problem, index) => (
            <div 
              key={index} 
              className="group relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 text-center hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-orange-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Icon */}
              <div className="relative w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <problem.icon className="w-10 h-10 text-red-600 dark:text-red-400" />
              </div>
              
              {/* Stats */}
              <div className="mb-4">
                <div className="text-3xl font-bold text-red-600 dark:text-red-400 mb-1">{problem.stat}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">{problem.statLabel}</div>
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold mb-4 leading-tight">{problem.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
        
        {/* Call-out Box */}
        <div className="bg-gradient-to-r from-red-500/10 via-orange-500/10 to-yellow-500/10 border border-red-200/50 dark:border-red-800/50 rounded-2xl p-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Users className="text-red-600 dark:text-red-400" size={24} />
            <h3 className="text-2xl font-bold">The Result?</h3>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Teams waste <span className="font-bold text-red-600 dark:text-red-400">countless hours</span> hunting 
            for context, building the wrong features, and fixing preventable bugs. 
            <br className="hidden sm:block" />
            <span className="font-semibold text-foreground">There has to be a better way.</span>
          </p>
        </div>
      </div>
    </section>
  );
};