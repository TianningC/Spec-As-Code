import { GitBranch } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <GitBranch className="w-6 h-6 text-primary" />
            <span className="text-xl font-bold text-foreground">Spec-as-Code</span>
          </div>
          
          <div className="flex flex-wrap items-center gap-6 text-sm">
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">Documentation</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">GitHub</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">Community</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">Support</a>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center space-y-6">
          <div className="space-y-4">
            <p className="text-sm text-foreground font-medium">🙏 Built with incredible AI assistance from</p>
            <div className="flex flex-wrap justify-center items-center gap-3">
              <span className="px-4 py-2 bg-primary/10 rounded-full border border-primary/20 text-sm">
                <span className="font-semibold text-foreground">GitHub Copilot</span>
              </span>
              <span className="px-4 py-2 bg-primary/10 rounded-full border border-primary/20 text-sm">
                <span className="font-semibold text-foreground">ChatGPT</span>
              </span>
              <span className="px-4 py-2 bg-primary/10 rounded-full border border-primary/20 text-sm">
                <span className="font-semibold text-foreground">Lovable</span>
              </span>
              <span className="px-4 py-2 bg-primary/10 rounded-full border border-primary/20 text-sm">
                <span className="font-semibold text-foreground">SWE Agent</span>
              </span>
            </div>
            <p className="text-sm text-foreground italic">Built with ✨creativity🪄 during CY25H2 Hackathon</p>
          </div>
          <p className="text-sm text-muted-foreground">&copy; 2025 Spec-as-Code. Keeping specs and code forever in sync.</p>
        </div>
      </div>
    </footer>
  );
};