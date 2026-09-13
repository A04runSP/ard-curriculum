export const conceptProgramming = [
  {
    id: "concept-control-flow",
    stage: "programming",
    module: "Problem Solving with JavaScript",
    title: "Control Flow",
    what: "Control flow is the order in which a program evaluates and executes instructions.",
    why: "Understanding control flow lets you reason about every possible path through a program instead of guessing what it will do.",
    keyPoints: ["Conditions choose a path.", "Loops repeat a path.", "break exits a loop; continue skips to the next iteration.", "Guard clauses reduce unnecessary nesting."],
    resource: { title: "MDN — Control flow", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling" }
  },
  {
    id: "concept-truthy-falsy",
    stage: "programming",
    module: "Problem Solving with JavaScript",
    title: "Truthy & Falsy Values",
    what: "JavaScript converts values to boolean context when used in conditions.",
    why: "Many compact JavaScript expressions depend on truthiness; misunderstanding it causes subtle input and default-value bugs.",
    keyPoints: ["false, 0, -0, 0n, empty string, null, undefined, and NaN are falsy.", "Objects and arrays are truthy, including empty ones.", "Use explicit comparisons when the distinction matters."],
    resource: { title: "MDN — Falsy", url: "https://developer.mozilla.org/en-US/docs/Glossary/Falsy" }
  },
  {
    id: "concept-error-types",
    stage: "programming",
    module: "Reliable JavaScript",
    title: "Types of Programming Errors",
    what: "Syntax errors prevent code from being parsed; runtime errors occur while code executes; logic errors produce the wrong result while still running.",
    why: "Classifying the failure narrows the debugging strategy.",
    keyPoints: ["Syntax: inspect syntax and the reported location.", "Runtime: inspect the failing operation and values.", "Logic: reproduce the wrong result and trace assumptions."],
    resource: { title: "MDN — Error", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error" }
  },
  {
    id: "concept-event-loop",
    stage: "programming",
    module: "Asynchronous JavaScript",
    title: "The Event Loop",
    what: "The event loop coordinates JavaScript execution with asynchronous callbacks provided by the surrounding runtime.",
    why: "It explains why asynchronous work completes later and why a callback cannot interrupt currently executing synchronous code.",
    keyPoints: ["JavaScript executes synchronous work on the call stack.", "Runtime APIs handle asynchronous operations.", "Queued callbacks run when the stack is available.", "The exact scheduling model includes different queues and microtasks; learn the distinction before relying on timing."],
    resource: { title: "MDN — JavaScript execution model", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Execution_model" }
  },
  {
    id: "concept-promises",
    stage: "programming",
    module: "Asynchronous JavaScript",
    title: "Promises",
    what: "A Promise is an object representing the eventual success or failure of an asynchronous operation.",
    why: "Promises provide composable control flow for modern asynchronous APIs.",
    keyPoints: ["A Promise is pending, fulfilled, or rejected.", "then handles fulfillment; catch handles rejection; finally runs after settlement.", "Returning a Promise from then creates a chain.", "Promise.all is useful when independent operations must all succeed."],
    resource: { title: "MDN — Promise", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" }
  },
  {
    id: "concept-api-contract",
    stage: "programming",
    module: "Working With Data",
    title: "API Contracts",
    what: "An API contract defines how a client requests an operation and what the service promises to return or reject.",
    why: "Reliable integrations depend on known inputs, outputs, status codes, and failure behavior rather than assumptions.",
    keyPoints: ["Document request method, URL, parameters, headers, and body.", "Document response shape and important status codes.", "Validate external data before trusting it.", "Never put private credentials in client-side code."],
    resource: { title: "MDN — HTTP overview", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview" }
  },
  {
    id: "concept-state-machine",
    stage: "programming",
    module: "Program State & Architecture",
    title: "State Machines",
    what: "A state machine models a system as a finite set of states and explicit transitions caused by events.",
    why: "It prevents ambiguous combinations of state and makes interactive behavior easier to reason about and test.",
    keyPoints: ["Define meaningful states.", "Define events that can cause transitions.", "Specify which transitions are valid.", "Keep derived information out of state when it can be calculated."],
    resource: { title: "MDN — JavaScript objects", url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects" }
  },
  {
    id: "concept-composition-vs-inheritance",
    stage: "programming",
    module: "Object-Oriented JavaScript",
    title: "Composition vs Inheritance",
    what: "Inheritance models an 'is-a' relationship through a hierarchy; composition builds behavior by combining smaller components.",
    why: "Choosing the wrong relationship can make software rigid and difficult to change.",
    keyPoints: ["Prefer the simplest relationship that expresses the domain.", "Inheritance shares implementation through a hierarchy.", "Composition delegates behavior to collaborators.", "JavaScript's prototype system underlies class inheritance."],
    resource: { title: "MDN — Classes", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes" }
  }
];