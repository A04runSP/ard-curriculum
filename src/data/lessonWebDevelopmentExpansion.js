export const lessonWebDevelopmentExpansion = [
  {
    id: "l-forms-validation",
    stage: "web-development",
    module: "HTML Forms",
    title: "Forms, Validation & User Input",
    what: "HTML forms provide the browser's native system for collecting user input. Native controls and constraint validation handle many common checks before JavaScript or a server needs to process the data.",
    why: "Forms are the main boundary where user-provided data enters a web application. Understanding their native behavior, accessible structure, validation, and submission lifecycle prevents fragile custom UI and prepares you for server-side validation later.",
    mentalModel: "Think of a form as a contract: controls collect named values, constraints describe acceptable input, the browser can report violations, and submission packages the values for the next layer. Client-side checks improve user experience; they are never a security boundary because users can bypass them.",
    coreConcepts: [
      "form, input, textarea, select, option, and button",
      "name, value, id, and label/for relationships",
      "Input types: text, email, password, number, date, checkbox, and radio",
      "Native constraints: required, min, max, minlength, maxlength, and pattern",
      "Constraint Validation API: checkValidity() and reportValidity()",
      "The submit event and preventing default submission when handling data with JavaScript",
      "FormData for collecting named control values",
      "Accessible validation and specific, actionable error messages",
      "Client-side validation versus server-side validation",
      "Never treating browser validation as a security control"
    ],
    example: "<form id=\"signup\">\n  <label for=\"email\">Email</label>\n  <input id=\"email\" name=\"email\" type=\"email\" required>\n\n  <label for=\"age\">Age</label>\n  <input id=\"age\" name=\"age\" type=\"number\" min=\"13\" max=\"120\" required>\n\n  <button type=\"submit\">Create account</button>\n</form>",
    code: "const form = document.querySelector(\"#signup\");\n\nform.addEventListener(\"submit\", (event) => {\n  event.preventDefault();\n\n  if (!form.checkValidity()) {\n    form.reportValidity();\n    return;\n  }\n\n  const data = Object.fromEntries(new FormData(form));\n  console.log(data);\n});",
    commonMistakes: [
      "Using placeholder text as a replacement for a visible label.",
      "Building every validation rule in JavaScript when native HTML constraints already solve the basic case.",
      "Displaying vague errors such as 'Invalid input' instead of explaining what needs to change.",
      "Assuming valid client-side input is safe enough to trust on a server.",
      "Forgetting name attributes and then wondering why FormData contains no expected values.",
      "Using a generic div as a button instead of the native button element."
    ],
    practice: "Build an accessible registration form using native controls, labels, required fields, email validation, password length constraints, a radio group, and a checkbox. Test it using keyboard navigation and deliberately invalid input.",
    challenge: "Create a form that displays useful validation feedback without losing the user's other entered values. Explain which checks belong in the browser and which must ultimately be repeated on the server.",
    miniProject: "Build an Accessible Registration Form with semantic HTML, native validation, JavaScript submission handling, clear error states, and a final review using keyboard-only navigation and Lighthouse or another accessibility checker.",
    resources: [
      { title: "MDN — Your first form", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Your_first_form", note: "Official introduction to HTML forms." },
      { title: "MDN — Client-side form validation", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation", note: "Constraint validation and accessible validation guidance." },
      { title: "MDN — FormData", url: "https://developer.mozilla.org/en-US/docs/Web/API/FormData", note: "Official API reference for constructing form data." }
    ],
    mastery: [
      "I can build a semantic form with correctly associated labels.",
      "I can use native HTML constraints before reaching for custom JavaScript validation.",
      "I can collect submitted values with FormData.",
      "I understand why client-side validation cannot replace server-side validation."
    ]
  },
  {
    id: "l-browser-storage-apis",
    stage: "web-development",
    module: "Browser APIs",
    title: "Browser Storage & Web APIs",
    what: "The browser is more than an HTML renderer: it exposes APIs that let JavaScript store small pieces of client-side state, inspect the current URL, interact with navigation, and work with browser capabilities.",
    why: "A useful client-side application often needs to remember preferences or state between page loads. Learning the browser's native APIs gives you durable fundamentals before frameworks and larger client-state systems appear in later stages.",
    mentalModel: "Think of browser APIs as services provided by the runtime. Your JavaScript asks the browser for capabilities—storage, URL parsing, navigation, clipboard access, and environment information—instead of implementing those capabilities from scratch.",
    coreConcepts: [
      "localStorage: persistent key/value strings scoped to an origin",
      "sessionStorage: key/value storage associated with a browser session",
      "setItem(), getItem(), removeItem(), and clear()",
      "JSON.stringify() and JSON.parse() when storing structured data",
      "URL and URLSearchParams for safely reading and constructing URLs/query parameters",
      "location and history as browser navigation interfaces",
      "navigator as an entry point to selected browser/environment information",
      "Browser permissions and why capabilities may require explicit user consent",
      "Storage is client-side state, not a secure place for secrets",
      "When to use simple Web Storage versus a database or more advanced browser storage"
    ],
    example: "const settings = { theme: \"dark\", compactMode: true };\nlocalStorage.setItem(\"settings\", JSON.stringify(settings));\n\nconst saved = JSON.parse(localStorage.getItem(\"settings\") ?? \"null\");\nconsole.log(saved?.theme);",
    code: "const params = new URLSearchParams(window.location.search);\nconst lesson = params.get(\"lesson\");\n\nif (lesson) {\n  console.log(`Opening lesson: ${lesson}`);\n}\n\nlocalStorage.setItem(\"lastLesson\", lesson ?? \"home\");",
    commonMistakes: [
      "Expecting localStorage to store JavaScript objects directly instead of strings.",
      "Calling JSON.parse() on missing or malformed storage data without handling the possibility of failure.",
      "Storing passwords, private keys, or other secrets in localStorage.",
      "Treating browser storage as a replacement for authoritative server-side data.",
      "Building URLs by unsafe string concatenation when URLSearchParams or URL provides a clearer model.",
      "Assuming every browser API is available or permitted in every execution context."
    ],
    practice: "Add a theme preference and a last-opened lesson to a small page using localStorage. Reload the page and restore both values. Then inspect the stored strings in DevTools.",
    challenge: "Build a URL-driven filter where URLSearchParams controls the visible category and localStorage remembers the user's preferred layout. Explain which state belongs in the URL and which belongs in local storage.",
    miniProject: "Build a Browser Preferences App that stores theme, compact/comfortable layout, and the last selected section. Include a reset button and gracefully handle missing or malformed stored data.",
    resources: [
      { title: "MDN — Web Storage API", url: "https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API", note: "Official localStorage and sessionStorage documentation." },
      { title: "MDN — URLSearchParams", url: "https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams", note: "Official query-string API reference." },
      { title: "MDN — Client-side storage", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Client-side_APIs/Client-side_storage", note: "Learning module covering browser-side data storage." }
    ],
    mastery: [
      "I can persist simple non-sensitive application preferences across reloads.",
      "I know when JSON serialization is needed for Web Storage.",
      "I can read query parameters with URLSearchParams.",
      "I know browser storage is not a secure store for secrets or authoritative application data."
    ]
  }
];
