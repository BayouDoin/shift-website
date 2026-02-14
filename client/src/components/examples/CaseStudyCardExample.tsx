import CaseStudyCard from "../landing/CaseStudyCard";

export default function CaseStudyCardExample() {
  return (
    <div className="max-w-md p-4">
      <CaseStudyCard
        company="Cisco"
        before="Manual outbound and inconsistent follow-up"
        after="Automated outbound systems"
        result="Generated $5M+ in pipeline"
      />
    </div>
  );
}
