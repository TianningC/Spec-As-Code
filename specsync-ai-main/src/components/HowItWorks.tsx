import { FileText, GitBranch, Bot, CheckCircle, ImageIcon, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
// Import screenshot assets (add the file under src/assets)
// If the actual filename differs, adjust accordingly.
import workItemScreenshot from "@/assets/work-item.png"; // Add this image file
import prScreenshot from "@/assets/pr.png"; // Step 3 PR / code commit
import agentAnalysisScreenshot from "@/assets/agent-analysis.png"; // Step 4 agent analysis
import specUpdateScreenshot from "@/assets/spec-update.png"; // Step 5 spec update

export const HowItWorks = () => {
  const [openImage, setOpenImage] = useState<null | { src: string; alt: string }>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Track which step indices have intersected
  const [visible, setVisible] = useState<Record<number, boolean>>({});

  useEffect(() => {
    if (!containerRef.current) return;
    const nodes = Array.from(
      containerRef.current.querySelectorAll('[data-step-index]')
    ) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute('data-step-index'));
            setVisible((prev) => (prev[idx] ? prev : { ...prev, [idx]: true }));
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.3 }
    );
    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);
  const steps = [
    {
      number: "01",
      icon: FileText,
      title: "Create Work Item",
      description: "PM creates an ADO Work Item to track a new feature or project",
      imageAlt: "Azure DevOps work item created for new feature",
      image: workItemScreenshot
    },
    {
      number: "02",
      icon: GitBranch,
      title: "Check in Spec",
      description: "PM checks in the spec (Markdown) to the repo under the same ADO item",
      imageAlt: "Spec checked into repo screenshot"
    },
    {
      number: "03",
      icon: GitBranch,
      title: "Engineer Commits PR",
      description: "Engineer commits code PR under the same ADO item, implementing the feature",
      imageAlt: "Completed pull request with all checks succeeded",
      image: prScreenshot
    },
    {
      number: "04",
      icon: Bot,
      title: "AI Agent Analysis",
      description: "AI Agent scans the PR, understands the code design, and compares against the spec",
      imageAlt: "Agent-created task indicating documentation update needed",
      image: agentAnalysisScreenshot
    },
    {
      number: "05",
      icon: GitBranch,
      title: "Propose Updates",
      description: "Agent creates a draft PR with suggested spec changes to match implementation",
      imageAlt: "Spec markdown diff showing resolved gap and implementation details",
      image: specUpdateScreenshot
    },
    {
      number: "06",
      icon: CheckCircle,
      title: "Review & Sync",
      description: "PM reviews and approves the update, keeping code and spec perfectly aligned",
      imageAlt: "Review and sync confirmation screenshot"
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Simple workflow that seamlessly integrates with your existing development process
          </p>
        </div>
        
        <div ref={containerRef} className="max-w-5xl mx-auto space-y-24">
          {steps.map((step, index) => {
            const isEven = index % 2 === 1;
            return (
              <div
                key={index}
                data-step-index={index}
                className={`flex flex-col-reverse items-center gap-10 md:gap-16 md:grid md:grid-cols-2 ${
                  isEven ? "md:[&>div:first-child]:order-2" : ""
                } transition-all duration-700 will-change-transform will-change-opacity ${
                  visible[index]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                {/* Text Block */}
                <div className="w-full">
                  <div className="inline-flex items-center gap-3 mb-4">
                    <span className="text-sm font-mono font-bold tracking-wider text-primary bg-primary/10 px-3 py-1 rounded">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 gradient-hero rounded-full flex items-center justify-center">
                      <step.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed max-w-prose">
                    {step.description}
                  </p>
                </div>

                {/* Image / Screenshot Placeholder */}
                <div className="w-full group">
                  {step.image ? (
                    <button
                      type="button"
                      onClick={() => setOpenImage({ src: step.image as string, alt: step.imageAlt })}
                      className="group relative aspect-video w-full rounded-xl overflow-hidden border border-border/60 shadow-sm ring-1 ring-black/5 bg-black/5 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    >
                      <img
                        src={step.image as string}
                        alt={step.imageAlt}
                        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 bg-gradient-to-tr from-primary/20 via-transparent to-transparent transition-opacity" />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent p-3 text-xs font-medium tracking-wide flex justify-between items-center">
                        <span>{step.imageAlt}</span>
                        <span className="text-primary text-[10px] tracking-widest font-semibold uppercase">Click to enlarge</span>
                      </div>
                    </button>
                  ) : (
                    <div className="relative aspect-video rounded-xl border border-border/60 bg-gradient-to-br from-muted/60 to-muted/20 overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-muted-foreground">
                        <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                          <ImageIcon className="w-7 h-7 text-primary" />
                        </div>
                        <span className="text-xs uppercase tracking-wider font-medium opacity-80">
                          {step.imageAlt}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-32 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-6 py-3">
            <CheckCircle className="w-5 h-5 text-primary" />
            <span className="font-semibold text-primary">Result: Spec & Code in Perfect Sync</span>
          </div>
        </div>

        {/* Lightbox Dialog (simple custom implementation) */}
        {openImage && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center p-6 backdrop-blur-sm bg-background/70 animate-in fade-in"
            onClick={() => setOpenImage(null)}
          >
            <div
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setOpenImage(null)}
                className="absolute -top-10 right-0 text-muted-foreground hover:text-foreground transition"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="rounded-xl overflow-hidden border border-border/60 shadow-xl bg-background">
                <img
                  src={openImage.src}
                  alt={openImage.alt}
                  className="w-full h-full object-contain"
                />
                <div className="p-4 text-sm text-muted-foreground border-t border-border/60 flex items-center justify-between">
                  <span>{openImage.alt}</span>
                  <button
                    onClick={() => setOpenImage(null)}
                    className="px-3 py-1 text-xs font-medium rounded-md bg-primary/10 text-primary hover:bg-primary/20 transition"
                  >Close</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};