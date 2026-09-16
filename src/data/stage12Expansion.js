import { stage2 } from "./stage2.js";
import { lessonB5 } from "./lessonB5.js";
import { concept3 } from "./concept3.js";

const stage = stage2.find(s => s.id === "devops");

if (stage) {
  stage.skills.push(
    "Operating Linux systems from the command line",
    "Building secure, reproducible production container images",
    "Orchestrating multi-service environments with Docker Compose",
    "Building reliable CI pipelines with GitHub Actions",
    "Designing controlled build, release, and deployment pipelines",
    "Managing secrets, identities, and least-privilege access",
    "Mapping applications to practical cloud infrastructure",
    "Configuring DNS, TLS, reverse proxies, and production networking",
    "Implementing actionable logs, metrics, traces, and alerts",
    "Designing backup, rollback, incident-response, and recovery procedures",
    "Understanding Kubernetes workloads and service discovery",
    "Operating a full-stack application through an automated delivery lifecycle"
  );
  stage.technologies.push(
    "Docker Compose",
    "GitHub Actions",
    "OpenTelemetry concepts",
    "Kubernetes fundamentals",
    "A cloud/PaaS deployment target"
  );
  stage.concepts.push(
    "Linux filesystem, permissions, processes, networking, and shell pipelines",
    "Docker image layers, multi-stage builds, non-root containers, and health checks",
    "Compose networking, volumes, service discovery, and readiness",
    "CI workflows, runners, artifacts, caching, and matrix testing",
    "Build-once/promote pipelines, deployment environments, approvals, smoke tests, and rollback",
    "Secrets, identity, least privilege, and credential rotation",
    "Cloud compute, storage, networking, managed services, and operational responsibility",
    "DNS, TLS, reverse proxies, load balancing, and health endpoints",
    "Observability: structured logs, metrics, traces, correlation, and actionable alerts",
    "Backups, restore testing, graceful failure, runbooks, and incident response",
    "Kubernetes Pods, Deployments, Services, configuration, probes, and resource controls",
    "Operational excellence: automate, observe, make small reversible changes, and learn from failures"
  );
  stage.projects.push(
    "Troubleshoot three Linux service failures using only command-line evidence",
    "Build a production-oriented multi-stage Docker image and measure its size/startup behavior",
    "Run a complete frontend + API + PostgreSQL environment with Docker Compose",
    "Create a PR-gated GitHub Actions CI pipeline with tests, build artifacts, and caching",
    "Create a staging-to-production deployment pipeline with verification and rollback",
    "Deploy the capstone with HTTPS, observability, tested backups, and an incident runbook",
    "Deploy a small containerized API to local Kubernetes with a Deployment, Service, and readiness probe"
  );
  stage.assessments.push(
    "Can you diagnose a Linux service failure by checking process, port, permission, dependency, and resource evidence?",
    "Can you build a small secure production Docker image and explain each layer and runtime choice?",
    "Can you explain how Compose services discover one another and how persistent database data survives recreation?",
    "Can you build and debug a GitHub Actions workflow that runs tests and preserves useful artifacts?",
    "Can you explain build-once/promote and define a safe rollback decision?",
    "Can you identify a secret or over-privileged identity and propose a safer configuration?",
    "Can you map a full-stack application to compute, networking, storage, database, and identity primitives?",
    "Can you trace DNS → TLS → proxy/load balancer → application and diagnose a failure at the correct layer?",
    "Can you distinguish logs, metrics, and traces and design alerts that lead to action?",
    "Can you demonstrate a tested backup restore and execute a documented recovery procedure?",
    "Can you explain Pods, Deployments, and Services and diagnose a basic Kubernetes workload failure?",
    "Can you take a code change from commit through automated deployment, verification, observation, and recovery?"
  );
  stage.resources.push(
    "Docker — Get Started",
    "Docker — Multi-stage builds",
    "Docker — Build best practices",
    "Docker Compose",
    "GitHub Actions",
    "GitHub deployment environments",
    "MIT Missing Semester",
    "AWS Well-Architected Framework",
    "AWS Reliability Pillar",
    "OpenTelemetry",
    "Kubernetes Concepts",
    "Kubernetes Deployments",
    "Kubernetes Services",
    "Google SRE Book"
  );
  stage.exitCriteria = "You can take a tested full-stack application from source control through reproducible container builds, automated CI/CD, environment-scoped secrets, cloud/PaaS deployment, DNS/TLS, useful observability, verified backups, rollback, and incident recovery. You can explain the operational trade-offs and demonstrate the workflow rather than relying on manual server fixes.";
}

lessonB5.forEach(l => {
  if (!stage2.some(s => s.id === l.id)) {
    // lessonB5 is loaded into the shared lessons2 collection by mutating the existing DevOps lesson module below.
  }
});

import { lessonB4 } from "./lessonB4.js";
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