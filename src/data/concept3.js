export const concept3 = [
{ id:"c-performance", stage:"advanced-engineering", module:"Performance", title:"Frontend & Backend Performance Profiling",
  what:"Performance profiling means measuring where time and resources actually go (not guessing) — using browser DevTools' Performance/Lighthouse tabs on the frontend, and query/response-time monitoring on the backend.",
  why:"Optimizing without measuring first frequently wastes effort on the wrong thing entirely; a profiler tells you the actual bottleneck, which is very often not where intuition points.",
  keyPoints:["Lighthouse (built into Chrome DevTools) scores real performance metrics (Largest Contentful Paint, Cumulative Layout Shift, etc.) and gives specific, prioritized fixes.",
    "Common frontend wins: image optimization/lazy loading, code splitting (loading JS only when needed), reducing unnecessary re-renders.",
    "Common backend wins: adding an index on a slow query (check with EXPLAIN), caching expensive/repeated computations, reducing N+1 queries.",
    "Always measure before and after a change — 'feels faster' is not evidence; a number is."],
  resource:{title:"web.dev — Performance guides", url:"https://web.dev/explore/fast"}},
{ id:"c-project-ladder-methodology", stage:"professional", module:"Career Practice", title:"Technical Interviewing & Working in Existing Codebases",
  what:"Technical interviews typically combine coding challenges, system design discussions, and behavioral questions. Working in an existing, unfamiliar codebase is a distinct skill from building your own projects from scratch — reading and safely modifying code you didn't write.",
  why:"Almost every job (and most serious freelance work) involves inheriting someone else's code far more often than starting fresh — and getting hired requires clearing interview formats that don't test your projects directly, but test underlying fundamentals.",
  keyPoints:["Practice coding problems out loud, explaining your reasoning — the communication is often weighted as heavily as the correct answer.",
    "For an unfamiliar codebase: read the README and tests first, trace one real request/feature end-to-end before changing anything, and make the smallest possible correct change.",
    "In a system design interview, always clarify requirements and scale assumptions before diving into a solution — this mirrors real practice, not just interview theater.",
    "Behavioral questions reward specific, honest stories with a clear outcome, not generic claims — your own project decisions and trade-offs are real material for this."],
  resource:{title:"System Design Primer — interview section", url:"https://github.com/donnemartin/system-design-primer"}}
];