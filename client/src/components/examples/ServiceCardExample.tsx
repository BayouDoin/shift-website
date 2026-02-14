import ServiceCard from "../landing/ServiceCard";
import { TrendingUp } from "lucide-react";

export default function ServiceCardExample() {
  return (
    <div className="max-w-md p-4">
      <ServiceCard
        icon={TrendingUp}
        title="Revenue Systems"
        description="Automations that turn leads into conversations and conversations into deals without manual follow-up."
        includes={[
          "Lead reactivation",
          "Automated email outreach",
          "Sales handoff automation",
        ]}
        outcome="Typical result: 5-15 hours saved per week within 30 days"
      />
    </div>
  );
}
