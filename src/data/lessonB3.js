export const lessonB3 = [
{
  id: "l-big-o",
  stage: "computer-science",
  module: "Algorithms",
  title: "Big O & Algorithmic Thinking",
  what: "Big O notation describes how an algorithm's running time (or memory use) grows as the input size grows — not the exact speed, but the shape of the growth curve. It's how engineers compare the scalability of different approaches to the same problem.",
  why: "Code that works fine on 10 items can become unusable on 10 million. Big O gives you a vocabulary and a mental habit for spotting that risk before it becomes a production incident, and it's a near-universal part of technical interviews.",
  mentalModel: "Imagine looking for a name in a phone book. Flipping through page by page from the start (O(n)) gets linearly slower as the book gets thicker. Using the fact that it's alphabetized and jumping to roughly the right section each time, narrowing by half (binary search, O(log n)), barely gets slower even if the book doubles in size. Big O is asking: 'as the book gets 10x thicker, does my strategy get 10x slower, barely slower, or catastrophically slower?'",
  coreConcepts: [
    "O(1) — constant time: same speed regardless of input size (e.g., accessing an array element by index, or a hash map lookup).",
    "O(log n) — logarithmic: barely slows down as input grows (e.g., binary search on sorted data).",
    "O(n) — linear: doubles in time if input doubles (e.g., a single loop through an array).",
    "O(n log n) — the realistic 'good' ceiling for sorting (e.g., merge sort, and what most language built-in sorts use).",
    "O(n²) — quadratic: a loop inside a loop over the same data — gets painful fast (e.g., naive duplicate-checking by comparing every pair).",
    "We care about the dominant term and worst case as n grows large — constants and smaller terms get dropped (O(2n + 100) is just O(n))."
  ],
  example: "// O(n): one pass through the array\nfunction findMax(numbers) {\n  let max = numbers[0];\n  for (const n of numbers) if (n > max) max = n;\n  return max;\n}\n\n// O(n²): a loop inside a loop over the same array — gets slow fast as arrays grow\nfunction hasDuplicate(numbers) {\n  for (let i = 0; i < numbers.length; i++) {\n    for (let j = 0; j < numbers.length; j++) {\n      if (i !== j && numbers[i] === numbers[j]) return true;\n    }\n  }\n  return false;\n}",
  code: "// The same duplicate check, rewritten as O(n) using a hash set — a classic, very common speedup pattern\nfunction hasDuplicateFast(numbers) {\n  const seen = new Set();\n  for (const n of numbers) {\n    if (seen.has(n)) return true;\n    seen.add(n);\n  }\n  return false;\n}\n// At 10 items, both feel instant. At 1,000,000 items, the O(n²) version can take minutes; this one still takes milliseconds.",
  commonMistakes: [
    "Optimizing code that already runs in milliseconds on realistic input sizes — Big O matters most where n can genuinely get large; premature optimization on tiny, fixed-size data wastes effort.",
    "Nesting loops over the same collection out of habit, without noticing you've just written O(n²) where a hash map would give you O(n).",
    "Confusing 'average case' with 'worst case' — interviews and real risk analysis usually care about worst case.",
    "Memorizing Big O answers for common structures without being able to derive them by actually counting operations in a loop."
  ],
  practice: "Take the `hasDuplicate` O(n²) function above and rewrite it using a Set, as shown, then explain in your own words why the new version is O(n).",
  challenge: "Given an already-sorted array, implement binary search from scratch (not the language's built-in) and explain why it's O(log n) rather than O(n).",
  miniProject: "Take a real function from one of your earlier projects, identify its Big O, and if it's worse than necessary (e.g., an O(n²) search you could make O(n) with a Map), refactor it and prove the improvement with a simple timer test on a large generated dataset.",
  resources: [
    { title: "\"A Common-Sense Guide to Data Structures and Algorithms\" (book)", url: "https://pragprog.com/titles/jwdsal2/a-common-sense-guide-to-data-structures-and-algorithms-second-edition/", note: "Widely recommended for genuinely intuitive, non-academic explanations." },
    { title: "CS50x — Algorithms lecture", url: "https://cs50.harvard.edu/x/", note: "Harvard's free, visual introduction to Big O and core algorithms." }
  ],
  mastery: [
    "I can look at a loop (or nested loops) and state its Big O without hesitation.",
    "I can explain why a hash map lookup is O(1) while a linear array search is O(n).",
    "I know when Big O actually matters for a decision and when it's a premature distraction.",
    "I can implement binary search from memory."
  ]
},
{
  id: "l-ux-fundamentals",
  stage: "ui-ux",
  module: "UX Process",
  title: "UX Fundamentals: User Research to Wireframes",
  what: "UX (user experience) design is the practice of understanding real user needs and shaping a product to meet them — through research, defining problems clearly, structuring information, and testing ideas cheaply (as sketches and wireframes) before any expensive development happens.",
  why: "Building the wrong thing beautifully is still building the wrong thing. A structured UX process is insurance against that — it's dramatically cheaper to discover a flawed idea on paper than after weeks of development, and as a solo builder, this discipline replaces the 'team' that would normally catch these problems for you.",
  mentalModel: "Think of UX as being an investigative journalist before you're an architect. A journalist doesn't start writing the story until they've actually talked to people and confirmed what's really going on — starting from assumptions produces a story (or a product) that's confident but wrong. Wireframes are like a journalist's rough notes-and-diagram stage: fast, disposable, meant to be argued with and changed before the 'final draft' (a high-fidelity design) is even started.",
  coreConcepts: [
    "User research: talking to real (or realistic proxy) users about their actual behavior and pain points, not asking them to predict what they'd want (people are unreliable predictors of their own future behavior, reliable reporters of their past behavior).",
    "Personas: a summarized, realistic archetype of a user type, used to keep design decisions grounded in a specific person's needs rather than an abstract 'everyone.'",
    "User flows: the step-by-step path a user takes through a product to accomplish a goal (e.g., sign up → verify email → create first project).",
    "Information architecture: how content and features are organized and labeled so users can find what they need (nav structure, categorization, labeling).",
    "Wireframes: low-fidelity, grayscale layout sketches focused purely on structure and hierarchy — explicitly not about color or polish yet.",
    "Usability testing: watching a real person try to use your design (even a rough prototype) and noting where they hesitate or get stuck — the single highest-value UX activity for a solo builder."
  ],
  example: "A rough user flow for a note-taking app's core loop:\nOpen app -> See list of notes (or empty state if new) -> Tap '+' -> Type note -> Tap save -> Return to list, see new note at top.\nEach arrow is a decision point where a design or technical choice could add friction (e.g., does '+' need to be a full screen away, or is inline creation faster?).",
  code: "<!-- Wireframes are usually drawn, not coded, but the SAME hierarchy-first thinking\n     applies when you sketch structure in plain HTML before any styling: -->\n<body>\n  <!-- structure only, no CSS yet — this is the 'wireframe' of the actual page -->\n  <header><!-- logo, nav --></header>\n  <main>\n    <!-- primary content block: the thing the user came here to do -->\n  </main>\n  <aside><!-- secondary/supporting content --></aside>\n</body>",
  commonMistakes: [
    "Jumping straight to high-fidelity, colorful mockups before validating the underlying structure and flow — you end up polishing the wrong layout.",
    "Writing personas based on assumptions ('users want simplicity') instead of specific, sourced observations from real research or comparable products.",
    "Treating usability testing as something only 'real companies with budgets' do — even showing a rough prototype to 3 non-technical friends and watching them use it, silently, surfaces real problems.",
    "Designing the happy path only, and forgetting empty states, error states, and loading states until development, when they're expensive to retrofit."
  ],
  practice: "Pick an app you use daily and reverse-engineer its core user flow as a numbered list of screens/decisions, then identify one point of friction you personally feel while using it.",
  challenge: "Write one realistic persona (not a caricature) for your capstone project idea, based on someone real you know or a specific type of person, including their goal and their biggest frustration with existing options.",
  miniProject: "Produce low-fidelity wireframes (hand-drawn or in Figma, grayscale, no color) for the 3 core screens of your next full-stack project, then show them to one other person and note where they hesitated or asked a question — before writing a single line of code for that project.",
  resources: [
    { title: "Nielsen Norman Group — UX articles", url: "https://www.nngroup.com/articles/", note: "The most respected, research-backed source in the field." },
    { title: "Figma — Design 101", url: "https://www.figma.com/resource-library/", note: "Official Figma learning resources, including wireframing basics." }
  ],
  mastery: [
    "I can write a user flow for a feature before designing any screens for it.",
    "I default to grayscale wireframes before adding any color or polish.",
    "I've watched at least one real person try to use something I built, and changed something as a direct result.",
    "I can justify a UX decision by referencing user behavior, not just personal taste."
  ]
},
{
  id: "l-system-design-basics",
  stage: "system-design",
  module: "Foundations",
  title: "System Design Basics: Client-Server to Caching",
  what: "System design is the practice of architecting how the pieces of a real, larger-scale application fit together — clients, servers, databases, caches, and the network between them — to meet requirements for speed, reliability, and scale.",
  why: "Everything up to this stage focused on making one request work correctly. System design is about what happens when 10,000 requests hit at once, when a server dies, or when a query that was fast on 100 rows takes 8 seconds on 8 million. These are the questions that separate 'this works on my machine' from 'this works in production.'",
  mentalModel: "Think of a popular restaurant. One chef (one server) can handle a quiet Tuesday lunch fine. On a busy Saturday night, you need more chefs (horizontal scaling), a host managing the line so no single chef gets overwhelmed (a load balancer), pre-made ingredients ready to go for common orders instead of starting from scratch every time (caching), and a written system for orders so nothing gets lost if a chef has to step away (durable storage, queues). None of this changes what's on the menu (your product) — it changes whether the kitchen survives popularity.",
  coreConcepts: [
    "Load balancing: distributing incoming requests across multiple server instances so no single one is overwhelmed.",
    "Caching: storing the result of an expensive operation (a slow query, a computed value) somewhere fast (memory, Redis, a CDN) so repeated requests don't redo the work — the biggest, cheapest performance win in most real systems.",
    "CDNs: caching static assets (images, JS, CSS) at servers physically close to users around the world, so a user in Chennai isn't waiting on a server in Virginia for every image.",
    "Horizontal scaling (more machines) vs vertical scaling (a bigger machine) — horizontal is generally more resilient and is the default assumption in modern system design.",
    "Database replication (copies of your data on multiple servers, for both redundancy and spreading out read traffic) and, at larger scale, partitioning/sharding (splitting data across servers so no single database holds everything).",
    "Message queues: letting a slow or unreliable task (sending an email, processing a video) happen asynchronously in the background instead of making the user's request wait for it."
  ],
  example: "A simple blog with 10 users needs: one server, one database. No caching, no load balancer, no queue — any of that would be pure overengineering at this scale.\nThe same blog with 10 million monthly readers needs: multiple server instances behind a load balancer, a CDN for images, a cache (e.g., Redis) in front of the database for popular posts, and probably a read-replica database so heavy reading doesn't compete with writing.",
  code: "// Conceptually, a cache-aside pattern (pseudocode, language-agnostic):\nfunction getPost(id) {\n  const cached = cache.get(`post:${id}`);\n  if (cached) return cached;              // fast path: cache hit\n\n  const post = database.query(\"SELECT * FROM posts WHERE id = ?\", [id]);\n  cache.set(`post:${id}`, post, { ttl: 60 }); // cache it for 60 seconds\n  return post;                             // slow path: cache miss\n}",
  commonMistakes: [
    "Designing for a scale you don't have and may never reach, adding real complexity and cost for a hypothetical future — start simple, and design so scaling later is possible, not so it's already done.",
    "Caching without an invalidation strategy, so users see stale data indefinitely after an update (the famous 'there are only two hard things in computer science: cache invalidation and naming things').",
    "Assuming a bigger single server (vertical scaling) solves every scaling problem — it has a hard physical ceiling and a single point of failure.",
    "Treating system design as purely theoretical instead of something you can practice by describing trade-offs out loud for your own real projects."
  ],
  practice: "For your full-stack blog project, write down (in plain language) what would break first if it suddenly got 10,000 concurrent users, and what the single cheapest fix would be.",
  challenge: "Design, on paper/diagram, a basic URL-shortener service: the data model, the two core API endpoints, and where you'd add caching and why.",
  miniProject: "Write a one-page 'scaling plan' design doc for your capstone idea: current expected scale, the first 3 bottlenecks you'd expect as it grows, and a concrete mitigation for each (caching, replication, queueing, or CDN), with a one-sentence trade-off for each mitigation.",
  resources: [
    { title: "System Design Primer (GitHub)", url: "https://github.com/donnemartin/system-design-primer", note: "The most widely used free, open-source system design resource." },
    { title: "\"Designing Data-Intensive Applications\" by Martin Kleppmann", url: "https://dataintensive.net/", note: "The standard deeper reference once the basics click." }
  ],
  mastery: [
    "I can explain caching, load balancing, and replication in plain language to a non-engineer.",
    "I can identify the first bottleneck in a simple system as load increases.",
    "I know when a design decision is genuinely needed at my current scale versus premature.",
    "I can sketch a basic architecture diagram for a simple product idea."
  ]
}
];