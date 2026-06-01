import CaseStudyCard from "../landing/CaseStudyCard";

export default function CaseStudyCardExample() {
  return (
    <div className="max-w-md p-4">
      <CaseStudyCard
        company="Cisco"
        context="Sales team needed cleaner outbound and follow-up visibility."
        whatWasBroken="Manual outbound and inconsistent follow-up."
        whatWasBuilt="Automated outbound systems and clearer pipeline tracking."
        outcome="Generated $5M+ in pipeline."
      />
    </div>
  );
}
