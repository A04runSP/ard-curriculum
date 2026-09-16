import { lessonB4 } from "./lessonB4.js";
import { lessonB7 } from "./lessonB7.js";
import { concept3 } from "./concept3.js";
import "./stage15Expansion.js";
import "./stage14Tracks.js";

lessonB4.push(...lessonB7);

const stage14Concepts = [
  {
    id: "c-ae-performance-method",
    stage: "advanced-engineering",
    module: "Performance",
    title: "Advanced Performance Engineering",
    what: "Performance engineering is an evidence loop: establish a reproducible baseline, isolate the dominant cost, change one meaningful variable, and verify average and tail behavior.",
    why: "Advanced optimization fails when engineers optimize by intuition instead of proving where time, memory, I/O, or rendering work is actually spent.",
    keyPoints: ["Define the workload and success metric first.", "Measure p50/p95/p99 or user-centered metrics where appropriate.", "Change one meaningful variable at a time when practical.", "Keep or revert changes based on evidence and regression risk."],
    resource: { title: "Chrome DevTools Performance", url: "https://developer.chrome.com/docs/devtools/performance" }
  },
  {
    id: "c-ae-frontend-performance",
    stage: "advanced-engineering",
    module: "Frontend Performance",
    title: "Frontend Performance Architecture",
    what: "Frontend performance architecture controls network delivery, JavaScript execution, rendering work, memory, and interaction latency as an application grows.",
    why: "A fast server response does not guarantee a fast experience if the browser must execute excessive JavaScript, render large trees, or process expensive interactions.",
    keyPoints: ["Use LCP, INP, and CLS as user-centered signals rather than vanity scores.", "Profile long tasks and rendering before adding optimization machinery.", "Treat code splitting, images, fonts, and virtualization as critical-path decisions.", "Optimize the dominant user-visible bottleneck, not bundle size in isolation."],
    resource: { title: "web.dev — Learn Performance", url: "https://web.dev/learn/performance/" }
  },
  {
    id: "c-ae-backend-performance",
    stage: "advanced-engineering",
    module: "Backend Performance",
    title: "Backend Performance & Query Optimization",
    what: "Backend optimization follows a request across application, database, network, and resource boundaries; query plans, connection pools, tail latency, and saturation matter together.",
    why: "A fast function is irrelevant if the service is waiting on a database, exhausted pool, remote dependency, lock, or other finite resource.",
    keyPoints: ["Trace the request across boundaries.", "Use EXPLAIN/EXPLAIN ANALYZE to investigate query behavior.", "Watch tail latency and saturation rather than averages alone.", "Avoid increasing concurrency against an already saturated dependency."],
    resource: { title: "PostgreSQL — Using EXPLAIN", url: "https://www.postgresql.org/docs/current/using-explain.html" }
  },
  {
    id: "c-ae-react-architecture",
    stage: "advanced-engineering",
    module: "React Architecture",
    title: "Advanced React Rendering & Actions",
    what: "Advanced React architecture combines deliberate state ownership, rendering boundaries, profiling, asynchronous UI patterns, and selective optimization.",
    why: "Large React applications become difficult to reason about when state, effects, rendering work, and asynchronous mutations are coupled without clear boundaries.",
    keyPoints: ["Keep state close to its true owner and avoid accidental global state.", "Use profiling evidence before memoization or architectural optimization.", "React 19 Actions, useActionState, and useOptimistic are useful for mutation workflows with pending and optimistic states.", "Treat newer APIs as tools for specific problems rather than mandatory abstractions."],
    resource: { title: "React 19 — Official Blog", url: "https://react.dev/blog/2024/12/05/react-19" }
  },
  {
    id: "c-ae-typescript-scale",
    stage: "advanced-engineering",
    module: "TypeScript Architecture",
    title: "TypeScript at Scale",
    what: "Advanced TypeScript uses explicit contracts, discriminated unions, generics, strict configuration, runtime validation at external boundaries, and project boundaries to keep large codebases understandable.",
    why: "The type system is valuable when it encodes important invariants without turning the codebase into unreadable type-level machinery.",
    keyPoints: ["Use types to make important states and contracts explicit.", "Remember that TypeScript types do not validate untrusted runtime input.", "Use project references only where real ownership or build boundaries justify them.", "Prefer readable types over clever type puzzles."],
    resource: { title: "TypeScript — Project References", url: "https://www.typescriptlang.org/docs/handbook/project-references.html" }
  },
  {
    id: "c-ae-resource-control",
    stage: "advanced-engineering",
    module: "Backend Infrastructure",
    title: "Resource-Constrained Backend Engineering",
    what: "Concurrency, connection pools, workers, memory, CPU, file descriptors, and downstream capacity are finite resources that require explicit budgets.",
    why: "Unlimited parallelism can turn a small slowdown into cascading overload by exhausting local or downstream resources.",
    keyPoints: ["Bound concurrency and queue excess work.", "Propagate timeouts across dependency chains.", "Observe queue depth, active work, pool usage, and downstream latency.", "Design back-pressure and recovery instead of relying on unlimited retries."],
    resource: { title: "Google SRE Book", url: "https://sre.google/sre-book/table-of-contents/" }
  },
  {
    id: "c-ae-security-depth",
    stage: "advanced-engineering",
    module: "Security Engineering",
    title: "Security Engineering in Depth",
    what: "Security maturity combines threat modeling, trust-boundary analysis, secure defaults, supply-chain controls, identity protections, detection, and recovery.",
    why: "Real security failures usually cross boundaries between identity, configuration, dependencies, data handling, and architecture rather than existing as one isolated vulnerability.",
    keyPoints: ["Model assets, actors, trust boundaries, abuse paths, and impact.", "Use preventive, detective, and recovery controls together.", "Treat dependencies and build artifacts as part of the security boundary.", "Test security controls with regression cases rather than relying on a checklist alone."],
    resource: { title: "OWASP Top 10:2025", url: "https://top10.owasp.org/2025/" }
  },
  {
    id: "c-ae-large-codebase",
    stage: "advanced-engineering",
    module: "Large Codebases",
    title: "Large-Codebase Engineering",
    what: "Working safely in an existing codebase requires repository archaeology, behavior tracing, ownership awareness, small changes, characterization tests, and disciplined separation of fixes from refactors.",
    why: "Professional engineers usually modify systems they did not design, so understanding existing constraints is part of engineering rather than overhead.",
    keyPoints: ["Trace a real path before changing it.", "Read tests, configuration, history, and ownership signals.", "Make the smallest correct change first.", "Record architectural follow-up separately from the immediate fix."],
    resource: { title: "GitHub — Contributing to Open Source", url: "https://docs.github.com/en/get-started/exploring-projects-on-github/contributing-to-open-source" }
  },
  {
    id: "c-ae-open-source",
    stage: "advanced-engineering",
    module: "Open Source Engineering",
    title: "Open-Source Engineering",
    what: "A meaningful external contribution demonstrates that an engineer can follow unfamiliar conventions, scope work, communicate with maintainers, satisfy CI, and respond to review evidence.",
    why: "External review removes the safety of being the only person who understands the project and exposes real collaboration constraints.",
    keyPoints: ["Read contribution guidelines and recent merged work before choosing a task.", "Keep pull requests focused and testable.", "Treat maintainer feedback as project evidence.", "Record the final outcome and what changed during review."],
    resource: { title: "GitHub — Contributing to Open Source", url: "https://docs.github.com/en/get-started/exploring-projects-on-github/contributing-to-open-source" }
  },
  {
    id: "c-ae-specialization",
    stage: "advanced-engineering",
    module: "Specialization",
    title: "Specialization & Technical Depth",
    what: "Technical depth comes from sustained work on a difficult problem with measurable goals, iterative experiments, documented trade-offs, peer review, and a final technical explanation.",
    why: "Completing many unrelated tutorials demonstrates breadth; depth requires evidence that you can investigate, build, evaluate, and defend decisions in one difficult area.",
    keyPoints: ["Choose 1–2 tracks rather than attempting every specialization topic.", "Define a difficult problem and measurable success criteria.", "Show multiple iterations and explain failed or discarded approaches.", "Publish evidence another engineer can review and reproduce."],
    resource: { title: "Google SRE Book", url: "https://sre.google/sre-book/table-of-contents/" }
  }
];

concept3.push(...stage14Concepts);
