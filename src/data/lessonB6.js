const makeSystemDesignLesson = (id, module, title, what, why, mentalModel, coreConcepts, example, code, commonMistakes, practice, challenge, miniProject, resources, mastery) => ({
  id,
  stage: "system-design",
  module,
  title,
  what,
  why,
  mentalModel,
  coreConcepts,
  example,
  code,
  commonMistakes,
  practice,
  challenge,
  miniProject,
  resources,
  mastery
});

export const lessonB6 = [
  makeSystemDesignLesson(
    "l-sd-requirements-capacity",
    "Requirements & Capacity",
    "Requirements, Constraints & Capacity Estimation",
    "System design starts by turning a product request into explicit functional requirements, non-functional requirements, constraints, traffic assumptions, and rough capacity numbers.",
    "Without workload assumptions, architecture choices become arbitrary. A design needs enough quantitative reasoning to expose likely bottlenecks before implementation.",
    "Start with users and requests, then estimate peak traffic, payload sizes, storage growth, bandwidth, and latency targets. Estimates are directional models, not promises.",
    ["Functional versus non-functional requirements", "Latency, throughput, availability, durability", "Requests per second", "Peak versus average traffic", "Read/write ratios", "Storage and bandwidth estimation", "Back-of-the-envelope calculations", "Explicit assumptions"],
    "10 million monthly users does not directly tell you server capacity; convert usage assumptions into requests/second, peak multipliers, payload sizes, and storage growth.",
    "peakRps = averageRps * peakMultiplier\nstoragePerYear = dailyWrites * averageRecordBytes * 365",
    ["Designing before clarifying requirements", "Treating monthly users as requests per second", "Ignoring peak traffic", "Using false precision instead of stating assumptions", "Optimizing before identifying the dominant constraint"],
    "Take one existing project and write a one-page requirements sheet with traffic, latency, availability, storage, and growth assumptions.",
    "Given a product with 1M monthly users, derive a plausible peak RPS and storage estimate while clearly labeling every assumption.",
    "Create a capacity-estimation worksheet for a URL shortener or media-sharing service and identify which estimate most affects the architecture.",
    [
      { title: "Google SRE — Service Level Objectives", url: "https://sre.google/sre-book/service-level-objectives/", note: "A practical foundation for availability and latency objectives." },
      { title: "AWS Well-Architected — Performance Efficiency", url: "https://docs.aws.amazon.com/wellarchitected/latest/performance-efficiency-pillar/welcome.html", note: "Performance and workload design guidance." }
    ],
    ["I can separate requirements from implementation choices.", "I can estimate RPS, storage, and bandwidth with stated assumptions.", "I can identify the most important capacity constraint."]
  ),
  makeSystemDesignLesson(
    "l-sd-architecture-tradeoffs",
    "Architecture Fundamentals",
    "Architecture Decomposition & Trade-Offs",
    "A system is a set of components and boundaries. Good designs make responsibilities, dependencies, state ownership, and failure boundaries explicit.",
    "Most architecture decisions trade one property for another: simplicity versus isolation, latency versus durability, consistency versus availability, or cost versus redundancy.",
    "Draw the request path first. Then identify stateful components, synchronous calls, asynchronous work, external dependencies, and the failure or scaling boundary of each component.",
    ["Components and responsibilities", "Synchronous versus asynchronous boundaries", "Stateless versus stateful services", "Coupling and cohesion", "Single points of failure", "Failure domains", "Architecture decision records", "Trade-off matrices"],
    "A web application can remain a modular monolith while scaling horizontally; adding services is a decision about boundaries, not a prerequisite for scale.",
    "client → load balancer → app instances → database\n                           ↘ cache\n                           ↘ queue → worker",
    ["Drawing boxes without explaining data flow", "Using microservices as a synonym for scalability", "Ignoring state ownership", "Creating a service for every database table", "Failing to document why a trade-off was chosen"],
    "Take a full-stack application and annotate every component with responsibility, state, dependency, scaling unit, and failure mode.",
    "Compare a modular monolith and a microservice split for the same product and document which constraints would justify the extra distribution.",
    "Write an architecture decision record comparing two viable architectures for an existing project, including operational and team costs.",
    [
      { title: "AWS Well-Architected Framework", url: "https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html", note: "Structured questions for architecture trade-offs." },
      { title: "Martin Fowler — Monolith First", url: "https://martinfowler.com/bliki/MonolithFirst.html", note: "Trade-offs around starting with a monolith and evolving boundaries." }
    ],
    ["I can explain why each major component exists.", "I can identify state and failure boundaries.", "I can defend an architecture choice with explicit trade-offs."]
  ),
  makeSystemDesignLesson(
    "l-sd-load-balancing-scaling",
    "Traffic & Compute",
    "Load Balancing, Horizontal Scaling & Stateless Services",
    "Scaling a service means distributing work across compute instances while keeping routing, health, and state management predictable.",
    "A single instance creates a capacity and availability ceiling. Horizontal scaling raises throughput and can improve resilience, but only when shared state and downstream bottlenecks are handled.",
    "Put multiple application instances behind a load balancer. Keep request-serving instances as stateless as practical and move shared state to deliberate infrastructure.",
    ["Vertical versus horizontal scaling", "Load-balancing algorithms", "Health checks", "Stateless application servers", "Session state", "Connection pools", "Autoscaling concepts", "Downstream bottlenecks"],
    "Three API instances behind a load balancer can increase request capacity, but if all three exhaust one database connection pool, the database remains the bottleneck.",
    "clients → load balancer → app-1\n                         → app-2\n                         → app-3",
    ["Scaling the frontend/API while ignoring the database", "Storing local session state without a strategy", "Using health checks that only prove a process is alive", "Assuming autoscaling fixes every bottleneck"],
    "Load-test a simple API with one instance and then multiple instances; compare throughput, latency, and the bottleneck that moves next.",
    "Explain how you would remove a single application-server failure without introducing a new single point of failure in session storage.",
    "Design a horizontally scalable API tier with health checks, connection-pool limits, and a clear session strategy.",
    [
      { title: "AWS — Elastic Load Balancing", url: "https://aws.amazon.com/elasticloadbalancing/", note: "Load balancing concepts and managed implementations." },
      { title: "Azure Architecture Center — Autoscaling", url: "https://learn.microsoft.com/en-us/azure/architecture/best-practices/auto-scaling", note: "Scaling guidance and trade-offs." }
    ],
    ["I can distinguish vertical and horizontal scaling.", "I can explain why stateless services scale more easily.", "I can identify the next bottleneck after scaling an application tier."]
  ),
  makeSystemDesignLesson(
    "l-sd-cache-cdn",
    "Performance Architecture",
    "Caching, CDNs & Cache Invalidation",
    "Caching stores reusable data closer to the consumer so repeated requests avoid expensive work or long network paths.",
    "Caches can reduce latency and origin load, but introduce staleness, invalidation, memory limits, and consistency questions.",
    "Think in terms of cache key, hit/miss behavior, freshness policy, eviction, invalidation, and the cost of a stale value.",
    ["Cache-aside", "Read-through and write-through concepts", "TTL and eviction", "Cache keys", "Cache invalidation", "CDNs and edge caching", "Hot keys", "Cache stampede awareness"],
    "A product page can be served from a CDN while frequently accessed product metadata is kept in a shared application cache with a short TTL.",
    "const value = await cache.get(key);\nif (value) return JSON.parse(value);\nconst fresh = await db.find(id);\nawait cache.set(key, JSON.stringify(fresh), { EX: 60 });",
    ["Caching data that must always be fresh", "No invalidation strategy", "Using user-specific data under a shared cache key", "Assuming cache hits are free", "Ignoring cache stampedes and hot keys"],
    "Choose one read-heavy endpoint and document its cache key, TTL, invalidation behavior, acceptable staleness, and fallback path.",
    "Explain what happens when 100 application instances all miss the same popular cache key at once and propose a mitigation.",
    "Add a cache-aside layer to a read-heavy project and measure origin-load reduction without hiding correctness failures.",
    [
      { title: "Microsoft Azure — Cache-Aside Pattern", url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/cache-aside", note: "Cache population, invalidation, staleness, and distributed-cache considerations." },
      { title: "Cloudflare Learning Center — CDN", url: "https://www.cloudflare.com/learning/cdn/what-is-a-cdn/", note: "CDN and edge-delivery fundamentals." }
    ],
    ["I can choose what should and should not be cached.", "I can explain hit, miss, TTL, eviction, and invalidation.", "I can state the consistency cost of a cache explicitly."]
  ),
  makeSystemDesignLesson(
    "l-sd-data-scaling",
    "Data Architecture",
    "Replication, Partitioning & Sharding",
    "Data stores can scale through replication for read capacity and availability, and partitioning/sharding for distributing data and write or storage load.",
    "A database often becomes the limiting resource as traffic grows. Replication and partitioning solve different problems and introduce different consistency and operational costs.",
    "Replication creates additional copies of data; partitioning divides ownership of data. Ask which operations need a single view of state before choosing either.",
    ["Primary/replica architecture", "Read replicas", "Replication lag", "Partition keys", "Horizontal partitioning", "Hot partitions", "Cross-partition queries", "Rebalancing concepts"],
    "A read-heavy service can send safe read-only queries to replicas, while writes remain on the primary. A large tenant dataset may then be partitioned by tenant ID.",
    "tenantId → hash(tenantId) → partition\nreads → replicas\nwrites → primary",
    ["Using replication as a write-scaling solution", "Choosing a partition key that creates hot partitions", "Ignoring replica lag", "Assuming sharding is easy to undo", "Cross-shard transactions without a plan"],
    "Take a hypothetical 10 TB multi-tenant dataset and compare replication, partitioning, and a combination of both.",
    "Choose a partition key for a social feed and explain how you would handle one extremely popular tenant or account.",
    "Design a data layer for a high-read application using primary/replica reads and a partitioning plan, including failure and rebalancing considerations.",
    [
      { title: "PostgreSQL — High Availability, Load Balancing, and Replication", url: "https://www.postgresql.org/docs/current/high-availability.html", note: "Official replication and high-availability documentation." },
      { title: "Microsoft Azure — Data Partitioning", url: "https://learn.microsoft.com/en-us/azure/architecture/best-practices/data-partitioning", note: "Partitioning strategies and trade-offs." }
    ],
    ["I can distinguish replication from partitioning.", "I can reason about replica lag and hot partitions.", "I can explain why partition-key choice matters."]
  ),
  makeSystemDesignLesson(
    "l-sd-consistency-cap",
    "Distributed Data",
    "Consistency, CAP & Idempotent Operations",
    "Distributed systems must define what readers are allowed to observe and how operations behave when communication or replicas fail.",
    "Consistency is not one switch. Different operations can tolerate stale data while others require stronger guarantees, and distributed retries can create duplicate effects.",
    "For every important operation ask: what must be true immediately, what can converge later, and what happens if the request is retried or a network partition occurs?",
    ["Strong consistency", "Eventual consistency", "Read-after-write expectations", "CAP theorem", "Network partitions", "Idempotency keys", "At-least-once delivery", "Optimistic concurrency"],
    "A social like count can often converge eventually, while a payment authorization needs a carefully controlled state transition and idempotency strategy.",
    "POST /payments\nIdempotency-Key: 8f2...\n\n# A retry should return the original operation result, not charge twice.",
    ["Treating CAP as a simple 'pick two' slogan", "Calling every stale read a bug", "Ignoring retries when designing writes", "Using idempotency only in the UI", "Assuming distributed transactions are free"],
    "Classify five operations from an application by their consistency requirement and retry behavior.",
    "A client times out after the server commits a write. Explain how the client can safely retry without creating a duplicate effect.",
    "Add idempotency handling to one write endpoint and document the state machine for first request, retry, conflict, and expiration.",
    [
      { title: "Google Cloud Architecture — Distributed Systems", url: "https://cloud.google.com/architecture", note: "Architecture guidance for distributed cloud workloads." },
      { title: "Microsoft Azure — Minimize Coordination", url: "https://learn.microsoft.com/en-us/azure/architecture/guide/design-principles/minimize-coordination", note: "Idempotency and concurrency guidance." }
    ],
    ["I can explain CAP without reducing it to a slogan.", "I can classify consistency requirements by operation.", "I can design a retry-safe idempotent write."]
  ),
  makeSystemDesignLesson(
    "l-sd-messaging-backpressure",
    "Asynchronous Systems",
    "Queues, Pub/Sub, Back-Pressure & Event-Driven Architecture",
    "Queues and event streams decouple producers from consumers so systems can absorb bursts, process work asynchronously, and scale consumers independently.",
    "Synchronous chains couple latency and availability across services. Queues add buffering and resilience, but introduce delivery semantics, ordering, retries, and eventual consistency.",
    "A queue is a shock absorber: producers can write at one rate while consumers process at another, within bounded capacity and explicit failure handling.",
    ["Work queues", "Publish/subscribe", "Competing consumers", "Back-pressure", "Consumer concurrency", "At-least-once delivery", "Dead-letter queues", "Ordering and partitioning", "Eventual consistency"],
    "An image-processing API accepts a job and immediately records it. Workers consume the job queue and update processing status asynchronously.",
    "producer → queue → worker-1\n             ↘ → worker-2\n             ↘ → worker-3",
    ["Queueing work that actually needs a synchronous answer", "No dead-letter strategy", "Unbounded consumer concurrency", "Ignoring duplicate delivery", "Assuming queues preserve global ordering"],
    "Measure a worker system under a burst and observe queue depth, processing rate, oldest-message age, and failure rate.",
    "Your queue grows continuously because producers generate work faster than consumers can process it. Identify three architectural responses and their trade-offs.",
    "Design a background-job architecture with queue, workers, retries, dead-letter handling, idempotent processing, and operational metrics.",
    [
      { title: "Microsoft Azure — Asynchronous Messaging Options", url: "https://learn.microsoft.com/en-us/azure/architecture/guide/technology-choices/messaging", note: "Queues, competing consumers, load leveling, delivery semantics, and idempotency." },
      { title: "Google Cloud Pub/Sub — Architecture", url: "https://docs.cloud.google.com/pubsub/architecture", note: "Scalable asynchronous messaging concepts." }
    ],
    ["I can distinguish a work queue from pub/sub.", "I can reason about queue depth and back-pressure.", "I can design consumers that tolerate duplicate delivery."]
  ),
  makeSystemDesignLesson(
    "l-sd-failure-resilience",
    "Reliability Patterns",
    "Timeouts, Retries, Circuit Breakers & Failure Modes",
    "Distributed calls fail through timeouts, partial outages, overloaded dependencies, stale state, and network errors. Resilience patterns control how failures propagate.",
    "Retries can recover transient failures but can also amplify overload. Timeouts, circuit breakers, bounded retries, and graceful degradation make failure behavior explicit.",
    "Every remote call needs a timeout. Every retry needs a bound and a reason. Every dependency needs a failure behavior that prevents one outage from becoming a system-wide outage.",
    ["Timeouts", "Exponential backoff and jitter", "Retry budgets", "Circuit breakers", "Bulkheads", "Graceful degradation", "Dependency failure", "Cascading failure"],
    "If a downstream recommendation service is unavailable, the product page should still render core product data rather than waiting indefinitely or retrying forever.",
    "try {\n  return await withTimeout(callRecommendationService(), 500);\n} catch {\n  return []; // degraded but usable path\n}",
    ["Retrying immediately in a tight loop", "Retrying non-idempotent operations blindly", "No timeout on remote calls", "Opening a circuit without a recovery plan", "Letting every dependency share the same unbounded resource pool"],
    "List every remote dependency in an application and define timeout, retry, fallback, and observability behavior for each.",
    "Show how a slow downstream service can cause thread/connection exhaustion upstream even when the downstream service never returns an explicit error.",
    "Create a resilience matrix for a full-stack architecture and implement one bounded retry plus graceful fallback path.",
    [
      { title: "Microsoft Azure — Circuit Breaker Pattern", url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/circuit-breaker", note: "Failure isolation and recovery behavior." },
      { title: "Microsoft Azure — Retry Pattern", url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/retry", note: "Retry conditions, backoff, and pitfalls." }
    ],
    ["I can explain cascading failure.", "I can set bounded timeouts and retries.", "I can define a degraded behavior for an unavailable dependency."]
  ),
  makeSystemDesignLesson(
    "l-sd-gateway-rate-limit",
    "Traffic Control",
    "API Gateways, Rate Limiting, Quotas & Multi-Tenancy",
    "Gateways and admission controls protect shared services by authenticating or routing traffic, applying quotas, and preventing abusive or accidental overload.",
    "A scalable architecture still fails if one tenant or client can consume all shared capacity. Rate limits need a scope, algorithm, storage strategy, and explicit response behavior.",
    "Think of rate limiting as capacity allocation: define who is limited, what resource is measured, the time window or token rate, and what happens when the budget is exhausted.",
    ["API gateways", "Token bucket and leaky bucket concepts", "Per-user and per-tenant limits", "Quotas", "Burst capacity", "429 responses", "Fairness", "Distributed rate-limit state"],
    "A public API can allow 100 requests/minute per API key with a controlled burst while maintaining a separate global protection limit for the service.",
    "if (!bucket.consume(tenantId, 1)) {\n  return res.status(429).set('Retry-After', '10').end();\n}",
    ["One global limit for every tenant", "No distinction between burst and sustained load", "Rate limiting only in one application instance", "Returning 500 for a quota violation", "Protecting the API while leaving the database unprotected"],
    "Design limits for a public endpoint with free and premium tenants, including fairness, burst behavior, and failure mode of the rate-limit store.",
    "Explain how four API instances can enforce a shared tenant limit without each instance maintaining an isolated counter.",
    "Create an architecture diagram with gateway, authentication, tenant quotas, application instances, and protected downstream resources.",
    [
      { title: "Microsoft Azure — Throttling Pattern", url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/throttling", note: "Rate limits, graceful degradation, and load-leveling concepts." },
      { title: "AWS — API Gateway", url: "https://aws.amazon.com/api-gateway/", note: "Managed gateway capabilities including traffic control concepts." }
    ],
    ["I can define a rate-limit scope and budget.", "I can distinguish throttling from authentication.", "I can reason about distributed counters and downstream protection."]
  ),
  makeSystemDesignLesson(
    "l-sd-monolith-services",
    "Architecture Evolution",
    "Monolith, Modular Monolith & Microservices",
    "Architectural style should follow domain boundaries, team structure, scaling needs, and operational maturity rather than fashion.",
    "Microservices create independent deployment and scaling boundaries but also add network failure, distributed data, observability, and operational complexity.",
    "First make boundaries explicit inside one process. Extract a service when an independently deployable boundary solves a real problem better than an in-process module.",
    ["Monolith", "Modular monolith", "Microservices", "Bounded contexts", "Service ownership", "Distributed data", "Independent deployment", "Migration strategies"],
    "An order module and billing module can remain separate modules in one application until independent scaling, ownership, or release requirements justify a service boundary.",
    "modular monolith:\norders → billing module → database\n\nservice split:\norders → billing API → billing database",
    ["Splitting services by database tables", "Assuming microservices automatically improve performance", "Sharing databases while claiming strong service ownership", "Creating tiny services with chatty network calls", "Ignoring team and operational cost"],
    "Take an existing monolith and identify two candidate service boundaries. For each, list the benefit, migration cost, data boundary, and operational burden.",
    "Describe an incremental migration in which old and new paths coexist temporarily without leaving permanent duplicate business logic.",
    "Write a migration design for extracting one capability from a modular monolith, including data ownership and rollback strategy.",
    [
      { title: "Martin Fowler — Microservices", url: "https://martinfowler.com/articles/microservices.html", note: "Trade-offs and characteristics of the microservice style." },
      { title: "Martin Fowler — How to Break a Monolith into Microservices", url: "https://martinfowler.com/articles/break-monolith-into-microservices.html", note: "Incremental decomposition and service-boundary guidance." }
    ],
    ["I can explain the cost of distribution.", "I can identify a sensible modular boundary before extracting a service.", "I can design an incremental migration rather than a rewrite fantasy."]
  ),
  makeSystemDesignLesson(
    "l-sd-case-studies",
    "Case Studies",
    "System Design Case Studies: URL Shortener, Feed & Chat",
    "Case studies turn abstract patterns into complete designs by forcing you to connect requirements, APIs, data, scaling, consistency, caching, and failure handling.",
    "A system design skill is demonstrated by making coherent decisions across the whole architecture, not by memorizing isolated components.",
    "For every case: clarify requirements → estimate load → sketch request/data flows → identify bottlenecks → add only the components that solve those bottlenecks → test failure scenarios.",
    ["URL shortener", "Social feed", "Chat system", "Media upload", "Hot data", "Fan-out strategies", "Pagination", "Idempotency", "Failure analysis"],
    "For a feed, compare fan-out-on-write with fan-out-on-read and explain how celebrity-scale accounts change the design.",
    "designDoc.sections = [\n  'requirements', 'capacity', 'api', 'data', 'architecture',\n  'scaling', 'consistency', 'failure-modes', 'trade-offs'\n];",
    ["Jumping straight to technologies", "Skipping capacity assumptions", "No explicit API or data model", "Ignoring hot users/keys", "Adding every pattern without a bottleneck to justify it"],
    "Choose one case study and produce a complete first-pass design in 30–45 minutes.",
    "Review your own design as if traffic increased 10×. Identify which assumption fails first and revise only the affected boundary.",
    "Produce three design documents: URL shortener, chat, and feed. For each, include requirements, APIs, data model, architecture, scaling, consistency, and failure analysis.",
    [
      { title: "System Design Primer", url: "https://github.com/donnemartin/system-design-primer", note: "Open-source system design study material and examples." },
      { title: "Designing Data-Intensive Applications — O'Reilly", url: "https://www.oreilly.com/library/view/designing-data-intensive-applications/9781491903063/", note: "Deep reference on data systems and distributed architecture." }
    ],
    ["I can complete a coherent design rather than list components.", "I can identify the first bottleneck under increased load.", "I can explain why each major component is present."]
  ),
  makeSystemDesignLesson(
    "l-sd-capstone",
    "Architecture Practice",
    "System Design Capstone & Architecture Review",
    "The capstone is a complete design exercise: requirements, estimates, architecture, APIs, data, scaling, consistency, failure modes, security boundaries, observability, and trade-offs.",
    "System design becomes useful when you can communicate decisions clearly and revise them when assumptions change.",
    "Treat the design as an executable hypothesis: state assumptions, draw the system, challenge every bottleneck, document decisions, and review the design against changed requirements.",
    ["Design document structure", "Architecture diagrams", "Capacity model", "API and data contracts", "Failure-mode analysis", "Security boundaries", "Observability requirements", "Cost awareness", "Architecture review"],
    "A production review should be able to answer: What is the expected load? What fails first? What happens during dependency failure? Which data may be stale? How do we recover?",
    "# Architecture review checklist\nrequirements → capacity → components → data → scaling → consistency → failure → security → observability → cost",
    ["Writing a diagram with no operational assumptions", "No measurable acceptance criteria", "Ignoring cost and operational ownership", "No failure or recovery story", "Treating the first design as final"],
    "Run a 20-minute architecture review with another person or record yourself explaining the design and challenging each major decision.",
    "Change one requirement—10× traffic, stricter latency, regional failure, or offline clients—and revise the design without rewriting everything.",
    "Design and defend a production-scale architecture for one real project, then produce a revision after a 10× traffic and dependency-failure scenario.",
    [
      { title: "AWS Well-Architected Framework", url: "https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html", note: "Architecture review questions across reliability, security, performance, cost, and operations." },
      { title: "Google SRE Book", url: "https://sre.google/sre-book/table-of-contents/", note: "Reliability and service-operation principles that inform architecture reviews." }
    ],
    ["I can produce a complete system design document.", "I can defend trade-offs with explicit assumptions.", "I can revise the design when load or failure assumptions change.", "I can identify what should remain simple instead of adding architecture for its own sake."]
  )
];
