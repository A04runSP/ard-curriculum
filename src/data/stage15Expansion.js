import { lessonB4 } from "./lessonB4.js";
import { lessonB8 } from "./lessonB8.js";
import { concept3 } from "./concept3.js";

lessonB4.push(...lessonB8);

concept3.push(
  { title: "Evidence-Based Portfolio", description: "A professional portfolio communicates engineering ability through authentic project evidence: problem, constraints, decisions, implementation, measurements, outcomes, and lessons." },
  { title: "Repository & Developer Profile Hygiene", description: "Public engineering work should be understandable, reproducible, appropriately licensed, and honest about ownership, limitations, and contribution scope." },
  { title: "Estimation Under Uncertainty", description: "Software estimates are hypotheses based on assumptions, scope, dependencies, and risk; professional planning makes uncertainty visible and updates plans as evidence changes." },
  { title: "Team Collaboration as an Engineering Skill", description: "Issues, pull requests, reviews, documentation, ownership, and handoffs make team decisions inspectable and reduce dependence on individual memory." },
  { title: "Audience-Aware Technical Communication", description: "The same technical decision may require different levels of detail for engineers, product stakeholders, clients, and non-technical audiences while preserving the underlying evidence." },
  { title: "Interview Reasoning", description: "Technical interviews test problem framing, reasoning, implementation or design, verification, complexity, and communication rather than memorized answers alone." },
  { title: "Engineering Onboarding", description: "Joining an existing team requires learning product context, architecture, conventions, ownership, delivery workflows, and operational expectations before making large changes." },
  { title: "Independent Software Delivery", description: "Freelance and founder work require explicit deliverables, exclusions, acceptance criteria, milestones, assumptions, change control, and maintenance boundaries in addition to technical implementation." },
  { title: "Professional Capstone Evidence", description: "A final capstone demonstrates integrated ability when shipped software is supported by requirements, architecture, tests, security, operations, performance evidence, documentation, presentation, and postmortem learning." }
);

// Stage 15 metadata lives in stage2.js. The dynamic import avoids a circular
// module dependency while allowing this side-effect expansion to enrich the
// existing stage object after module initialization.
import("./stage2.js").then(({ stage2 }) => {
  const stage = stage2.find(s => s.id === "professional");
  if (!stage) return;

  stage.objective = "Turn the curriculum into professional evidence: scope and plan work, collaborate in real codebases, communicate technical decisions, prepare for technical interviews, build a credible portfolio, and ship a defensible capstone.";
  stage.skills.push(
    "Writing evidence-based project case studies",
    "Maintaining professional README and GitHub repository hygiene",
    "Planning work with explicit scope, assumptions, dependencies, risks, and acceptance criteria",
    "Collaborating through issues, pull requests, reviews, and handoffs",
    "Explaining technical trade-offs to engineers and non-technical stakeholders",
    "Practicing coding, system-design, project-deep-dive, and behavioral interview formats",
    "Entering unfamiliar engineering teams and codebases methodically",
    "Defining freelance or founder project scope and change boundaries",
    "Shipping and defending a complete professional capstone"
  );
  stage.technologies = [
    "Git & GitHub",
    "GitHub Issues / Projects / Pull Requests",
    "Markdown and technical documentation",
    "Your accumulated application stack",
    "Interview practice environments",
    "Portfolio deployment platform"
  ];
  stage.concepts.push(
    "Evidence-based portfolio and case-study structure",
    "README, repository, license, contribution, and developer-profile hygiene",
    "Estimation, decomposition, acceptance criteria, and scope control",
    "Team collaboration, code review, handoffs, and ownership",
    "Audience-aware technical communication",
    "Coding interview patterns, system-design interviews, and project deep dives",
    "Engineering onboarding and learning an existing codebase",
    "Freelance/founder scope, contracts, change control, and maintenance boundaries",
    "Professional capstone evidence and postmortem practice"
  );
  stage.projects.push(
    "Build three evidence-based portfolio case studies with source code and live demonstrations where available",
    "Audit and professionally document three repositories from a stranger's perspective",
    "Create a scoped delivery plan with milestones, risks, acceptance criteria, and estimate ranges",
    "Run a simulated team sprint with issues, branches, pull requests, reviews, and handoffs",
    "Create engineer/product/client versions of one important technical decision",
    "Complete a structured interview-practice loop with coding, system design, project deep dive, and mock review",
    "Create a 30/60/90-day onboarding plan and maintenance handbook for an unfamiliar project",
    "Create a reusable independent-project proposal and change-request workflow",
    "Ship the Professional Capstone with a case study, technical walkthrough, architecture evidence, and postmortem"
  );
  stage.assessments.push(
    "Can a stranger understand your strongest project and verify your contribution from the repository and case study?",
    "Can another engineer reproduce your project from its documentation without asking you for missing context?",
    "Can you decompose ambiguous work into scope, assumptions, risks, acceptance criteria, and estimate ranges?",
    "Can you write and review a pull request with enough context for another engineer to make a decision?",
    "Can you explain the same technical trade-off accurately to an engineer, product stakeholder, and client?",
    "Can you reason aloud through coding and system-design problems while testing assumptions and trade-offs?",
    "Can you enter an unfamiliar codebase without making unnecessary architectural changes?",
    "Can you define deliverables, exclusions, and change handling for an independent software project?",
    "Can you ship, present, defend, and postmortem a capstone using evidence from the entire curriculum?"
  );
  stage.resources = [
    "GitHub — Using your GitHub profile to enhance your resume",
    "GitHub — Contributing to Open Source",
    "GitHub — Pull Requests",
    "GitHub Projects documentation",
    "MDN — Finding a job",
    "NeetCode Interview Roadmap",
    "System Design Primer",
    "GitHub ReadME — Technical Interviews"
  ];
  stage.exitCriteria = "You have a shipped capstone, a credible portfolio with evidence-based case studies, professionally documented repositories, demonstrated collaboration and planning practice, structured interview readiness, and the ability to explain technical decisions, limitations, and trade-offs to different audiences."
});
