import { useEffect } from "react";
import logoImage from "@assets/Headlines_(1000_x_500_px)_1765900295959.png";

const CALENDLY_URL = "https://calendly.com/ryan-shiftsystems/30min";
const HUB_PATH = "/law-firms/";
const AUDIT_PATH = "/law-firms/book-software-setup-audit/";
const PRACTICEPANTHER_PATH = "/law-firms/practicepanther-setup-help/";
const INTAKE_FOLLOW_UP_PATH = "/law-firms/intake-follow-up-cleanup/";
const INTAKE_AUTOMATION_PATH = "/law-firms/intake-automation/";
const DOCUMENT_AUTOMATION_PATH = "/law-firms/document-automation/";
const WORKFLOW_CLEANUP_PATH = "/law-firms/workflow-cleanup/";
const CLIENT_FOLLOW_UP_PATH = "/law-firms/client-follow-up-system/";
const PP_WORKFLOW_CLEANUP_PATH = "/law-firms/practicepanther-workflow-cleanup/";
const PP_INTAKE_SETUP_PATH = "/law-firms/practicepanther-intake-setup/";
const PP_DOCUMENT_AUTOMATION_PATH = "/law-firms/practicepanther-document-automation/";
const PP_CUSTOM_FIELD_CLEANUP_PATH = "/law-firms/practicepanther-custom-field-cleanup/";
const PP_SETUP_CHECKLIST_PATH = "/law-firms/practicepanther-setup-checklist/";
const CLIO_PATH = "/law-firms/clio-setup-help/";
const MYCASE_PATH = "/law-firms/mycase-setup-help/";
const LAWMATICS_PATH = "/law-firms/lawmatics-setup-help/";
const SMOKEBALL_PATH = "/law-firms/smokeball-setup-help/";
const ACTIONSTEP_PATH = "/law-firms/actionstep-setup-help/";
const BEST_PMS_SETUP_PATH = "/law-firms/best-practice-management-software-setup-help/";
const SOFTWARE_IMPLEMENTATION_PATH = "/law-firms/law-firm-software-implementation-consultant/";
const PMS_CLEANUP_PATH = "/law-firms/practice-management-software-cleanup/";
const LEGAL_CRM_SETUP_PATH = "/law-firms/legal-crm-setup-help/";

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

type PageKey =
  | "hub"
  | "audit"
  | "practicepanther"
  | "intakeFollowUp"
  | "intakeAutomation"
  | "documentAutomation"
  | "workflowCleanup"
  | "clientFollowUp"
  | "practicePantherWorkflowCleanup"
  | "practicePantherIntakeSetup"
  | "practicePantherDocumentAutomation"
  | "practicePantherCustomFieldCleanup"
  | "practicePantherSetupChecklist"
  | "clio"
  | "mycase"
  | "lawmatics"
  | "smokeball"
  | "actionstep"
  | "bestPmsSetup"
  | "softwareImplementation"
  | "pmsCleanup"
  | "legalCrmSetup";

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

function makeSoftwareSetupPage(tool: string, toolPath: string, detail: string): PageData {
  return {
    title: `${tool} Setup Help for Small Law Firms | SHIFT Systems`,
    description: `Get ${tool} setup help for law firm intake, follow-up, documents, reminders, and staff handoffs. Book a free law firm software setup audit with SHIFT.`,
    eyebrow: `${tool} setup help for small law firms`,
    h1: `${tool} Setup Help for Small Law Firms`,
    intro: `For small law firms using ${tool}, but still relying on manual follow-up, unclear handoffs, messy matter details, or documents that take too much staff time.`,
    support: `SHIFT helps firms look at how ${tool} is being used today, where the setup is creating friction, and what should be cleaned up first. ${detail}`,
    primaryHref: AUDIT_PATH,
    primaryText: "Book the audit",
    secondaryHref: HUB_PATH,
    secondaryText: "See law firm setup help",
    sections: [
      {
        heading: `When ${tool} setup usually needs cleanup`,
        body: [
          `Most firms do not need another software lecture. They need the setup inside ${tool} to match the real path from first contact to finished work.`,
        ],
        bullets: [
          "New inquiries come in, but the next step is not always clear.",
          "Staff still track follow-up outside the system.",
          "Matter details are inconsistent, incomplete, or hard to trust.",
          "Documents still require repeated copying, checking, and re-entry.",
          "Tasks and reminders exist, but the team does not rely on them.",
          "The firm is unsure whether the problem is the software or the setup around it.",
        ],
      },
      {
        heading: "What SHIFT reviews",
        body: [
          "The audit focuses on the daily work, not abstract features. We look at where information enters the firm, where it gets stuck, and where staff have to fill gaps manually.",
        ],
        bullets: [
          "Lead and client intake flow.",
          "Matter setup and required information.",
          "Follow-up steps after calls, forms, consults, and missing documents.",
          "Task, reminder, and staff handoff points.",
          "Document preparation touchpoints.",
          "Fields or statuses that confuse the team.",
          "Small cleanup priorities that would make the work easier first.",
        ],
      },
      {
        heading: "The goal is a more reliable work path",
        body: [
          `A better ${tool} setup should make it easier for the team to see what happened, what is missing, who owns the next step, and what should happen next.`,
          "That does not always require a rebuild. Often, it starts with cleaning up the parts that create the most repeated staff work.",
        ],
      },
      {
        heading: "Good fit for the audit",
        bullets: [
          `Your firm already uses ${tool}, but the team still works around it.` ,
          "You are getting missed follow-up, duplicate work, or unclear handoffs.",
          "You want a plain-English view of what to fix first.",
          "You are considering a change, but want to know whether cleanup would solve the real problem.",
        ],
      },
    ],
    related: [
      { label: "Book the setup audit", href: AUDIT_PATH },
      { label: "Law Firm Software Setup Help", href: HUB_PATH },
      { label: "Practice Management Software Cleanup", href: PMS_CLEANUP_PATH },
      { label: "Law Firm Intake Automation", href: INTAKE_AUTOMATION_PATH },
      { label: "Law Firm Document Automation", href: DOCUMENT_AUTOMATION_PATH },
      { label: "Legal CRM Setup Help", href: LEGAL_CRM_SETUP_PATH },
    ],
    faqs: [
      {
        question: `Do you replace ${tool}?`,
        answer: "No. The audit starts by looking at whether your current setup can be cleaned up before assuming the firm needs a different tool.",
      },
      {
        question: "Do we need to prepare a diagram before the call?",
        answer: "No. Bring examples of the messy parts. The call is meant to make the first cleanup priority clearer.",
      },
      {
        question: "Can this help if staff use the software differently?",
        answer: "Yes. Inconsistent staff use is often a sign that the setup, fields, steps, or handoffs need to be clarified.",
      },
      {
        question: "What is the first step?",
        answer: "Book the audit. We will use the call to understand where the current setup is creating the most friction.",
      },
    ],
  };
}

function makeProblemPage(options: {
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  intro: string;
  support: string;
  problemHeading: string;
  bullets: string[];
}): PageData {
  return {
    title: `${options.title} | SHIFT Systems`,
    description: options.description,
    eyebrow: options.eyebrow,
    h1: options.h1,
    intro: options.intro,
    support: options.support,
    primaryHref: AUDIT_PATH,
    primaryText: "Book the audit",
    secondaryHref: HUB_PATH,
    secondaryText: "See law firm setup help",
    sections: [
      {
        heading: options.problemHeading,
        body: [
          "Small law firms often buy the right tool, then lose time because the tool is not set up around the way the firm actually works.",
        ],
        bullets: options.bullets,
      },
      {
        heading: "What the audit looks for",
        bullets: [
          "Where new leads, clients, or matters enter the firm.",
          "Where information gets copied, re-entered, or checked manually.",
          "Where follow-up depends on memory or one person watching a list.",
          "Where staff handoffs create confusion or delay.",
          "Where the current software setup does not match the real workflow.",
          "Which cleanup priority would reduce the most friction first.",
        ],
      },
      {
        heading: "Why this comes before a bigger change",
        body: [
          "Switching tools before identifying the real bottleneck can turn a messy process into a messy process inside a different system.",
          "The better first move is to understand what is actually breaking, then decide whether the answer is cleanup, configuration, automation, or a larger change later.",
        ],
      },
    ],
    related: [
      { label: "Book the setup audit", href: AUDIT_PATH },
      { label: "Practice Management Software Cleanup", href: PMS_CLEANUP_PATH },
      { label: "Clio Setup Help", href: CLIO_PATH },
      { label: "MyCase Setup Help", href: MYCASE_PATH },
      { label: "Lawmatics Setup Help", href: LAWMATICS_PATH },
      { label: "PracticePanther Setup Help", href: PRACTICEPANTHER_PATH },
    ],
    faqs: sharedFaqs,
  };
}

const pages: Record<PageKey, PageData> = {
  clio: makeSoftwareSetupPage(
    "Clio",
    CLIO_PATH,
    "For Clio firms, this usually means reviewing intake, matter setup, tasks, reminders, documents, and the handoff from lead to active work."
  ),
  mycase: makeSoftwareSetupPage(
    "MyCase",
    MYCASE_PATH,
    "For MyCase firms, this usually means reviewing intake, matter details, client communication follow-up, document touchpoints, and task clarity."
  ),
  lawmatics: makeSoftwareSetupPage(
    "Lawmatics",
    LAWMATICS_PATH,
    "For Lawmatics firms, this usually means reviewing lead intake, follow-up steps, status changes, reminders, and the handoff into active matter work."
  ),
  smokeball: makeSoftwareSetupPage(
    "Smokeball",
    SMOKEBALL_PATH,
    "For Smokeball firms, this usually means reviewing matter setup, task flow, document touchpoints, intake handoffs, and daily staff visibility."
  ),
  actionstep: makeSoftwareSetupPage(
    "Actionstep",
    ACTIONSTEP_PATH,
    "For Actionstep firms, this usually means reviewing workflow steps, matter stages, staff handoffs, document touchpoints, and follow-up visibility."
  ),
  bestPmsSetup: makeProblemPage({
    title: "Best Practice Management Software Setup Help for Small Law Firms",
    description: "Compare law firm software setup help by the work it improves: intake, follow-up, documents, reminders, staff handoffs, and practice management cleanup.",
    eyebrow: "Software setup help for small law firms",
    h1: "Best Practice Management Software Setup Help for Small Law Firms",
    intro: "The best setup help is not about memorizing every button inside a tool. It is about making the software support the way the firm actually handles clients, matters, follow-up, and documents.",
    support: "SHIFT helps small firms look at the full work path, find the setup gaps, and choose the first cleanup priority before making bigger tool decisions.",
    problemHeading: "What good setup help should actually improve",
    bullets: [
      "New inquiries have a clear next step.",
      "Matter details are captured once and used in the right places.",
      "Follow-up is visible instead of dependent on memory.",
      "Documents are supported by cleaner intake and matter data.",
      "Staff know what happened, what is missing, and who owns the next step.",
      "The firm can tell the difference between a software problem and a setup problem.",
    ],
  }),
  softwareImplementation: makeProblemPage({
    title: "Law Firm Software Implementation Consultant",
    description: "Get plain-English law firm software implementation help for intake, matter setup, follow-up, documents, reminders, and staff handoffs.",
    eyebrow: "Implementation help for small law firms",
    h1: "Law Firm Software Implementation Consultant",
    intro: "Implementation is where many firms lose momentum. The software may be purchased, but the daily process still depends on manual work, memory, and staff workarounds.",
    support: "SHIFT helps small firms turn software into a clearer operating path for intake, matters, documents, follow-up, and handoffs.",
    problemHeading: "Signs implementation is not finished yet",
    bullets: [
      "The tool is active, but staff still use outside lists to manage work.",
      "Lead and client intake does not clearly trigger the next step.",
      "Matter setup varies depending on who enters the information.",
      "Documents still require repeated manual copying.",
      "Tasks and reminders are not trusted enough to run the day.",
      "The firm has features available, but not a reliable work path.",
    ],
  }),
  pmsCleanup: makeProblemPage({
    title: "Practice Management Software Cleanup for Law Firms",
    description: "Clean up law firm practice management software setup across intake, fields, matter stages, follow-up, documents, reminders, and staff handoffs.",
    eyebrow: "Practice management software cleanup",
    h1: "Practice Management Software Cleanup for Law Firms",
    intro: "When practice management software gets messy, the team starts working around it. That creates duplicate work, missed follow-up, and unclear ownership.",
    support: "SHIFT helps firms identify which part of the setup is creating the most friction and what should be cleaned up first.",
    problemHeading: "Common cleanup areas",
    bullets: [
      "Old fields, statuses, or steps that no longer match the firm.",
      "Matter details that are incomplete or inconsistent.",
      "Tasks and reminders that are too vague to trust.",
      "Follow-up steps that live outside the system.",
      "Document preparation that depends on repeated manual entry.",
      "Staff handoffs that require extra messages to understand what happened.",
    ],
  }),
  legalCrmSetup: makeProblemPage({
    title: "Legal CRM Setup Help",
    description: "Get legal CRM setup help for law firm intake, follow-up, lead tracking, reminders, handoffs, and cleaner client communication steps.",
    eyebrow: "Legal CRM setup help",
    h1: "Legal CRM Setup Help",
    intro: "A legal CRM should make it easier to see who needs follow-up, what was promised, what is missing, and what should happen next. Many firms still have that work scattered across memory, inboxes, and manual lists.",
    support: "SHIFT helps small firms review the lead and client path, then identify the setup gaps that create missed follow-up or extra admin work.",
    problemHeading: "Where legal CRM setup breaks down",
    bullets: [
      "New leads come in without a clear owner or next step.",
      "Consult follow-up depends on manual reminders.",
      "Statuses do not reflect what is really happening.",
      "Staff cannot quickly tell what was sent, received, or promised.",
      "Qualified leads and active clients are mixed together.",
      "The handoff from lead tracking to matter work is unclear.",
    ],
  }),
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
      { label: "Intake + Follow-Up Cleanup", href: INTAKE_FOLLOW_UP_PATH },
      { label: "Document Automation", href: DOCUMENT_AUTOMATION_PATH },
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
      { label: "Intake + Follow-Up Cleanup", href: INTAKE_FOLLOW_UP_PATH },
      { label: "Intake Automation", href: INTAKE_AUTOMATION_PATH },
      { label: "Document Automation", href: DOCUMENT_AUTOMATION_PATH },
      { label: "Workflow Cleanup", href: WORKFLOW_CLEANUP_PATH },
      { label: "Clio Setup Help", href: CLIO_PATH },
      { label: "MyCase Setup Help", href: MYCASE_PATH },
      { label: "Lawmatics Setup Help", href: LAWMATICS_PATH },
      { label: "Practice Management Software Cleanup", href: PMS_CLEANUP_PATH },
      { label: "Legal CRM Setup Help", href: LEGAL_CRM_SETUP_PATH },
      { label: "Client Follow-Up System", href: CLIENT_FOLLOW_UP_PATH },
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
      { label: "PracticePanther Workflow Cleanup", href: PP_WORKFLOW_CLEANUP_PATH },
      { label: "PracticePanther Intake Setup", href: PP_INTAKE_SETUP_PATH },
      { label: "PracticePanther Document Automation", href: PP_DOCUMENT_AUTOMATION_PATH },
      { label: "PracticePanther Custom Field Cleanup", href: PP_CUSTOM_FIELD_CLEANUP_PATH },
      { label: "PracticePanther Setup Checklist", href: PP_SETUP_CHECKLIST_PATH },
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

  intakeFollowUp: {
    title: "Law Firm Intake and Follow-Up Cleanup | SHIFT Systems",
    description:
      "Help for small law firms where intake happens, but follow-up still falls through the cracks. Book a free law firm software setup audit with SHIFT.",
    eyebrow: "Intake and follow-up cleanup for small law firms",
    h1: "Law Firm Intake and Follow-Up Cleanup",
    intro:
      "If your firm collects lead or client information but the next step still depends on memory, the intake form is not enough.",
    support:
      "SHIFT helps small law firms look at what happens after first contact, where follow-up gets missed, and what should be cleaned up first.",
    primaryHref: AUDIT_PATH,
    primaryText: "Book the audit",
    secondaryHref: HUB_PATH,
    secondaryText: "See law firm setup help",
    sections: [
      {
        heading: "Intake is not finished when the form is submitted",
        body: [
          "A clean intake path should make the next step obvious. If the firm receives a form, call, email, or referral and then someone has to remember what to do next, the process is still fragile.",
          "The problem may not be the form itself. It may be what happens after the information enters the firm.",
        ],
      },
      {
        heading: "Common signs follow-up is breaking",
        bullets: [
          "New leads wait too long before someone responds.",
          "Staff are not sure who owns the next step.",
          "Follow-up reminders live in inboxes, notes, or someone’s memory.",
          "The same client details get entered in multiple places.",
          "Matter setup does not clearly trigger tasks or document prep.",
          "The owner has to check manually to make sure nothing was missed.",
        ],
      },
      {
        heading: "What SHIFT reviews",
        bullets: [
          "How new inquiries enter the firm.",
          "What happens after an intake form, phone call, or referral.",
          "Where the first follow-up is assigned or missed.",
          "How information moves into the firm’s practice management software.",
          "Which handoffs create confusion for staff.",
          "What cleanup would reduce the most risk first.",
        ],
      },
      {
        heading: "What cleanup can include",
        body: [
          "Cleanup can mean clearer intake steps, better follow-up reminders, cleaner matter setup, fewer duplicate fields, or a simpler handoff from first contact to the person doing the work.",
          "The goal is not more busywork. The goal is a process the team can trust.",
        ],
      },
      {
        heading: "Start with a setup audit",
        body: [
          "The audit is the first step if you know leads or clients are falling through the cracks, but you are not sure whether the problem is the form, the software, the staff process, or the handoff between them.",
        ],
      },
    ],
    related: [
      { label: "Free 30-Minute Law Firm Software Setup Audit", href: AUDIT_PATH },
      { label: "Law Firm Software Setup Help", href: HUB_PATH },
      { label: "Law Firm Intake Automation", href: INTAKE_AUTOMATION_PATH },
      { label: "Client Follow-Up System", href: CLIENT_FOLLOW_UP_PATH },
    ],
    faqs: [
      {
        question: "Is this only for firms with online intake forms?",
        answer:
          "No. Intake can start with a form, phone call, email, referral, chat, or consultation request. The audit looks at what happens after the first contact.",
      },
      {
        question: "Can this help if follow-up is currently manual?",
        answer:
          "Yes. Manual follow-up is common. The question is where it creates missed steps, repeated work, or unclear ownership.",
      },
      {
        question: "Do we need to switch software?",
        answer:
          "Not necessarily. Many follow-up problems come from setup and process gaps, not the tool itself.",
      },
      {
        question: "What should we bring to the audit?",
        answer:
          "Bring the messy parts: where new leads come from, what staff do next, and where follow-up gets missed or delayed.",
      },
    ],
  },
  intakeAutomation: {
    title: "Law Firm Intake Automation | SHIFT Systems",
    description:
      "Law firm intake automation help for small firms that need cleaner intake, follow-up, matter setup, and staff handoffs.",
    eyebrow: "Intake automation for small law firms",
    h1: "Law Firm Intake Automation",
    intro:
      "Better intake should reduce admin work, not create more fields for staff to manage.",
    support:
      "SHIFT helps small law firms review intake paths and identify where automation could make first contact, follow-up, matter setup, and document prep easier to rely on.",
    primaryHref: AUDIT_PATH,
    primaryText: "Book the audit",
    secondaryHref: INTAKE_FOLLOW_UP_PATH,
    secondaryText: "Intake + follow-up cleanup",
    sections: [
      {
        heading: "Good intake makes the next step clear",
        body: [
          "A law firm intake process should do more than collect information. It should help the team know what happened, what is missing, who owns the next step, and what should happen next.",
          "If intake creates another place to check or another form to copy from, it may be adding work instead of removing it.",
        ],
      },
      {
        heading: "Common intake automation problems",
        bullets: [
          "Forms collect information, but staff still re-enter it manually.",
          "The firm gets leads from several places and tracks them inconsistently.",
          "No one knows whether a lead has been contacted yet.",
          "Matter setup starts before the right details are collected.",
          "Documents still require repeated copying and pasting.",
          "The intake path is different depending on who handles it.",
        ],
      },
      {
        heading: "What a cleaner intake path should do",
        bullets: [
          "Capture the right information without making the form feel like homework.",
          "Make the next step visible to the right person.",
          "Reduce repeated data entry.",
          "Support matter setup, follow-up, and document prep.",
          "Make missing information easier to spot.",
          "Fit the way the firm actually works.",
        ],
      },
      {
        heading: "What SHIFT can inspect",
        body: [
          "During the audit, we look at how intake starts, where information goes, who handles the next step, and where the setup creates extra admin work.",
          "The goal is to identify the first cleanup priority before adding more automation.",
        ],
      },
    ],
    related: [
      { label: "Free 30-Minute Law Firm Software Setup Audit", href: AUDIT_PATH },
      { label: "Intake + Follow-Up Cleanup", href: INTAKE_FOLLOW_UP_PATH },
      { label: "Document Automation", href: DOCUMENT_AUTOMATION_PATH },
    ],
    faqs: [
      {
        question: "Should intake automation replace staff judgment?",
        answer:
          "No. It should remove avoidable admin work and make the next step clearer, while still giving staff room to use judgment where it matters.",
      },
      {
        question: "Can this work with the software we already use?",
        answer:
          "Often, yes. The audit starts with your current tools and process before assuming anything needs to be replaced.",
      },
      {
        question: "What if our intake form is already built?",
        answer:
          "That can still be useful. The bigger question is whether the information supports follow-up, matter setup, and document prep after the form is submitted.",
      },
      {
        question: "What is the first step?",
        answer:
          "Book the audit so we can review where intake creates friction and what should be cleaned up first.",
      },
    ],
  },
  documentAutomation: {
    title: "Law Firm Document Automation | SHIFT Systems",
    description:
      "Law firm document automation help for small firms that want cleaner intake data, less manual document prep, and fewer repeated admin steps.",
    eyebrow: "Document automation for small law firms",
    h1: "Law Firm Document Automation",
    intro:
      "Document automation works best when intake and matter details are clean before the document is created.",
    support:
      "SHIFT helps small law firms review where document prep is too manual and what setup issues are causing repeated copying, checking, and re-entry.",
    primaryHref: AUDIT_PATH,
    primaryText: "Book the audit",
    secondaryHref: INTAKE_AUTOMATION_PATH,
    secondaryText: "Intake automation help",
    sections: [
      {
        heading: "Document automation starts before the document",
        body: [
          "If the right information is not collected cleanly during intake or matter setup, document automation becomes fragile.",
          "The firm may still need someone to copy, paste, check, retype, and fix details before a document is ready.",
        ],
      },
      {
        heading: "Common document prep symptoms",
        bullets: [
          "The same information is entered into forms, matters, and documents separately.",
          "Staff copy and paste from emails, notes, or old files.",
          "Documents are delayed because required details are missing.",
          "Templates exist, but they are hard to trust.",
          "Matter information is stored inconsistently.",
          "The firm has to check documents manually because the setup is unreliable.",
        ],
      },
      {
        heading: "What SHIFT can inspect",
        bullets: [
          "Where document details first enter the firm.",
          "Which fields or answers are needed for common documents.",
          "Where information gets copied or re-entered.",
          "How intake and matter setup support document prep.",
          "Which templates or handoffs create the most friction.",
          "What cleanup should happen before deeper automation.",
        ],
      },
      {
        heading: "The first win is usually cleaner data flow",
        body: [
          "The best first step may not be a bigger document system. It may be cleaning up how information moves from intake to matter setup to document preparation.",
          "That is what the audit is designed to clarify.",
        ],
      },
    ],
    related: [
      { label: "Free 30-Minute Law Firm Software Setup Audit", href: AUDIT_PATH },
      { label: "Law Firm Intake Automation", href: INTAKE_AUTOMATION_PATH },
      { label: "Workflow Cleanup", href: WORKFLOW_CLEANUP_PATH },
    ],
    faqs: [
      {
        question: "Can this help if we already have templates?",
        answer:
          "Yes. Templates are only one piece. The audit looks at whether the information feeding those templates is clean and reliable.",
      },
      {
        question: "Do we need to automate every document?",
        answer:
          "No. The better first move is usually finding the documents or steps that create the most repeated admin work.",
      },
      {
        question: "Can this help with intake data?",
        answer:
          "Yes. Intake and matter data often decide whether document automation is useful or fragile.",
      },
      {
        question: "What is the first step?",
        answer:
          "Book the audit and bring the document prep steps that feel most repetitive or unreliable.",
      },
    ],
  },
  workflowCleanup: {
    title: "Law Firm Workflow Cleanup | SHIFT Systems",
    description:
      "Law firm workflow cleanup help for small firms with messy intake, follow-up, documents, reminders, tasks, or staff handoffs.",
    eyebrow: "Workflow cleanup for small law firms",
    h1: "Law Firm Workflow Cleanup",
    intro:
      "The software is not broken just because the workflow is messy.",
    support:
      "SHIFT helps small firms look at how work moves through the firm and identify where setup, handoffs, reminders, or manual steps are creating friction.",
    primaryHref: AUDIT_PATH,
    primaryText: "Book the audit",
    secondaryHref: HUB_PATH,
    secondaryText: "See law firm setup help",
    sections: [
      {
        heading: "Messy workflow usually has a few repeat causes",
        body: [
          "When daily work feels scattered, it is tempting to blame the software. Sometimes the tool is not the real issue. The problem may be unclear ownership, inconsistent setup, weak handoffs, or steps that still live outside the system.",
        ],
      },
      {
        heading: "Where law firm workflows usually break",
        bullets: [
          "New matters start without a clear next step.",
          "Staff use different paths for the same type of work.",
          "Follow-up is tracked manually.",
          "Matter details live in too many places.",
          "Documents depend on repeated copying and checking.",
          "Tasks and reminders are not trusted.",
          "The owner has to inspect work manually to feel safe.",
        ],
      },
      {
        heading: "What the audit reviews",
        bullets: [
          "How work enters the firm.",
          "How the right person knows what to do next.",
          "Where reminders, tasks, or follow-up break down.",
          "How information moves between intake, matters, and documents.",
          "Which handoffs create the most confusion.",
          "What should be cleaned up first.",
        ],
      },
      {
        heading: "The goal is a workflow staff can actually use",
        body: [
          "Workflow cleanup should make the day easier for the people doing the work. If the setup adds steps, creates confusion, or requires constant checking, it is not clean enough yet.",
        ],
      },
    ],
    related: [
      { label: "Free 30-Minute Law Firm Software Setup Audit", href: AUDIT_PATH },
      { label: "Intake + Follow-Up Cleanup", href: INTAKE_FOLLOW_UP_PATH },
      { label: "Client Follow-Up System", href: CLIENT_FOLLOW_UP_PATH },
      { label: "Document Automation", href: DOCUMENT_AUTOMATION_PATH },
    ],
    faqs: [
      {
        question: "Is workflow cleanup the same as switching software?",
        answer:
          "No. Workflow cleanup starts by reviewing how the current setup supports daily work before assuming a new tool is needed.",
      },
      {
        question: "Can this help if the team has workarounds?",
        answer:
          "Yes. Workarounds are often the clearest sign that the setup does not match how the firm actually works.",
      },
      {
        question: "What if we do not know where the problem starts?",
        answer:
          "That is a good reason to book the audit. The call is meant to help identify the first cleanup priority.",
      },
      {
        question: "What should we bring to the audit?",
        answer:
          "Bring the parts of the day that feel messy: intake, follow-up, documents, reminders, handoffs, or anything staff do outside the system.",
      },
    ],
  },
  clientFollowUp: {
    title: "Law Firm Client Follow-Up System | SHIFT Systems",
    description:
      "Help for small law firms that need cleaner client follow-up, lead follow-up, reminders, and staff handoffs inside their current software setup.",
    eyebrow: "Client follow-up systems for small law firms",
    h1: "Law Firm Client Follow-Up System",
    intro:
      "Follow-up should not live in someone’s head.",
    support:
      "SHIFT helps small law firms review where client or lead follow-up is getting missed and what setup changes could make the next step easier to see and trust.",
    primaryHref: AUDIT_PATH,
    primaryText: "Book the audit",
    secondaryHref: INTAKE_FOLLOW_UP_PATH,
    secondaryText: "Intake + follow-up cleanup",
    sections: [
      {
        heading: "Follow-up breaks when ownership is unclear",
        body: [
          "Most firms do not miss follow-up because they do not care. It usually happens because the next step is unclear, hidden in an inbox, tracked manually, or assigned in a way the team does not trust.",
        ],
      },
      {
        heading: "Common missed follow-up points",
        bullets: [
          "A new lead submits a form and waits too long.",
          "A potential client needs another message after the first call.",
          "A current client owes information before documents can move forward.",
          "A staff member is waiting on someone else but no reminder exists.",
          "A matter changes status but the next task is not clear.",
          "The owner has to ask for updates because the system does not show them clearly.",
        ],
      },
      {
        heading: "What a cleaner follow-up system should do",
        bullets: [
          "Show who owns the next step.",
          "Make timing visible.",
          "Connect follow-up to intake, matter status, and document needs.",
          "Reduce manual checking.",
          "Make missed steps easier to catch before they become client problems.",
          "Fit the firm’s actual communication style.",
        ],
      },
      {
        heading: "What SHIFT can review",
        body: [
          "During the audit, we look at how follow-up is tracked today, where the process depends on memory, and what setup cleanup could make the next step easier for the team to trust.",
        ],
      },
    ],
    related: [
      { label: "Free 30-Minute Law Firm Software Setup Audit", href: AUDIT_PATH },
      { label: "Intake + Follow-Up Cleanup", href: INTAKE_FOLLOW_UP_PATH },
      { label: "Workflow Cleanup", href: WORKFLOW_CLEANUP_PATH },
    ],
    faqs: [
      {
        question: "Is this for lead follow-up or client follow-up?",
        answer:
          "Both can matter. The audit can look at new lead follow-up, active client follow-up, document follow-up, and internal staff reminders.",
      },
      {
        question: "Can this help if follow-up is handled by one reliable person?",
        answer:
          "Yes. If follow-up depends too much on one person, the firm is carrying hidden risk. Cleanup can make the process easier to share and trust.",
      },
      {
        question: "Do we need a new tool?",
        answer:
          "Not necessarily. The first step is reviewing the current setup and where follow-up is getting lost.",
      },
      {
        question: "What is the first step?",
        answer:
          "Book the audit and bring the follow-up moments that worry you most.",
      },
    ],
  },

  practicePantherWorkflowCleanup: {
    title: "PracticePanther Workflow Cleanup | SHIFT Systems",
    description:
      "PracticePanther workflow cleanup help for small law firms where daily work still happens outside the system.",
    eyebrow: "PracticePanther workflow cleanup",
    h1: "PracticePanther Workflow Cleanup",
    intro:
      "PracticePanther should support how the firm works, not become another place staff have to double-enter information.",
    support:
      "SHIFT helps small firms review where PracticePanther fits the real workflow, where staff work around it, and what cleanup would make the biggest difference first.",
    primaryHref: AUDIT_PATH,
    primaryText: "Book the audit",
    secondaryHref: PRACTICEPANTHER_PATH,
    secondaryText: "PracticePanther setup help",
    sections: [
      {
        heading: "When the system exists but the workflow still lives outside it",
        body: [
          "A firm can use PracticePanther every day and still rely on notes, inboxes, spreadsheets, or memory to move work forward.",
          "That usually means the workflow is not clear enough inside the setup itself.",
        ],
      },
      {
        heading: "Common workflow cleanup signs",
        bullets: [
          "Staff create matters, but the next task is not obvious.",
          "Follow-up is tracked outside PracticePanther.",
          "Matter details are entered inconsistently.",
          "People use different paths for the same kind of work.",
          "Documents depend on manual checks before anyone trusts them.",
          "The owner still has to ask where things stand.",
        ],
      },
      {
        heading: "What SHIFT reviews",
        bullets: [
          "How work enters PracticePanther.",
          "How matters, tasks, reminders, and notes are used.",
          "Where the team leaves the system to manage work manually.",
          "Which handoffs create confusion.",
          "What should be cleaned up before adding more complexity.",
        ],
      },
      {
        heading: "The goal is a setup staff can trust",
        body: [
          "Workflow cleanup should make PracticePanther easier to rely on. Staff should be able to see what happened, what is missing, and what comes next without asking around.",
        ],
      },
    ],
    related: [
      { label: "PracticePanther Setup Help", href: PRACTICEPANTHER_PATH },
      { label: "PracticePanther Intake Setup", href: PP_INTAKE_SETUP_PATH },
      { label: "PracticePanther Custom Field Cleanup", href: PP_CUSTOM_FIELD_CLEANUP_PATH },
      { label: "Free 30-Minute Law Firm Software Setup Audit", href: AUDIT_PATH },
    ],
    faqs: [
      {
        question: "Do we need to rebuild PracticePanther from scratch?",
        answer:
          "Not usually. The audit starts by finding the setup gaps that create the most daily friction.",
      },
      {
        question: "Can this help if staff already use PracticePanther?",
        answer:
          "Yes. Daily use does not always mean the workflow is clean or consistent.",
      },
      {
        question: "What if the workflow problem is staff behavior?",
        answer:
          "The audit looks at both setup and usage. Often inconsistent behavior is a sign that the system does not make the next step clear enough.",
      },
      {
        question: "What is the first step?",
        answer:
          "Book the audit and bring the places where staff leave PracticePanther to manage work manually.",
      },
    ],
  },
  practicePantherIntakeSetup: {
    title: "PracticePanther Intake Setup | SHIFT Systems",
    description:
      "PracticePanther intake setup help for small law firms that need cleaner intake, matter setup, follow-up, and document handoffs.",
    eyebrow: "PracticePanther intake setup",
    h1: "PracticePanther Intake Setup",
    intro:
      "The intake setup should make the next step obvious.",
    support:
      "SHIFT helps small firms review how intake information moves into PracticePanther, how matters get started, and where follow-up or document prep breaks after first contact.",
    primaryHref: AUDIT_PATH,
    primaryText: "Book the audit",
    secondaryHref: PP_SETUP_CHECKLIST_PATH,
    secondaryText: "View setup checklist",
    sections: [
      {
        heading: "Intake should support the work after intake",
        body: [
          "PracticePanther intake is only useful if the information helps staff move the matter forward. If intake ends with copying, guessing, or checking multiple places, the setup needs cleanup.",
        ],
      },
      {
        heading: "Common intake setup problems",
        bullets: [
          "The firm collects information but still re-enters it manually.",
          "New leads and new matters are handled inconsistently.",
          "Fields do not match what staff need later.",
          "Follow-up tasks are not clear after intake.",
          "Document prep still starts from scratch.",
          "The team is not sure what is missing before work begins.",
        ],
      },
      {
        heading: "What SHIFT reviews",
        bullets: [
          "How leads and clients enter the system.",
          "Which fields are needed and which create clutter.",
          "How intake connects to matters, tasks, reminders, and documents.",
          "Where staff still copy or re-enter information.",
          "What should be cleaned up first.",
        ],
      },
      {
        heading: "Cleaner intake usually means fewer surprises later",
        body: [
          "A better intake setup helps the team see what happened, what is missing, and what needs to happen next without relying on memory.",
        ],
      },
    ],
    related: [
      { label: "PracticePanther Setup Help", href: PRACTICEPANTHER_PATH },
      { label: "PracticePanther Workflow Cleanup", href: PP_WORKFLOW_CLEANUP_PATH },
      { label: "PracticePanther Document Automation", href: PP_DOCUMENT_AUTOMATION_PATH },
      { label: "Free 30-Minute Law Firm Software Setup Audit", href: AUDIT_PATH },
    ],
    faqs: [
      {
        question: "Can this help if we already have intake forms?",
        answer:
          "Yes. The audit looks at whether the information from those forms actually supports matter setup, follow-up, and documents.",
      },
      {
        question: "Do we need more fields?",
        answer:
          "Not always. Sometimes the better move is fewer, clearer fields that staff actually use.",
      },
      {
        question: "Can this connect to document prep?",
        answer:
          "Yes. Intake setup and document prep are closely connected because documents depend on clean information.",
      },
      {
        question: "What is the first step?",
        answer:
          "Book the audit and bring the intake steps that create the most follow-up or re-entry work.",
      },
    ],
  },
  practicePantherDocumentAutomation: {
    title: "PracticePanther Document Automation | SHIFT Systems",
    description:
      "PracticePanther document automation help for small law firms that need cleaner intake data, templates, matter details, and document handoffs.",
    eyebrow: "PracticePanther document automation",
    h1: "PracticePanther Document Automation",
    intro:
      "Document automation works best when PracticePanther has clean intake and matter data first.",
    support:
      "SHIFT helps small firms review what document prep still requires manually and what setup cleanup could make documents easier to prepare and trust.",
    primaryHref: AUDIT_PATH,
    primaryText: "Book the audit",
    secondaryHref: PP_INTAKE_SETUP_PATH,
    secondaryText: "PracticePanther intake setup",
    sections: [
      {
        heading: "The document problem often starts in intake",
        body: [
          "If PracticePanther does not have the right information in the right place, document preparation still depends on copying, pasting, checking, and fixing details by hand.",
        ],
      },
      {
        heading: "Common document automation problems",
        bullets: [
          "Templates exist, but staff do not fully trust them.",
          "Matter details are missing or stored inconsistently.",
          "The same information gets typed in several places.",
          "Documents require manual checking because the setup is fragile.",
          "Intake answers do not cleanly support document prep.",
          "Staff still build too much from old files.",
        ],
      },
      {
        heading: "What SHIFT reviews",
        bullets: [
          "Which information is needed for common documents.",
          "Where that information enters PracticePanther.",
          "How fields, matters, and templates work together.",
          "Which manual steps create the most delay.",
          "What should be cleaned up before deeper automation.",
        ],
      },
      {
        heading: "The first priority is reliability",
        body: [
          "A document process that saves a few minutes but creates doubt is not clean enough. The audit looks for the setup gaps that keep staff from trusting the output.",
        ],
      },
    ],
    related: [
      { label: "PracticePanther Setup Help", href: PRACTICEPANTHER_PATH },
      { label: "PracticePanther Intake Setup", href: PP_INTAKE_SETUP_PATH },
      { label: "PracticePanther Custom Field Cleanup", href: PP_CUSTOM_FIELD_CLEANUP_PATH },
      { label: "Free 30-Minute Law Firm Software Setup Audit", href: AUDIT_PATH },
    ],
    faqs: [
      {
        question: "Can this help if our templates already exist?",
        answer:
          "Yes. Existing templates can still fail if the fields and matter details feeding them are messy.",
      },
      {
        question: "Do we need to automate every document?",
        answer:
          "No. The audit helps identify where automation would reduce the most repeated work first.",
      },
      {
        question: "What if document prep depends on information outside PracticePanther?",
        answer:
          "That is exactly the kind of handoff the audit can review.",
      },
      {
        question: "What is the first step?",
        answer:
          "Book the audit and bring the document prep steps that still require too much copying, checking, or re-entry.",
      },
    ],
  },
  practicePantherCustomFieldCleanup: {
    title: "PracticePanther Custom Field Cleanup | SHIFT Systems",
    description:
      "PracticePanther custom field cleanup help for small law firms with confusing fields, inconsistent matter details, or staff usage problems.",
    eyebrow: "PracticePanther custom field cleanup",
    h1: "PracticePanther Custom Field Cleanup",
    intro:
      "Too many confusing fields can create more admin work instead of less.",
    support:
      "SHIFT helps small firms review whether their PracticePanther fields support intake, matters, documents, reminders, and handoffs, or whether they are creating clutter.",
    primaryHref: AUDIT_PATH,
    primaryText: "Book the audit",
    secondaryHref: PP_SETUP_CHECKLIST_PATH,
    secondaryText: "View setup checklist",
    sections: [
      {
        heading: "Fields should make work clearer",
        body: [
          "Custom fields are useful when they help the team find, use, and trust the right information. They become a problem when staff ignore them, fill them out differently, or do not know why they exist.",
        ],
      },
      {
        heading: "Common custom field problems",
        bullets: [
          "Fields were added over time without a clear plan.",
          "Staff do not know which fields matter.",
          "Important information is missing when documents need it.",
          "The same detail is captured in more than one place.",
          "Fields do not match the firm’s actual workflow.",
          "Reports, tasks, or templates are harder to trust because the data is inconsistent.",
        ],
      },
      {
        heading: "What SHIFT reviews",
        bullets: [
          "Which fields staff actually use.",
          "Which fields support intake, follow-up, documents, or reporting.",
          "Where duplicate or unclear fields create friction.",
          "Which information should be required, optional, or removed.",
          "How field cleanup could make daily work easier.",
        ],
      },
      {
        heading: "Clean fields make the rest of the system stronger",
        body: [
          "Better fields can make intake easier, follow-up clearer, document prep more reliable, and handoffs less dependent on memory.",
        ],
      },
    ],
    related: [
      { label: "PracticePanther Setup Help", href: PRACTICEPANTHER_PATH },
      { label: "PracticePanther Intake Setup", href: PP_INTAKE_SETUP_PATH },
      { label: "PracticePanther Document Automation", href: PP_DOCUMENT_AUTOMATION_PATH },
      { label: "Free 30-Minute Law Firm Software Setup Audit", href: AUDIT_PATH },
    ],
    faqs: [
      {
        question: "Should we remove old fields?",
        answer:
          "Maybe. The audit looks at which fields still support real work and which ones create confusion.",
      },
      {
        question: "Can field cleanup help document prep?",
        answer:
          "Yes. Clean matter details and fields often make document preparation easier to trust.",
      },
      {
        question: "What if different staff use fields differently?",
        answer:
          "That usually points to unclear setup, unclear ownership, or a field structure that does not match the work.",
      },
      {
        question: "What is the first step?",
        answer:
          "Book the audit and bring the fields or matter details that feel confusing, ignored, or unreliable.",
      },
    ],
  },
  practicePantherSetupChecklist: {
    title: "PracticePanther Setup Checklist for Small Law Firms | SHIFT Systems",
    description:
      "A plain-English PracticePanther setup checklist for small law firms reviewing intake, matters, fields, tasks, reminders, follow-up, documents, and staff handoffs.",
    eyebrow: "PracticePanther setup checklist",
    h1: "PracticePanther Setup Checklist for Small Law Firms",
    intro:
      "Use this checklist to spot where your PracticePanther setup may be making daily work harder than it needs to be.",
    support:
      "The checklist is not a full diagnosis. It is a practical way to prepare for the free setup audit and identify the areas worth reviewing first.",
    primaryHref: AUDIT_PATH,
    primaryText: "Book the audit",
    secondaryHref: PRACTICEPANTHER_PATH,
    secondaryText: "PracticePanther setup help",
    sections: [
      {
        heading: "Intake",
        bullets: [
          "New leads and clients enter the system in a consistent way.",
          "The firm knows who owns the first follow-up.",
          "Required details are clear before work moves forward.",
          "Staff are not copying intake answers into multiple places.",
        ],
      },
      {
        heading: "Matter setup and custom fields",
        bullets: [
          "Matter fields match the information staff actually need.",
          "Important fields are easy to understand.",
          "Duplicate or stale fields are not creating confusion.",
          "Matter details support follow-up, documents, and reporting.",
        ],
      },
      {
        heading: "Tasks, reminders, and follow-up",
        bullets: [
          "The next step is clear after a matter is created or updated.",
          "Follow-up does not depend only on memory.",
          "Staff trust the tasks and reminders enough to use them.",
          "Missed steps are easy to catch before they become client problems.",
        ],
      },
      {
        heading: "Documents and handoffs",
        bullets: [
          "Document prep uses clean matter information where possible.",
          "Staff are not rebuilding documents from old files unnecessarily.",
          "The person receiving a matter can see what happened and what is missing.",
          "The owner does not have to manually inspect every step to feel safe.",
        ],
      },
      {
        heading: "What to do if several items fail",
        body: [
          "Do not try to fix everything at once. Start with the area that creates the most missed follow-up, repeated admin work, or staff confusion. That is what the audit helps identify.",
        ],
      },
    ],
    related: [
      { label: "PracticePanther Setup Help", href: PRACTICEPANTHER_PATH },
      { label: "PracticePanther Workflow Cleanup", href: PP_WORKFLOW_CLEANUP_PATH },
      { label: "PracticePanther Intake Setup", href: PP_INTAKE_SETUP_PATH },
      { label: "Free 30-Minute Law Firm Software Setup Audit", href: AUDIT_PATH },
    ],
    faqs: [
      {
        question: "Is this checklist enough to fix our setup?",
        answer:
          "It is a starting point. It helps you identify where to look, but the audit is used to understand what should be cleaned up first.",
      },
      {
        question: "Should every firm use the same setup?",
        answer:
          "No. The setup should match the way your firm handles intake, matters, documents, follow-up, and handoffs.",
      },
      {
        question: "Can we use this before the audit?",
        answer:
          "Yes. It can help you bring the right examples to the call.",
      },
      {
        question: "What is the first step after using the checklist?",
        answer:
          "Book the audit and bring the checklist areas that felt weakest or most confusing.",
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
          <a href={CLIO_PATH} className="hover:text-foreground transition-colors">
            Clio
          </a>
          <a href={INTAKE_FOLLOW_UP_PATH} className="hover:text-foreground transition-colors">
            Intake cleanup
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
