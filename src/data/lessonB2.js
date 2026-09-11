export const lessonB2 = [
{
  id: "l-http-rest",
  stage: "backend",
  module: "Server Fundamentals",
  title: "HTTP, REST APIs & Servers",
  what: "HTTP is the protocol browsers and servers use to communicate. A server is a program that listens for HTTP requests and sends back responses. REST is a widely-used convention for designing APIs around resources (nouns) and HTTP methods (verbs).",
  why: "Every backend you'll ever build speaks HTTP, and most speak it via REST conventions. Understanding this deeply — not just 'GET fetches, POST sends' — is what lets you design APIs that other developers (and future-you) find predictable and easy to use correctly.",
  mentalModel: "Think of an API as a restaurant menu with fixed, predictable phrasing: GET /orders means 'show me the orders' (like reading the menu), POST /orders means 'create a new order' (placing an order), PUT/PATCH /orders/5 means 'change order 5,' DELETE /orders/5 means 'cancel order 5.' A good REST API reads almost like plain English once you know the pattern, precisely because it doesn't invent a new verb for every action.",
  coreConcepts: [
    "HTTP methods: GET (read), POST (create), PUT (full replace), PATCH (partial update), DELETE (remove).",
    "Status codes: 200 (OK), 201 (Created), 204 (No Content), 400 (Bad Request — client's fault), 401 (Unauthorized), 403 (Forbidden), 404 (Not Found), 500 (Server Error — your fault).",
    "Resources as nouns in URLs: /users, /users/5, /users/5/orders — not verbs like /getUser or /deleteUser.",
    "Request/response anatomy: headers (metadata like Content-Type, Authorization), body (the actual data, usually JSON), query params (?page=2) vs route params (/users/:id).",
    "Statelessness: each request contains everything the server needs to process it — the server doesn't remember you between requests (this is why auth tokens exist).",
    "Middleware: functions that run in the request/response pipeline before your route handler (parsing JSON bodies, logging, authentication checks)."
  ],
  example: "GET    /api/tasks        -> list all tasks\nPOST   /api/tasks        -> create a new task\nGET    /api/tasks/42     -> get task 42\nPATCH  /api/tasks/42     -> update task 42\nDELETE /api/tasks/42     -> delete task 42",
  code: "const express = require(\"express\");\nconst app = express();\napp.use(express.json()); // middleware: parses JSON request bodies\n\nlet tasks = [];\n\napp.get(\"/api/tasks\", (req, res) => {\n  res.json(tasks);\n});\n\napp.post(\"/api/tasks\", (req, res) => {\n  const { title } = req.body;\n  if (!title) return res.status(400).json({ error: \"title is required\" });\n  const task = { id: Date.now(), title, done: false };\n  tasks.push(task);\n  res.status(201).json(task);\n});\n\napp.listen(3000, () => console.log(\"Server running on port 3000\"));",
  commonMistakes: [
    "Verbs in URLs (/getTasks, /createTask) instead of nouns + HTTP methods (GET /tasks, POST /tasks).",
    "Always returning 200 even on errors, forcing clients to parse the response body just to know if something failed.",
    "Not validating input on the server, trusting that the frontend already validated it (frontend validation is a UX nicety; server validation is the actual security boundary).",
    "Confusing PUT (replace the whole resource) with PATCH (update part of it), and using them inconsistently."
  ],
  practice: "Design (on paper, as a list of ROUTE + METHOD + description) a REST API for a 'library' app: books, and borrowing records. Don't write code yet — just the API contract.",
  challenge: "Implement that library API in Express with in-memory data: full CRUD on books, plus a POST /books/:id/borrow endpoint, with correct status codes and input validation throughout.",
  miniProject: "Build the full REST API for your note-taking app project (Backend stage): CRUD on notes, with proper status codes, input validation, and at least one middleware you wrote yourself (e.g., a request logger).",
  resources: [
    { title: "MDN — An overview of HTTP", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview", note: "Official protocol reference." },
    { title: "Official Express.js documentation", url: "https://expressjs.com/", note: "The framework's own guide and API reference." },
    { title: "MDN — HTTP response status codes", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status", note: "The full, authoritative status code list." }
  ],
  mastery: [
    "I can design a REST API's routes for a new resource correctly, without looking anything up.",
    "I return the correct status code for every outcome, not just 200 and 500.",
    "I validate input on the server, every time, regardless of frontend validation.",
    "I can explain statelessness and why it matters for how auth has to work."
  ]
},
{
  id: "l-sql-fundamentals",
  stage: "databases",
  module: "SQL",
  title: "Databases & SQL Fundamentals",
  what: "A relational database stores data in tables (rows and columns) with defined relationships between them. SQL (Structured Query Language) is how you create, read, update, and delete that data, and how you combine data across related tables.",
  why: "Almost every real application needs to persist data reliably and query it in flexible ways — SQL and relational databases (PostgreSQL especially) remain the default, battle-tested choice for the vast majority of applications, and SQL skill transfers across nearly every backend job.",
  mentalModel: "A relational database is a set of precisely linked spreadsheets. Each spreadsheet (table) has consistent columns. A 'foreign key' is a cell in one spreadsheet that points to a specific row in another spreadsheet (e.g., every row in an `orders` sheet points to a specific customer in the `customers` sheet by ID) — this is how you avoid duplicating a customer's whole address in every single order row.",
  coreConcepts: [
    "Tables, rows, columns, and data types (INTEGER, TEXT, BOOLEAN, TIMESTAMP, etc.).",
    "Primary keys (uniquely identify a row) and foreign keys (reference a row in another table).",
    "CRUD in SQL: SELECT, INSERT, UPDATE, DELETE.",
    "Filtering and sorting: WHERE, ORDER BY, LIMIT.",
    "Joins: INNER JOIN (only matching rows), LEFT JOIN (all rows from the left table, matched or not) — how you combine related tables in one query.",
    "Aggregation: GROUP BY with COUNT, SUM, AVG, alongside HAVING to filter aggregated results.",
    "Relationships: one-to-many (one author, many books) and many-to-many (books and tags, via a join table)."
  ],
  example: "-- One-to-many: many books, each belonging to one author\nSELECT books.title, authors.name\nFROM books\nINNER JOIN authors ON books.author_id = authors.id\nWHERE authors.name = 'Ursula K. Le Guin'\nORDER BY books.published_year;",
  code: "-- Aggregation: total sales per category, only categories with more than 10 orders\nSELECT category, COUNT(*) AS order_count, SUM(amount) AS total_sales\nFROM orders\nJOIN products ON orders.product_id = products.id\nGROUP BY category\nHAVING COUNT(*) > 10\nORDER BY total_sales DESC;",
  commonMistakes: [
    "Using SELECT * in real application code instead of naming the exact columns you need — wastes bandwidth and breaks silently if the schema changes.",
    "Forgetting WHERE on an UPDATE or DELETE — this is one of the most infamous, career-story mistakes in software (it updates/deletes every row in the table).",
    "Not understanding the difference between INNER JOIN (can silently drop rows with no match) and LEFT JOIN when you actually needed all rows from one side.",
    "Storing repeated data (like a customer's full address on every order) instead of a foreign key reference — this is exactly what normalization (see the Databases stage) fixes."
  ],
  practice: "Given a `students` table and a `courses` table linked by an `enrollments` join table, write queries to: list all courses a specific student is in, and count how many students are in each course.",
  challenge: "Write a single query that returns each customer's name alongside their total number of orders and total amount spent, including customers with zero orders (hint: this needs a LEFT JOIN plus COALESCE for the zero case).",
  miniProject: "Design and create (with real CREATE TABLE statements) a normalized schema for your note-taking app's backend: users, notes, and tags (many-to-many via a join table), then write the 5 core queries your API will need.",
  resources: [
    { title: "PostgreSQL official tutorial", url: "https://www.postgresql.org/docs/current/tutorial.html", note: "The official, authoritative starting point." },
    { title: "Mode's SQL Tutorial", url: "https://mode.com/sql-tutorial", note: "Widely used, example-driven, free SQL tutorial." }
  ],
  mastery: [
    "I can write SELECT queries with joins, filtering, and aggregation without looking up basic syntax.",
    "I always double-check WHERE clauses before running UPDATE/DELETE, especially against real data.",
    "I can look at a data requirement and design a sensibly normalized set of tables for it.",
    "I know the difference between INNER and LEFT JOIN and can explain when each changes the result."
  ]
},
{
  id: "l-auth",
  stage: "backend",
  module: "Security & Auth",
  title: "Authentication & Authorization",
  what: "Authentication answers 'who are you?' (logging in, proving identity). Authorization answers 'what are you allowed to do?' (permissions, roles) — a logged-in user is authenticated, but might still be unauthorized to delete someone else's post.",
  why: "Getting auth wrong is one of the most common and most damaging mistakes in real software — leaked passwords, broken access control letting users see/edit each other's data. You don't need to invent your own crypto, but you do need to understand the standard patterns well enough to implement and reason about them correctly.",
  mentalModel: "Authentication is showing ID at the door (proving you are who you say). Authorization is the bouncer checking the guest list to see which rooms your specific ID lets you into. A system can authenticate you perfectly and still authorize you incorrectly (e.g., accidentally letting any logged-in user edit any other user's data because the check for 'is this actually your resource?' is missing) — this second failure is extremely common in real bugs, and it's a pure logic bug, not a crypto problem.",
  coreConcepts: [
    "Never store plaintext passwords — always hash with a slow, purpose-built algorithm (bcrypt/argon2), never a fast general-purpose hash like plain SHA-256.",
    "Sessions (server stores session state, client holds a session ID cookie) vs JWTs (a signed, self-contained token the client holds and sends with each request — the server verifies the signature rather than looking up stored state).",
    "Where to store tokens on the client, and the trade-offs (httpOnly cookies resist JS-based theft/XSS better than localStorage, but need CSRF protection; this is a genuinely debated trade-off, not a solved one).",
    "Authorization checks belong on the server, on every relevant request — 'hiding' a button on the frontend is not security, it's just UX.",
    "Role-based access control (RBAC) as the common pattern: users have roles, roles have permissions.",
    "HTTPS as a baseline requirement — without it, credentials and tokens travel in plaintext over the network."
  ],
  example: "// Signup: hash the password before ever storing it\nconst bcrypt = require(\"bcrypt\");\nconst hashedPassword = await bcrypt.hash(plainPassword, 10);\n// Store hashedPassword in the database — never the original.\n\n// Login: compare the submitted password against the stored hash\nconst isValid = await bcrypt.compare(submittedPassword, storedHashedPassword);",
  code: "// A basic authorization check — NOT just 'are you logged in' but 'is this YOUR resource'\napp.delete(\"/api/notes/:id\", requireAuth, async (req, res) => {\n  const note = await db.notes.findById(req.params.id);\n  if (!note) return res.status(404).json({ error: \"Not found\" });\n  if (note.userId !== req.user.id) {\n    return res.status(403).json({ error: \"Forbidden\" }); // authenticated, but not authorized\n  }\n  await db.notes.delete(req.params.id);\n  res.status(204).send();\n});",
  commonMistakes: [
    "Checking 'is the user logged in?' but forgetting to check 'does this specific resource belong to this specific user?' — the single most common real-world authorization bug.",
    "Storing passwords hashed with a fast algorithm (or worse, encrypted-but-reversible, or worse still, plaintext).",
    "Putting sensitive authorization logic only in the frontend (e.g., hiding a delete button) and trusting the client not to just call the API directly.",
    "Long-lived tokens with no expiration or refresh mechanism, so a single leaked token compromises an account indefinitely."
  ],
  practice: "Implement signup and login endpoints with bcrypt password hashing (no JWTs yet) — on login, just confirm the password matches and return a success message.",
  challenge: "Add JWT-based auth: issue a signed token on login, write middleware that verifies the token on protected routes and attaches the user to req.user, and reject requests with missing/invalid tokens with 401.",
  miniProject: "Add full auth to your note-taking API: signup/login with hashed passwords and JWTs, a requireAuth middleware, and per-note ownership checks so users can only read/edit/delete their own notes.",
  resources: [
    { title: "OWASP — Authentication Cheat Sheet", url: "https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html", note: "Industry-standard, practical guidance on doing auth correctly." },
    { title: "jwt.io — Introduction", url: "https://jwt.io/introduction", note: "Clear explanation of how JWTs are structured and verified." }
  ],
  mastery: [
    "I never store a plaintext or fast-hashed password.",
    "I check resource ownership on the server for every protected action, not just login status.",
    "I can explain the session vs JWT trade-off in my own words.",
    "I treat every auth-adjacent decision as a security decision, not just a feature to ship quickly."
  ]
}
];