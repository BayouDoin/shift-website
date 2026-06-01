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
