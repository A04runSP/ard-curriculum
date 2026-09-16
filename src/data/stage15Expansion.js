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

stage15Metadata.skills.push(
  "Engineering a concise, role-targeted CV/resume from verifiable evidence",
  "Maintaining consistent professional profiles across resume, portfolio, and GitHub",
  "Qualifying roles and tailoring applications without inventing experience",
  "Tracking applications, recruiter communication, follow-ups, and next actions",
  "Evaluating employment offers and negotiating from accurate information"
);

stage15Metadata.concepts.push(
  "Evidence-based resume and professional profile engineering",
  "Structured job-search and application workflows",
  "Offer evaluation, negotiation boundaries, and professional transition"
);

stage15Metadata.projects.push(
  "Create a master CV/resume and one role-tailored version with evidence links",
  "Build and run a structured application tracker with recruiter communication and follow-up records",
  "Create an offer-comparison, clarification, negotiation, and transition worksheet"
);

stage15Metadata.assessments.push(
  "Can you tailor a concise CV/resume to a target role while keeping every claim truthful and evidence-backed?",
  "Can you qualify a job, tailor the application, track the process, and communicate professionally with a recruiter?",
  "Can you compare an employment offer across compensation, role, working conditions, constraints, and start-date terms?",
  "Can you identify what is confirmed, assumed, or missing before negotiating or accepting an offer?"
);

stage15Metadata.resources.push(
  "MDN — Finding a job",
  "GitHub — Using your GitHub profile to enhance your resume"
);

stage15Metadata.exitCriteria += " You can also prepare role-targeted application materials, run a structured job-search workflow, communicate professionally with recruiters, and evaluate employment terms using explicit evidence and questions.";
