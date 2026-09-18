export const lessonUIUXExpansion = [
{
  id:"l-ux-research-evidence", stage:"ui-ux", module:"UX Research", title:"UX Research & Evidence",
  what:"UX research is a structured way to learn about users, their goals, behaviors, constraints, and problems before committing to a design. Lightweight research can combine interviews, observation, surveys, and usability evidence.",
  why:"Designing from assumptions produces polished solutions to the wrong problem. Research gives you evidence to decide what to solve, for whom, and what to test next.",
  mentalModel:"Treat research as a chain: question → method → evidence → pattern → design implication. A persona or journey map is a synthesis of evidence, not a fictional character invented to justify a design.",
  coreConcepts:["Research questions and hypotheses","Qualitative versus quantitative evidence","Interviews and observation: asking about behavior rather than leading users toward an answer","Surveys: useful for structured quantitative signals, not a replacement for contextual research","Assumptions versus observed evidence","Synthesizing findings into themes, needs, pain points, and opportunities","Personas and journey maps as evidence-based synthesis","Turning findings into explicit product and design requirements"],
  example:"Question: Why do users abandon signup? → observe 5 users completing signup → record friction and workarounds → group repeated problems → turn the strongest patterns into design requirements.",
  code:"// A simple research note structure\nconst finding = {\n  observation: \"Users stop at the verification step\",\n  evidence: \"4 of 5 observed participants hesitated there\",\n  implication: \"Clarify why verification is required and what happens next\"\n};",
  commonMistakes:["Treating personal opinions as research findings","Leading interview participants toward the answer you expect","Creating personas without evidence","Collecting observations without converting them into actionable design implications"],
  practice:"Write three research questions for a note-taking app and choose the most appropriate lightweight method for each.",
  challenge:"Conduct a small usability observation of an existing app, separate observations from interpretations, and synthesize at least three design implications.",
  miniProject:"Take one ARD project idea through a lightweight research cycle: research questions, evidence notes, synthesized findings, user needs, and design requirements.",
  resources:[
    {title:"Nielsen Norman Group — User Research Methods",url:"https://www.nngroup.com/articles/which-ux-research-methods/",note:"Research-method selection and UX evidence."},
    {title:"Nielsen Norman Group — Personas",url:"https://www.nngroup.com/articles/persona/",note:"Evidence-based persona guidance."}
  ],
  mastery:["I can distinguish evidence from assumptions and opinions.","I can select a sensible research method for a question.","I can synthesize observations into actionable design requirements."]
},
{
  id:"l-information-architecture-user-flows", stage:"ui-ux", module:"UX Process", title:"Information Architecture & User Flows",
  what:"Information architecture organizes content, features, labels, and navigation around how users understand a product. User flows model the sequence of decisions and screens needed to complete a goal.",
  why:"Good visual design cannot compensate for confusing structure. IA and flows expose navigation problems before expensive high-fidelity work begins.",
  mentalModel:"Start with the user's goal, not the database or feature list. Map what the user needs to find, decide, and do; then turn that mental model into a sitemap and task flow.",
  coreConcepts:["Content hierarchy and labeling","Sitemaps and navigation models","Card sorting as a way to discover user groupings","Task flows versus user flows","Decision points, alternate paths, and failure paths","Navigation patterns and persistent wayfinding","Designing around user mental models rather than internal system structure"],
  example:"Goal: book an appointment → choose service → choose date → choose time → confirm → success. Add alternate paths for unavailable times, validation errors, and cancellation.",
  code:"// A text-first flow is enough before opening Figma\nconst flow = [\n  'Choose service',\n  'Choose date',\n  'Choose time',\n  'Review details',\n  'Confirm booking',\n  'Success'\n];",
  commonMistakes:["Designing screens before understanding the task flow","Using internal product terminology users do not understand","Ignoring alternate and failure paths","Confusing a sitemap with a detailed user flow"],
  practice:"Create a sitemap and happy-path task flow for a small portfolio or course application.",
  challenge:"Add cancellation, validation failure, and unavailable-content branches to the same flow without making navigation ambiguous.",
  miniProject:"Create the IA for a 5-screen mobile product: sitemap, primary navigation, one detailed task flow, and wireframes for the flow.",
  resources:[
    {title:"Nielsen Norman Group — Information Architecture",url:"https://www.nngroup.com/articles/information-architecture-ia/",note:"Foundational IA guidance."},
    {title:"Nielsen Norman Group — Card Sorting",url:"https://www.nngroup.com/articles/card-sorting-definition/",note:"Card-sorting method and use cases."}
  ],
  mastery:["I can produce a sitemap before designing a multi-screen interface.","I can distinguish a task flow from a sitemap.","I can model alternate and failure paths around a user's goal."]
},
{
  id:"l-interaction-design-states", stage:"ui-ux", module:"Interaction Design", title:"Interaction Design & Interface States",
  what:"Interaction design defines how an interface responds to user actions and system conditions. A component is not one picture; it has states, transitions, feedback, and recovery behavior.",
  why:"Users constantly encounter hover, focus, pressed, disabled, loading, success, and error conditions. Designing only the happy path makes an interface feel broken as soon as reality happens.",
  mentalModel:"For every important action ask: what can the user do, what does the system do, what feedback appears, what can go wrong, and how can the user recover?",
  coreConcepts:["Affordances and signifiers","Immediate and understandable feedback","Hover, focus, pressed, selected, disabled, loading, success, empty, and error states","Error prevention and recovery","Confirmation and destructive-action patterns","Micro-interactions and purposeful motion","Interaction consistency across a product"],
  example:"Delete action → user selects Delete → system asks for confirmation when risk is high → deletion occurs → success feedback with Undo when feasible.",
  code:"// State matrix for a button\nconst states = ['default','hover','focus','pressed','disabled','loading','success','error'];\n// Design each intentionally; never assume default covers every state.",
  commonMistakes:["Designing only the default state","Using color alone to communicate state","Adding animation without communicating a useful transition","Showing technical errors without a recovery action"],
  practice:"Create a state matrix for a primary button and a data-loading card.",
  challenge:"Take one existing screen and redesign every meaningful interaction and system state, including keyboard focus and failure recovery.",
  miniProject:"Build a Figma interaction-state library for buttons, inputs, cards, and async content, then apply it to a 3-screen flow.",
  resources:[
    {title:"Nielsen Norman Group — Visibility of System Status",url:"https://www.nngroup.com/articles/visibility-system-status/",note:"Feedback and system-status principle."},
    {title:"Nielsen Norman Group — Error Messages",url:"https://www.nngroup.com/articles/error-message-guidelines/",note:"Practical error communication guidance."}
  ],
  mastery:["I can enumerate the meaningful states of a component.","I can design feedback and recovery for important actions.","I do not rely on color alone to communicate interaction state."]
},
{
  id:"l-responsive-adaptive-design", stage:"ui-ux", module:"Responsive Design", title:"Responsive & Adaptive Interface Design",
  what:"Responsive design creates layouts that adapt to available space and content rather than treating each device as a separate fixed canvas. Figma constraints and Auto Layout provide a design-side model that maps naturally to CSS layout.",
  why:"A desktop design that is merely squeezed onto a phone usually produces poor hierarchy, overflow, or unusable controls. Designing constraints early makes implementation more predictable.",
  mentalModel:"Design relationships, not coordinates. Ask what grows, shrinks, wraps, stacks, disappears, or changes order when available space changes.",
  coreConcepts:["Mobile-first and content-first thinking","Fluid versus fixed dimensions","Responsive constraints and Auto Layout","Breakpoints based on content failure rather than device-name lists","Responsive typography and spacing","Desktop/tablet/mobile layout adaptation","Mapping Figma constraints to CSS Flexbox and Grid"],
  example:"A two-column dashboard can remain two columns while there is room, then stack its panels when the content can no longer maintain readable widths.",
  code:"/* The design relationship becomes an implementation rule */\n.dashboard { display:grid; grid-template-columns: 2fr 1fr; gap:1rem; }\n@media (max-width: 760px) { .dashboard { grid-template-columns:1fr; } }",
  commonMistakes:["Designing separate screens without shared responsive rules","Choosing breakpoints only because they are common device widths","Shrinking text and controls until they become unusable","Using absolute positioning where a layout system would express the relationship"],
  practice:"Take a desktop card grid and document how it should behave at wide, medium, and narrow widths.",
  challenge:"Create one Figma frame that adapts from desktop to mobile using Auto Layout and constraints without duplicating the entire design.",
  miniProject:"Redesign a small dashboard responsively in Figma at three viewport sizes, document the constraints, then translate the rules into CSS Grid/Flexbox.",
  resources:[
    {title:"Figma — Guide to Auto Layout",url:"https://help.figma.com/hc/en-us/articles/360040451373-Guide-to-auto-layout",note:"Official responsive-layout mechanics."},
    {title:"MDN — Responsive web design",url:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design",note:"Implementation-side responsive design principles."}
  ],
  mastery:["I can describe how a layout behaves between known viewport sizes.","I can choose constraints based on content rather than device labels.","I can translate Figma layout relationships into CSS layout rules."]
},
{
  id:"l-figma-design-systems-variables", stage:"ui-ux", module:"Figma Design Systems", title:"Figma Design Systems: Variables, Tokens & Components",
  what:"A design system is a shared set of design decisions and reusable components. In Figma, variables, styles, components, variants, component properties, and libraries turn those decisions into maintainable assets.",
  why:"Without reusable tokens and components, every screen becomes a one-off. A system makes consistency measurable and lets a developer translate design decisions into reusable code primitives.",
  mentalModel:"Think in layers: raw values → tokens/variables → component properties → reusable components → composed screens. Change the lower layer once instead of repairing dozens of screens.",
  coreConcepts:["Design tokens for color, spacing, typography, radius, and other repeated decisions","Figma variables, collections, and modes","Light/dark or contextual modes","Components and variants","Boolean, text, instance-swap, and variant properties","Nested components and slots","Libraries, naming, documentation, and reuse","Mapping Figma tokens/components to CSS variables and component APIs"],
  example:"color.surface.primary is a token; a Button component consumes it; a dark mode changes the variable mode rather than requiring every button instance to be recolored.",
  code:"// Design token idea translated to CSS\n:root { --color-surface-primary: #ffffff; --space-md: 16px; }\n[data-theme='dark'] { --color-surface-primary: #111111; }",
  commonMistakes:["Creating visually similar but separately named tokens","Making every variant a separate component instead of modeling meaningful properties","Using components without documenting when to use them","Building a system so abstract that developers cannot map it to code"],
  practice:"Create tokens for color, spacing, type, and radius, then build a button with size, intent, and state properties.",
  challenge:"Build a small Figma library with variables and modes, then document the equivalent CSS variables and component props a developer would implement.",
  miniProject:"Create a complete mini design system for one ARD project: tokens, variables/modes, typography, buttons, inputs, cards, navigation, variants, properties, and usage documentation.",
  resources:[
    {title:"Figma — Design Systems",url:"https://help.figma.com/hc/en-us/articles/14552901442839-Overview-Introduction-to-design-systems",note:"Official design-system concepts."},
    {title:"Figma — Variables, collections and modes",url:"https://help.figma.com/hc/en-us/articles/14506821864087-Overview-of-variables-collections-and-modes",note:"Official variable and mode model."},
    {title:"Figma — Component properties",url:"https://help.figma.com/hc/en-us/articles/5579474826519-Explore-component-properties",note:"Official component-property reference."}
  ],
  mastery:["I can create a token-based Figma system rather than repeating raw values.","I can model component variants and properties without uncontrolled duplication.","I can explain how a Figma system maps to CSS variables and frontend components."]
},
{
  id:"l-prototyping-usability-testing", stage:"ui-ux", module:"Prototyping & Testing", title:"Prototyping & Usability Testing",
  what:"A prototype simulates enough of an interface for people to perform realistic tasks. Usability testing observes users attempting those tasks so design problems can be found and corrected before implementation.",
  why:"A prototype is cheaper to change than production code. Testing also exposes problems designers often cannot see because they already know how their own interface works.",
  mentalModel:"Prototype the risky behavior, give users a realistic task, observe what they do rather than teaching them, record evidence, then iterate. The goal is learning, not proving the design is correct.",
  coreConcepts:["Choosing prototype fidelity based on the question","Figma prototype triggers, actions, overlays, and transitions","Writing neutral task scenarios","Observation versus intervention","Success criteria and usability signals","Synthesizing problems by severity and frequency","Iterating from evidence","Testing realistic loading, error, empty, and recovery states when relevant"],
  example:"Task: 'Find the next available appointment and change the time before confirming.' Observe where participants hesitate, backtrack, or misinterpret controls.",
  code:"// A simple usability-test record\nconst observation = {\ntask:'Find next available appointment',\nbehavior:'Opened filters before noticing date control',\nimpact:'Navigation discoverability issue',\nnextIteration:'Clarify date/filter hierarchy'\n};",
  commonMistakes:["Explaining the interface while testing instead of observing","Asking leading questions such as 'Was this button easy to find?'","Testing only the happy path","Treating one participant's opinion as universal proof"],
  practice:"Write three neutral usability-test tasks for a 3-screen prototype and define observable success criteria.",
  challenge:"Run a small test, record behaviors without interpretations, group findings, and produce a prioritized iteration list.",
  miniProject:"Prototype a 3–5 screen mobile flow, test it with real participants where feasible, document observations, revise the prototype, and record what changed and why.",
  resources:[
    {title:"Nielsen Norman Group — Usability Testing 101",url:"https://www.nngroup.com/articles/usability-testing-101/",note:"Foundational usability-testing method."},
    {title:"Figma — Prototyping",url:"https://help.figma.com/hc/en-us/categories/360002051613-Prototyping",note:"Official prototype workflow and interactions."}
  ],
  mastery:["I can write neutral task-based usability tests.","I can distinguish observed behavior from interpretation.","I can turn test evidence into concrete design iterations."]
},
{
  id:"l-accessibility-first-ui", stage:"ui-ux", module:"Inclusive Design", title:"Accessibility-First UI Design",
  what:"Accessibility-first design considers people with different vision, hearing, mobility, cognition, and interaction needs from the beginning. WCAG provides testable success criteria, while inclusive design asks how varied users actually experience the interface.",
  why:"Accessibility problems are cheaper to prevent in design than to retrofit after implementation, and many accessible choices improve usability for everyone.",
  mentalModel:"Design for multiple ways of perceiving and operating the interface: keyboard and touch, visual and non-visual cues, different text sizes, reduced motion, and error-tolerant interaction.",
  coreConcepts:["WCAG 2.2 principles: perceivable, operable, understandable, robust","Contrast and text readability","Keyboard access and visible focus","Target size and touch interaction","Never communicating important information by color alone","Accessible names, labels, and form-error design","Reduced motion and meaningful animation","Manual accessibility review versus automated checks"],
  example:"A destructive status is communicated with an icon and text as well as color; focus remains visible; controls have sufficient target size; errors identify the field and explain recovery.",
  code:"/* Focus must remain visible */\n:focus-visible { outline: 3px solid currentColor; outline-offset: 3px; }",
  commonMistakes:["Checking only color contrast and calling the design accessible","Hiding focus outlines without providing a replacement","Using placeholder text as the only form label","Communicating success, error, or status through color alone","Assuming an automated checker proves complete accessibility"],
  practice:"Audit one Figma screen for focus, contrast, target size, labels, color dependence, text readability, and motion assumptions.",
  challenge:"Create an accessibility issue list, redesign the highest-impact problems, and explain each change using a WCAG principle or concrete user need.",
  miniProject:"Perform an accessibility-first redesign of one existing ARD interface and produce a before/after rationale plus a repeatable design review checklist.",
  resources:[
    {title:"W3C — WCAG 2.2",url:"https://www.w3.org/TR/WCAG22/",note:"Current accessibility standard."},
    {title:"W3C WAI — Introduction to Web Accessibility",url:"https://www.w3.org/WAI/fundamentals/accessibility-intro/",note:"Accessibility fundamentals and user diversity."}
  ],
  mastery:["I can perform a design-stage accessibility review beyond color contrast.","I can explain keyboard, focus, target-size, labeling, and color-independence decisions.","I understand the limits of automated accessibility testing."]
},
{
  id:"l-design-to-code-handoff", stage:"ui-ux", module:"Design Handoff", title:"Design-to-Code Handoff",
  what:"Design handoff is the translation of visual and interaction decisions into implementation-ready specifications: components, tokens, states, responsive rules, assets, content, and behavior.",
  why:"A beautiful Figma file is not implementation-ready if developers must guess spacing, states, breakpoints, interaction behavior, or which component is canonical.",
  mentalModel:"A handoff should answer: what is this component, what are its properties and states, how does it behave at different sizes, what data/content does it accept, and which design decisions are intentional?",
  coreConcepts:["Component-to-component mapping","Design tokens and CSS variables","Responsive constraints and breakpoint rules","Interaction and state specifications","Content and asset requirements","Accessibility requirements in handoff","Figma Dev Mode and inspectable measurements","Documentation and acceptance criteria","Keeping design and implementation synchronized without promising pixel-perfect sameness"],
  example:"Button handoff: intent=primary/secondary, size=sm/md/lg, state=default/hover/focus/disabled/loading, icon optional, minimum target size, token references, responsive behavior.",
  code:"// Example implementation contract\ntype ButtonProps = {\n  intent: 'primary' | 'secondary';\n  size: 'sm' | 'md' | 'lg';\n  loading?: boolean;\n  disabled?: boolean;\n};",
  commonMistakes:["Handing over screenshots instead of reusable rules","Leaving states or responsive behavior unspecified","Using arbitrary measurements instead of shared tokens","Assuming developers will infer accessibility requirements","Demanding pixel-perfect output when content, fonts, browser rendering, or interaction semantics require adaptation"],
  practice:"Choose one Figma component and write its implementation contract: props, states, tokens, responsive behavior, accessibility, and acceptance criteria.",
  challenge:"Take a 3-screen design and produce a developer handoff package that another developer can implement without asking basic visual or interaction questions.",
  miniProject:"Create the final handoff for one ARD project: design-system reference, screen specs, responsive rules, component contracts, interaction states, accessibility notes, assets, and acceptance checklist.",
  resources:[
    {title:"Figma — Dev Mode",url:"https://help.figma.com/hc/en-us/articles/15023111056023-Guide-to-Dev-Mode",note:"Official design-to-development inspection workflow."},
    {title:"Figma — Design Systems",url:"https://help.figma.com/hc/en-us/articles/14552901442839-Overview-Introduction-to-design-systems",note:"Reusable design-system structure."}
  ],
  mastery:["I can turn a Figma component into a clear implementation contract.","I can document responsive, interaction, accessibility, and token decisions.","I can hand off a design without forcing developers to guess core behavior."]
}
];
