import { stage1 } from "./stage1.js";
import { stage2 } from "./stage2.js";
import { lessonBeginner } from "./lessonBeginner.js";
import { lessonFoundation } from "./lessonFoundation.js";
import { lessonProgramming } from "./lessonProgramming.js";
import { lessonComputerScience } from "./lessonComputerScience.js";
import { lessonComputerScienceExpansion } from "./lessonComputerScienceExpansion.js";
import { lessonWebDevelopmentExpansion } from "./lessonWebDevelopmentExpansion.js";
import { lessonFrontendExpansion } from "./lessonFrontendExpansion.js";
import { lessonUIUXExpansion } from "./lessonUIUXExpansion.js";
import { lessonBackendExpansion } from "./lessonBackendExpansion.js";
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
import { conceptUIUXExpansion } from "./conceptUIUXExpansion.js";
import { conceptBackendExpansion } from "./conceptBackendExpansion.js";
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
    return { ...s, skills: [...s.skills, "Choosing an appropriate collection type for a problem", "Designing basic test cases for program behavior"], concepts: [...s.concepts, "Map and Set", "Testing and verification of program behavior"], assessments: [...s.assessments, "Can you choose between an Array, Object, Map, or Set for a given problem and justify the choice?", "Can you design normal, edge-case, and invalid-input test cases for a function from its specification?"], resources: [...s.resources, "MDN: Keyed collections", "MDN: JavaScript testing and test-your-skills resources"] };
  }
  if (s.id === "computer-science") {
    return { ...s, skills: [...s.skills, "Recognizing binary-tree and BST structure", "Traversing graphs with BFS and DFS", "Choosing graph representations based on density and operations", "Selecting an algorithmic strategy for an unfamiliar problem"], concepts: [...s.concepts, "Binary trees and BSTs", "Tree traversal: preorder, inorder, postorder", "Graph representation and traversal", "BFS and DFS", "Priority queues and binary heaps", "Algorithmic problem-solving strategies", "Brute force, divide-and-conquer, greedy thinking, memoization, and introductory dynamic programming"], projects: [...s.projects, "Implement a basic BST and compare lookup behavior with Map", "Build a graph and implement BFS and DFS", "Take one problem from brute force to an improved solution and document complexity and trade-offs"], assessments: [...s.assessments, "Given a tree, identify whether it satisfies the BST property and produce its inorder traversal.", "Given a graph, choose BFS or DFS for the task and explain the difference in traversal behavior.", "Given an unfamiliar problem, propose a brute-force baseline, analyze its complexity, and identify a suitable improvement strategy.", "Explain why a balanced BST can support approximately logarithmic search while a degenerate BST can require linear search."], resources: [...s.resources, "MIT 6.006: Introduction to Algorithms — Lecture Notes", "MIT 6.006: Introduction to Algorithms — Syllabus"] };
  }
  if (s.id === "web-development") {
    return { ...s, skills: [...s.skills, "Building accessible forms with native validation", "Persisting simple client-side preferences", "Using URL and browser APIs for page state", "Testing accessibility with automated and manual checks", "Diagnosing basic web performance bottlenecks"], concepts: [...s.concepts, "Forms and constraint validation", "Client-side storage and browser APIs", "Accessibility testing and WCAG 2.2", "Web performance fundamentals"], projects: [...s.projects, "Build an accessible registration form with native validation", "Build a browser preferences app using Web Storage and URL state"], assessments: [...s.assessments, "Build a form using semantic controls, native constraints, FormData, and accessible validation feedback; explain why server-side validation is still required.", "Persist non-sensitive preferences across reloads and use URLSearchParams for shareable page state.", "Audit a page with keyboard navigation and an automated accessibility checker, then document concrete fixes.", "Use DevTools to identify a basic performance bottleneck and explain the change made to address it."], resources: [...s.resources, "MDN: Your first form", "MDN: Client-side form validation", "MDN: FormData", "MDN: Web Storage API", "MDN: URLSearchParams", "W3C: Web Content Accessibility Guidelines (WCAG) 2.2", "MDN: Web performance"] };
  }
  if (s.id === "frontend") {
    return { ...s, skills: [...s.skills, "Designing state ownership and derived state", "Using reducers and Context for coordinated state", "Using Effects and refs only for external synchronization", "Modeling reliable async UI and server state", "Building nested, URL-driven application navigation", "Applying TypeScript contracts across React components and data boundaries", "Writing behavior-focused React tests"], concepts: [...s.concepts, "React rendering and reconciliation", "State ownership, derived state, reducers, and Context", "Effects, refs, cleanup, and escape hatches", "Server state and asynchronous UI", "React Router nested navigation and URL state", "Strict TypeScript patterns for React", "Behavior-focused component testing", "React performance profiling and rendering costs"], projects: [...s.projects, "Build a multi-component task manager using reducer + Context with documented state ownership", "Build a routed dashboard with nested layouts, dynamic routes, URL-driven filtering, and route-level error handling", "Convert the movie/recipe search app to strict TypeScript with reliable async states and cancellation", "Add behavior-focused tests for navigation, forms, shared state, and API states"], assessments: [...s.assessments, "Given a component tree, identify the correct owner for each piece of state and remove duplicated derived state.", "Explain whether a useEffect is necessary, identify its external system, and describe its cleanup and dependencies.", "Design a fetch flow that handles loading, empty, error, cancellation, stale responses, and retry behavior.", "Build nested React Router routes with path parameters and URL search parameters, including a not-found route.", "Type a non-trivial React component, reducer, event handler, and API boundary in strict TypeScript without any.", "Write behavior-focused tests for a form and asynchronous component using React Testing Library and Vitest."], resources: [...s.resources, "React: Managing State", "React: Escape Hatches", "React: You Might Not Need an Effect", "React: Using TypeScript", "React: React Developer Tools", "React Router: Official Documentation", "Vitest: Official Documentation", "React Testing Library: Introduction", "TypeScript Handbook"], exitCriteria: "Build a multi-view React + TypeScript application from a specification with deliberate state ownership, routing, forms, reliable asynchronous data states, typed boundaries, accessible UI, and behavior-focused tests. Explain the rendering, state, and data-flow decisions rather than copying boilerplate." };
  }
  if (s.id === "ui-ux") {
    return {
      ...s,
      skills: [...s.skills, "Conducting lightweight UX research", "Synthesizing research into actionable requirements", "Designing interaction states and feedback", "Creating responsive layouts", "Building token-based Figma systems", "Using Figma variables and component properties", "Running basic usability tests", "Designing against WCAG principles", "Translating Figma decisions into implementation constraints"],
      concepts: [...s.concepts, "UX research and evidence", "Interaction design and interface states", "Responsive design and layout constraints", "Design tokens, variables, and modes", "Component properties and scalable Figma systems", "Usability testing and iteration", "Accessibility-first interface design", "Design-to-code handoff"],
      projects: [...s.projects, "Take one product idea through lightweight research, synthesis, IA, and wireframes", "Redesign a small interface responsively for desktop, tablet, and mobile", "Create a token-based Figma design system using variables, modes, components, and properties", "Prototype and usability-test a 3–5 screen flow, then iterate from findings", "Perform an accessibility-first redesign with a documented WCAG review"],
      assessments: [...s.assessments, "Can you distinguish research evidence from assumptions and turn findings into design requirements?", "Can you create a sitemap and task flow with alternate and failure paths?", "Can you specify the meaningful interaction states and recovery behavior of a component?", "Can you explain how a Figma responsive layout maps to CSS Flexbox or Grid?", "Can you build a reusable Figma system with variables, modes, variants, and component properties?", "Can you run a neutral task-based usability test and convert observations into design changes?", "Can you identify accessibility issues beyond color contrast and explain the relevant WCAG considerations?", "Can you create a developer handoff with component contracts, responsive rules, states, tokens, and accessibility requirements?"],
      resources: [...s.resources, "Figma: Design Systems", "Figma: Variables, collections and modes", "Figma: Component properties", "Figma: Auto Layout", "Figma: Prototyping", "Figma: Dev Mode", "Nielsen Norman Group: User Research Methods", "Nielsen Norman Group: Usability Testing 101", "W3C: WCAG 2.2"],
      exitCriteria: "You can take a rough product idea through evidence-based UX research, information architecture, responsive wireframes, a reusable Figma design system, an interactive prototype, usability iteration, accessibility review, and an implementation-ready developer handoff."
    };
  }
  if (s.id === "backend") {
    return {
      ...s,
      skills: [...s.skills, "Designing maintainable Express architectures", "Defining explicit API contracts and error models", "Writing unit, integration, and API tests", "Managing transaction boundaries and concurrency", "Threat-modeling API authorization and abuse cases", "Processing uploads and background jobs safely", "Measuring and improving backend performance", "Managing production configuration and secrets", "Using structured logs, health checks, and request correlation"],
      concepts: [...s.concepts, "Express architecture and middleware lifecycle", "API contracts and consistent error design", "Backend testing strategy", "Transactions, concurrency, and data integrity", "OWASP API Security", "File uploads, streams, and background processing", "Caching, rate limiting, and backend performance", "Configuration, secrets, and production readiness", "API documentation and observability"],
      projects: [...s.projects, "Refactor the note API into a maintainable feature-based architecture", "Build a fully tested API with contract-driven validation and error handling", "Implement a transaction-safe business operation with database constraints", "Audit and remediate the API against the OWASP API Security Top 10", "Build a secure file-upload pipeline with asynchronous processing and job status", "Add measured caching and rate limiting to a read-heavy endpoint", "Harden and document the API for production with configuration, health checks, logs, and request IDs"],
      assessments: [...s.assessments, "Explain where routing, business logic, and data-access responsibilities belong in an Express application.", "Design a consistent error contract and choose appropriate status codes for validation, authentication, authorization, conflict, rate-limit, and server failures.", "Write tests for authenticated and unauthorized API behavior beyond the happy path.", "Identify a cross-user object authorization bug and propose a regression test.", "Explain why a uniqueness check can fail under concurrency and where the database constraint and transaction belong.", "Choose appropriate controls for uploads, background jobs, rate limiting, caching, and secrets.", "Given structured logs and request IDs, diagnose the likely failing backend boundary."],
      resources: [...s.resources, "Express: Using Middleware", "Express: Routing", "Express: Error Handling", "OpenAPI Specification", "OWASP API Security Top 10", "OWASP API Top 10 Developer Guide", "Node.js Test Runner", "PostgreSQL: Transactions", "Node.js: Streams", "Node.js: Environment Variables"],
      exitCriteria: "You can design, build, test, secure, document, and operate a REST API backed by PostgreSQL, with deliberate architecture, real authentication and authorization, transaction-safe business rules, asynchronous processing, measured performance controls, production configuration, and useful observability."
    };
  }
  return s;
});

export const lessons = [...lessonBeginner, ...lessonFoundation, ...lessonProgramming, ...lessonComputerScience, ...lessonComputerScienceExpansion, ...lessonWebDevelopmentExpansion, ...lessonFrontendExpansion, ...lessonUIUXExpansion, ...lessonBackendExpansion, ...lessonA1, ...lessonA2, ...lessonA3];
export const lessons2 = [...lessonB1, ...lessonB2, ...lessonB3, ...lessonB4];
export const conceptCards = [...shortcutReferenceBeginner, ...conceptBeginner, ...conceptFoundation, ...conceptProgramming, ...conceptComputerScience, ...conceptComputerScienceExpansion, ...conceptWebDevelopmentExpansion, ...conceptFrontendExpansion, ...conceptUIUXExpansion, ...conceptBackendExpansion, ...concept1, ...concept2, ...concept3];
export { skillMatrix, tools, resourceLibrary, projectLadder, methodology };
export const allLessons = [...lessons, ...lessons2];
