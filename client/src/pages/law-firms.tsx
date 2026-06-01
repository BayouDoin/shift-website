import { useEffect } from "react";
import logoImage from "@assets/Headlines_(1000_x_500_px)_1765900295959.png";

const CALENDLY_URL = "https://calendly.com/ryan-shiftsystems/30min";
const HUB_PATH = "/law-firms/";
const AUDIT_PATH = "/law-firms/book-software-setup-audit/";
const PRACTICEPANTHER_PATH = "/law-firms/practicepanther-setup-help/";

type Section = {
  heading: string;
  body?: string[];
  bullets?: string[];
};

type Faq = {
  question: string;
  answer: string;
};

type RelatedLink = {
  label: string;
  href: string;
};

type PageData = {
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  intro: string;
  support: string;
  primaryHref: string;
  primaryText: string;
  secondaryHref?: string;
  secondaryText?: string;
  sections: Section[];
  faqs: Faq[];
  related?: RelatedLink[];
};

type PageKey = "hub" | "audit" | "practicepanther";

const sharedFaqs: Faq[] = [
  {
    question: "Do we need to know exactly what is broken before booking?",
    answer:
      "No. If you know the process feels messy but cannot tell whether the problem is intake, follow-up, documents, handoffs, or the software setup itself, the audit is a good fit.",
  },
  {
    question: "Do we need to use PracticePanther?",
    answer:
      "No. PracticePanther is a strong fit, but the audit can also help firms using Clio, MyCase, Smokeball, Filevine, CosmoLex, Rocket Matter, Lawcus, or similar tools.",
  },
  {
    question: "Can this help if we are thinking about switching software?",
    answer:
      "Yes. Many firms consider switching tools before they understand what is actually broken. The audit can help identify whether the issue is the software, the setup, or the process around it.",
  },
  {
    question: "Who should join the call?",
    answer:
      "The best person is whoever understands where the work gets stuck. That may be the owner, office manager, admin lead, paralegal, or operations-minded attorney.",
  },
];

const pages: Record<PageKey, PageData> = {
  audit: {
    title: "Free Law Firm Software Setup Audit | SHIFT Systems",
    description:
      "Book a free 30-minute audit for your law firm software setup. SHIFT helps small firms find what is breaking across intake, follow-up, documents, reminders, and staff handoffs.",
    eyebrow: "For small law firms using practice management software",
    h1: "Free 30-Minute Law Firm Software Setup Audit",
    intro:
      "For small law firms using PracticePanther, Clio, MyCase, Smokeball, or similar software, but still dealing with messy intake, missed follow-up, manual documents, or unclear staff handoffs.",
    support:
      "In 30 minutes, we look at how your current setup works, where the process is breaking, and what should be cleaned up first.",
    primaryHref: CALENDLY_URL,
    primaryText: "Book the audit",
    secondaryHref: HUB_PATH,
    secondaryText: "See law firm setup help",
    sections: [
      {
        heading: "Who this is for",
        body: [
          "This audit is for small law firms that already have law firm software in place, but the day-to-day work still feels harder than it should.",
        ],
        bullets: [
          "New leads or clients fall through the cracks after intake.",
          "Follow-up depends on someone remembering the next step.",
          "Staff are not always sure what happens after a form is submitted.",
          "Document prep still takes too much manual work.",
          "Matter details live in too many places.",
          "Reminders and tasks are inconsistent.",
          "The team works around the software instead of through it.",
          "You are wondering if the software is the problem, or if the setup just needs cleanup.",
        ],
      },
      {
        heading: "What we review during the audit",
        body: ["We use the call to understand how work currently moves through your firm."],
        bullets: [
          "The software your firm uses today.",
          "How new leads and clients come in.",
          "What happens after an intake form or phone call.",
          "Where follow-up gets missed or delayed.",
          "How information moves into documents.",
          "How tasks, reminders, and handoffs are handled.",
          "Which parts of the setup are creating extra admin work.",
          "What should be cleaned up first.",
        ],
      },
      {
        heading: "What you leave with",
        body: [
          "After the audit, you should have a clearer answer to three questions: where the current setup is breaking, what is causing the most wasted time or missed follow-up, and what should be cleaned up first.",
          "You will not leave with a generic software lecture. You will leave with a plain-English view of what is making the work harder than it needs to be.",
        ],
      },
      {
        heading: "Common places law firm software breaks",
        bullets: [
          "Intake: the firm has forms, phone calls, or online leads, but the next step is not always clear.",
          "Follow-up: someone has to remember who needs a call, message, document, or next step.",
          "Documents: the same information gets copied, pasted, checked, and re-entered across too many places.",
          "Staff handoffs: the person receiving the matter does not always know what has happened, what is missing, or what comes next.",
          "Reminders and tasks: the software has task features, but the firm does not trust them enough to rely on them.",
        ],
      },
      {
        heading: "Why SHIFT",
        body: [
          "SHIFT helps small businesses clean up the daily systems that keep work moving.",
          "For law firms, that usually means making intake, follow-up, documents, reminders, and handoffs work better inside the tools the firm already uses.",
          "We have supported small law firm work around document prep, estate-planning intake, PracticePanther setup, and cleaner handoffs from intake to document preparation.",
        ],
      },
      {
        heading: "What this is not",
        bullets: [
          "This is not a call where you need to already know the exact fix.",
          "This is not a software demo.",
          "This is not a push to switch tools.",
          "It is a short audit to understand what is breaking and what should be cleaned up first.",
        ],
      },
    ],
    related: [
      { label: "Law Firm Software Setup Help", href: HUB_PATH },
      { label: "PracticePanther Setup Help", href: PRACTICEPANTHER_PATH },
    ],
    faqs: sharedFaqs,
  },
  hub: {
    title: "Law Firm Software Setup Help | SHIFT Systems",
    description:
      "SHIFT helps small law firms clean up practice management software setup, intake, follow-up, documents, reminders, and staff handoffs.",
    eyebrow: "Practice management software help for small law firms",
    h1: "Law Firm Software Setup Help",
    intro:
      "For small firms that have PracticePanther, Clio, MyCase, Smokeball, or similar software, but still do too much work manually.",
    support:
      "SHIFT helps law firms clean up the setup around intake, follow-up, documents, reminders, and staff handoffs so the software actually supports the way the firm works.",
    primaryHref: AUDIT_PATH,
    primaryText: "Book the audit",
    secondaryHref: PRACTICEPANTHER_PATH,
    secondaryText: "PracticePanther setup help",
    sections: [
      {
        heading: "The software may not be the real problem",
        body: [
          "Many small firms already have decent software. The problem is that the setup does not match the way work actually moves through the firm.",
          "When that happens, the firm does not always need a new tool. It may need a cleaner setup and a more reliable path from first contact to completed work.",
        ],
        bullets: [
          "Someone tracks follow-up manually.",
          "Matter details get copied between too many places.",
          "Intake does not clearly trigger the next step.",
          "Staff have to ask what happened before they can move forward.",
          "Documents still require repeated manual entry.",
          "Tasks and reminders are inconsistent.",
        ],
      },
      {
        heading: "What SHIFT helps clean up",
        bullets: [
          "Intake: make it clearer what happens when a new lead, client, or matter comes in.",
          "Follow-up: reduce the follow-up that depends on memory, sticky notes, or one person checking manually.",
          "Documents: help information collected during intake support document preparation instead of repeated manual work.",
          "Reminders and tasks: make next steps easier for the team to see, trust, and use.",
          "Staff handoffs: make it clearer what has happened, what is missing, and what needs to happen next.",
          "Software cleanup: review confusing setup decisions, duplicate work, unclear fields, and process gaps.",
        ],
      },
      {
        heading: "Common systems we can review",
        body: [
          "The audit is not about forcing your firm into a new system. It is about understanding what is breaking in the setup you already have.",
        ],
        bullets: [
          "PracticePanther",
          "Clio",
          "MyCase",
          "Smokeball",
          "Filevine",
          "CosmoLex",
          "Rocket Matter",
          "Lawcus",
          "Other law firm practice management tools",
        ],
      },
      {
        heading: "Start with a setup audit",
        body: [
          "The first step is a Free 30-Minute Law Firm Software Setup Audit.",
          "On the call, we review where work is getting stuck and identify the highest-priority cleanup areas.",
        ],
      },
    ],
    related: [
      { label: "Free 30-Minute Law Firm Software Setup Audit", href: AUDIT_PATH },
      { label: "PracticePanther Setup Help", href: PRACTICEPANTHER_PATH },
    ],
    faqs: [
      {
        question: "What does law firm software setup help mean?",
        answer:
          "It means reviewing how the firm’s software supports daily work: intake, follow-up, documents, reminders, tasks, and staff handoffs. The goal is to make the system easier for the team to rely on.",
      },
      {
        question: "Do you only help with one software system?",
        answer:
          "No. PracticePanther is the first strong fit, but the same cleanup problems show up across many law firm systems.",
      },
      {
        question: "Can this help if our staff already use the software every day?",
        answer:
          "Yes. Daily use does not always mean the setup is clean. If the team still uses workarounds, manual follow-up, repeated data entry, or unclear handoffs, there may be cleanup opportunities.",
      },
      {
        question: "Should we switch software first?",
        answer:
          "Not necessarily. Before switching, it is worth understanding whether the current pain is caused by the tool itself or by the setup around it.",
      },
      {
        question: "What is the first step?",
        answer:
          "Book the free audit. We will use the call to understand what is breaking and what should be cleaned up first.",
      },
    ],
  },
  practicepanther: {
    title: "PracticePanther Setup Help for Small Law Firms | SHIFT Systems",
    description:
      "Get PracticePanther setup help for intake, follow-up, documents, reminders, tasks, and staff handoffs. Book a free law firm software setup audit with SHIFT.",
    eyebrow: "PracticePanther setup help for small law firms",
    h1: "PracticePanther Setup Help for Small Law Firms",
    intro:
      "PracticePanther can be a strong tool for small law firms, but only if the setup matches how the firm actually works.",
    support:
      "If your firm uses PracticePanther but still struggles with messy intake, missed follow-up, manual documents, or unclear staff handoffs, SHIFT can help you identify what needs to be cleaned up first.",
    primaryHref: AUDIT_PATH,
    primaryText: "Book the audit",
    secondaryHref: HUB_PATH,
    secondaryText: "See law firm setup help",
    sections: [
      {
        heading: "When PracticePanther is in place, but the work is still messy",
        body: [
          "A firm can have PracticePanther and still feel disorganized. That usually happens when the setup does not clearly support the real flow of work.",
          "If any part of that path is unclear, the team starts working around the system.",
        ],
        bullets: [
          "A lead or client comes in.",
          "Information is collected.",
          "A matter gets created or updated.",
          "Staff need to know what happened.",
          "Follow-up needs to happen at the right time.",
          "Documents need the right information.",
          "Tasks and reminders need to guide the next step.",
        ],
      },
      {
        heading: "Common PracticePanther setup problems",
        bullets: [
          "Intake information does not cleanly support the next step.",
          "Staff are not sure what to do after a new matter is created.",
          "Custom fields are confusing, missing, or ignored.",
          "Follow-up depends too much on memory.",
          "Document preparation still requires too much copying and pasting.",
          "Tasks and reminders are not trusted.",
          "The firm has different people using PracticePanther in different ways.",
          "The owner cannot tell whether the problem is the software, the staff process, or the setup.",
        ],
      },
      {
        heading: "What SHIFT reviews",
        body: ["During the audit, we look at how PracticePanther fits into the firm’s daily work."],
        bullets: [
          "How new leads and clients are handled.",
          "What happens after intake.",
          "How matters are organized.",
          "Whether fields and information are useful to the team.",
          "Where follow-up gets missed.",
          "Where document prep is still too manual.",
          "Whether staff handoffs are clear.",
          "Which cleanup would make the biggest difference first.",
        ],
      },
      {
        heading: "PracticePanther should make the next step easier",
        body: [
          "The goal is not to add more complexity.",
          "The goal is to make PracticePanther easier to rely on, so the team can see what happened, what is missing, and what needs to happen next.",
          "That may mean cleaning up intake, fields, reminders, tasks, document preparation, handoffs, or the way the team uses the system day to day.",
        ],
      },
      {
        heading: "Start with a setup audit",
        body: [
          "If your firm uses PracticePanther but the process still feels messy, start with the Free 30-Minute Law Firm Software Setup Audit.",
          "We will talk through how the current setup works, where it is breaking, and what should be cleaned up first.",
        ],
      },
    ],
    related: [
      { label: "Free 30-Minute Law Firm Software Setup Audit", href: AUDIT_PATH },
      { label: "Law Firm Software Setup Help", href: HUB_PATH },
    ],
    faqs: [
      {
        question: "Can you help if our PracticePanther account is already set up?",
        answer:
          "Yes. Many firms need help after the first setup because real daily work reveals gaps that were not obvious at the beginning.",
      },
      {
        question: "Do we need to rebuild everything?",
        answer:
          "Not always. The audit is designed to identify the first cleanup priorities before assuming a full rebuild is needed.",
      },
      {
        question: "Can this help with intake and document prep?",
        answer:
          "Yes. Intake and document prep are common areas where PracticePanther setup affects daily admin work.",
      },
      {
        question: "Can this help if our staff use PracticePanther inconsistently?",
        answer:
          "Yes. Inconsistent use often points to a setup or handoff problem. The audit helps identify where the system does not match how the team actually works.",
      },
      {
        question: "What is the first step?",
        answer:
          "Book the audit. Bring the parts of PracticePanther that feel confusing, unreliable, or too manual.",
      },
    ],
  },
};

function setMeta(name: string, content: string) {
  let meta = document.querySelector(`meta[name="${name}"]`);
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("name", name);
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", content);
}

function SiteHeader() {
  return (
    <header className="border-b border-border bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/80 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between gap-5">
        <a href="/" aria-label="SHIFT home" className="flex items-center">
          <img src={logoImage} alt="SHIFT" className="h-16 w-auto" />
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          <a href={HUB_PATH} className="hover:text-foreground transition-colors">
            Law firm help
          </a>
          <a href={PRACTICEPANTHER_PATH} className="hover:text-foreground transition-colors">
            PracticePanther
          </a>
          <a href={AUDIT_PATH} className="hover:text-foreground transition-colors">
            Setup audit
          </a>
        </nav>
        <a
          href={CALENDLY_URL}
          className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
        >
          Book the audit
        </a>
      </div>
    </header>
  );
}

function FinalCta({ page }: { page: PageData }) {
  return (
    <section className="max-w-6xl mx-auto px-6 lg:px-8 pb-20">
      <div className="rounded-3xl bg-primary text-primary-foreground p-8 md:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] opacity-80 mb-4">Free audit</p>
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-5">Book your free 30-minute audit</h2>
        <p className="text-lg md:text-xl opacity-90 max-w-3xl mb-8">
          Tell us what software your firm uses and where the process feels messy. We will use the call to look at what is breaking and what should be cleaned up first.
        </p>
        <a
          href={page.primaryHref}
          className="inline-flex items-center justify-center rounded-md bg-background px-6 py-3 text-sm font-semibold text-foreground transition hover:opacity-90"
        >
          Book the audit
        </a>
      </div>
    </section>
  );
}

export default function LawFirmsPage({ pageKey }: { pageKey: PageKey }) {
  const page = pages[pageKey];

  useEffect(() => {
    document.title = page.title;
    setMeta("description", page.description);
  }, [page.title, page.description]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <section className="border-b border-border bg-black">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 md:py-28 grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.26em] text-primary font-semibold mb-5">{page.eyebrow}</p>
              <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight mb-7">{page.h1}</h1>
              <div className="space-y-5 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
                <p>{page.intro}</p>
                <p>{page.support}</p>
              </div>
              <div className="mt-9 flex flex-col sm:flex-row gap-4">
                <a
                  href={page.primaryHref}
                  className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
                >
                  {page.primaryText}
                </a>
                {page.secondaryHref && page.secondaryText && (
                  <a
                    href={page.secondaryHref}
                    className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-muted"
                  >
                    {page.secondaryText}
                  </a>
                )}
              </div>
              {pageKey === "audit" && <p className="mt-4 text-sm text-muted-foreground">No prep needed. Bring the messy parts.</p>}
            </div>
            <div className="rounded-3xl border border-border bg-card p-6 md:p-8 shadow-2xl">
              <p className="text-sm text-muted-foreground mb-3">The simple path</p>
              <div className="space-y-4">
                {["Find the setup gap", "Choose the first cleanup priority", "Make the work easier for staff"].map((item, index) => (
                  <div key={item} className="flex gap-4 items-start rounded-2xl bg-muted/40 p-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                      {index + 1}
                    </span>
                    <span className="text-base font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 lg:px-8 py-16 md:py-20 space-y-10">
          {page.sections.map((section) => (
            <article key={section.heading} className="rounded-3xl border border-border bg-card p-6 md:p-9">
              <h2 className="text-2xl md:text-3xl font-semibold mb-5">{section.heading}</h2>
              {section.body && (
                <div className="space-y-4 text-lg leading-relaxed text-muted-foreground mb-6">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              )}
              {section.bullets && (
                <ul className="grid gap-3 text-muted-foreground">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 leading-relaxed">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </section>

        {page.related && (
          <section className="max-w-6xl mx-auto px-6 lg:px-8 pb-12">
            <div className="rounded-3xl border border-border bg-card p-6 md:p-9">
              <h2 className="text-2xl md:text-3xl font-semibold mb-5">Related help</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {page.related.map((link) => (
                  <a key={link.href} href={link.href} className="rounded-2xl border border-border p-5 transition hover:bg-muted/50">
                    <span className="font-semibold">{link.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="max-w-6xl mx-auto px-6 lg:px-8 pb-16">
          <div className="rounded-3xl border border-border bg-card p-6 md:p-9">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">FAQ</h2>
            <div className="divide-y divide-border">
              {page.faqs.map((faq) => (
                <div key={faq.question} className="py-5 first:pt-0 last:pb-0">
                  <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FinalCta page={page} />
      </main>
      <footer className="border-t border-border bg-black py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row gap-4 items-center justify-between text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} SHIFT Systems. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="/" className="hover:text-foreground transition-colors">Home</a>
            <a href={AUDIT_PATH} className="hover:text-foreground transition-colors">Book the audit</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
