import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import LawFirmsPage from "@/pages/law-firms";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/law-firms" component={() => <LawFirmsPage pageKey="hub" />} />
      <Route path="/law-firms/" component={() => <LawFirmsPage pageKey="hub" />} />
      <Route path="/law-firms/book-software-setup-audit" component={() => <LawFirmsPage pageKey="audit" />} />
      <Route path="/law-firms/book-software-setup-audit/" component={() => <LawFirmsPage pageKey="audit" />} />
      <Route path="/law-firms/practicepanther-setup-help" component={() => <LawFirmsPage pageKey="practicepanther" />} />
      <Route path="/law-firms/practicepanther-setup-help/" component={() => <LawFirmsPage pageKey="practicepanther" />} />
      <Route path="/law-firms/intake-follow-up-cleanup" component={() => <LawFirmsPage pageKey="intakeFollowUp" />} />
      <Route path="/law-firms/intake-follow-up-cleanup/" component={() => <LawFirmsPage pageKey="intakeFollowUp" />} />
      <Route path="/law-firms/intake-automation" component={() => <LawFirmsPage pageKey="intakeAutomation" />} />
      <Route path="/law-firms/intake-automation/" component={() => <LawFirmsPage pageKey="intakeAutomation" />} />
      <Route path="/law-firms/document-automation" component={() => <LawFirmsPage pageKey="documentAutomation" />} />
      <Route path="/law-firms/document-automation/" component={() => <LawFirmsPage pageKey="documentAutomation" />} />
      <Route path="/law-firms/workflow-cleanup" component={() => <LawFirmsPage pageKey="workflowCleanup" />} />
      <Route path="/law-firms/workflow-cleanup/" component={() => <LawFirmsPage pageKey="workflowCleanup" />} />
      <Route path="/law-firms/client-follow-up-system" component={() => <LawFirmsPage pageKey="clientFollowUp" />} />
      <Route path="/law-firms/client-follow-up-system/" component={() => <LawFirmsPage pageKey="clientFollowUp" />} />
      <Route path="/law-firms/practicepanther-workflow-cleanup" component={() => <LawFirmsPage pageKey="practicePantherWorkflowCleanup" />} />
      <Route path="/law-firms/practicepanther-workflow-cleanup/" component={() => <LawFirmsPage pageKey="practicePantherWorkflowCleanup" />} />
      <Route path="/law-firms/practicepanther-intake-setup" component={() => <LawFirmsPage pageKey="practicePantherIntakeSetup" />} />
      <Route path="/law-firms/practicepanther-intake-setup/" component={() => <LawFirmsPage pageKey="practicePantherIntakeSetup" />} />
      <Route path="/law-firms/practicepanther-document-automation" component={() => <LawFirmsPage pageKey="practicePantherDocumentAutomation" />} />
      <Route path="/law-firms/practicepanther-document-automation/" component={() => <LawFirmsPage pageKey="practicePantherDocumentAutomation" />} />
      <Route path="/law-firms/practicepanther-custom-field-cleanup" component={() => <LawFirmsPage pageKey="practicePantherCustomFieldCleanup" />} />
      <Route path="/law-firms/practicepanther-custom-field-cleanup/" component={() => <LawFirmsPage pageKey="practicePantherCustomFieldCleanup" />} />
      <Route path="/law-firms/practicepanther-setup-checklist" component={() => <LawFirmsPage pageKey="practicePantherSetupChecklist" />} />
      <Route path="/law-firms/practicepanther-setup-checklist/" component={() => <LawFirmsPage pageKey="practicePantherSetupChecklist" />} />
      <Route path="/law-firms/clio-setup-help" component={() => <LawFirmsPage pageKey="clio" />} />
      <Route path="/law-firms/clio-setup-help/" component={() => <LawFirmsPage pageKey="clio" />} />
      <Route path="/law-firms/mycase-setup-help" component={() => <LawFirmsPage pageKey="mycase" />} />
      <Route path="/law-firms/mycase-setup-help/" component={() => <LawFirmsPage pageKey="mycase" />} />
      <Route path="/law-firms/lawmatics-setup-help" component={() => <LawFirmsPage pageKey="lawmatics" />} />
      <Route path="/law-firms/lawmatics-setup-help/" component={() => <LawFirmsPage pageKey="lawmatics" />} />
      <Route path="/law-firms/smokeball-setup-help" component={() => <LawFirmsPage pageKey="smokeball" />} />
      <Route path="/law-firms/smokeball-setup-help/" component={() => <LawFirmsPage pageKey="smokeball" />} />
      <Route path="/law-firms/actionstep-setup-help" component={() => <LawFirmsPage pageKey="actionstep" />} />
      <Route path="/law-firms/actionstep-setup-help/" component={() => <LawFirmsPage pageKey="actionstep" />} />
      <Route path="/law-firms/best-practice-management-software-setup-help" component={() => <LawFirmsPage pageKey="bestPmsSetup" />} />
      <Route path="/law-firms/best-practice-management-software-setup-help/" component={() => <LawFirmsPage pageKey="bestPmsSetup" />} />
      <Route path="/law-firms/law-firm-software-implementation-consultant" component={() => <LawFirmsPage pageKey="softwareImplementation" />} />
      <Route path="/law-firms/law-firm-software-implementation-consultant/" component={() => <LawFirmsPage pageKey="softwareImplementation" />} />
      <Route path="/law-firms/practice-management-software-cleanup" component={() => <LawFirmsPage pageKey="pmsCleanup" />} />
      <Route path="/law-firms/practice-management-software-cleanup/" component={() => <LawFirmsPage pageKey="pmsCleanup" />} />
      <Route path="/law-firms/legal-crm-setup-help" component={() => <LawFirmsPage pageKey="legalCrmSetup" />} />
      <Route path="/law-firms/legal-crm-setup-help/" component={() => <LawFirmsPage pageKey="legalCrmSetup" />} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
