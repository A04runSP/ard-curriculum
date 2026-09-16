import { stage1 } from "./stage1.js";
import { stage2 } from "./stage2.js";
import { lessonBeginner } from "./lessonBeginner.js";
import { lessonFoundation } from "./lessonFoundation.js";
import { lessonProgramming } from "./lessonProgramming.js";
import { lessonComputerScience } from "./lessonComputerScience.js";
import { lessonComputerScienceExpansion } from "./lessonComputerScienceExpansion.js";
import { lessonWebDevelopmentExpansion } from "./lessonWebDevelopmentExpansion.js";
import { lessonFrontendExpansion } from "./lessonFrontendExpansion.js";
import { lessonA1 } from "./lessonA1.js";
import { lessonA2 } from "./lessonA2.js";
import { lessonA3 } from "./lessonA3.js";
import { lessonB1 } from "./lessonB1.js";
import { lessonB2 } from "./lessonB2.js";
import { lessonB3 } from "./lessonB3.js";
import { lessonB4 } from "./lessonB4.js";
import { shortcutReferenceBeginner } from "./shortcutReferenceBeginner.js";
import { conceptBeginner } from "./conceptBeginner.js";
import { conceptFoundation } from "./conceptFoundation.js";
import { conceptProgramming } from "./conceptProgramming.js";
import { conceptComputerScience } from "./conceptComputerScience.js";
import { conceptComputerScienceExpansion } from "./conceptComputerScienceExpansion.js";
import { conceptWebDevelopmentExpansion } from "./conceptWebDevelopmentExpansion.js";
import { conceptFrontendExpansion } from "./conceptFrontendExpansion.js";
import { concept1 } from "./concept1.js";
import { concept2 } from "./concept2.js";
import { concept3 } from "./concept3.js";
import { skillMatrix } from "./skillMatrix.js";
import { tools } from "./tools.js";
import { resourceLibrary } from "./resourceLibrary.js";
import { projectLadder } from "./projectLadder.js";
import { methodology } from "./methodology.js";

const baseStages = [...stage1, ...stage2];

export const stages = baseStages.map(s => {
  if (s.id === "programming") {
    return {
      ...s,
      skills: [
        ...s.skills,
        "Choosing an appropriate collection type for a problem",
        "Designing basic test cases for program behavior"
      ],
      concepts: [
        ...s.concepts,
        "Map and Set",
        "Testing and verification of program behavior"
      ],
      assessments: [
        ...s.assessments,
        "Can you choose between an Array, Object, Map, or Set for a given problem and justify the choice?",
        "Can you design normal, edge-case, and invalid-input test cases for a function from its specification?"
      ],
      resources: [
        ...s.resources,
        "MDN: Keyed collections",
        "MDN: JavaScript testing and test-your-skills resources"
      ]
    };
  }

  if (s.id === "computer-science") {
    return {
      ...s,
      skills: [
        ...s.skills,
        "Recognizing binary-tree and BST structure",
        "Traversing graphs with BFS and DFS",
        "Choosing graph representations based on density and operations",
        "Selecting an algorithmic strategy for an unfamiliar problem"
      ],
      concepts: [
        ...s.concepts,
        "Binary trees and BSTs",
        "Tree traversal: preorder, inorder, postorder",
        "Graph representation and traversal",
        "BFS and DFS",
        "Priority queues and binary heaps",
        "Algorithmic problem-solving strategies",
        "Brute force, divide-and-conquer, greedy thinking, memoization, and introductory dynamic programming"
      ],
      projects: [
        ...s.projects,
        "Implement a basic BST and compare lookup behavior with Map",
        "Build a graph and implement BFS and DFS",
        "Take one problem from brute force to an improved solution and document complexity and trade-offs"
      ],
      assessments: [
        ...s.assessments,
        "Given a tree, identify whether it satisfies the BST property and produce its inorder traversal.",
        "Given a graph, choose BFS or DFS for the task and explain the difference in traversal behavior.",
        "Given an unfamiliar problem, propose a brute-force baseline, analyze its complexity, and identify a suitable improvement strategy.",
        "Explain why a balanced BST can support approximately logarithmic search while a degenerate BST can require linear search."
      ],
      resources: [
        ...s.resources,
        "MIT 6.006: Introduction to Algorithms — Lecture Notes",
        "MIT 6.006: Introduction to Algorithms — Syllabus"
      ]
    };
  }

  if (s.id === "web-development") {
    return {
      ...s,
      skills: [
        ...s.skills,
        "Building accessible forms with native validation",
        "Persisting simple client-side preferences",
        "Using URL and browser APIs for page state",
        "Testing accessibility with automated and manual checks",
        "Diagnosing basic web performance bottlenecks"
      ],
      concepts: [
        ...s.concepts,
        "Forms and constraint validation",
        "Client-side storage and browser APIs",
        "Accessibility testing and WCAG 2.2",
        "Web performance fundamentals"
      ],
      projects: [
        ...s.projects,
        "Build an accessible registration form with native validation",
        "Build a browser preferences app using Web Storage and URL state"
      ],
      assessments: [
        ...s.assessments,
        "Build a form using semantic controls, native constraints, FormData, and accessible validation feedback; explain why server-side validation is still required.",
        "Persist non-sensitive preferences across reloads and use URLSearchParams for shareable page state.",
        "Audit a page with keyboard navigation and an automated accessibility checker, then document concrete fixes.",
        "Use DevTools to identify a basic performance bottleneck and explain the change made to address it."
      ],
      resources: [
        ...s.resources,
        "MDN: Your first form",
        "MDN: Client-side form validation",
        "MDN: FormData",
        "MDN: Web Storage API",
        "MDN: URLSearchParams",
        "W3C: Web Content Accessibility Guidelines (WCAG) 2.2",
        "MDN: Web performance"
      ]
    };
  }

  if (s.id === "frontend") {
    return {
      ...s,
      skills: [
        ...s.skills,
        "Designing state ownership and derived state",
        "Using reducers and Context for coordinated state",
        "Using Effects and refs only for external synchronization",
        "Modeling reliable async UI and server state",
        "Building nested, URL-driven application navigation",
        "Applying TypeScript contracts across React components and data boundaries",
        "Writing behavior-focused React tests"
      ],
      concepts: [
        ...s.concepts,
        "React rendering and reconciliation",
        "State ownership, derived state, reducers, and Context",
        "Effects, refs, cleanup, and escape hatches",
        "Server state and asynchronous UI",
        "React Router nested navigation and URL state",
        "Strict TypeScript patterns for React",
        "Behavior-focused component testing",
        "React performance profiling and rendering costs"
      ],
      projects: [
        ...s.projects,
        "Build a multi-component task manager using reducer + Context with documented state ownership",
        "Build a routed dashboard with nested layouts, dynamic routes, URL-driven filtering, and route-level error handling",
        "Convert the movie/recipe search app to strict TypeScript with reliable async states and cancellation",
        "Add behavior-focused tests for navigation, forms, shared state, and API states"
      ],
      assessments: [
        ...s.assessments,
        "Given a component tree, identify the correct owner for each piece of state and remove duplicated derived state.",
        "Explain whether a useEffect is necessary, identify its external system, and describe its cleanup and dependencies.",
        "Design a fetch flow that handles loading, empty, error, cancellation, stale responses, and retry behavior.",
        "Build nested React Router routes with path parameters and URL search parameters, including a not-found route.",
        "Type a non-trivial React component, reducer, event handler, and API boundary in strict TypeScript without any.",
        "Write behavior-focused tests for a form and asynchronous component using React Testing Library and Vitest."
      ],
      resources: [
        ...s.resources,
        "React: Managing State",
        "React: Escape Hatches",
        "React: You Might Not Need an Effect",
        "React: Using TypeScript",
        "React: React Developer Tools",
        "React Router: Official Documentation",
        "Vitest: Official Documentation",
        "React Testing Library: Introduction",
        "TypeScript Handbook"
      ],
      exitCriteria: "Build a multi-view React + TypeScript application from a specification with deliberate state ownership, routing, forms, reliable asynchronous data states, typed boundaries, accessible UI, and behavior-focused tests. Explain the rendering, state, and data-flow decisions rather than copying boilerplate."
    };
  }

  return s;
});

export const lessons = [...lessonBeginner, ...lessonFoundation, ...lessonProgramming, ...lessonComputerScience, ...lessonComputerScienceExpansion, ...lessonWebDevelopmentExpansion, ...lessonFrontendExpansion, ...lessonA1, ...lessonA2, ...lessonA3];
export const lessons2 = [...lessonB1, ...lessonB2, ...lessonB3, ...lessonB4];
export const conceptCards = [...shortcutReferenceBeginner, ...conceptBeginner, ...conceptFoundation, ...conceptProgramming, ...conceptComputerScience, ...conceptComputerScienceExpansion, ...conceptWebDevelopmentExpansion, ...conceptFrontendExpansion, ...concept1, ...concept2, ...concept3];
export { skillMatrix, tools, resourceLibrary, projectLadder, methodology };
export const allLessons = [...lessons, ...lessons2];
