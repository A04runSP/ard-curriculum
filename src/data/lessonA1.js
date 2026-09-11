export const lessonA1 = [
{
  id: "l-mental-model",
  stage: "foundation",
  module: "How Computers Think",
  title: "How Computers Run Your Code",
  what: "A computer runs a program by executing a strict sequence of tiny instructions — one at a time, in order, incredibly fast. Everything you'll ever build (a website, an app, a game) is, underneath, just a very long, very organized list of simple instructions.",
  why: "If you skip this and jump straight to syntax, you'll memorize code without understanding it — which means you can copy tutorials but can't debug or adapt when something goes wrong. Every debugging skill you'll ever use comes back to this one idea: trace what the computer is actually doing, step by step.",
  mentalModel: "Think of a recipe. A recipe doesn't understand cooking — it just lists exact steps, in exact order, and a cook (the computer) follows them literally, with zero assumptions filled in. If a recipe says 'add sugar' without saying how much, a computer won't guess — it will either error or do something you didn't intend. Programming is writing recipes precise enough that a very literal-minded cook can follow them with no judgment calls.",
  coreConcepts: [
    "Instructions execute top to bottom, one at a time, unless you explicitly redirect the flow (with a condition or loop).",
    "A program has state — values it's currently holding — that changes as instructions run.",
    "Input goes in, processing happens, output comes out. Every program, no matter how complex, is built from this pattern repeated at every scale.",
    "The computer does exactly what you wrote, not what you meant. 'Bugs' are almost always a gap between those two things."
  ],
  example: "Making tea, as a computer would 'run' it: 1) Fill kettle with water. 2) Turn kettle on. 3) Wait until water boils. 4) Put tea bag in cup. 5) Pour hot water into cup. 6) Wait 3 minutes. 7) Remove tea bag. Notice step 3 and 6 are 'wait until a condition is true' — the same logic you'll later write as a loop or an async wait in code.",
  code: "// This is the same 'recipe' idea in real JavaScript:\nfunction makeTea(hasMilk) {\n  console.log(\"Boil water\");\n  console.log(\"Add tea bag\");\n  console.log(\"Wait 3 minutes\");\n  if (hasMilk) {\n    console.log(\"Add milk\");\n  }\n  console.log(\"Tea is ready\");\n}\n\nmakeTea(true);",
  commonMistakes: [
    "Assuming the computer will 'figure out' an unstated step — it won't; every step must be explicit.",
    "Trying to write the whole solution at once instead of tracing through it step by step first, on paper.",
    "Panicking at an error message instead of reading it — error messages almost always tell you the exact line and reason something broke."
  ],
  practice: "Write out, in numbered plain-English steps (not code), the exact process for: making instant noodles. Be so precise a literal-minded robot with no prior knowledge could follow it — including things like 'open the packet' that you'd never think to say out loud to a human.",
  challenge: "Now write the same numbered steps for 'deciding whether to bring an umbrella,' including at least one decision point (an if) and one repeated check (a loop, e.g. 'keep checking the sky every hour until you leave').",
  miniProject: "Turn your umbrella-decision steps into an actual JavaScript function using if/else, run it in a browser console or Node with a few different fake 'weather' inputs, and confirm it decides correctly each time.",
  resources: [
    { title: "CS50x — Week 0: Scratch", url: "https://cs50.harvard.edu/x/", note: "Teaches this exact mental model visually, with zero syntax to worry about." },
    { title: "MDN — What is programming?", url: "https://developer.mozilla.org/en-US/docs/Learn", note: "Official framing of programming fundamentals." }
  ],
  mastery: [
    "I can break an everyday task into an unambiguous, ordered list of steps.",
    "I can identify where a decision point (if) or a repeated action (loop) belongs in that list.",
    "I understand that a 'bug' means the computer did exactly what I wrote, not what I meant."
  ]
},
{
  id: "l-variables",
  stage: "programming",
  module: "JavaScript Fundamentals",
  title: "Variables & Data Types",
  what: "A variable is a named storage location for a value. Every value in JavaScript has a type — string (text), number, boolean (true/false), object, array, null, or undefined — and the type determines what you can do with it.",
  why: "Almost every bug in your first year of programming traces back to a misunderstanding about a variable's value or type — a number that's secretly a string, a variable that's undefined when you expected an object. Getting this rock-solid now saves you weeks of confused debugging later.",
  mentalModel: "A variable is a labeled box. `let score = 10` means 'make a box labeled score, put 10 in it.' `score = 20` means 'take out what's in the box, put 20 in instead' — the box (the variable) is the same, only its contents changed. `const` means the box is sealed shut after you first fill it — you can't put something else in, though if it holds an object, you can still change what's inside that object.",
  coreConcepts: [
    "let (reassignable), const (not reassignable — prefer this by default), var (old, avoid).",
    "Primitive types: string, number, boolean, null, undefined, symbol, bigint.",
    "Reference types: object, array, function — these are 'boxes that hold a pointer to a bigger box elsewhere in memory,' which is why copying them behaves differently than copying a number.",
    "typeof lets you inspect a value's type at runtime.",
    "JavaScript is dynamically typed: a variable can hold any type, and can even change type (though doing so on purpose is usually a mistake)."
  ],
  example: "let name = \"Arun\"; // string\nlet age = 29;        // number\nlet isEmployed = true; // boolean\nlet nothingYet;        // undefined — declared, not yet assigned\nlet nothingOnPurpose = null; // explicitly 'no value'",
  code: "const user = { name: \"Arun\", age: 29 };\nconst copy = user;      // copy is a reference to the SAME object\ncopy.age = 30;\nconsole.log(user.age);  // 30 — changing copy changed user too!\n\nconst a = 5;\nconst b = a;            // b gets its OWN copy of the number 5\n// changing b (if it were let) would NOT affect a",
  commonMistakes: [
    "Using == instead of === (== does loose comparison with type coercion and produces surprising results like '5' == 5 being true; always use === and !==).",
    "Assuming objects/arrays copy by value — they copy by reference, so two variables can point at the same underlying data.",
    "Confusing undefined (never assigned) with null (deliberately empty) — they mean different things.",
    "Overusing var out of old habit — it has confusing scoping rules that let/const fix."
  ],
  practice: "Declare variables for a simple user profile (name, age, email, isVerified) with correct types, then write three console.log statements that use typeof to prove each one's type.",
  challenge: "Write a function `swapIfWrongOrder(a, b)` that takes two numbers and returns them as an array in ascending order, without using a third named variable (hint: array destructuring can swap in one line).",
  miniProject: "Build a small 'unit converter' script (console-based) that stores a value and a unit type in variables, and logs the converted value for at least 3 conversions (e.g., km→miles, °C→°F, kg→lbs).",
  resources: [
    { title: "MDN — JavaScript data types and structures", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures", note: "The authoritative reference." },
    { title: "Eloquent JavaScript — Ch. 1: Values, Types, Operators", url: "https://eloquentjavascript.net/01_values.html", note: "Free online book, excellent depth." }
  ],
  mastery: [
    "I can name every primitive type in JS and give an example of each.",
    "I understand and can explain why objects/arrays behave differently from numbers/strings when 'copied.'",
    "I always use === / !== and can explain why == is risky.",
    "I know when to use let vs const (and why I basically never need var)."
  ]
},
{
  id: "l-functions-scope",
  stage: "programming",
  module: "JavaScript Fundamentals",
  title: "Functions & Scope",
  what: "A function is a named, reusable block of instructions that takes inputs (parameters) and can return an output. Scope is the set of variables a piece of code can 'see' at any given point.",
  why: "Functions are how you avoid repeating yourself and how you break a big problem into small, testable pieces. Scope is why the exact same variable name can mean two different things in two different places — misunderstanding it causes some of the most confusing bugs beginners hit.",
  mentalModel: "A function is a mini-machine: you feed it labeled inputs (parameters), it does work, and it optionally hands you back a result (return). Scope is like a set of nested rooms — code inside an inner room can see variables from outer rooms, but code in an outer room cannot see into an inner room. Each function call creates its own fresh inner room.",
  coreConcepts: [
    "Function declarations vs function expressions vs arrow functions — different syntaxes, mostly interchangeable, with subtle differences in `this` binding (arrow functions don't have their own `this`).",
    "Parameters vs arguments: parameters are the named placeholders in the definition; arguments are the actual values passed in.",
    "return exits the function immediately and hands back a value; a function with no return implicitly returns undefined.",
    "Block scope (let/const, {}) vs function scope (var) vs global scope.",
    "Closures: a function 'remembers' the variables from the scope it was created in, even after that outer function has finished running."
  ],
  example: "function greet(name) {\n  const message = `Hello, ${name}!`;\n  return message;\n}\n\nconst result = greet(\"Arun\"); // result = \"Hello, Arun!\"\n// `message` only exists INSIDE greet — trying to log it out here would error.",
  code: "// A closure: makeCounter 'remembers' count even after it returns\nfunction makeCounter() {\n  let count = 0;\n  return function () {\n    count += 1;\n    return count;\n  };\n}\n\nconst counter = makeCounter();\nconsole.log(counter()); // 1\nconsole.log(counter()); // 2 — count persisted between calls",
  commonMistakes: [
    "Forgetting to return a value and then being confused why the result is undefined.",
    "Redeclaring a variable with the same name inside a function and being surprised it 'shadows' the outer one instead of modifying it.",
    "Using `this` inside an arrow function expecting it to behave like a regular function (arrow functions inherit `this` from their surrounding scope).",
    "Writing giant functions that do five things instead of five small functions that each do one thing well."
  ],
  practice: "Write a function `isEven(number)` that returns true/false, and a function `average(numbers)` that takes an array and returns the mean. Test both with at least 3 inputs each.",
  challenge: "Write `makeMultiplier(factor)` that returns a new function which multiplies any number it's given by `factor` (this is a closure, like the counter example — build your own version).",
  miniProject: "Refactor your Level-1 to-do list console logic (from the Programming stage) into small, well-named functions: addTask(), removeTask(), listTasks() — each doing exactly one job.",
  resources: [
    { title: "MDN — Functions", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions", note: "Covers declarations, expressions, and arrow functions." },
    { title: "MDN — Closures", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures", note: "The clearest official explanation of closures." }
  ],
  mastery: [
    "I can write a function that takes parameters and returns a value, and explain the difference between the two.",
    "I can explain, in my own words, what a closure is and why it's useful.",
    "I can look at nested blocks of code and correctly say which variables are visible where."
  ]
},
{
  id: "l-arrays-objects",
  stage: "programming",
  module: "JavaScript Fundamentals",
  title: "Arrays & Objects",
  what: "Arrays are ordered lists of values, accessed by numeric index. Objects are unordered collections of key-value pairs, accessed by name. Together, they are how you model almost all real-world data in JavaScript.",
  why: "Nearly every real program is 'get some data, transform it, display it.' Arrays and objects (and the methods that operate on them — map, filter, reduce) are the tools you use to do the 'transform' part, and you'll use them every single day you write JavaScript.",
  mentalModel: "An array is a numbered row of lockers — locker 0, locker 1, locker 2 — where order matters and you usually don't care about a 'name,' just position. An object is a filing cabinet with labeled folders — you don't care about order, you care about grabbing the folder labeled 'email' directly.",
  coreConcepts: [
    "Arrays: indexing (zero-based), .length, and the core transformation methods: .map (transform each item), .filter (keep some items), .reduce (combine into one value), .forEach (just do something per item, no return).",
    "Objects: dot notation vs bracket notation for access, nested objects, and the fact that keys are always strings (or symbols) under the hood.",
    "Destructuring: pulling values out of arrays/objects into named variables in one line.",
    "Spread (...) for copying/merging arrays and objects immutably.",
    "Arrays of objects — the single most common real-world data shape (a list of users, products, posts)."
  ],
  example: "const users = [\n  { name: \"Arun\", age: 29 },\n  { name: \"Divya\", age: 24 }\n];\n\nconst names = users.map(u => u.name); // [\"Arun\", \"Divya\"]\nconst adults = users.filter(u => u.age >= 18); // both, in this case\nconst totalAge = users.reduce((sum, u) => sum + u.age, 0); // 53",
  code: "// Destructuring + spread in practice\nconst { name, age } = users[0];\nconsole.log(name, age); // \"Arun\" 29\n\nconst updatedUser = { ...users[0], age: 30 }; // copy + override one field\n// original users[0] is untouched — this is the 'immutable update' pattern\n// you'll use constantly in React later.",
  commonMistakes: [
    "Mutating arrays/objects directly (push, splice, or `obj.x = y` on shared data) when you meant to create a new copy — this causes subtle bugs, especially later in React.",
    "Confusing .map (returns a new array of the same length) with .filter (returns a shorter array) with .forEach (returns nothing at all).",
    "Off-by-one errors with array indices (arrays start at 0, and .length is one more than the last valid index).",
    "Trying to loop over an object with a for loop meant for arrays (use Object.keys/values/entries or for...in instead)."
  ],
  practice: "Given an array of product objects ({name, price, inStock}), write one line each to: get an array of just the names, get only the in-stock products, and calculate the total price of all products.",
  challenge: "Write a function `groupByFirstLetter(names)` that takes an array of strings and returns an object where each key is a first letter and the value is an array of names starting with that letter.",
  miniProject: "Build a small 'expense tracker' (console-based): an array of expense objects ({description, amount, category}), with functions to add an expense, get the total, and get totals grouped by category.",
  resources: [
    { title: "MDN — Array methods reference", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array", note: "The full, authoritative list of array methods." },
    { title: "MDN — Destructuring assignment", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment", note: "Covers both array and object destructuring." }
  ],
  mastery: [
    "I reach for .map/.filter/.reduce before reaching for a manual for-loop, when appropriate.",
    "I understand the difference between mutating data and creating a new copy, and can do both intentionally.",
    "I can destructure nested objects and arrays without looking up the syntax."
  ]
}
];