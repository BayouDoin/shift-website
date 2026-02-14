import { Button } from "@/components/ui/button";
import { ArrowRight, Search, Cog, CheckCircle } from "lucide-react";

interface HeroProps {
  onBookCall: () => void;
}

export default function Hero({ onBookCall }: HeroProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-28 pb-8 md:pt-24 md:pb-12 lg:pt-28 lg:pb-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-9 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
                Enterprise-Grade AI That Removes Friction from Everyday Work
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                We design and implement the same AI systems used by large organizations to remove friction, eliminate tedious work, and make day-to-day operations feel lighter for small and medium sized businesses.
              </p>
              <p className="text-sm text-muted-foreground/80">
                Best for small and medium-sized businesses with small teams and messy systems.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={onBookCall}
                data-testid="button-hero-primary-cta"
              >
                See What AI Should Take Over
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("results")}
                data-testid="button-hero-secondary-cta"
              >
                View Real Automation Examples
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-md bg-muted flex items-center justify-center">
                  <Search className="h-4 w-4 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-sm font-medium">1. Identify</p>
                  <p className="text-xs text-muted-foreground">Where work feels heavier than it should</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-md bg-muted flex items-center justify-center">
                  <Cog className="h-4 w-4 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-sm font-medium">2. Design</p>
                  <p className="text-xs text-muted-foreground">A clear, realistic path to remove that friction</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-md bg-muted flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-sm font-medium">3. Implement</p>
                  <p className="text-xs text-muted-foreground">Only what actually makes work easier</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="relative aspect-video rounded-lg border border-border bg-card overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/zYZCgKZQv2c"
                title="Shift Overview Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
                data-testid="video-hero"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
