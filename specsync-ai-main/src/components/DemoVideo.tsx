import { Play } from "lucide-react";

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
          <div className="relative w-full rounded-xl overflow-hidden shadow-lg ring-1 ring-border bg-black/70 aspect-video">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://microsoft-my.sharepoint-df.com/personal/chentianning_microsoft_com/_layouts/15/embed.aspx?UniqueId=5d3dbbd7-f7c2-476f-93f4-5fbd8f7dc131&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create"
              title="Hackathon Demo - Spec-as-Code"
              allowFullScreen
              frameBorder={0}
              scrolling="no"
              loading="lazy"
              referrerPolicy="no-referrer"
              allow="clipboard-write; encrypted-media; fullscreen;"
            />
          </div>
          <noscript>
            <p className="mt-4 text-sm text-muted-foreground">
              Video embed requires JavaScript. View it directly: {" "}
              <a
                href="https://microsoft-my.sharepoint-df.com/personal/chentianning_microsoft_com/_layouts/15/embed.aspx?UniqueId=5d3dbbd7-f7c2-476f-93f4-5fbd8f7dc131"
                className="underline"
                rel="noopener noreferrer"
                target="_blank"
              >Open video</a>.
            </p>
          </noscript>
        </div>
      </div>
    </section>
  );
};