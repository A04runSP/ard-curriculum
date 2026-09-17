import { lessonB4 } from "./lessonB4.js";

// Stage 15 capstone evidence should demonstrate how the learner applies the
// competencies developed across Stages 1–14, rather than treating the
// professional capstone as an isolated final project.
const professionalCapstone = lessonB4.find((lesson) => lesson.id === "l-prof-capstone");

if (professionalCapstone) {
  professionalCapstone.coreConcepts = [
    "Stage 1–2: programming foundations, algorithms, internet, HTTP, and browser/server fundamentals",
    "Stage 3–4: programming fluency, data structures, algorithms, complexity, and problem-solving",
    "Stage 5–7: web platform, accessibility, performance, React/TypeScript, and UI/UX decisions",
    "Stage 8–9: backend APIs, security, data modeling, SQL, transactions, and query performance",
    "Stage 10–12: full-stack integration, software engineering, Git workflows, CI/CD, deployment, and operations",
    "Stage 13: system design, scalability, reliability, consistency, asynchronous work, and failure handling",
    "Stage 14: measured advanced engineering depth in the selected specialization",
    "Stage 15: professional communication, documentation, collaboration, portfolio evidence, and defensible delivery"
  ];

  professionalCapstone.practice = "Create a competency map before implementation: identify which Stage 1–14 skills the project genuinely requires, link each selected competency to repository or deployed evidence, then audit the final artifact as a stranger without relying on verbal explanation.";

  professionalCapstone.miniProject = "Ship one complete capstone with: working deployment; reviewable source repository; reproducible README; architecture diagram; key technical decisions and trade-offs; verification evidence; measurable outcome evidence; case study; 10–15 minute technical walkthrough; postmortem; limitations; prioritized future work; and a competency map showing concrete evidence from the relevant Stages 1–14 skills used in the project.";

  professionalCapstone.mastery = [
    "I can identify the Stage 1–14 competencies genuinely required by my project instead of claiming coverage that the project does not demonstrate.",
    "Each selected competency is linked to concrete evidence such as code, tests, architecture, measurements, deployment, documentation, or operational records.",
    "A stranger can run or inspect the project using the documentation.",
    "The repository and deployed artifact provide verifiable evidence of the implementation.",
    "Major architecture and engineering decisions are explained with constraints and trade-offs.",
    "Tests or other verification demonstrate that important behavior was checked.",
    "At least one meaningful outcome is supported by measurements or concrete evidence.",
    "The case study clearly separates facts, assumptions, trade-offs, limitations, and results.",
    "I can present and defend the project by connecting implementation choices to earlier curriculum competencies.",
    "The postmortem identifies failures, lessons, and specific future improvements."
  ];
}
