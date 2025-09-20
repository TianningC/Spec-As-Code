import { Play, Video } from "lucide-react";

export const DemoVideo = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-background to-muted/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            See It In Action
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Watch how Spec-as-Code seamlessly keeps your documentation and implementation synchronized
          </p>
        </div>
        
        <div className="relative">
          {/* Video Placeholder */}
          <div className="bg-muted/50 border-2 border-dashed border-border rounded-xl aspect-video flex flex-col items-center justify-center text-center p-8">
            <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Video className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Demo Video</h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Complete walkthrough showing how specs and code stay in perfect sync throughout the development lifecycle
            </p>
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-6 py-3 text-primary font-medium">
              <Play className="w-4 h-4" />
              Coming Soon
            </div>
          </div>
          
          {/* Play Button Overlay (for when video is added) */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 pointer-events-none">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
              <Play className="w-6 h-6 text-primary-foreground ml-1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};