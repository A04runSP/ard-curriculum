import "./stage3Expansion.js";
import { lessonB7 } from "./lessonB7.js";

// Stage 14 is intentionally split into a shared core plus selectable depth tracks.
// Learners complete the core, then choose 1–2 specialization tracks rather than
// treating every advanced lesson as mandatory.
const requiredLessonIds = [
  "l-ae-profiling",
  "l-ae-security-depth",
  "l-ae-large-codebase",
  "l-ae-open-source",
  "l-ae-specialization-capstone"
];

const trackByLesson = {
  "l-ae-web-performance": "frontend-performance",
  "l-ae-react-architecture": "frontend-performance",
  "l-ae-backend-performance": "backend-systems",
  "l-ae-backend-infra": "backend-systems",
  "l-ae-typescript-scale": "typescript-architecture"
};

lessonB7.forEach(lesson => {
  if (requiredLessonIds.includes(lesson.id)) {
    lesson.stage14Role = "core";
    lesson.track = null;
  } else if (trackByLesson[lesson.id]) {
    lesson.stage14Role = "specialization";
    lesson.track = trackByLesson[lesson.id];
  }
});

const reactArchitectureLesson = lessonB7.find(lesson => lesson.id === "l-ae-react-architecture");
if (reactArchitectureLesson) {
  reactArchitectureLesson.coreConcepts = [
    ...reactArchitectureLesson.coreConcepts,
    "React 19 Actions and useActionState",
    "useOptimistic and optimistic mutation design",
    "React 19.3 View Transitions and Fragment Refs",
    "Activity and modern rendering coordination"
  ];
  reactArchitectureLesson.resources = [
    ...reactArchitectureLesson.resources,
    { title: "React 19.3 — Official Blog", url: "https://react.dev/blog/2026/09/09/react-19-3", note: "Current stable React 19.3 features and architecture changes." }
  ];
}

const capstoneLesson = lessonB7.find(lesson => lesson.id === "l-ae-specialization-capstone");
if (capstoneLesson) {
  capstoneLesson.what = "The final Stage 14 project turns one or two selected specializations into measurable evidence of depth rather than a collection of disconnected tutorials.";
  capstoneLesson.mentalModel = "select 1–2 tracks → define a hard problem → establish evidence → experiment → implement → measure → review → iterate → explain";
  capstoneLesson.coreConcepts = [
    ...capstoneLesson.coreConcepts,
    "Integrating two selected tracks when the engineering problem genuinely benefits from both"
  ];
  capstoneLesson.practice = "Write a capstone proposal with one or two selected specializations, one difficult problem, measurable success criteria, risks, and a six-iteration plan.";
}

export const stage14SpecializationModel = {
  requiredLessonIds,
  selectionRule: "Complete the shared core, then choose 1–2 specialization tracks. The specialization capstone must demonstrate measurable depth in at least one selected track and may integrate a second selected track where it strengthens the engineering problem.",
  core: [
    "Advanced Profiling: Measure Before You Optimize",
    "Security Engineering in Depth",
    "Working Safely in a Large Existing Codebase",
    "Open-Source Contribution & Maintainer Collaboration",
    "Advanced Engineering Capstone: Depth in One Direction"
  ],
  tracks: [
    {
      id: "frontend-performance",
      title: "Frontend Performance & React Architecture",
      lessonIds: ["l-ae-web-performance", "l-ae-react-architecture"],
      outcome: "Diagnose and improve rendering, interaction, network, and React architecture problems using profiling evidence.",
      project: "Optimize a real React application, document the baseline and bottlenecks, then redesign the relevant rendering/state boundaries and verify the result."
    },
    {
      id: "backend-systems",
      title: "Backend Performance & Infrastructure",
      lessonIds: ["l-ae-backend-performance", "l-ae-backend-infra"],
      outcome: "Diagnose backend, database, concurrency, and finite-resource bottlenecks and apply bounded, measurable improvements.",
      project: "Optimize a real API or worker across application, database, and resource boundaries, then demonstrate behavior under dependency slowdown or load."
    },
    {
      id: "typescript-architecture",
      title: "TypeScript Architecture",
      lessonIds: ["l-ae-typescript-scale"],
      outcome: "Use advanced TypeScript contracts and project boundaries to make a growing codebase safer and easier to maintain.",
      project: "Refactor a multi-module TypeScript project around stronger contracts and justified build/module boundaries, with evidence of improved maintainability."
    }
  ]
};

export const stage14Metadata = {
  objective: "Specialize and deepen through evidence-driven engineering: complete the shared core, choose 1–2 specialization tracks, profile and optimize real systems, strengthen architecture and security, work safely in large codebases, contribute to open source, and produce a measurable depth project.",
  skills: [
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
  ],
  technologies: [
    "Chrome DevTools Performance/Lighthouse",
    "React DevTools Profiler",
    "React 19.3",
    "PostgreSQL EXPLAIN/EXPLAIN ANALYZE",
    "TypeScript",
    "OpenTelemetry concepts",
    "OWASP Top 10:2025",
    "Git/GitHub and open-source workflows",
    "Specialization-specific tools and official APIs"
  ],
  concepts: [
    "Profiling methodology and performance budgets",
    "Core Web Vitals and interaction performance",
    "Backend tail latency, saturation, and query optimization",
    "Advanced React rendering, Actions, optimistic UI, View Transitions, Fragment Refs, and state boundaries",
    "TypeScript generics, discriminated unions, runtime boundaries, and project references",
    "Concurrency limits, resource budgets, and back-pressure",
    "Threat modeling, supply-chain security, and defense in depth",
    "Large-codebase archaeology and incremental change",
    "Open-source contribution and maintainer collaboration",
    "Specialization research, experimentation, and technical communication"
  ],
  projects: [
    "Complete the shared Stage 14 engineering core and maintain an evidence log of advanced work",
    "Complete one meaningful, reviewed open-source contribution",
    "Complete one required project for each selected specialization track",
    "Complete the Advanced Engineering Specialization Capstone using 1–2 selected tracks"
  ],
  assessments: [
    "Can you establish a reproducible baseline and identify the dominant bottleneck before optimizing?",
    "Can you threat-model a real feature and implement preventive, detective, and recovery controls?",
    "Can you enter an unfamiliar codebase and make a safe, scoped change?",
    "Can you complete and respond to review on an external open-source contribution?",
    "Can you complete selected-track projects with measurable evidence and defend the trade-offs?",
    "Can you explain when React 19 Actions, optimistic state, View Transitions, or Fragment Refs improve an application and when they add unnecessary complexity?",
    "Can you defend a specialization capstone using measurements, trade-offs, tests, and documented iterations?"
  ],
  resources: [
    "Chrome DevTools Performance documentation",
    "web.dev Performance documentation",
    "React official performance and React 19 references",
    "PostgreSQL EXPLAIN and monitoring documentation",
    "TypeScript Handbook and Project References",
    "OpenTelemetry documentation",
    "OWASP Top 10:2025",
    "GitHub — Contributing to Open Source",
    "Google SRE Book"
  ],
  exitCriteria: "You have completed the shared advanced-engineering core, selected 1–2 specialization tracks, produced measurable technical evidence in the chosen direction(s), completed a reviewed external contribution, and shipped a specialization capstone with tests, trade-offs, iterations, and a technical explanation."
};

export const stage14TrackLessonIds = Object.keys(trackByLesson);
