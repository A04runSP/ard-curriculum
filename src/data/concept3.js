export const concept3 = [
{ id:"c-performance", stage:"advanced-engineering", module:"Performance", title:"Frontend & Backend Performance Profiling",
  what:"Performance profiling means measuring where time and resources actually go (not guessing) — using browser DevTools' Performance/Lighthouse tabs on the frontend, and query/response-time monitoring on the backend.",
  why:"Optimizing without measuring first frequently wastes effort on the wrong thing entirely; a profiler tells you the actual bottleneck, which is very often not where intuition points.",
  keyPoints:["Lighthouse (built into Chrome DevTools) scores real performance metrics (Largest Contentful Paint, Cumulative Layout Shift, etc.) and gives specific, prioritized fixes.",
    "Common frontend wins: image optimization/lazy loading, code splitting (loading JS only when needed), reducing unnecessary re-renders.",
    "Common backend wins: adding an index on a slow query (check with EXPLAIN), caching expensive/repeated computations, reducing N+1 queries.",
    "Always measure before and after a change — 'feels faster' is not evidence; a number is."],
  resource:{title:"web.dev — Performance guides", url:"https://web.dev/explore/fast"}}
];