export const lessonA2 = [
{
  id: "l-html-semantics",
  stage: "web-development",
  module: "HTML",
  title: "Semantic HTML & Accessibility",
  what: "Semantic HTML means using tags for their meaning (<nav>, <article>, <button>) rather than generic <div>s for everything. It's the structural skeleton that browsers, search engines, and assistive technology (like screen readers) all rely on to understand your page.",
  why: "A page built entirely from <div> and <span> looks fine visually but is invisible to screen readers, worse for SEO, and harder for other developers (including future-you) to understand. Semantic HTML is close to free — it costs nothing extra to write, and it fixes a huge share of accessibility and SEO problems automatically.",
  mentalModel: "Think of HTML tags as labels on a document's outline, not just visual boxes. A blind user's screen reader literally announces 'navigation,' 'main content,' 'button' based on your tags — if everything is a <div>, it announces nothing useful, the same way an unlabeled filing cabinet is useless even if the papers inside are perfectly organized.",
  coreConcepts: [
    "Document structure: <!DOCTYPE html>, <html>, <head>, <body>, and metadata (<meta>, <title>).",
    "Semantic sectioning: <header>, <nav>, <main>, <article>, <section>, <aside>, <footer>.",
    "Semantic text/interactive elements: <button> (not a styled <div>), <a> for navigation, <label> tied to form inputs via `for`/`id`.",
    "Accessible forms: labels, required attributes, appropriate input types (email, tel, date).",
    "ARIA attributes as a last resort — only when no native semantic element does the job.",
    "SEO fundamentals: descriptive <title>, meta description, one <h1> per page, logical heading order."
  ],
  example: "<!-- Bad: a div pretending to be a button, invisible to keyboard/screen-reader users -->\n<div onclick=\"submit()\">Submit</div>\n\n<!-- Good: a real button — free keyboard support, focus, and screen-reader announcement -->\n<button type=\"submit\">Submit</button>",
  code: "<header>\n  <h1>My Portfolio</h1>\n  <nav>\n    <a href=\"#projects\">Projects</a>\n    <a href=\"#contact\">Contact</a>\n  </nav>\n</header>\n<main>\n  <section id=\"projects\">\n    <h2>Projects</h2>\n    <article>\n      <h3>Project One</h3>\n      <p>Description...</p>\n    </article>\n  </section>\n</main>\n<footer>\n  <p>&copy; 2026 Arun</p>\n</footer>",
  commonMistakes: [
    "Using <div class=\"button\"> instead of <button> — you lose free keyboard accessibility, focus styles, and correct screen-reader behavior.",
    "Skipping heading levels (h1 straight to h3) purely for visual size instead of using CSS to style a correctly-ordered h2.",
    "Images with no (or unhelpful, like 'image123.jpg') alt text.",
    "Form inputs with no associated <label>, so screen readers can't announce what the field is for."
  ],
  practice: "Take a page you'd normally build with all <div>s (a simple blog post layout) and rebuild its structure using only semantic tags — no <div> unless truly nothing else fits.",
  challenge: "Build an accessible contact form: proper <label>s, correct input types, a fieldset/legend for a grouped choice (e.g., contact method), and a submit <button> — then tab through it using only your keyboard to confirm it all works without a mouse.",
  miniProject: "Finish your Level-1 portfolio page using fully semantic HTML, run it through a free accessibility checker (e.g., the axe browser extension or Lighthouse in DevTools), and fix every issue it reports.",
  resources: [
    { title: "MDN — HTML: A good basis for accessibility", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility/HTML", note: "Official MDN accessibility module." },
    { title: "web.dev — Learn HTML", url: "https://web.dev/learn/html", note: "Google's structured HTML course." },
    { title: "WCAG Quick Reference (W3C)", url: "https://www.w3.org/WAI/WCAG21/quickref/", note: "The actual accessibility standard, searchable." }
  ],
  mastery: [
    "I default to a semantic tag and only reach for <div>/<span> when no semantic tag fits.",
    "Every image I write has meaningful alt text (or alt=\"\" if it's purely decorative).",
    "Every form input I write is properly labeled.",
    "I can navigate a page I built using only Tab and Enter, with nothing broken."
  ]
},
{
  id: "l-css-layout",
  stage: "web-development",
  module: "CSS",
  title: "The Box Model, Flexbox & Grid",
  what: "The box model describes how every HTML element is rendered as a rectangular box made of content, padding, border, and margin. Flexbox and Grid are the two modern CSS layout systems that let you arrange those boxes — Flexbox for one-dimensional layout (a row or a column), Grid for two-dimensional layout (rows and columns together).",
  why: "Before Flexbox and Grid, centering a div was a running joke in web development because layout was genuinely painful. These two systems solve well over 90% of real layout problems cleanly. Understanding the box model is what stops 'why is there a mystery gap' from being a mystery.",
  mentalModel: "Every element is a box inside a box inside a box (nested rectangles), like Russian nesting dolls, and layout is the art of telling each doll how much space to take and how to arrange itself next to its siblings. Flexbox is 'arrange these boxes in a line, and decide how they share the leftover space.' Grid is 'draw an invisible spreadsheet, and place boxes into its cells.'",
  coreConcepts: [
    "Box model: content → padding → border → margin, and box-sizing: border-box (which you should set globally — it makes width include padding/border, matching how most people intuitively expect sizing to work).",
    "Flexbox: display:flex, flex-direction, justify-content (main axis), align-items (cross axis), flex-wrap, and flex-grow/shrink/basis on children.",
    "Grid: display:grid, grid-template-columns/rows, gap, and placing items with grid-column/grid-row.",
    "When to reach for which: Flexbox for a nav bar, a row of cards, centering one thing; Grid for a full page layout, a photo gallery, a dashboard.",
    "The cascade and specificity: which CSS rule 'wins' when multiple rules target the same element."
  ],
  example: "/* Flexbox: a nav bar with items spread apart, vertically centered */\n.navbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}",
  code: "/* Grid: a responsive card layout that auto-fits as many columns as fit */\n.card-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 1.5rem;\n}\n\n* {\n  box-sizing: border-box; /* do this once, globally, always */\n}",
  commonMistakes: [
    "Forgetting box-sizing: border-box and being confused why widths don't add up.",
    "Reaching for Grid to center one item (that's a one-line Flexbox job: display:flex; justify-content:center; align-items:center;).",
    "Using floats or absolute positioning for layout tasks Flexbox/Grid solve more simply (float is legacy for layout purposes now).",
    "Fighting specificity by adding !important instead of understanding why a rule isn't applying."
  ],
  practice: "Build a Flexbox-based navigation bar with a logo on the left and 4 links on the right, evenly spaced, that stays vertically centered regardless of content height.",
  challenge: "Build a 3-column responsive card grid using CSS Grid with auto-fit/minmax, so it automatically reduces to 1 column on a narrow (mobile) screen with no media query needed.",
  miniProject: "Rebuild your Level-1 portfolio's layout using Flexbox for the header/nav and Grid for the main projects section.",
  resources: [
    { title: "CSS-Tricks — A Complete Guide to Flexbox", url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/", note: "The most-referenced Flexbox guide on the web." },
    { title: "CSS-Tricks — A Complete Guide to Grid", url: "https://css-tricks.com/snippets/css/complete-guide-grid/", note: "Same, for Grid." },
    { title: "MDN — CSS box model", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_box_model", note: "Official reference." }
  ],
  mastery: [
    "I can explain the box model and always set box-sizing: border-box by default.",
    "I can build a common layout (nav bar, card grid, centered modal) without looking up syntax.",
    "I know, before I start, whether a layout calls for Flexbox or Grid."
  ]
},
{
  id: "l-responsive",
  stage: "web-development",
  module: "CSS",
  title: "Responsive Design",
  what: "Responsive design means a single page adapts its layout to fit any screen size — phone, tablet, laptop, ultrawide monitor — using flexible units, media queries, and mobile-first thinking, rather than building separate sites for each device.",
  why: "The majority of web traffic globally is mobile. A site that looks great on a laptop but breaks on a phone is, for most users, simply broken. Responsive design is not optional polish — it's a baseline requirement for any real site.",
  mentalModel: "Design like water, not like ice. Ice is a fixed shape that shatters if the container doesn't match it exactly (a fixed-width layout). Water takes the shape of whatever container it's poured into (a fluid, responsive layout) — your job is to define the rules of that flow, not every exact pixel position.",
  coreConcepts: [
    "Mobile-first: write your base CSS for small screens, then use min-width media queries to add complexity for larger screens (this results in less code and better performance than the reverse).",
    "Relative units: %, rem (relative to root font size — good for consistent, accessible typography), em (relative to parent), vw/vh (viewport-relative) vs fixed px.",
    "Media queries: @media (min-width: 768px) { ... } to change layout at breakpoints.",
    "The viewport meta tag (<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">) — without it, mobile browsers fake a desktop-width viewport and your responsive CSS won't even trigger.",
    "Responsive images (max-width: 100%; height: auto;) and, for real projects, the <picture>/srcset attributes for serving different image sizes."
  ],
  example: "/* Mobile-first: single column by default */\n.gallery { display: grid; grid-template-columns: 1fr; gap: 1rem; }\n\n/* Add columns only once there's room */\n@media (min-width: 768px) {\n  .gallery { grid-template-columns: repeat(3, 1fr); }\n}",
  code: "html { font-size: 100%; } /* respects user's browser font-size setting */\nbody { font-size: 1rem; line-height: 1.5; }\nh1 { font-size: clamp(1.75rem, 4vw + 1rem, 3rem); } /* fluid, scales smoothly between breakpoints */\nimg { max-width: 100%; height: auto; display: block; }",
  commonMistakes: [
    "Forgetting the viewport meta tag entirely (the single most common cause of 'my responsive CSS doesn't do anything on my phone').",
    "Designing desktop-first and bolting on mobile styles as an afterthought, resulting in bloated, fighting CSS.",
    "Using fixed px for font sizes everywhere, which ignores users who've changed their browser's default font size for accessibility.",
    "Testing only by resizing a desktop browser window instead of also checking real device breakpoints and touch target sizes (minimum ~44px for tappable elements)."
  ],
  practice: "Take your Flexbox nav bar from the previous lesson and make it collapse into a stacked layout below 600px width, using a mobile-first media query.",
  challenge: "Build a responsive 'pricing cards' section: 1 column on mobile, 2 on tablet (min-width: 768px), 3 on desktop (min-width: 1200px), using only CSS Grid and media queries — no JavaScript.",
  miniProject: "Make your entire portfolio page fully responsive from 320px (small phone) to 1920px (large desktop), verified using your browser DevTools' device toolbar across at least 4 device presets.",
  resources: [
    { title: "web.dev — Responsive Web Design Basics", url: "https://web.dev/learn/design/", note: "Google's official responsive design course." },
    { title: "MDN — Responsive design", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design", note: "Core reference module." }
  ],
  mastery: [
    "I write CSS mobile-first by default.",
    "I never forget the viewport meta tag.",
    "I can make any layout I build work cleanly from a small phone to a large monitor."
  ]
},
{
  id: "l-dom-events",
  stage: "web-development",
  module: "JavaScript in the Browser",
  title: "The DOM & Events",
  what: "The DOM (Document Object Model) is the browser's live, in-memory tree representation of your HTML page. JavaScript can read and change this tree, and events are how you respond to things happening — a click, a key press, a page load.",
  why: "This is what makes a webpage interactive rather than a static document. Every button click, form submission, and dynamic update on the web comes down to: select an element in the DOM, listen for an event, and change the DOM in response.",
  mentalModel: "The DOM is a live family tree of your page's elements, and JavaScript is a person standing next to that tree with the power to add branches, remove branches, or relabel any branch, instantly, while people are looking at it. An event listener is a standing instruction: 'the moment this specific thing happens on this specific branch, run this function.'",
  coreConcepts: [
    "Selecting elements: document.querySelector / querySelectorAll (the modern, CSS-selector-based way).",
    "Reading/changing content: .textContent, .innerHTML (careful — this can introduce security issues if you insert untrusted user input), and .value for form inputs.",
    "Changing attributes/classes: .setAttribute, .classList.add/remove/toggle.",
    "Events: addEventListener(event, handler) — click, submit, input, keydown, etc.",
    "The event object: e.preventDefault() (e.g., stop a form's default page-reload behavior), e.target (what was actually interacted with).",
    "Event bubbling and delegation: listening on a parent element to catch events from many children, instead of attaching a listener to every single child."
  ],
  example: "const button = document.querySelector(\"#submitBtn\");\nbutton.addEventListener(\"click\", () => {\n  console.log(\"Button was clicked!\");\n});",
  code: "// Event delegation: one listener handles clicks on ANY current or future .task-item\ndocument.querySelector(\"#taskList\").addEventListener(\"click\", (e) => {\n  if (e.target.matches(\".delete-btn\")) {\n    e.target.closest(\".task-item\").remove();\n  }\n});",
  commonMistakes: [
    "Using innerHTML to insert raw user input, which can allow malicious scripts to run (XSS) — use textContent for plain text.",
    "Attaching a separate event listener to every list item instead of using event delegation, which breaks once new items are added dynamically.",
    "Forgetting e.preventDefault() on a form submit and being confused why the page reloads.",
    "Selecting elements before the DOM has finished loading (put scripts at the end of <body>, or use the defer attribute, or wrap in a DOMContentLoaded listener)."
  ],
  practice: "Build a button that, when clicked, toggles a CSS class on/off on a target element (e.g., a 'dark mode' toggle using classList.toggle).",
  challenge: "Build a to-do list UI: an input + 'Add' button that appends a new list item with a 'delete' button, using event delegation so delete works on every item, including ones added after page load.",
  miniProject: "Wire up your Level-1 interactive quiz app with real DOM manipulation: display one question at a time, handle answer clicks, show a running score, and show a results screen at the end.",
  resources: [
    { title: "MDN — Introduction to events", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Events", note: "Official events module." },
    { title: "MDN — Document Object Model (DOM)", url: "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model", note: "Reference for the full DOM API." }
  ],
  mastery: [
    "I can select, read, and modify any element on a page using vanilla JS.",
    "I understand event delegation and use it for dynamic lists.",
    "I know when and why to call preventDefault()."
  ]
}
];