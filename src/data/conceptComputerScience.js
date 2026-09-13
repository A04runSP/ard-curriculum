export const conceptComputerScience = [
  {
    id: "concept-data-structures",
    stage: "computer-science",
    module: "Data Structures",
    title: "Data Structure Trade-offs",
    what: "A data structure organizes data around the operations a program needs.",
    why: "The same data can be stored in multiple ways, and each choice changes lookup, insertion, deletion, ordering, and memory costs.",
    keyPoints: ["Choose based on required operations and constraints.", "Arrays provide compact indexed storage; linked structures trade locality for flexible links.", "Stacks and queues constrain access order.", "Maps and sets optimize common membership and lookup operations.", "Trees and graphs model hierarchical and network relationships."],
    resource: { title: "Open Data Structures", url: "https://opendatastructures.org/" }
  },
  {
    id: "concept-big-o",
    stage: "computer-science",
    module: "Algorithms & Complexity",
    title: "Big O in Practice",
    what: "Big O describes how resource usage grows with input size.",
    why: "It provides a common language for discussing scalability without pretending that complexity is an exact runtime measurement.",
    keyPoints: ["O(1) does not mean zero time; it means bounded growth with input size.", "O(n) work grows roughly with the number of inputs.", "O(log n) grows slowly because the search space can be reduced repeatedly.", "O(n²) can become expensive as input grows.", "Analyze time and space separately when the trade-off matters."],
    resource: { title: "Big-O Cheat Sheet", url: "https://www.bigocheatsheet.com/" }
  },
  {
    id: "concept-memory",
    stage: "computer-science",
    module: "Memory & Execution",
    title: "Stack, Heap & References",
    what: "The call stack tracks active execution frames while dynamically allocated objects live in managed memory.",
    why: "References, object identity, recursion depth, and garbage collection are easier to understand once memory is treated as a resource with lifetime and reachability.",
    keyPoints: ["A reference can point to an object rather than copy the object.", "Multiple variables can reference the same object.", "Garbage collection can reclaim unreachable objects.", "Reachable but unnecessary objects can still cause memory problems.", "Deep or unbounded recursion can exhaust the call stack."],
    resource: { title: "MDN — Memory management", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Memory_management" }
  },
  {
    id: "concept-process-thread",
    stage: "computer-science",
    module: "Operating Systems & Concurrency",
    title: "Process vs Thread",
    what: "A process is an operating-system-managed running program; threads are execution paths within a process that can share its memory.",
    why: "This distinction explains isolation, shared state, context switching, concurrency, and why parallel execution has different costs from asynchronous coordination.",
    keyPoints: ["Processes generally provide stronger memory isolation.", "Threads in one process can share memory and therefore require synchronization when state is shared.", "Concurrency means overlapping progress; parallelism means simultaneous execution.", "JavaScript's async APIs should not be casually equated with creating a new thread."],
    resource: { title: "MDN — JavaScript execution model", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Execution_model" }
  },
  {
    id: "concept-tcp-ip-tls",
    stage: "computer-science",
    module: "Computer Networking",
    title: "TCP/IP & TLS",
    what: "IP handles addressing and routing, TCP provides a reliable ordered byte stream, and TLS provides cryptographic protection and server authentication for protocols such as HTTPS.",
    why: "These layers explain what happens beneath an HTTP request and give developers a useful model for diagnosing connection, latency, and security issues.",
    keyPoints: ["IP identifies network endpoints and supports routing.", "Ports identify logical service endpoints on a host.", "TCP provides reliability and ordering but does not guarantee low latency.", "TLS protects confidentiality and integrity and authenticates peers through certificates.", "HTTPS is HTTP carried over a secure transport such as TLS."],
    resource: { title: "Cloudflare Learning Center — TCP/IP", url: "https://www.cloudflare.com/learning/ddos/glossary/tcp-ip/" }
  },
  {
    id: "concept-database-index",
    stage: "computer-science",
    module: "Data Storage & Databases",
    title: "Why Database Indexes Exist",
    what: "A database index is an additional data structure maintained to make selected queries faster.",
    why: "Indexes are a deliberate trade: they can reduce read work but consume storage and add work to inserts and updates.",
    keyPoints: ["An index is not free.", "Index usefulness depends on query patterns and selectivity.", "The database query planner decides whether an index is useful for a particular query.", "Indexes should be designed from real access patterns, not added indiscriminately."],
    resource: { title: "PostgreSQL Documentation — Indexes", url: "https://www.postgresql.org/docs/current/indexes.html" }
  },
  {
    id: "concept-acid",
    stage: "computer-science",
    module: "Data Storage & Databases",
    title: "ACID Transactions",
    what: "ACID describes important transaction properties: atomicity, consistency, isolation, and durability.",
    why: "Transactions let multi-step changes preserve defined correctness properties even when operations fail or overlap.",
    keyPoints: ["Atomicity: the transaction behaves as an all-or-nothing unit.", "Consistency: committed transactions preserve defined database invariants.", "Isolation: concurrent transactions have controlled visibility and interaction.", "Durability: committed changes survive appropriate failures."],
    resource: { title: "PostgreSQL Documentation — Transactions", url: "https://www.postgresql.org/docs/current/tutorial-transactions.html" }
  },
  {
    id: "concept-threat-modeling",
    stage: "computer-science",
    module: "Security Fundamentals",
    title: "Threat Modeling",
    what: "Threat modeling systematically identifies what needs protection, who may attack it, where trust changes, and what could go wrong.",
    why: "Security decisions are stronger when they are based on explicit assets and threats instead of generic checklists.",
    keyPoints: ["Identify valuable assets and security goals.", "Map trust boundaries and attack surfaces.", "Separate authentication from authorization.", "Apply least privilege and defense in depth.", "Prioritize threats by likelihood, impact, and practical mitigations."],
    resource: { title: "OWASP Threat Modeling", url: "https://owasp.org/www-community/Threat_Modeling" }
  }
];