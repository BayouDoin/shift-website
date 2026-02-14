import { Card } from "@/components/ui/card";

interface CaseStudyCardProps {
  company: string;
  context: string;
  whatWasBroken: string;
  whatWasBuilt: string;
  outcome: string;
  insight?: string;
}

export default function CaseStudyCard({
  company,
  context,
  whatWasBroken,
  whatWasBuilt,
  outcome,
  insight,
}: CaseStudyCardProps) {
  return (
    <Card className="p-6 md:p-8 space-y-6" data-testid={`card-casestudy-${company.toLowerCase().replace(/\s+/g, '-')}`}>
      <div>
        <h3 className="text-lg font-semibold mb-4">{company}</h3>
        <div className="space-y-4">
          <div className="space-y-1">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Context
            </p>
            <p className="text-sm text-foreground/80">{context}</p>
          </div>
          <div className="space-y-1">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              What Was Broken
            </p>
            <p className="text-sm text-foreground/80">{whatWasBroken}</p>
          </div>
          <div className="space-y-1">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              What Was Built
            </p>
            <p className="text-sm text-foreground/80">{whatWasBuilt}</p>
          </div>
        </div>
      </div>
      <div className="pt-4 border-t border-border">
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1">
          Outcome
        </p>
        <p className="text-base font-semibold text-foreground">{outcome}</p>
        {insight && (
          <p className="text-sm text-muted-foreground mt-2">{insight}</p>
        )}
      </div>
    </Card>
  );
}
