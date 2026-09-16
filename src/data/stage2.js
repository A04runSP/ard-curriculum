import "./stage10Expansion.js";

export const stage2 = [
{
    id: "software-engineering",
    num: 11,
    title: "Software Engineering",
    objective: "Learn the practices that separate 'code that works' from professional software: version control workflows, clean code, testing, and collaboration.",
    prerequisites: "Full Stack stage (or in parallel with it).",
    skills: ["Git branching and pull-request workflows", "Writing readable, maintainable code", "Writing unit, integration, and E2E tests", "Debugging systematically", "Writing useful documentation"],
    technologies: ["Git & GitHub", "A testing framework (Vitest/Jest)", "An E2E tool (Playwright)", "A linter/formatter (ESLint/Prettier)"],
    concepts: ["Git internals (commits, branches, merges, rebasing) beyond the basics", "Pull requests and code review etiquette", "Clean code principles and code smells", "SOLID principles (practically, not academically)", "Common design patterns (only the ones that earn their keep)", "The testing pyramid: unit vs integration vs E2E", "Refactoring safely", "Technical documentation and READMEs"],
    projects: ["Refactor one of your earlier full-stack projects for readability and add a real test suite", "Contribute a small, real pull request to an open-source project", "Write a README and architecture doc for your capstone-in-progress"],
    assessments: ["Can you review someone else's pull request and give specific, constructive feedback?", "Can you write a test that would have caught a real bug you shipped?"],
    resources: ["\"Refactoring\" by Martin Fowler (concepts, free summaries widely available)", "GitHub's official documentation on pull requests", "freeCodeCamp — testing curricula"],
    exitCriteria: "Your code has tests, your Git history is readable, and you could hand a project to another developer and they could understand it without you in the room."
  },
{
    id: "devops",
    num: 12,
    title: "DevOps",
    objective: "Learn to reliably ship and run software: the command line, containers, CI/CD, and the basics of cloud infrastructure.",
    prerequisites: "Software Engineering stage (or in parallel).",
    skills: ["Comfort in a Linux shell", "Containerizing an application with Docker", "Building a CI/CD pipeline", "Managing environment variables and secrets", "Reading logs and basic monitoring"],
    technologies: ["Linux (via WSL or a VM if on Windows)", "Docker", "GitHub Actions (CI/CD)", "A cloud platform (pick one: AWS, or a simpler PaaS like Render/Railway/Fly.io first)"],
    concepts: ["Linux fundamentals: filesystem, permissions, processes, package managers", "Containers vs virtual machines (conceptual)", "Dockerfiles, images, and containers", "CI/CD: automated testing and deployment on every push", "Environment variables and secrets management", "DNS, domains, HTTPS/TLS at a practical level", "Basic monitoring, logging, and backups"],
    projects: ["Containerize your full-stack app with Docker and docker-compose", "Set up a GitHub Actions pipeline that runs tests on every PR and deploys on merge to main", "Add basic uptime monitoring and error logging to a deployed app"],
    assessments: ["Can you write a working Dockerfile for one of your apps from scratch?", "Can you diagnose a failed deployment from CI/CD logs alone?"],
    resources: ["Docker official documentation and \"Get Started\" guide", "GitHub Actions official documentation", "\"The Missing Semester of Your CS Education\" (MIT, free)"],
    exitCriteria: "You can take a working app and ship it through an automated pipeline (test → build → deploy) without manually SSHing in and fixing things by hand."
  },
{
    id: "system-design",
    num: 13,
    title: "System Design",
    objective: "Learn to reason about software at the scale of real systems: how to design architectures that handle load, stay available, and evolve — not just make a single request work.",
    prerequisites: "Full Stack, Databases, and DevOps stages.",
    skills: ["Identifying bottlenecks in an architecture", "Choosing when to cache, queue, or scale", "Reasoning about trade-offs (consistency vs availability, etc.)", "Sketching and explaining a system design"],
    technologies: ["Conceptual — applies across stacks; diagramming tools (Excalidraw/FigJam) are useful"],
    concepts: ["Client/server and load balancing", "Caching strategies and CDNs", "Horizontal vs vertical scaling", "Message queues and event-driven architecture", "Database replication and partitioning/sharding", "CAP theorem and consistency/availability trade-offs (practically explained)", "Microservices vs monoliths — when each makes sense", "Rate limiting and back-pressure"],
    projects: ["Write a design doc for 'scale this app to 100,000 users': identify the first three bottlenecks and how you'd address each", "Design (on paper/diagram, not code) a URL shortener, and separately a simple chat app, covering data model, API, and scaling"],
    assessments: ["Given a simple app, can you identify what breaks first under load and propose a specific fix?", "Can you explain a trade-off (e.g., strong vs eventual consistency) with a concrete example?"],
    resources: ["\"System Design Primer\" (open-source GitHub repo)", "\"Designing Data-Intensive Applications\" by Martin Kleppmann (the standard reference)"],
    exitCriteria: "Given a one-paragraph product idea, you can produce a reasonable first-pass architecture diagram and explain your trade-offs out loud."
  },
{
    id: "advanced-engineering",
    num: 14,
    title: "Advanced Engineering",
    objective: "Specialize and deepen: pick 1–2 directions (performance engineering, advanced frontend architecture, backend infrastructure, security) and go past 'competent' into 'trusted expert.'",
    prerequisites: "All prior stages.",
    skills: ["Deep debugging and profiling", "Architecting a codebase for a team, not just yourself", "Mentoring / explaining trade-offs to others", "Reading and contributing to real open-source codebases"],
    technologies: ["Depends on specialization: e.g., advanced React patterns + performance profiling, or advanced Postgres + queues + observability tooling"],
    concepts: ["Performance profiling (frontend and backend)", "Advanced state management and architecture patterns at scale", "Observability: metrics, tracing, structured logging", "Security in depth (OWASP Top 10, practically applied)", "Working effectively in an existing large codebase"],
    projects: ["Profile and meaningfully improve the performance of an earlier project (measured, not guessed)", "A meaningful, merged open-source contribution", "A written technical deep-dive / blog post explaining something you learned, well enough to teach it"],
    assessments: ["Can you take a slow real page/API and make it measurably faster, and explain why your fix worked?", "Would another engineer trust your architectural judgment on a non-trivial decision?"],
    resources: ["OWASP Top 10 (official)", "web.dev performance guides", "Specialization-specific official docs and RFCs"],
    exitCriteria: "You have at least one project or contribution that demonstrates depth, not just breadth — something you could talk about for 30 minutes in an interview without running out of substance."
  },
{
    id: "professional",
    num: 15,
    title: "Professional",
    objective: "Package everything into a body of work and the practical skills of being employed or self-employed as a developer: portfolio, capstone, and working in a real team/codebase context.",
    prerequisites: "All prior stages.",
    skills: ["Presenting your work clearly (portfolio + case studies)", "Working within someone else's codebase and conventions", "Estimating and scoping work", "Communicating technical trade-offs to non-technical stakeholders"],
    technologies: ["Your accumulated stack, presented cohesively"],
    concepts: ["Portfolio and case-study writing", "Technical interviewing (coding + system design + behavioral)", "Working in a codebase you didn't design", "Estimation and scoping", "Freelance/founder considerations if going independent (contracts, scoping, pricing) at a conceptual level"],
    projects: ["Your Capstone (Level 6 project) fully shipped, documented, and written up as a case study", "A polished portfolio site showcasing 3–5 projects with real case studies, not just screenshots"],
    assessments: ["Could you walk a stranger through any of your projects — decisions, trade-offs, what you'd do differently — for 15 minutes without notes?", "Is your portfolio something you'd be proud to send to a hiring manager or client today?"],
    resources: ["Your own project write-ups", "General technical interview prep resources (e.g., NeetCode for coding interviews, System Design Primer for design rounds)"],
    exitCriteria: "You have a shipped capstone, a real portfolio, and the ability to talk fluently about what you built and why — the practical definition of 'professional-level practical ability.'"
  }
];