import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { apiRequest } from "@/lib/queryClient";

interface BookingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface ContactInfo {
  name: string;
  email: string;
}

const CALENDLY_URL = "https://calendly.com/ryan-shiftsystems/30min";

export default function BookingModal({ open, onOpenChange }: BookingModalProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [contactInfo, setContactInfo] = useState<ContactInfo>({ name: "", email: "" });
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmitStep1 = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { name?: string; email?: string } = {};

    if (!contactInfo.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!contactInfo.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(contactInfo.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      // Submit lead to backend which sends email notification
      await apiRequest("POST", "/api/leads", {
        name: contactInfo.name,
        email: contactInfo.email,
      });
      setStep(2);
    } catch (error) {
      console.error("Error submitting lead:", error);
      // Still proceed to step 2 even if email fails
      setStep(2);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    onOpenChange(false);
    setTimeout(() => {
      setStep(1);
      setContactInfo({ name: "", email: "" });
      setErrors({});
    }, 300);
  };

  const calendlyUrlWithPrefill = `${CALENDLY_URL}?name=${encodeURIComponent(contactInfo.name)}&email=${encodeURIComponent(contactInfo.email)}`;

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        {step === 1 ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl font-semibold">
                Book Your AI Strategy Call
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmitStep1} className="space-y-6 mt-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={contactInfo.name}
                  onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
                  data-testid="input-name"
                />
                {errors.name && (
                  <p className="text-sm text-destructive">{errors.name}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  value={contactInfo.email}
                  onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                  data-testid="input-email"
                />
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email}</p>
                )}
              </div>
              <Button 
                type="submit" 
                className="w-full" 
                data-testid="button-continue"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Continue"}
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                Prefer email? Start here and we'll follow up if a call isn't the right next step.
              </p>
            </form>
          </>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl font-semibold">
                Schedule Your AI Strategy Call
              </DialogTitle>
              <p className="text-sm text-muted-foreground mt-2">
                You'll leave with clarity on what AI should handle and what to do next.
              </p>
            </DialogHeader>
            <div className="mt-4">
              <div className="rounded-md overflow-hidden bg-muted/30 min-h-[500px]">
                <iframe
                  src={calendlyUrlWithPrefill}
                  width="100%"
                  height="500"
                  frameBorder="0"
                  title="Schedule a call"
                  data-testid="calendly-embed"
                />
              </div>
              <p className="text-xs text-muted-foreground text-center mt-4">
                If now isn't a good time, we'll follow up by email.
              </p>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
