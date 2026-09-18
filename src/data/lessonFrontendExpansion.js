export const lessonFrontendExpansion = [
{
  id: "l-react-state-architecture",
  stage: "frontend",
  module: "React State Architecture",
  title: "State Architecture: Lifting, Reducers & Context",
  what: "React state architecture is the discipline of deciding what data belongs in state, where that state should live, and how components should share or update it. Lifting state, useReducer, and Context solve different coordination problems rather than being interchangeable patterns.",
  why: "Most growing React applications become difficult to change because state is duplicated, stored too high or too low, or made global without a real need. A deliberate state structure prevents synchronization bugs and keeps components understandable.",
  mentalModel: "Treat state as a single source of truth for information that can change. Derived values should usually be calculated during render rather than stored separately. Move state upward only as far as the components that need to coordinate it; use a reducer when transitions become numerous or structured; use Context when many descendants need the same value.",
  coreConcepts: [
    "State versus derived data: store the minimum changing information and calculate values such as filtered lists during render.",
    "Single source of truth: avoid duplicated state that can drift out of sync.",
    "Lifting state up: move shared state to the nearest common parent and pass values and event handlers through props.",
    "Preserving and resetting state: component identity and position determine when React preserves state.",
    "useReducer: represent complex state transitions as actions handled by a pure reducer.",
    "Context: pass shared values through a component tree without manually threading props through every layer.",
    "Reducer + Context: a useful combination for shared state with explicit update rules, but not a requirement for every app.",
    "Avoiding unnecessary global state: server data, URL state, form state, and local UI state can have different owners."
  ],
  example: "function reducer(state, action) {\n  switch (action.type) {\n    case \"added\":\n      return [...state, { id: action.id, text: action.text, done: false }];\n    case \"toggled\":\n      return state.map(task =>\n        task.id === action.id ? { ...task, done: !task.done } : task\n      );\n    default:\n      throw new Error(`Unknown action: ${action.type}`);\n  }\n}",
  code: "const [tasks, dispatch] = useReducer(reducer, []);\n\ndispatch({ type: \"added\", id: crypto.randomUUID(), text: \"Study React\" });\ndispatch({ type: \"toggled\", id: taskId });",
  commonMistakes: [
    "Storing derived values such as filteredTasks when they can be calculated from existing state and props.",
    "Lifting all state to App even when only one small component needs it.",
    "Using Context as a universal replacement for props or putting frequently changing unrelated values into one giant context.",
    "Writing reducers that mutate the existing state instead of returning a new state value."
  ],
  practice: "Refactor a small shopping cart so the cart is the single source of truth and totals are derived during render.",
  challenge: "Build a task manager with filtering, selection, add, toggle, and delete actions using useReducer. Explain which state is shared and which values are derived.",
  miniProject: "Build a multi-component task manager using reducer + Context. Keep local UI state local and document why each piece of state has its chosen owner.",
  resources: [
    { title: "React — Choosing the State Structure", url: "https://react.dev/learn/choosing-the-state-structure", note: "Official guidance for avoiding redundant and contradictory state." },
    { title: "React — Sharing State Between Components", url: "https://react.dev/learn/sharing-state-between-components", note: "Official explanation of lifting state up." },
    { title: "React — Scaling Up with Reducer and Context", url: "https://react.dev/learn/scaling-up-with-reducer-and-context", note: "Official reducer + Context pattern." }
  ],
  mastery: [
    "I can distinguish source state from derived values.",
    "I can choose where shared state should live.",
    "I can write a pure reducer with explicit actions.",
    "I can explain when Context is useful and when local state or props are enough."
  ]
},
{
  id: "l-react-effects-refs-escape-hatches",
  stage: "frontend",
  module: "React Effects",
  title: "Effects, Refs & React Escape Hatches",
  what: "Effects and refs connect React to systems outside React's pure rendering model: subscriptions, timers, browser APIs, DOM nodes, and other external systems. They are escape hatches, not a general mechanism for calculating UI data.",
  why: "Misusing useEffect is a common source of stale values, render loops, duplicated state, race conditions, and unnecessary complexity. Modern React emphasizes keeping rendering pure and using Effects only when synchronization with an external system is actually required.",
  mentalModel: "Rendering calculates what the UI should be from current inputs. Event handlers respond to user actions. Effects synchronize with external systems after rendering. Refs hold values that survive renders without themselves triggering a render. Ask what external system is being synchronized before adding an Effect.",
  coreConcepts: [
    "Render phase versus event handlers versus Effects.",
    "Effect dependencies and the lifecycle of setup, re-synchronization, and cleanup.",
    "useRef for mutable values that should persist without causing a re-render.",
    "DOM refs for focus, measurement, scrolling, and imperative browser APIs.",
    "Cleanup for timers, subscriptions, event listeners, and other resources.",
    "Removing unnecessary Effects when a value can be derived during render or handled directly by an event.",
    "Custom hooks as a way to package reusable synchronization or stateful logic."
  ],
  example: "function SearchBox() {\n  const inputRef = useRef(null);\n\n  function focusInput() {\n    inputRef.current?.focus();\n  }\n\n  return (\n    <>\n      <input ref={inputRef} aria-label=\"Search\" />\n      <button onClick={focusInput}>Focus search</button>\n    </>\n  );\n}",
  code: "useEffect(() => {\n  const connection = createConnection(roomId);\n  connection.connect();\n\n  return () => connection.disconnect();\n}, [roomId]);",
  commonMistakes: [
    "Using an Effect to calculate derived data that could be computed directly during render.",
    "Omitting reactive dependencies and accidentally reading stale props or state.",
    "Forgetting cleanup for subscriptions, timers, listeners, or other external resources.",
    "Using refs to bypass React state when the UI actually needs to update."
  ],
  practice: "Create a component that focuses an input with a ref and another that starts and cleans up a timer subscription.",
  challenge: "Take an Effect-heavy component and remove every Effect that is only calculating derived data or responding to a button click.",
  miniProject: "Build a reusable useOnlineStatus hook that subscribes to browser online/offline events and cleans up correctly when the component unmounts.",
  resources: [
    { title: "React — Escape Hatches", url: "https://react.dev/learn/escape-hatches", note: "Current React guidance on refs, Effects, and external systems." },
    { title: "React — You Might Not Need an Effect", url: "https://react.dev/learn/you-might-not-need-an-effect", note: "Important modern guidance for avoiding unnecessary Effects." },
    { title: "React — Referencing Values with Refs", url: "https://react.dev/learn/referencing-values-with-refs", note: "Official ref mental model and usage." }
  ],
  mastery: [
    "I can explain why an Effect exists in terms of an external system.",
    "I can identify and remove an unnecessary Effect.",
    "I can use refs for DOM access and persistent non-rendering values.",
    "I consistently provide cleanup for resources that need it."
  ]
},
{
  id: "l-react-data-fetching-async-ui",
  stage: "frontend",
  module: "Async UI",
  title: "Data Fetching, Async UI & Server State",
  what: "Frontend data fetching is a state machine around remote data: idle, loading, success, empty, error, and sometimes refreshing or retrying. Server state has different concerns from local UI state because it can become stale and may be shared or cached.",
  why: "A fetch that works on a fast network is not enough for a real application. Users encounter slow responses, failures, repeated searches, changing parameters, stale responses, pagination, and cached data. Modeling these states explicitly makes the UI reliable.",
  mentalModel: "Think of every request as a transition between states rather than a single promise. The UI must represent the current request, not merely whether a request was ever made. A response should only update the UI if it still belongs to the current request or query.",
  coreConcepts: [
    "Loading, success, empty, error, refreshing, and retry states.",
    "AbortController and cancellation for obsolete requests.",
    "Race conditions and stale responses when query parameters change quickly.",
    "Debouncing search input without confusing input state with server state.",
    "Pagination and URL-driven queries.",
    "Retries and error recovery as deliberate UI behavior.",
    "Caching and invalidation as server-state concerns.",
    "When a data-fetching/cache library or framework data loader becomes useful.",
    "Suspense as a React mechanism for coordinating asynchronous UI, without treating it as a replacement for every fetch strategy."
  ],
  example: "async function loadUsers(query, signal) {\n  const response = await fetch(`/api/users?q=${encodeURIComponent(query)}`, { signal });\n  if (!response.ok) throw new Error(`HTTP ${response.status}`);\n  return response.json();\n}",
  code: "const controller = new AbortController();\n\nfetch(url, { signal: controller.signal })\n  .then(response => {\n    if (!response.ok) throw new Error(`HTTP ${response.status}`);\n    return response.json();\n  });\n\n// Cancel when the request is no longer relevant.\ncontroller.abort();",
  commonMistakes: [
    "Showing only a spinner and never representing empty, error, or retry states.",
    "Ignoring non-2xx HTTP responses because fetch resolves the promise for them.",
    "Allowing an older request to overwrite newer search results.",
    "Treating remote server data as if it were permanent local UI state and duplicating it unnecessarily."
  ],
  practice: "Build a search component with explicit loading, error, empty, success, and refreshing states.",
  challenge: "Add debouncing and AbortController to a search flow and verify that fast query changes cannot display stale results.",
  miniProject: "Build a movie or recipe search application with URL-driven search, pagination, loading/error/empty states, cancellation, and a documented caching strategy.",
  resources: [
    { title: "React — Synchronizing with Effects", url: "https://react.dev/learn/synchronizing-with-effects", note: "Official discussion of data fetching limitations and synchronization." },
    { title: "React — Suspense", url: "https://react.dev/reference/react/Suspense", note: "Official Suspense reference for asynchronous UI coordination." },
    { title: "MDN — AbortController", url: "https://developer.mozilla.org/en-US/docs/Web/API/AbortController", note: "Browser API for aborting asynchronous operations such as fetch." }
  ],
  mastery: [
    "I represent loading, success, empty, and error states explicitly.",
    "I can prevent stale responses from replacing newer results.",
    "I understand the difference between UI state and server state.",
    "I can explain when simple fetch logic is enough and when caching/data-loading infrastructure is justified."
  ]
},
{
  id: "l-react-router-navigation",
  stage: "frontend",
  module: "Routing",
  title: "React Router & Application Navigation",
  what: "Client-side routing maps URLs to application views without requiring a full document reload for every navigation. React Router also provides patterns for nested layouts, route parameters, data loading, form actions, and navigation state.",
  why: "A multi-view frontend needs navigation that is reflected in the URL, supports browser history and deep links, and keeps shared layouts stable. Treating routing as a collection of button click handlers quickly breaks those expectations.",
  mentalModel: "The URL is part of the application's state. A route describes which UI hierarchy should render for a URL; nested routes let parent layouts remain while child views change. Navigation changes the URL, and the router derives the active UI from that location.",
  coreConcepts: [
    "Route configuration and route-to-component mapping.",
    "Link and navigation APIs versus ordinary anchor behavior.",
    "Nested routes and shared layout components.",
    "Dynamic route parameters and query/search parameters.",
    "Programmatic navigation and redirects.",
    "Route-level loading and error UI.",
    "Protected UI routes as a presentation concern; real authorization belongs on the server.",
    "URL state for shareable filters, search, pagination, and selected views.",
    "React Router data loading and actions as a structured alternative to scattering request logic through components."
  ],
  example: "const router = createBrowserRouter([\n  {\n    path: \"/\",\n    element: <Layout />,\n    children: [\n      { path: \"movies\", element: <MovieList /> },\n      { path: \"movies/:id\", element: <MovieDetails /> }\n    ]\n  }\n]);",
  code: "function MovieDetails() {\n  const { id } = useParams();\n  const navigate = useNavigate();\n\n  return (\n    <button onClick={() => navigate(`/movies/${id}/edit`)}>Edit</button>\n  );\n}",
  commonMistakes: [
    "Keeping navigation state only in component state so refresh and deep links lose the current view.",
    "Using JavaScript click handlers everywhere instead of semantic links for navigation.",
    "Assuming a protected route makes an API secure; server-side authorization is still required.",
    "Putting unrelated application data into the URL when it does not need to be shareable or navigable."
  ],
  practice: "Create a three-route app with a shared layout, one dynamic parameter, and one URL query parameter.",
  challenge: "Convert a dashboard whose selected tab is stored in useState into URL-driven nested routes while preserving the shared layout.",
  miniProject: "Build a routed dashboard with home, list, detail, and settings views, nested layout navigation, dynamic IDs, query-based filtering, route-level error handling, and a clear not-found route.",
  resources: [
    { title: "React Router — Official Documentation", url: "https://reactrouter.com/", note: "Current router concepts and API reference." },
    { title: "React Router — Actions", url: "https://reactrouter.com/start/framework/actions", note: "Official route action and form-submission model." },
    { title: "React Router — Data Actions", url: "https://reactrouter.com/start/data/actions", note: "Official data-router action patterns." }
  ],
  mastery: [
    "I can model an application's views as routes and nested layouts.",
    "I can use path parameters and search parameters appropriately.",
    "I understand browser history and deep-link requirements.",
    "I know that client-side route protection is not server authorization."
  ]
},
{
  id: "l-react-typescript-real-apps",
  stage: "frontend",
  module: "TypeScript with React",
  title: "TypeScript for Real React Applications",
  what: "TypeScript adds static types to React components, state, events, API data, and reusable hooks. The goal is not to annotate everything mechanically, but to make invalid states harder to represent and component contracts clearer.",
  why: "A typed React codebase becomes valuable when components and data flows grow. Good types catch mismatched props, unsafe event handling, impossible states, and incorrect API assumptions before runtime.",
  mentalModel: "Types are contracts checked before JavaScript runs. Define the shape of data at boundaries, narrow uncertain values before using them, and use reusable generic or utility types where they express a real relationship rather than adding ceremony.",
  coreConcepts: [
    "Typing component props with type aliases or interfaces.",
    "Children, optional props, default values, and discriminated unions for component variants.",
    "React event types and DOM element types.",
    "Typing useState, useReducer, useRef, and custom hooks when inference is insufficient.",
    "API response types and the difference between trusting a type and validating runtime data.",
    "Union types, narrowing, type guards, and discriminated unions.",
    "Generics for reusable components and hooks.",
    "Utility types such as Pick, Omit, Partial, Record, and ReturnType.",
    "unknown versus any and why strict mode matters."
  ],
  example: "type Status =\n  | { kind: \"loading\" }\n  | { kind: \"error\"; message: string }\n  | { kind: \"success\"; items: Movie[] };\n\nfunction Results({ status }: { status: Status }) {\n  if (status.kind === \"loading\") return <p>Loading...</p>;\n  if (status.kind === \"error\") return <p>{status.message}</p>;\n  return <MovieList movies={status.items} />;\n}",
  code: "type ButtonProps = {\n  label: string;\n  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;\n  disabled?: boolean;\n};\n\nfunction Button({ label, onClick, disabled = false }: ButtonProps) {\n  return (\n    <button type=\"button\" disabled={disabled} onClick={onClick}>\n      {label}\n    </button>\n  );\n}",
  commonMistakes: [
    "Using any to silence type errors instead of understanding the uncertain value.",
    "Typing API data as if the server is guaranteed to match the interface without considering runtime validation.",
    "Adding explicit annotations everywhere when TypeScript inference is already precise.",
    "Using overly broad object types such as object or {} when a real data contract is needed."
  ],
  practice: "Convert a small JavaScript component tree to TypeScript, typing props, events, state, and an API response model.",
  challenge: "Model loading, error, empty, and success states as a discriminated union and make the compiler enforce exhaustive handling.",
  miniProject: "Convert the movie/recipe search app to strict TypeScript, including typed route parameters, component props, reducer state, API boundaries, and custom hooks without introducing any.",
  resources: [
    { title: "React — Using TypeScript", url: "https://react.dev/learn/typescript", note: "Official React guidance for TypeScript." },
    { title: "TypeScript Handbook", url: "https://www.typescriptlang.org/docs/handbook/", note: "Authoritative TypeScript reference and learning material." },
    { title: "TypeScript — Generics", url: "https://www.typescriptlang.org/docs/handbook/generics.html", note: "Official generic type guidance." },
    { title: "TypeScript — Utility Types", url: "https://www.typescriptlang.org/docs/handbook/utility-types", note: "Official reusable utility type reference." }
  ],
  mastery: [
    "I can type a non-trivial React component without falling back to any.",
    "I can model uncertain and mutually exclusive UI states with unions.",
    "I understand when inference is sufficient and when an annotation improves the contract.",
    "I treat external data as runtime input rather than assuming TypeScript validates the server."
  ]
},
{
  id: "l-react-testing",
  stage: "frontend",
  module: "Frontend Testing",
  title: "Testing React Applications",
  what: "Frontend tests verify component behavior and application flows. Vitest provides the test runner and assertions, while React Testing Library encourages tests that interact with components the way users do rather than depending on implementation details.",
  why: "A React application can appear correct manually while regressions hide in forms, async states, routing, and conditional UI. Automated tests provide repeatable checks for important behavior and make refactoring safer.",
  mentalModel: "Test the contract a user or another component relies on: given this input and environment, the UI should expose this behavior. Prefer accessible queries and observable outcomes over inspecting internal state, hook calls, or component implementation details.",
  coreConcepts: [
    "Unit, integration, and end-to-end tests and the different questions they answer.",
    "Vitest test files, assertions, setup, and test isolation.",
    "React Testing Library rendering and queries based on roles, labels, and visible text.",
    "Testing user interactions such as typing, clicking, submitting, and navigation.",
    "Testing controlled forms and accessible validation messages.",
    "Testing asynchronous loading, success, empty, and error states.",
    "Mocking network boundaries without coupling tests to implementation details.",
    "Choosing what not to test: avoid tests that merely restate component internals or library behavior."
  ],
  example: "import { render, screen } from '@testing-library/react';\nimport { expect, test } from 'vitest';\nimport { SaveButton } from './SaveButton';\n\ntest('shows the save action', () => {\n  render(<SaveButton />);\n  expect(screen.getByRole('button', { name: /save/i })).toBeInTheDocument();\n});",
  code: "import { render, screen } from '@testing-library/react';\nimport userEvent from '@testing-library/user-event';\nimport { expect, test, vi } from 'vitest';\n\ntest('submits the form', async () => {\n  const user = userEvent.setup();\n  const onSubmit = vi.fn();\n  render(<LoginForm onSubmit={onSubmit} />);\n\n  await user.type(screen.getByLabelText(/email/i), 'user@example.com');\n  await user.click(screen.getByRole('button', { name: /sign in/i }));\n\n  expect(onSubmit).toHaveBeenCalledOnce();\n});",
  commonMistakes: [
    "Querying DOM nodes by brittle CSS selectors when an accessible role or label expresses the user-facing contract.",
    "Testing React's internal state or hook implementation instead of observable behavior.",
    "Ignoring asynchronous UI and asserting before the interface has updated.",
    "Mocking so much of the application that the test no longer exercises the behavior that matters."
  ],
  practice: "Write tests for a form covering initial render, validation error, successful submission, and disabled/loading behavior.",
  challenge: "Test a data-fetching component so loading, success, empty, and error states are all covered with deterministic network mocks.",
  miniProject: "Add a focused test suite to the routed movie/recipe dashboard covering navigation, a form flow, API loading/error behavior, and one important shared-state interaction.",
  resources: [
    { title: "Vitest — Official Documentation", url: "https://vitest.dev/", note: "Current test runner and assertion documentation." },
    { title: "React Testing Library — Introduction", url: "https://testing-library.com/docs/react-testing-library/intro/", note: "Official Testing Library guidance for React." },
    { title: "Testing Library — Queries", url: "https://testing-library.com/docs/queries/about/", note: "How to select elements using user-facing semantics." }
  ],
  mastery: [
    "I can distinguish unit, integration, and end-to-end testing goals.",
    "I use accessible, user-oriented queries for React components.",
    "I can test synchronous and asynchronous UI behavior reliably.",
    "I avoid coupling tests to component implementation details."
  ]
}
];