export const lessonA3 = [
{
  id: "l-async-js",
  stage: "web-development",
  module: "JavaScript in the Browser",
  title: "Asynchronous JavaScript",
  what: "Asynchronous code lets JavaScript start a slow operation (like a network request) and keep running other code while waiting for it, instead of freezing the whole page. Promises and async/await are the modern syntax for writing and reasoning about this kind of code.",
  why: "Every time your app talks to a server — logging in, loading a feed, saving data — that's an asynchronous operation. If you don't understand async JS, API-driven apps (which is almost all real apps) will feel like unpredictable magic instead of something you can reason about and debug.",
  mentalModel: "Imagine ordering food at a counter. You don't stand frozen, staring at the kitchen, blocking everyone behind you (that would be 'synchronous/blocking'). You take a buzzer, sit down, and keep living your life; when the buzzer goes off (the Promise 'resolves'), you go get your food (the .then / the code after await runs). JavaScript's single thread handles many such 'buzzers' at once without ever truly doing two things at the exact same instant.",
  coreConcepts: [
    "The event loop (conceptual): JS is single-threaded, but the browser/Node runtime handles slow operations (timers, network) outside that thread and queues up your callback for when they're done.",
    "Callbacks (the original approach) → Promises (a cleaner object representing 'a value that will exist eventually,' with .then/.catch) → async/await (syntax that lets promise-based code read almost like synchronous code).",
    "A Promise has three states: pending, fulfilled, rejected.",
    "try/catch around await for error handling — this is how you handle a rejected promise in async/await style.",
    "The Fetch API for making HTTP requests, and .json() for parsing the response body.",
    "Promise.all() for running multiple async operations concurrently and waiting for all of them."
  ],
  example: "// Promise-based\nfetch(\"https://api.example.com/users\")\n  .then(response => response.json())\n  .then(data => console.log(data))\n  .catch(error => console.error(\"Failed:\", error));",
  code: "// The same request, async/await style (generally easier to read for multi-step logic)\nasync function getUsers() {\n  try {\n    const response = await fetch(\"https://api.example.com/users\");\n    if (!response.ok) throw new Error(`HTTP ${response.status}`);\n    const data = await response.json();\n    return data;\n  } catch (error) {\n    console.error(\"Failed to fetch users:\", error);\n    return [];\n  }\n}",
  commonMistakes: [
    "Forgetting that fetch() only rejects on a network failure, not on HTTP error statuses (404, 500) — you must check response.ok yourself.",
    "Forgetting `await` and ending up with a Promise object instead of the actual data (a very common and confusing beginner bug).",
    "Not wrapping await in try/catch, so a failed request crashes the whole function silently or with an unhandled rejection.",
    "Running independent async calls one after another with await when they could run concurrently with Promise.all(), wasting time."
  ],
  practice: "Write an async function that fetches a random fact from a free public API (e.g., a cat facts or random joke API) and logs it. Handle both success and failure.",
  challenge: "Write a function that fetches data for 3 different users concurrently (by ID, from a public API like JSONPlaceholder) using Promise.all(), and returns them as a single combined array.",
  miniProject: "Finish your Level-1 weather app: user types a city, you fetch real weather data from a public API, show a loading state while waiting, and show either the result or a friendly error message.",
  resources: [
    { title: "MDN — Asynchronous JavaScript", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Async_JS", note: "Official, thorough module covering the full progression from callbacks to async/await." },
    { title: "MDN — Using the Fetch API", url: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch", note: "Official Fetch reference." },
    { title: "JavaScript.info — Async/await", url: "https://javascript.info/async-await", note: "Very clear, example-heavy explanation." }
  ],
  mastery: [
    "I can explain, without jargon, why JavaScript doesn't freeze while waiting for a network request.",
    "I default to async/await with try/catch for anything beyond a single simple fetch.",
    "I always check response.ok (or equivalent) — I don't assume a request succeeded just because it didn't throw."
  ]
}
];