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
