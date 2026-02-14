import { Card } from "@/components/ui/card";
import { type LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  includes: string[];
  outcome: string;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  includes,
  outcome,
}: ServiceCardProps) {
  return (
    <Card className="p-6 md:p-8 space-y-6">
      <div className="space-y-4">
        <div className="w-12 h-12 rounded-md bg-muted flex items-center justify-center">
          <Icon className="h-6 w-6 text-muted-foreground" />
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Includes
        </p>
        <ul className="space-y-1.5">
          {includes.map((item, index) => (
            <li key={index} className="text-sm text-foreground/90 flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-muted-foreground" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-muted/50 rounded-md p-4">
        <p className="text-sm italic text-muted-foreground">{outcome}</p>
      </div>
    </Card>
  );
}
