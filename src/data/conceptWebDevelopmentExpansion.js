export const conceptWebDevelopmentExpansion = [
  {
    id: "c-accessibility-testing-wcag",
    stage: "web-development",
    module: "Accessibility",
    title: "Accessibility Testing & WCAG 2.2",
    what: "Accessibility testing checks whether people with different abilities can perceive, operate, understand, and interact with a web page. WCAG 2.2 provides a shared standard for evaluating accessibility.",
    why: "Semantic HTML is a strong foundation, but accessible markup alone does not guarantee an accessible experience. Testing catches keyboard, focus, naming, contrast, form, and interaction problems that otherwise reach users.",
    keyPoints: [
      "WCAG 2.2 is organized around four principles: perceivable, operable, understandable, and robust.",
      "Keyboard testing: every interactive control should be reachable and usable without a mouse.",
      "Visible focus: users navigating by keyboard need to see where focus is.",
      "Accessible names: controls need meaningful names that assistive technology can expose.",
      "Forms: labels, instructions, error identification, and recovery all matter.",
      "Color contrast and non-color cues help users perceive content and state changes.",
      "Automated tools such as Lighthouse and axe can find some problems, but they cannot prove complete accessibility.",
      "Manual testing with keyboard navigation and, where possible, assistive technology complements automated checks.",
      "Accessibility should be tested during development rather than treated as a final visual polish pass."
    ],
    resource: { title: "W3C — Web Content Accessibility Guidelines (WCAG) 2.2", url: "https://www.w3.org/TR/WCAG22/" }
  },
  {
    id: "c-web-performance",
    stage: "web-development",
    module: "Performance",
    title: "Web Performance Fundamentals",
    what: "Web performance is about how quickly a page loads, becomes usable, responds to interaction, and remains responsive. Performance depends on the amount of work and data sent to the browser as well as how efficiently the browser can process it.",
    why: "A visually polished page that loads slowly or responds poorly is still a poor user experience. Developers need a basic model for finding expensive assets, unnecessary requests, blocking scripts, and other common bottlenecks before later stages introduce deeper performance engineering.",
    keyPoints: [
      "Page weight: HTML, CSS, JavaScript, fonts, images, and other assets all consume network and processing resources.",
      "Network requests have latency; reducing unnecessary requests and payload size can improve loading time.",
      "Use responsive images, appropriate formats, and lazy loading where appropriate.",
      "Use script loading strategies such as defer when they fit the page's execution needs.",
      "Avoid unnecessary JavaScript when HTML and CSS can perform the job.",
      "Core Web Vitals provide standardized user-centered measurements of loading, responsiveness, and visual stability.",
      "The Network panel and Performance tools in DevTools help identify where time and bytes are being spent.",
      "Lighthouse and PageSpeed Insights are diagnostic tools, not substitutes for understanding the underlying bottleneck.",
      "Perceived performance matters: users care about when meaningful content becomes available and when interactions respond."
    ],
    resource: { title: "MDN — Web performance", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Performance/What_is_web_performance" }
  }
];
