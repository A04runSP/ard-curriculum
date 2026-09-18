export const conceptFrontendExpansion = [
{
  id: "c-react-rendering-reconciliation",
  stage: "frontend",
  module: "React Mental Models",
  title: "React Rendering & Reconciliation",
  what: "React rendering is the process of calling components to calculate the next UI description from current props and state. React then reconciles that result with the previous one and commits the necessary DOM changes.",
  why: "Understanding rendering prevents a common category of React confusion: a component function running again does not mean the entire DOM was rebuilt, and a render does not automatically mean an Effect should run. The distinction is essential for reasoning about state and performance.",
  keyPoints: [
    "A state or prop change can schedule a render of a component subtree.",
    "Rendering should be pure: do not mutate external systems or perform side effects during render.",
    "React compares the new element tree with the previous result and commits the required changes.",
    "Keys provide identity for list items and affect whether React preserves or resets state.",
    "A re-render is not itself a performance bug; measure actual expensive work before optimizing.",
    "Strict Mode development behavior can expose impure rendering and unsafe assumptions."
  ],
  resource: { title: "React — Render and Commit", url: "https://react.dev/learn/render-and-commit" }
},
{
  id: "c-react-state-architecture",
  stage: "frontend",
  module: "React State Architecture",
  title: "React State Architecture",
  what: "State architecture is the set of decisions about what should be state, where it should live, how components share it, and how state transitions are represented.",
  why: "Most state bugs come from unclear ownership or duplicated sources of truth rather than from the useState API itself. A clear state model makes components easier to test and refactor.",
  keyPoints: [
    "Prefer the smallest source state and derive values during render.",
    "Keep state as close as possible to the components that own it.",
    "Lift state when sibling components need to coordinate around one source of truth.",
    "Use useReducer when transitions are complex or action-oriented.",
    "Use Context to provide shared values across a subtree, not as a default global store.",
    "Separate local UI state, URL state, form state, and remote server data conceptually."
  ],
  resource: { title: "React — Managing State", url: "https://react.dev/learn/managing-state" }
},
{
  id: "c-react-effects-escape-hatches",
  stage: "frontend",
  module: "React Effects",
  title: "React Effects & Escape Hatches",
  what: "Effects and refs are escape hatches for synchronizing React with systems outside React's rendering model. They should be introduced when that external interaction exists, not simply because data changed.",
  why: "A strong Effect mental model reduces render loops, stale closures, duplicated state, and cleanup bugs. It also clarifies when ordinary rendering or event handlers are the simpler solution.",
  keyPoints: [
    "Render is for calculating UI; event handlers are for user actions; Effects are for external synchronization.",
    "Every Effect should have a clear synchronization purpose and correct reactive dependencies.",
    "Cleanup reverses the setup when dependencies change or the component leaves the tree.",
    "Refs persist values between renders without triggering a render when changed.",
    "If no external system is involved, ask whether the Effect can be removed."
  ],
  resource: { title: "React — Escape Hatches", url: "https://react.dev/learn/escape-hatches" }
},
{
  id: "c-react-performance-rendering",
  stage: "frontend",
  module: "React Performance",
  title: "React Performance & Rendering",
  what: "React performance is primarily about controlling unnecessary work: expensive calculations, large component trees, excessive Effects, unnecessary state lifting, and avoidable network activity.",
  why: "Memoization is often introduced too early. The better workflow is to keep rendering pure, remove unnecessary work, measure with profiling tools, and optimize the actual bottleneck.",
  keyPoints: [
    "A re-render is not automatically a problem; expensive work is what needs attention.",
    "Keep state local where possible and avoid unnecessary Effects that trigger extra render cycles.",
    "useMemo and useCallback are optimization tools, not default requirements for every value or function.",
    "Use React DevTools Profiler to identify components and interactions that actually cost time.",
    "Large lists, expensive calculations, network waterfalls, and oversized bundles can require different fixes."
  ],
  resource: { title: "React — React Developer Tools", url: "https://react.dev/learn/react-developer-tools" }
}
];