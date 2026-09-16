import { lessonB4 } from "./lessonB4.js";
import { lessonB7 } from "./lessonB7.js";
import { concept3 } from "./concept3.js";

lessonB4.push(...lessonB7);

concept3.push(
  { title: "Advanced Performance Engineering", description: "Performance work is an evidence loop: establish a reproducible baseline, isolate the dominant cost, change one meaningful variable, and verify both average and tail behavior." },
  { title: "Frontend Performance Architecture", description: "Advanced frontend performance combines network delivery, JavaScript execution, rendering, interaction latency, memory, and user-centered metrics such as LCP, INP, and CLS." },
  { title: "Backend Performance & Query Optimization", description: "Backend optimization follows a request across application, database, network, and resource boundaries; query plans, connection pools, tail latency, and saturation matter together." },
  { title: "Advanced React Rendering", description: "Large React applications benefit from deliberate state ownership, rendering boundaries, profiling, and selective optimization rather than blanket memoization." },
  { title: "TypeScript at Scale", description: "Advanced TypeScript uses explicit contracts, discriminated unions, generics, strict configuration, and project boundaries to keep large codebases understandable and buildable." },
  { title: "Resource-Constrained Backend Engineering", description: "Concurrency, connection pools, workers, memory, and downstream dependencies are finite resources; bounded work and explicit budgets prevent overload from becoming cascading failure." },
  { title: "Security Engineering in Depth", description: "Security maturity combines threat modeling, trust-boundary analysis, secure defaults, supply-chain controls, identity protections, detection, and recovery instead of relying on one checklist." },
  { title: "Large-Codebase Engineering", description: "Working safely in an existing codebase requires repository archaeology, behavior tracing, ownership awareness, small changes, characterization tests, and disciplined separation of fixes from refactors." },
  { title: "Open-Source Engineering", description: "A successful external contribution demonstrates that an engineer can follow unfamiliar conventions, scope work, communicate with maintainers, satisfy CI, and respond to review evidence." },
  { title: "Specialization & Technical Depth", description: "Expert-level growth comes from sustained work on a difficult problem with measurable goals, iterative experiments, documented trade-offs, peer review, and a final technical explanation." }
);

// Stage 14 metadata lives in stage2.js. The dynamic import avoids a circular
// module dependency while allowing this side-effect expansion to enrich the
// existing stage object after module initialization.
import("./stage2.js").then(({ stage2 }) => {
  const stage = stage2.find(s => s.id === "advanced-engineering");
  if (!stage) return;

  stage.objective = "Specialize and deepen through evidence-driven engineering: choose 1–2 directions, profile and optimize real systems, strengthen architecture and security, work safely in large codebases, contribute to open source, and produce a measurable depth project.";
  stage.skills.push(
    "Designing reproducible performance experiments and interpreting p50/p95/p99 results",
    "Profiling frontend rendering, network, JavaScript, and interaction costs",
    "Profiling backend CPU, I/O, database, connection-pool, and concurrency bottlenecks",
    "Architecting large React applications around state and rendering boundaries",
    "Using advanced TypeScript types and project boundaries without sacrificing maintainability",
    "Controlling concurrency and finite resources in backend systems",
    "Threat-modeling features and applying defense-in-depth security controls",
    "Navigating unfamiliar large codebases with evidence-driven, low-risk changes",
    "Contributing to external open-source projects through review and CI",
    "Executing a specialization capstone with measurable engineering evidence"
  );
  stage.technologies = [
    "Chrome DevTools Performance/Lighthouse",
    "React DevTools Profiler",
    "PostgreSQL EXPLAIN/EXPLAIN ANALYZE",
    "TypeScript",
    "OpenTelemetry concepts",
    "OWASP Top 10:2025",
    "Git/GitHub and open-source workflows",
    "Specialization-specific tools and official APIs"
  ];
  stage.concepts.push(
    "Profiling methodology and performance budgets",
    "Core Web Vitals and interaction performance",
    "Backend tail latency, saturation, and query optimization",
    "Advanced React rendering and state boundaries",
    "TypeScript generics, discriminated unions, runtime boundaries, and project references",
    "Concurrency limits, resource budgets, and back-pressure",
    "Threat modeling, supply-chain security, and defense in depth",
    "Large-codebase archaeology and incremental change",
    "Open-source contribution and maintainer collaboration",
    "Specialization research, experimentation, and technical communication"
  );
  stage.projects.push(
    "Produce a measured frontend performance optimization with a documented before/after profile",
    "Produce a measured backend/database performance optimization with p50/p95 evidence",
    "Refactor a React application around state and rendering boundaries using profiler evidence",
    "Refactor a TypeScript project around stronger contracts and justified module boundaries",
    "Harden a real application against selected OWASP Top 10:2025 risks with regression tests",
    "Add bounded concurrency and failure controls to a backend worker or API",
    "Make three scoped contributions to an unfamiliar open-source codebase",
    "Complete the Advanced Engineering Specialization Capstone"
  );
  stage.assessments.push(
    "Can you produce a reproducible performance baseline and identify the dominant bottleneck?",
    "Can you distinguish a frontend rendering problem from a network or JavaScript execution problem using profiling evidence?",
    "Can you diagnose a backend bottleneck across application, database, and resource boundaries?",
    "Can you explain why a React optimization is justified instead of applying memoization everywhere?",
    "Can you use advanced TypeScript without turning the type system into unreadable abstraction?",
    "Can you set concurrency and resource limits that prevent overload amplification?",
    "Can you threat-model a feature and implement preventive, detective, and recovery controls?",
    "Can you enter an unfamiliar codebase and make a safe change without unnecessary refactoring?",
    "Can you take maintainer feedback on an open-source contribution and revise the work without losing scope discipline?",
    "Can you defend a specialization capstone using measurements, trade-offs, tests, and documented iterations?"
  );
  stage.resources = [
    "Chrome DevTools Performance documentation",
    "web.dev Performance documentation",
    "React official performance references",
    "PostgreSQL EXPLAIN and monitoring documentation",
    "TypeScript Handbook and Project References",
    "OpenTelemetry documentation",
    "OWASP Top 10:2025",
    "GitHub — Contributing to Open Source",
    "Google SRE Book"
  ];
  stage.exitCriteria = "You have demonstrated measurable depth in at least one engineering specialization: a real problem, explicit baseline and success criteria, multiple iterations, tests, technical reasoning, documented trade-offs, and evidence that another engineer can review and understand the work."
});
