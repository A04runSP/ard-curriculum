import { lessonB4 } from "./lessonB4.js";
import { lessonB8 } from "./lessonB8.js";
import { concept3 } from "./concept3.js";
import { stage15Metadata, stage15ConceptNotes } from "./stage15Metadata.js";
import { stage15CareerLessons, stage15CareerConceptNotes } from "./stage15CareerExpansion.js";

// Stage 15 lesson expansion is synchronous. Metadata is enriched before
// curriculum.js maps the Professional stage, keeping the data timing-safe.
lessonB4.push(...lessonB8, ...stage15CareerLessons);
stage15ConceptNotes.push(...stage15CareerConceptNotes);
concept3.push(...stage15ConceptNotes);

// Freelance/founder work is a professional specialization path, not a
// universal requirement. Employment/team-engineering remains the core path.
const independentLesson = lessonB4.find((lesson) => lesson.id === "l-prof-independent");
if (independentLesson) {
  independentLesson.module = "Independent Work — Optional Path";
  independentLesson.title = "Freelance & Founder Basics: Scope, Contracts, Delivery & Boundaries (Optional)";
  independentLesson.what = "For learners pursuing freelance, consulting, or founder work, this path covers scope, deliverables, assumptions, acceptance criteria, change control, and commercial boundaries.";
  independentLesson.why = "This is optional professional enrichment rather than a required employment competency. Clear boundaries and written agreements reduce ambiguity for independent client, consulting, or founder work.";
  independentLesson.mentalModel = "Optional path → problem → deliverable → scope boundary → assumptions → acceptance → change process → timeline → commercial terms.";
}

stage15Metadata.skills.push(
  "Engineering a concise, role-targeted CV/resume from verifiable evidence",
  "Maintaining consistent professional profiles across resume, portfolio, and GitHub",
  "Qualifying roles and tailoring applications without inventing experience",
  "Tracking applications, recruiter communication, follow-ups, and next actions",
  "Evaluating employment offers and negotiating from accurate information",
  "Optional path — defining independent-project scope and change boundaries"
);

stage15Metadata.concepts.push(
  "Evidence-based resume and professional profile engineering",
  "Structured job-search and application workflows",
  "Offer evaluation, negotiation boundaries, and professional transition",
  "Optional path — independent software delivery and change control"
);

stage15Metadata.projects.push(
  "Create a master CV/resume and one role-tailored version with evidence links",
  "Build and run a structured application tracker with recruiter communication and follow-up records",
  "Create an offer-comparison, clarification, negotiation, and transition worksheet",
  "Optional path — create a reusable independent-project proposal and change-request workflow"
);

stage15Metadata.assessments.push(
  "Can you tailor a concise CV/resume to a target role while keeping every claim truthful and evidence-backed?",
  "Can you qualify a job, tailor the application, track the process, and communicate professionally with a recruiter?",
  "Can you compare an employment offer across compensation, role, working conditions, constraints, and start-date terms?",
  "Can you identify what is confirmed, assumed, or missing before negotiating or accepting an offer?",
  "Optional path — can you define deliverables, exclusions, and change handling for an independent software project?"
);

stage15Metadata.exitCriteria += " You can also prepare role-targeted application materials, run a structured job-search workflow, communicate professionally with recruiters, and evaluate employment terms using explicit evidence and questions. The freelance/founder material is optional enrichment for learners pursuing independent work rather than a required Stage 15 outcome.";
