import { Card } from "@/components/ui/card";
import { Clock, Target, Rocket, CheckCircle, Calendar, FileText } from "lucide-react";

const steps = [
  {
    icon: Clock,
    title: "Start with an AI Strategy Call",
    description: "A short conversation to understand how your business operates today and where work feels heavier than it should.",
  },
  {
    icon: Target,
    title: "Identify where AI can take work off your plate",
    description: "We identify repetitive, tedious, or draining work that AI can realistically own or support.",
  },
  {
    icon: Rocket,
    title: "Design what makes sense to implement first",
    description: "We outline a clear, realistic path forward focused on removing friction and delivering quick wins.",
  },
];

const reassurances = [
  { icon: CheckCircle, text: "No prep required" },
  { icon: Calendar, text: "No obligation" },
  { icon: FileText, text: "Clear next steps after the call" },
];

export default function Process() {
  return (
    <section id="process" className="pt-12 md:pt-10 lg:pt-12 pb-4 md:pb-6 lg:pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-6 md:mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            How the Engagement Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Designed to help you make sense of where AI fits, without overcommitting or overengineering.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {steps.map((step, index) => (
            <Card key={step.title} className="p-6 md:p-8 relative">
              <div className="absolute top-6 right-6 md:top-8 md:right-8 text-5xl font-bold text-muted-foreground/30">
                {index + 1}
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-md bg-muted flex items-center justify-center">
                  <step.icon className="h-6 w-6 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 pr-8">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          {reassurances.map((item) => (
            <div key={item.text} className="flex items-center gap-2 text-muted-foreground">
              <item.icon className="h-4 w-4" />
              <span className="text-sm">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
