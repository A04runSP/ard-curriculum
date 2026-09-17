import "./stage12Gaps.js";
import { lessonB4 } from "./lessonB4.js";
import { lessonB5 } from "./lessonB5.js";
import { concept3 } from "./concept3.js";

lessonB4.push(...lessonB5);

concept3.push(
  { title: "Linux Operations Mental Model", description: "Processes, filesystems, permissions, sockets, environment variables, signals, and command pipelines provide the evidence needed to operate and debug services." },
  { title: "Production Container Images", description: "Multi-stage builds, small build contexts, non-root execution, health checks, signal handling, and immutable tags make containers safer to operate." },
  { title: "Compose Networking & Persistence", description: "Compose services communicate through service names and isolated networks while volumes separate persistent data from disposable containers." },
  { title: "CI/CD Pipeline Design", description: "Continuous integration verifies changes automatically; controlled delivery promotes known artifacts through environments with verification and rollback paths." },
  { title: "Secrets & Least Privilege", description: "Credentials belong in protected runtime or deployment configuration, while identities should receive only the permissions required for their job." },
  { title: "Cloud Infrastructure Primitives", description: "Compute, storage, databases, networking, identity, load balancing, and managed services recur across cloud providers even when their product names differ." },
  { title: "Production Networking", description: "DNS finds endpoints, TLS authenticates and encrypts connections, and proxies/load balancers route traffic toward healthy application instances." },
  { title: "Observability", description: "Logs explain events, metrics quantify behavior, and traces connect work across boundaries; useful alerts turn telemetry into operational action." },
  { title: "Reliability & Recovery", description: "Backups, restore tests, health checks, graceful failure, rollback, runbooks, and incident reviews make failure recoverable instead of mysterious." },
  { title: "Kubernetes Core Abstractions", description: "Pods run containers, Deployments manage desired workload state, and Services provide stable networking to changing Pods." },
  { title: "Operational Excellence", description: "Reliable operations favor automation, actionable observability, small reversible changes, and learning from incidents and operational data." }
);