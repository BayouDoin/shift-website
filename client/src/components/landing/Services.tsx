import ServiceCard from "./ServiceCard";
import { TrendingUp, Settings, Users, Database } from "lucide-react";

const services = [
  {
    icon: TrendingUp,
    title: "Revenue Systems",
    description:
      "Remove the manual work that makes revenue-related work feel heavier than it should. AI systems that handle follow-up, coordination, and handoffs so opportunities don't stall or slip through the cracks.",
    includes: [
      "Lead reactivation",
      "Automated email outreach",
      "Sales handoff automation",
    ],
    outcome: "Typical result: 5-15 hours saved per week within 30 days",
  },
  {
    icon: Settings,
    title: "Operations Systems",
    description:
      "Eliminate repetitive internal work that quietly drains time and attention. AI systems that take ownership of routine operational tasks so work doesn't get stuck in inboxes or spreadsheets.",
    includes: [
      "Intake to document handoffs",
      "Internal process automation",
      "Multi-step form systems",
    ],
    outcome: "Typical result: Faster turnaround times and fewer errors",
  },
  {
    icon: Users,
    title: "Customer Experience Systems",
    description:
      "Remove the friction that slows responses and creates unnecessary back-and-forth. AI systems that keep customers informed, moving, and supported without constant manual intervention.",
    includes: [
      "Appointment and booking automation",
      "Client onboarding sequences",
      "Status notifications and updates",
    ],
    outcome: "Typical result: Near-instant response times without manual work",
  },
  {
    icon: Database,
    title: "Data & Cleanup Systems",
    description:
      "Clear the clutter that makes systems feel fragile or unreliable. AI systems that clean, connect, and stabilize the tools your business already relies on.",
    includes: [
      "CRM cleanup and optimization",
      "Zapier, Make, and n8n automation",
      "Tool consolidation",
    ],
    outcome: "Typical result: Cleaner systems and fewer failures",
  },
];

export default function Services() {
  return (
    <section id="services" className="pt-12 md:pt-10 lg:pt-12 pb-4 md:pb-6 lg:pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-6 md:mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Where AI Removes Friction
          </h2>
          <p className="text-lg text-muted-foreground">
            These are the areas where AI most often removes tedious, draining work and makes day-to-day operations feel lighter.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground">
          Most teams start with one area that's causing the most friction and expand from there.
        </p>
      </div>
    </section>
  );
}
