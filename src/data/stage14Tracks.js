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

export const stage14SpecializationModel = {
  requiredLessonIds,
  selectionRule: "Complete the shared core, then choose 1–2 specialization tracks. The specialization capstone uses the chosen track(s) as its technical depth area.",
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

import("./stage2.js").then(({ stage2 }) => {
  const stage = stage2.find(s => s.id === "advanced-engineering");
  if (!stage) return;

  stage.stage14LearningModel = stage14SpecializationModel;
  stage.specializationTracks = stage14SpecializationModel.tracks;
  stage.coreLessonIds = requiredLessonIds;
  stage.electiveLessonIds = Object.values(trackByLesson);
  stage.projects = [
    "Complete the shared Stage 14 engineering core and maintain an evidence log of advanced work",
    "Complete one meaningful, reviewed open-source contribution",
    "Complete the Advanced Engineering Specialization Capstone using 1–2 selected tracks"
  ];
  stage.assessments = [
    "Can you establish a reproducible baseline and identify the dominant bottleneck before optimizing?",
    "Can you threat-model a real feature and implement preventive, detective, and recovery controls?",
    "Can you enter an unfamiliar codebase and make a safe, scoped change?",
    "Can you complete and respond to review on an external open-source contribution?",
    "Can you complete a specialization track project with measurable evidence and defend the trade-offs?"
  ];
  stage.exitCriteria = "You have completed the shared advanced-engineering core, selected 1–2 specialization tracks, produced measurable technical evidence in the chosen direction(s), completed a reviewed external contribution, and shipped a specialization capstone with tests, trade-offs, iterations, and a technical explanation.";
});
