export const lessonB1 = [
{
  id: "l-git-github",
  stage: "software-engineering",
  module: "Version Control",
  title: "Git & GitHub Workflow",
  what: "Git is a version control system that tracks every change to your code over time, letting you save checkpoints (commits), branch off to try things safely, and merge work back together. GitHub is a hosted service for storing Git repositories and collaborating around them (pull requests, issues, reviews).",
  why: "Without version control, 'undo' only goes back one step and collaborating means emailing zip files named final_v3_ACTUAL.zip. Git is the single most universal professional tool in software — every team, everywhere, uses it, and not knowing it well is an immediate red flag in real work.",
  mentalModel: "Think of Git as a very detailed save-game system for your project. Each commit is a save point with a note describing what changed. A branch is a parallel timeline you can experiment in without touching the main timeline. Merging is combining two timelines back into one, and a pull request is 'here's my parallel timeline — please review it before we merge it into the main one.'",
  coreConcepts: [
    "The three areas: working directory (your files) → staging area (git add — what you're about to commit) → repository (git commit — permanently saved).",
    "Branches: git branch, git checkout -b (create+switch), keeping main/master always deployable and doing work on feature branches.",
    "git status, git log, git diff — your 'what's going on right now' tools, used constantly.",
    "Merging vs rebasing (conceptually: merging preserves both histories and creates a merge commit; rebasing replays your commits on top of the latest main for a cleaner, linear history).",
    "Remotes: git push/pull/fetch to sync with GitHub.",
    "Pull requests: propose a branch's changes for review before merging into main; code review happens here.",
    ".gitignore for excluding files (node_modules, .env, build output) from version control entirely."
  ],
  example: "git init                          # start tracking a new project\ngit add .                         # stage all changed files\ngit commit -m \"Add login form\"    # save a checkpoint with a message\ngit checkout -b feature/login     # create and switch to a new branch\ngit push origin feature/login     # send that branch to GitHub",
  code: "# A typical daily flow\ngit checkout main\ngit pull                              # get the latest changes\ngit checkout -b feature/add-search   # branch for new work\n# ...make changes...\ngit add .\ngit commit -m \"Add search bar to header\"\ngit push origin feature/add-search\n# Open a Pull Request on GitHub, get it reviewed, then merge.",
  commonMistakes: [
    "Committing directly to main on a real project instead of branching, making it hard to review or roll back individual features.",
    "Writing commit messages like \"fix\" or \"update\" with no useful information for your future self or teammates.",
    "Committing secrets (.env files, API keys) because .gitignore wasn't set up before the first commit — once pushed, treat the secret as compromised and rotate it, even after deleting it, since it lives in history.",
    "Being afraid of branching/merging and doing all work in one giant branch, losing the safety net Git is meant to provide."
  ],
  practice: "Initialize a Git repo for one of your existing practice projects, make 5 separate commits with clear, specific messages as you make small changes, and push it to a new GitHub repository.",
  challenge: "Create a feature branch, intentionally cause a merge conflict with main (edit the same line in both), then resolve the conflict manually and complete the merge.",
  miniProject: "Take your full-stack blog project and set up a proper workflow for it going forward: main branch protected conceptually (never commit directly), a feature branch per change, and at least 3 real pull requests with descriptive titles and descriptions, even if you're the only reviewer.",
  resources: [
    { title: "GitHub Docs — Git and GitHub basics", url: "https://docs.github.com/en/get-started", note: "Official, beginner-friendly starting point." },
    { title: "Git official documentation", url: "https://git-scm.com/doc", note: "The authoritative reference for every Git command." },
    { title: "Learn Git Branching (interactive)", url: "https://learngitbranching.js.org/", note: "Visual, hands-on way to build real intuition for branching/merging." }
  ],
  mastery: [
    "I commit small, logical changes with clear messages, not giant dumps at the end of a day.",
    "I always work on a feature branch, never directly on main.",
    "I can resolve a merge conflict without panicking.",
    "I know what belongs in .gitignore before I make my first commit on a new project."
  ]
},
{
  id: "l-react-components",
  stage: "frontend",
  module: "React Fundamentals",
  title: "React Components, Props & State",
  what: "React lets you build UIs out of small, reusable components — JavaScript functions that return what should appear on screen. Props pass data into a component from its parent; state is data a component manages itself and that, when changed, causes it to re-render.",
  why: "Vanilla DOM manipulation gets unmanageable fast once an app has many interacting pieces of UI. React's component model — 'UI as a function of state' — is the dominant pattern across the industry (and the one nearly every other modern framework has converged toward), so it transfers directly to real jobs and most other tools you'll meet later.",
  mentalModel: "A component is a small, self-contained factory: give it some inputs (props), and it stamps out some UI. State is that factory's own private memory — when the memory changes, the factory reruns and produces updated UI automatically. You never manually 'find and update' a DOM element in React; you just change the state, and React figures out what needs to change on screen.",
  coreConcepts: [
    "JSX: writing HTML-like syntax inside JavaScript, which compiles down to function calls.",
    "Components as functions, composed like building blocks (a Page is made of Header + ProductList + Footer, ProductList is made of many ProductCards).",
    "Props: read-only data passed from parent to child — a component should never modify its own props.",
    "State (useState): a component's own reactive data; calling the setter function triggers a re-render.",
    "Conditional rendering and rendering lists (with a stable, unique `key` prop on each item — critical for React to track items correctly).",
    "One-way data flow: data flows down via props; to affect a parent, a child calls a function the parent passed down to it."
  ],
  example: "function ProductCard({ name, price }) {\n  return (\n    <div className=\"card\">\n      <h3>{name}</h3>\n      <p>${price}</p>\n    </div>\n  );\n}\n\n// Used elsewhere: <ProductCard name=\"Keyboard\" price={49} />",
  code: "import { useState } from \"react\";\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={() => setCount(count + 1)}>+1</button>\n      <button onClick={() => setCount(0)}>Reset</button>\n    </div>\n  );\n}",
  commonMistakes: [
    "Mutating state directly (count++ instead of setCount(count + 1)) — React won't detect the change and won't re-render.",
    "Using array index as the `key` prop for a dynamic list that can be reordered/filtered — this causes subtle rendering bugs; use a stable unique id instead.",
    "Trying to modify a prop inside a child component — props are read-only; lift the change up via a callback function passed down as a prop instead.",
    "Putting everything in one giant component instead of splitting into focused, composable pieces."
  ],
  practice: "Build a `Toggle` component with its own boolean state that shows different text/styling depending on whether it's 'on' or 'off,' toggled by a button click.",
  challenge: "Build a `ShoppingList` component: an array of items in state, a form to add a new item, and a delete button per item — with props flowing correctly and no direct state mutation.",
  miniProject: "Rebuild your vanilla-JS to-do list as a proper React app: TaskList, TaskItem, and AddTaskForm as separate components, with state lifted to the top-level App component.",
  resources: [
    { title: "React official docs — Describing the UI", url: "https://react.dev/learn/describing-the-ui", note: "The official, current React documentation — start here, not old tutorials." },
    { title: "React official docs — Adding Interactivity", url: "https://react.dev/learn/adding-interactivity", note: "Official coverage of state and events." }
  ],
  mastery: [
    "I can explain the difference between props and state without hesitation.",
    "I never mutate state directly — I always use the setter function with a new value.",
    "I use stable unique keys for any list I render.",
    "I can decide, for a new feature, where state should 'live' in the component tree."
  ]
},
{
  id: "l-react-hooks-data",
  stage: "frontend",
  module: "React Fundamentals",
  title: "React Hooks & Data Fetching",
  what: "Hooks are functions that let you 'hook into' React features from function components. useEffect specifically lets you run code in response to a component rendering or specific values changing — most commonly, fetching data when a component first appears.",
  why: "Almost every real app needs to load data from a server, and needs to do things (subscriptions, timers, syncing) outside the pure 'render UI from props/state' flow. useEffect (and understanding when it re-runs) is one of the most misunderstood, and most necessary, parts of React.",
  mentalModel: "useEffect is 'after React updates the screen, also do this side thing' — think of it as a note stuck to the component saying 'once you're done painting, also go make this phone call.' The dependency array tells React exactly which changes should trigger that phone call again; get it wrong, and you either call constantly (missing/empty when it shouldn't be) or never again when you needed it to (stale data).",
  coreConcepts: [
    "useEffect(fn, deps): fn runs after render; deps array controls when it re-runs ([] = once on mount, [x] = whenever x changes, omitted = every render — rarely what you want).",
    "Cleanup functions: returning a function from useEffect to clean up (cancel a subscription, clear a timer) before the effect re-runs or the component unmounts.",
    "Fetching data in useEffect: the standard loading/error/data pattern.",
    "Custom hooks: extracting reusable stateful logic (e.g., useFetch) into your own hook, following the `use...` naming convention.",
    "useMemo/useCallback (lightly, as an optimization tool, not a default habit) for avoiding expensive recalculations or unnecessary child re-renders.",
    "The Rules of Hooks: only call hooks at the top level of a component/hook, never inside conditions or loops."
  ],
  example: "function useFetch(url) {\n  const [data, setData] = useState(null);\n  const [loading, setLoading] = useState(true);\n  const [error, setError] = useState(null);\n\n  useEffect(() => {\n    let cancelled = false;\n    setLoading(true);\n    fetch(url)\n      .then(res => res.json())\n      .then(json => { if (!cancelled) setData(json); })\n      .catch(err => { if (!cancelled) setError(err); })\n      .finally(() => { if (!cancelled) setLoading(false); });\n    return () => { cancelled = true; }; // cleanup avoids setting state after unmount\n  }, [url]);\n\n  return { data, loading, error };\n}",
  code: "function UserProfile({ userId }) {\n  const { data: user, loading, error } = useFetch(`/api/users/${userId}`);\n\n  if (loading) return <p>Loading...</p>;\n  if (error) return <p>Something went wrong.</p>;\n  return <h2>{user.name}</h2>;\n}",
  commonMistakes: [
    "Omitting the dependency array entirely, causing the effect to run after every single render, often leading to infinite fetch loops.",
    "Forgetting cleanup, leading to 'setState on an unmounted component' warnings and subtle bugs when a component unmounts mid-request.",
    "Fetching in useEffect with a stale closure over a prop/state value not included in the dependency array.",
    "Calling a hook conditionally (if (x) { useState(...) }) — this breaks React's internal bookkeeping and is disallowed for a reason."
  ],
  practice: "Write a custom hook useLocalStorage(key, initialValue) that behaves like useState but persists the value to localStorage.",
  challenge: "Build a search-as-you-type component that fetches results from a public API, but only fires the request after the user has stopped typing for 400ms (debouncing) — cleaning up the timer correctly with useEffect's cleanup function.",
  miniProject: "Rebuild your movie/recipe search app (from the Frontend stage project list) with proper loading, error, and empty states, using either a custom useFetch hook or a small data-fetching library, and confirm no console warnings appear.",
  resources: [
    { title: "React official docs — Synchronizing with Effects", url: "https://react.dev/learn/synchronizing-with-effects", note: "The official, deep explanation of when and why to use useEffect." },
    { title: "React official docs — Reusing Logic with Custom Hooks", url: "https://react.dev/learn/reusing-logic-with-custom-hooks", note: "Official guide to building your own hooks." }
  ],
  mastery: [
    "I can predict exactly when a given useEffect will re-run just by reading its dependency array.",
    "I always clean up subscriptions/timers/in-flight requests where relevant.",
    "I can extract repeated stateful logic into a custom hook.",
    "I handle loading and error states for every real data fetch, not just the happy path."
  ]
}
];