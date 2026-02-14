import CaseStudyCard from "./CaseStudyCard";

const caseStudies = [
  {
    company: "Cisco",
    context: "Enterprise sales teams relying on manual outbound and inconsistent follow-up.",
    whatWasBroken: "Leads were generated, but follow-up was inconsistent and heavily manual.",
    whatWasBuilt: "Automated outbound and follow-up systems tied directly into how sales teams operate.",
    outcome: "Generated over $5M in closed revenue.",
    insight: "The result was less follow-up pressure and more predictable execution across the sales process.",
  },
  {
    company: "Intuit",
    context: "High-volume inbound and outbound sales workflows across multiple product lines.",
    whatWasBroken: "Fragmented lead follow-up and manual sales processes slowed conversion.",
    whatWasBuilt: "Automated outbound, lead routing, and follow-up systems.",
    outcome: "Generated over $1M in attributable revenue.",
    insight: "The result was less manual coordination and more time spent on higher-value work instead of chasing leads.",
  },
  {
    company: "Gate Gourmet",
    context: "Operations spanning dozens of airports with high monitoring overhead.",
    whatWasBroken: "Manual monitoring across locations created cost and reliability issues.",
    whatWasBuilt: "Automated IoT monitoring and alerting workflows.",
    outcome: "Saved over $1M annually across 50+ airports.",
    insight: "The result was less manual oversight and faster visibility into issues as they arose.",
  },
  {
    company: "Local Law Firm",
    context: "Estate planning firm handling high volumes of client intake and document preparation.",
    whatWasBroken: "Manual intake, document assembly, and follow-up consumed staff time and slowed turnaround.",
    whatWasBuilt: "Automated client intake, document generation, and internal workflows.",
    outcome: "Saved 30+ hours per month and significantly reduced administrative overhead.",
    insight: "The result was more available staff time and a lighter mental load around intake and paperwork.",
  },
];

export default function Results() {
  return (
    <section id="results" className="pt-12 md:pt-10 lg:pt-12 pb-4 md:pb-6 lg:pb-8 bg-card/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-6 md:mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Results From Real Implementations
          </h2>
          <p className="text-lg text-muted-foreground">
            Different businesses, different challenges. The common thread is removing work that drains time, attention, and momentum.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-10">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.company} {...study} />
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground">
          Across industries, the pattern is the same: remove the draining work, and everything else moves faster.
        </p>
      </div>
    </section>
  );
}
