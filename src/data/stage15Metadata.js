export const stage15Metadata = {
  objective: "Turn the curriculum into professional evidence: scope and plan work, collaborate in real codebases, communicate technical decisions, prepare for technical interviews, build a credible portfolio, and ship a defensible capstone.",
  prerequisites: "All prior stages.",
  skills: [
    "Presenting your work clearly through portfolios and case studies",
    "Working within someone else's codebase and conventions",
    "Estimating and scoping work with explicit assumptions and uncertainty",
    "Communicating technical trade-offs to technical and non-technical stakeholders",
    "Maintaining professional README and GitHub repository hygiene",
    "Planning work with scope, dependencies, risks, milestones, and acceptance criteria",
    "Collaborating through issues, pull requests, reviews, ownership, and handoffs",
    "Practicing coding, system-design, project-deep-dive, and behavioral interview formats",
    "Entering unfamiliar engineering teams and codebases methodically",
    "Defining independent-project scope and change boundaries",
    "Shipping and defending a complete professional capstone"
  ],
  technologies: [
    "Git & GitHub",
    "GitHub Issues / Projects / Pull Requests",
    "Markdown and technical documentation",
    "Your accumulated application stack",
    "Interview practice environments",
    "Portfolio deployment platform"
  ],
  concepts: [
    "Portfolio and case-study writing",
    "Technical interviewing: coding, system design, and behavioral formats",
    "Working in a codebase you did not design",
    "Estimation, decomposition, acceptance criteria, and scope control",
    "Evidence-based portfolio and case-study structure",
    "README, repository, license, contribution, and developer-profile hygiene",
    "Team collaboration, code review, handoffs, and ownership",
    "Audience-aware technical communication",
    "Engineering onboarding and learning an existing codebase",
    "Independent software delivery and change control",
    "Professional capstone evidence and postmortem practice"
  ],
  projects: [
    "Fully ship, document, and write up the Level 6 capstone as a professional case study",
    "Build three evidence-based portfolio case studies with source code and live demonstrations where available",
    "Audit and professionally document three repositories from a stranger's perspective",
    "Create a scoped delivery plan with milestones, risks, acceptance criteria, and estimate ranges",
    "Run a simulated team sprint with issues, branches, pull requests, reviews, and handoffs",
    "Create engineer, product, and client versions of one important technical decision",
    "Complete a structured interview-practice loop with coding, system design, project deep dive, and mock review",
    "Create a 30/60/90-day onboarding plan and maintenance handbook for an unfamiliar project",
    "Create a reusable independent-project proposal and change-request workflow",
    "Ship the Professional Capstone with a case study, technical walkthrough, architecture evidence, and postmortem"
  ],
  assessments: [
    "Can a stranger understand your strongest project and verify your contribution from the repository and case study?",
    "Can another engineer reproduce your project from its documentation without asking you for missing context?",
    "Can you decompose ambiguous work into scope, assumptions, risks, acceptance criteria, and estimate ranges?",
    "Can you write and review a pull request with enough context for another engineer to make a decision?",
    "Can you explain the same technical trade-off accurately to an engineer, product stakeholder, and client?",
    "Can you reason aloud through coding and system-design problems while testing assumptions and trade-offs?",
    "Can you enter an unfamiliar codebase without making unnecessary architectural changes?",
    "Can you define deliverables, exclusions, and change handling for an independent software project?",
    "Can you ship, present, defend, and postmortem a capstone using evidence from the entire curriculum?"
  ],
  resources: [
    "GitHub — Using your GitHub profile to enhance your resume",
    "GitHub — Contributing to Open Source",
    "GitHub — Pull Requests",
    "GitHub Projects documentation",
    "MDN — Finding a job",
    "NeetCode Interview Roadmap",
    "System Design Primer",
    "GitHub ReadME — Technical Interviews"
  ],
  exitCriteria: "You have a shipped capstone, a credible portfolio with evidence-based case studies, professionally documented repositories, demonstrated collaboration and planning practice, structured interview readiness, and the ability to explain technical decisions, limitations, and trade-offs to different audiences."
};

export const stage15ConceptNotes = [
  {
    id: "c-prof-portfolio",
    stage: "professional",
    module: "Portfolio & Personal Brand",
    title: "Evidence-Based Portfolio",
    what: "A professional portfolio communicates engineering ability through authentic project evidence: problems, constraints, decisions, implementation, measurements, outcomes, and lessons.",
    why: "A repository list alone does not explain contribution or engineering judgment. Case studies make the evidence inspectable.",
    keyPoints: ["Case-study structure", "Project selection", "Evidence over claims", "Live demos and source repositories", "Metrics and outcomes"],
    resource: "https://docs.github.com/en/account-and-profile/tutorials/using-your-github-profile-to-enhance-your-resume"
  },
  {
    id: "c-prof-repository-hygiene",
    stage: "professional",
    module: "Professional Presence",
    title: "Repository & Developer Profile Hygiene",
    what: "Professional repositories should be understandable, reproducible, appropriately licensed, and honest about ownership, limitations, and contribution scope.",
    why: "Public engineering work is evidence only when another person can understand and inspect it.",
    keyPoints: ["README structure", "Setup instructions", "Architecture overview", "License", "Contribution guidance", "Profile curation"],
    resource: "https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes"
  },
  {
    id: "c-prof-estimation",
    stage: "professional",
    module: "Planning & Delivery",
    title: "Estimation Under Uncertainty",
    what: "Software estimates are hypotheses based on assumptions, scope, dependencies, and risk; professional planning makes uncertainty visible and updates plans as evidence changes.",
    why: "False precision hides risk. Explicit assumptions and estimate ranges support better planning and communication.",
    keyPoints: ["Decomposition", "Acceptance criteria", "Dependencies", "Risk", "Estimate ranges", "Scope control"],
    resource: "https://docs.github.com/en/issues/planning-and-tracking-with-projects"
  },
  {
    id: "c-prof-collaboration",
    stage: "professional",
    module: "Team Engineering",
    title: "Team Collaboration as an Engineering Skill",
    what: "Issues, pull requests, reviews, documentation, ownership, and handoffs make team decisions inspectable and reduce dependence on individual memory.",
    why: "Professional software is built through coordinated changes rather than isolated implementation.",
    keyPoints: ["Issues", "Pull requests", "Code review", "Ownership", "Handoffs", "Async communication"],
    resource: "https://docs.github.com/en/pull-requests"
  },
  {
    id: "c-prof-communication",
    stage: "professional",
    module: "Technical Communication",
    title: "Audience-Aware Technical Communication",
    what: "The same technical decision may require different levels of detail for engineers, product stakeholders, clients, and non-technical audiences while preserving the underlying evidence.",
    why: "Technical correctness is not enough when the audience needs to understand risk, trade-offs, cost, or the next decision.",
    keyPoints: ["Audience", "Evidence", "Trade-offs", "Risk communication", "Decision records", "Executive summaries"],
    resource: "https://sre.google/sre-book/table-of-contents/"
  },
  {
    id: "c-prof-interview-reasoning",
    stage: "professional",
    module: "Technical Interviews",
    title: "Interview Reasoning",
    what: "Technical interviews test problem framing, reasoning, implementation or design, verification, complexity, and communication rather than memorized answers alone.",
    why: "Transferable reasoning is more useful than memorizing isolated solutions.",
    keyPoints: ["Clarification", "Problem-solving patterns", "Complexity", "System design", "Project deep dives", "Behavioral evidence"],
    resource: "https://neetcode.io/roadmap"
  },
  {
    id: "c-prof-onboarding",
    stage: "professional",
    module: "Professional Practice",
    title: "Engineering Onboarding",
    what: "Joining an existing team requires learning product context, architecture, conventions, ownership, delivery workflows, and operational expectations before making large changes.",
    why: "Changing a system before understanding its constraints creates avoidable risk.",
    keyPoints: ["Product context", "Architecture map", "Development workflow", "Ownership", "Runbooks", "Small verified changes"],
    resource: "https://docs.github.com/en/get-started/exploring-projects-on-github/contributing-to-open-source"
  },
  {
    id: "c-prof-independent-delivery",
    stage: "professional",
    module: "Independent Work",
    title: "Independent Software Delivery",
    what: "Freelance and founder work require explicit deliverables, exclusions, acceptance criteria, milestones, assumptions, change control, and maintenance boundaries in addition to technical implementation.",
    why: "Clear delivery boundaries reduce ambiguity and uncontrolled scope changes.",
    keyPoints: ["Deliverables", "Exclusions", "Milestones", "Acceptance", "Change requests", "Maintenance boundaries"],
    resource: "https://docs.github.com/en/issues/planning-and-tracking-with-projects"
  },
  {
    id: "c-prof-capstone-evidence",
    stage: "professional",
    module: "Professional Capstone",
    title: "Professional Capstone Evidence",
    what: "A final capstone demonstrates integrated ability when shipped software is supported by requirements, architecture, tests, security, operations, performance evidence, documentation, presentation, and postmortem learning.",
    why: "Professional readiness is demonstrated through a coherent body of evidence rather than a list of technologies.",
    keyPoints: ["Requirements", "Architecture", "Testing", "Security", "Operations", "Performance evidence", "Documentation", "Postmortem"],
    resource: "https://github.com/donnemartin/system-design-primer"
  }
];
