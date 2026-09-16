import "./stage10Expansion.js";
import "./stage11Expansion.js";
import "./stage12Expansion.js";

export const stage2 = [
{
    id: "software-engineering",
    num: 11,
    title: "Software Engineering",
    objective: "Learn the practices that separate 'code that works' from professional software: version control, code review, maintainability, testing, refactoring, debugging, documentation, and release discipline.",
    prerequisites: "Full Stack stage (or in parallel with it).",
    skills: ["Git internals and safe branching/rebase workflows", "Professional pull-request and code-review workflows", "Writing readable, maintainable code", "Applying SOLID and useful design patterns without overengineering", "Writing unit, integration, API, and E2E tests", "Refactoring safely and managing technical debt", "Debugging systematically across application boundaries", "Writing useful READMEs and architecture decision records", "Taking work from issue through reviewed release"],
    technologies: ["Git & GitHub", "A testing framework (Vitest/Jest)", "An E2E tool (Playwright)", "A linter/formatter (ESLint/Prettier)", "Browser DevTools and structured logging"],
    concepts: ["Git internals, refs, HEAD, merges, rebasing, cherry-pick, revert, reset, and reflog", "Pull requests and professional code review", "Clean code, code smells, coupling, cohesion, and technical debt", "SOLID principles applied to real change pressure", "Common design patterns and overengineering", "Testing boundaries: unit vs integration vs API vs E2E", "Test doubles and regression testing", "Safe incremental refactoring", "Systematic debugging and git bisect", "Technical documentation, READMEs, and ADRs"],
    projects: ["Build a documented Git workflow and recover from deliberate Git failures", "Complete a real pull-request/code-review exercise", "Refactor an earlier full-stack project for readability with characterization and regression tests", "Build layered unit, integration/API, and E2E coverage for a capstone feature", "Create a README, architecture document, environment guide, and ADRs", "Run the Software Engineering Capstone from issue → branch → implementation → tests → review → merge → release"],
    assessments: ["Can you explain what HEAD, a branch, the index, and a commit represent and recover lost work with reflog?", "Can you review someone else's pull request and give specific, constructive, evidence-based feedback?", "Can you identify code smells and explain whether they actually justify refactoring?", "Can you justify a SOLID principle or design pattern with a concrete change pressure and explain when not to use it?", "Can you choose the right unit, integration, API, or E2E boundary for a behavior?", "Can you refactor safely while keeping behavior protected by tests?", "Can you debug a cross-layer failure using evidence rather than guesswork?", "Can another developer run, understand, test, and continue your project using your documentation?"],
    resources: ["Martin Fowler — Refactoring", "Martin Fowler — Code Smell", "Martin Fowler — Software Testing Guide", "GitHub official documentation on pull requests", "Git official documentation", "MADR — Markdown Architectural Decision Records"],
    exitCriteria: "You can take a real software requirement from issue to reviewed release using focused Git history, meaningful tests, maintainable code, systematic debugging, documented architectural decisions, and a handoff another developer can follow without you in the room."
  },
{
    id: "devops",
    num: 12,
    title: "DevOps",
    objective: "Learn to reliably build, ship, observe, and recover software: Linux operations, containers, CI/CD, cloud fundamentals, production networking, observability, and reliability practices.",
    prerequisites: "Software Engineering stage (or in parallel).",
    skills: ["Comfort in a Linux shell", "Containerizing an application with Docker", "Building a CI/CD pipeline", "Managing environment variables and secrets", "Reading logs and basic monitoring", "Operating Linux systems from the command line", "Building secure, reproducible production container images", "Orchestrating multi-service environments with Docker Compose", "Building reliable CI pipelines with GitHub Actions", "Designing controlled build, release, and deployment pipelines", "Managing secrets, identities, and least-privilege access", "Mapping applications to practical cloud infrastructure", "Configuring DNS, TLS, reverse proxies, and production networking", "Implementing actionable logs, metrics, traces, and alerts", "Designing backup, rollback, incident-response, and recovery procedures", "Understanding Kubernetes workloads and service discovery", "Operating a full-stack application through an automated delivery lifecycle"],
    technologies: ["Linux (via WSL or a VM if on Windows)", "Docker", "Docker Compose", "GitHub Actions (CI/CD)", "OpenTelemetry concepts", "Kubernetes fundamentals", "A cloud/PaaS deployment target"],
    concepts: ["Linux fundamentals: filesystem, permissions, processes, package managers", "Containers vs virtual machines (conceptual)", "Dockerfiles, images, and containers", "CI/CD: automated testing and deployment on every push", "Environment variables and secrets management", "DNS, domains, HTTPS/TLS at a practical level", "Basic monitoring, logging, and backups", "Linux filesystem, permissions, processes, networking, and shell pipelines", "Docker image layers, multi-stage builds, non-root containers, and health checks", "Compose networking, volumes, service discovery, and readiness", "CI workflows, runners, artifacts, caching, and matrix testing", "Build-once/promote pipelines, deployment environments, approvals, smoke tests, and rollback", "Secrets, identity, least privilege, and credential rotation", "Cloud compute, storage, networking, managed services, and operational responsibility", "DNS, TLS, reverse proxies, load balancing, and health endpoints", "Observability: structured logs, metrics, traces, correlation, and actionable alerts", "Backups, restore testing, graceful failure, runbooks, and incident response", "Kubernetes Pods, Deployments, Services, configuration, probes, and resource controls", "Operational excellence: automate, observe, make small reversible changes, and learn from failures"],
    projects: ["Containerize your full-stack app with Docker and docker-compose", "Set up a GitHub Actions pipeline that runs tests on every PR and deploys on merge to main", "Add basic uptime monitoring and error logging to a deployed app", "Troubleshoot three Linux service failures using only command-line evidence", "Build a production-oriented multi-stage Docker image and measure its size/startup behavior", "Run a complete frontend + API + PostgreSQL environment with Docker Compose", "Create a PR-gated GitHub Actions CI pipeline with tests, build artifacts, and caching", "Create a staging-to-production deployment pipeline with verification and rollback", "Deploy the capstone with HTTPS, observability, tested backups, and an incident runbook", "Deploy a small containerized API to local Kubernetes with a Deployment, Service, and readiness probe"],
    assessments: ["Can you write a working Dockerfile for one of your apps from scratch?", "Can you diagnose a failed deployment from CI/CD logs alone?", "Can you diagnose a Linux service failure by checking process, port, permission, dependency, and resource evidence?", "Can you build a small secure production Docker image and explain each layer and runtime choice?", "Can you explain how Compose services discover one another and how persistent database data survives recreation?", "Can you build and debug a GitHub Actions workflow that runs tests and preserves useful artifacts?", "Can you explain build-once/promote and define a safe rollback decision?", "Can you identify a secret or over-privileged identity and propose a safer configuration?", "Can you map a full-stack application to compute, networking, storage, database, and identity primitives?", "Can you trace DNS → TLS → proxy/load balancer → application and diagnose a failure at the correct layer?", "Can you distinguish logs, metrics, and traces and design alerts that lead to action?", "Can you demonstrate a tested backup restore and execute a documented recovery procedure?", "Can you explain Pods, Deployments, and Services and diagnose a basic Kubernetes workload failure?", "Can you take a code change from commit through automated deployment, verification, observation, and recovery?"],
    resources: ["Docker official documentation and Get Started guide", "Docker multi-stage builds", "Docker Compose", "GitHub Actions official documentation", "GitHub deployment environments", "The Missing Semester of Your CS Education (MIT, free)", "AWS Well-Architected Framework", "AWS Reliability Pillar", "OpenTelemetry", "Kubernetes Concepts", "Kubernetes Deployments", "Kubernetes Services", "Google SRE Book"],
    exitCriteria: "You can take a tested full-stack application from source control through reproducible container builds, automated CI/CD, environment-scoped secrets, cloud/PaaS deployment, DNS/TLS, useful observability, verified backups, rollback, and incident recovery. You can explain the operational trade-offs and demonstrate the workflow rather than relying on manual server fixes."
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
    resources: ["System Design Primer (open-source GitHub repo)", "Designing Data-Intensive Applications by Martin Kleppmann (the standard reference)"],
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