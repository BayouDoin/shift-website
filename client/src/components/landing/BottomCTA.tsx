import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface BottomCTAProps {
  onBookCall: () => void;
}

export default function BottomCTA({ onBookCall }: BottomCTAProps) {
  return (
    <section id="cta" className="pt-12 md:pt-10 lg:pt-12 pb-4 md:pb-6 lg:pb-8 border-t border-border">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-6 leading-tight">
          If There Are Tasks in Your Business You Dread Doing, This Is the Fastest Way to Make Them Go Away
        </h2>

        <div className="space-y-6">
          <Button
            size="lg"
            onClick={onBookCall}
            data-testid="button-bottom-cta"
          >
            See What AI Should Take Over
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

          <p className="text-muted-foreground">
            20 minute call. No prep required. You leave with clarity on what AI should take over and what to do next.
          </p>
        </div>
      </div>
    </section>
  );
}
