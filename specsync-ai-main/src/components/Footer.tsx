import { GitBranch } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <GitBranch className="w-6 h-6" />
            <span className="text-xl font-bold">Spec-as-Code</span>
          </div>
          
          <div className="flex flex-wrap items-center gap-6 text-sm">
            <a href="#" className="hover:text-primary transition-colors">Documentation</a>
            <a href="#" className="hover:text-primary transition-colors">GitHub</a>
            <a href="#" className="hover:text-primary transition-colors">Community</a>
            <a href="#" className="hover:text-primary transition-colors">Support</a>
          </div>
        </div>
        
        <div className="border-t border-border/20 mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Spec-as-Code. Keeping specs and code forever in sync.</p>
        </div>
      </div>
    </footer>
  );
};