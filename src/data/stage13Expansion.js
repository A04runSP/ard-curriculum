import { lessonB4 } from "./lessonB4.js";
import { lessonB6 } from "./lessonB6.js";
import { concept3 } from "./concept3.js";
import "./stage4Expansion.js";
import "./stage14Expansion.js";

lessonB4.push(...lessonB6);

concept3.push(
  { title: "Requirements & Capacity Estimation", description: "System design begins with explicit functional requirements, non-functional targets, workload assumptions, and rough estimates for traffic, storage, bandwidth, and growth." },
  { title: "Architecture Boundaries & Trade-offs", description: "Good architecture makes responsibilities, state ownership, synchronous and asynchronous boundaries, failure domains, and trade-offs explicit." },
  { title: "Horizontal Scaling & Load Balancing", description: "Multiple stateless application instances behind health-aware load balancing can increase capacity and resilience, but shared state and downstream bottlenecks still require deliberate design." },
  { title: "Caching & CDNs", description: "Caches and edge networks reduce repeated origin work and latency, while introducing freshness, invalidation, eviction, hot-key, and consistency concerns." },
  { title: "Replication & Partitioning", description: "Replication creates additional copies for read capacity and availability; partitioning divides data ownership so storage and workload can be distributed." },
  { title: "Consistency, CAP & Idempotency", description: "Distributed systems must define acceptable consistency, understand network partitions, and make important operations safe to retry without duplicate effects." },
  { title: "Queues, Pub/Sub & Back-Pressure", description: "Asynchronous messaging decouples producers from consumers, absorbs bursts, and enables independent scaling while requiring explicit delivery, ordering, retry, and dead-letter behavior." },
  { title: "Distributed Failure Patterns", description: "Timeouts, bounded retries, backoff, circuit breakers, bulkheads, and graceful degradation limit cascading failures across remote dependencies." },
  { title: "API Gateways & Resource Protection", description: "Gateways, quotas, rate limits, and tenant-aware admission control allocate shared capacity and prevent individual clients or workloads from overwhelming downstream resources." },
  { title: "Monoliths, Modular Monoliths & Microservices", description: "Architectural style should follow domain boundaries, scaling needs, team ownership, and operational maturity; distribution adds independent boundaries but also network and data complexity." },
  { title: "System Design Case Studies", description: "Complete designs connect requirements, capacity, APIs, data models, scaling strategies, consistency, caching, failure modes, and trade-offs into one coherent architecture." },
  { title: "Architecture Review", description: "A system design is a set of explicit assumptions and decisions that should be challenged against changed load, failure, security, reliability, and cost constraints." }
);
