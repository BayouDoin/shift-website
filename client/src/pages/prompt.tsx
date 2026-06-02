import { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const initialForm = {
  name: "",
  businessName: "",
  email: "",
};

type FormState = typeof initialForm;
type SubmitStatus = "idle" | "submitting" | "success" | "error";

export default function Prompt() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [error, setError] = useState("");

  const updateField = (field: keyof FormState) => (event: ChangeEvent<HTMLInputElement>) => {
    setForm((current) => ({ ...current, [field]: event.target.value }));
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setError("");

    try {
      const response = await fetch("/api/qr-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.message || "The form could not be sent.");
      }

      setStatus("success");
      setForm(initialForm);
    } catch (submitError) {
      setStatus("error");
      setError(submitError instanceof Error ? submitError.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <main className="min-h-screen bg-black text-foreground">
      <section className="mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center px-6 py-12 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
              SHIFT Systems
            </p>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-[-0.03em] text-foreground sm:text-5xl lg:text-6xl">
              Get the practical automation prompt.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              Drop your info below and I’ll send it directly to your email.
            </p>
            <div className="mt-8 rounded-2xl border border-border bg-card/70 p-5 text-sm leading-6 text-muted-foreground">
              <p className="font-semibold text-foreground">What you’ll get</p>
              <p className="mt-2">
                A simple prompt you can use to find the manual work hiding inside your business and decide what is worth fixing first.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card p-6 shadow-2xl shadow-black/30 sm:p-8">
            {status === "success" ? (
              <div className="py-8 text-center">
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                  ✓
                </div>
                <h2 className="text-3xl font-bold tracking-[-0.02em] text-foreground">Thank you.</h2>
                <p className="mt-4 text-base leading-7 text-muted-foreground">
                  We’ll send the prompt directly to your email.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Label htmlFor="name" className="mb-2 block font-semibold text-foreground">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={form.name}
                    onChange={updateField("name")}
                    required
                    placeholder="Your name"
                    data-testid="input-prompt-name"
                  />
                </div>

                <div>
                  <Label htmlFor="businessName" className="mb-2 block font-semibold text-foreground">
                    Business name
                  </Label>
                  <Input
                    id="businessName"
                    name="businessName"
                    type="text"
                    autoComplete="organization"
                    value={form.businessName}
                    onChange={updateField("businessName")}
                    required
                    placeholder="Your business"
                    data-testid="input-prompt-business"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="mb-2 block font-semibold text-foreground">
                    Email address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={updateField("email")}
                    required
                    placeholder="you@company.com"
                    data-testid="input-prompt-email"
                  />
                </div>

                {status === "error" && (
                  <p className="rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive-foreground">
                    {error}
                  </p>
                )}

                <Button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full"
                  data-testid="button-prompt-submit"
                >
                  {status === "submitting" ? "Sending..." : "Send me the prompt"}
                </Button>

                <p className="text-center text-xs leading-5 text-muted-foreground">
                  No spam. Ryan at SHIFT will only use this to send the prompt and follow up if helpful.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
