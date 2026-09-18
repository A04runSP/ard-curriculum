import { lessonB4 } from "./lessonB4.js";
import { concept3 } from "./concept3.js";

const lesson = (id, module, title, what, why, concepts, practice, challenge, project, resources, mastery) => ({
  id,
  stage: "devops",
  module,
  title,
  what,
  why,
  mentalModel: "Define infrastructure and delivery controls explicitly, verify changes before applying them, and keep operational risk visible.",
  coreConcepts: concepts,
  example: "configuration → validation/plan → review → controlled apply → observe → reconcile",
  code: "# Keep infrastructure configuration in version control; review plans before applying changes.",
  commonMistakes: ["Treating infrastructure as an undocumented manual task", "Storing credentials or sensitive state carelessly", "Applying production changes without reviewing the proposed diff", "Optimizing cloud cost without measuring workload requirements"],
  practice,
  challenge,
  miniProject: project,
  resources: resources.map(([title, url, note]) => ({ title, url, note })),
  mastery
});

export const stage12GapLessons = [
  lesson(
    "l-devops-iac",
    "Infrastructure as Code",
    "Infrastructure as Code with Terraform & OpenTofu",
    "Define infrastructure declaratively, review proposed changes, manage state safely, and apply repeatable infrastructure changes instead of relying on manual console work.",
    "Infrastructure becomes reproducible and reviewable when its desired state is represented as versioned configuration. Terraform and OpenTofu both use a plan/apply workflow; OpenTofu documentation describes state as the mapping between declared resources and real infrastructure.",
    ["Declarative infrastructure", "Providers and resources", "Variables and outputs", "Modules", "State and state locking", "init/validate/plan/apply/destroy", "Drift", "Workspaces and environment separation", "Remote state", "Reviewing plans in CI"],
    "Write a small configuration for a non-production resource, run init/validate/plan, inspect the proposed diff, then apply and verify the resulting resource.",
    "Introduce a deliberate out-of-band change and use a subsequent plan to identify the difference between configuration, recorded state, and real infrastructure.",
    "Create an IaC repository for a small application environment with reusable variables/modules, protected state, reviewed plans, and separate development and production configuration.",
    [["Terraform documentation", "https://developer.hashicorp.com/terraform/docs", "Official Terraform language and CLI documentation."], ["OpenTofu documentation", "https://opentofu.org/docs/", "Current open-source IaC documentation and CLI workflow."], ["OpenTofu plan", "https://opentofu.org/docs/cli/commands/plan/", "Official explanation of planning, state comparison, and review."], ["OpenTofu apply", "https://opentofu.org/docs/cli/commands/apply/", "Official apply and approval workflow."]],
    ["I can explain desired state versus actual infrastructure.", "I can run and interpret init, validate, plan, and apply.", "I understand why state and state locking matter.", "I can identify and respond to infrastructure drift.", "I can keep infrastructure changes reviewable in version control."]
  ),
  lesson(
    "l-devops-supply-chain",
    "Software Supply Chain Security",
    "Software Supply Chain: Dependencies, SBOMs & Provenance",
    "Secure the path from dependencies and source code to build artifacts by controlling dependencies, generating software inventories, and establishing verifiable build provenance.",
    "A production artifact inherits risk from its dependencies and build process. Modern CI systems can generate signed provenance and SBOM attestations that let consumers verify where and how an artifact was built.",
    ["Lockfiles and reproducible dependency resolution", "Dependency vulnerability scanning", "Dependency review", "SBOM concepts", "SPDX and CycloneDX", "Artifact provenance", "Signed attestations", "Build isolation", "Least-privilege CI permissions", "Artifact integrity and verification"],
    "Inspect a project's lockfile and dependency graph, identify a transitive dependency, generate an SBOM, and explain what provenance evidence a release should carry.",
    "Given a build artifact with an unknown origin, design the CI changes needed to establish source, workflow, commit, environment, and SBOM provenance.",
    "Add dependency review/scanning to CI and generate an SBOM plus an artifact attestation for a release artifact; document how another person can verify it.",
    [["GitHub — Artifact attestations", "https://docs.github.com/en/actions/concepts/security/artifact-attestations", "Signed provenance and SBOM attestation concepts."], ["GitHub — Using artifact attestations", "https://docs.github.com/en/actions/how-tos/secure-your-work/use-artifact-attestations/use-artifact-attestations", "Generating and verifying artifact/SBOM attestations."], ["GitHub — Dependency review", "https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-dependency-review", "Reviewing dependency changes in pull requests."]],
    ["I can explain why lockfiles improve reproducibility.", "I can distinguish direct and transitive dependency risk.", "I can explain what an SBOM records.", "I understand provenance versus an SBOM.", "I can describe how a consumer verifies an artifact attestation."]
  ),
  lesson(
    "l-devops-cost",
    "Cloud Cost Engineering",
    "Cloud Cost Engineering & FinOps Fundamentals",
    "Treat infrastructure cost as an engineering signal: measure usage, size resources to workload needs, budget spend, detect anomalies, and evaluate cost alongside reliability and performance.",
    "Cloud cost can grow from idle resources, oversized instances, excessive storage, network transfer, or uncontrolled scaling. Cost management systems provide budgets, forecasts, usage visibility, and threshold-based actions that turn spend into an observable operational concern.",
    ["Unit economics", "Resource sizing", "Utilization", "Compute/storage/network cost", "Budgets and forecasts", "Cost allocation and tags", "Cost anomaly detection", "Autoscaling cost trade-offs", "Reserved/committed capacity concepts", "Cost versus reliability/performance trade-offs"],
    "Take a hypothetical monthly cloud bill, group spend by workload, identify the highest-cost resources, and calculate a cost-per-request or cost-per-user estimate.",
    "Reduce a simulated infrastructure bill without violating an explicit availability or latency target; document every assumption and trade-off.",
    "Create a cost dashboard/budget for the capstone, define thresholds and ownership, right-size one workload, and produce a before/after cost model with reliability and performance constraints.",
    [["AWS Billing and Cost Management", "https://docs.aws.amazon.com/account-billing/", "Official cost analysis, budgeting, allocation, and optimization documentation."], ["AWS — Creating a cost budget", "https://docs.aws.amazon.com/cost-management/latest/userguide/create-cost-budget.html", "Budget configuration and monitoring."], ["AWS — Budget actions", "https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-controls.html", "Threshold-based actions for cost/usage budgets."]],
    ["I can identify major cloud cost drivers.", "I can reason about resource sizing from workload requirements.", "I can create a meaningful budget and threshold.", "I can quantify a cost optimization rather than calling it cheaper without evidence.", "I can explain when a cheaper architecture would violate reliability or performance requirements."]
  )
];

lessonB4.push(...stage12GapLessons);

concept3.push(
  { id: "c-devops-iac", stage: "devops", module: "Infrastructure as Code", title: "Infrastructure as Code", what: "Declarative infrastructure configuration describes desired resources in version-controlled code and uses plan/apply workflows to reconcile configuration, state, and real infrastructure.", why: "Versioned infrastructure makes operational changes reviewable, repeatable, and easier to recover from than undocumented manual changes.", keyPoints: ["Desired versus actual state", "Providers/resources/modules", "State and locking", "Plan before apply", "Drift detection", "CI-reviewed infrastructure changes"], resource: "https://opentofu.org/docs/cli/commands/plan/" },
  { id: "c-devops-supply-chain", stage: "devops", module: "Software Supply Chain Security", title: "Software Supply Chain Security", what: "Supply-chain controls connect dependencies, source, builds, artifacts, SBOMs, and provenance so released software can be inspected and verified.", why: "A secure application can still ship an untrusted or vulnerable artifact if its dependencies and build process are uncontrolled.", keyPoints: ["Lockfiles", "Dependency review", "SBOMs", "Artifact provenance", "Signed attestations", "Verification"], resource: "https://docs.github.com/en/actions/concepts/security/artifact-attestations" },
  { id: "c-devops-cost", stage: "devops", module: "Cloud Cost Engineering", title: "Cloud Cost Engineering", what: "Cloud cost is an operational constraint that should be measured, budgeted, allocated, and optimized alongside reliability and performance.", why: "Unbounded infrastructure spend can become a production failure mode just like latency, downtime, or resource exhaustion.", keyPoints: ["Resource sizing", "Utilization", "Budgets", "Forecasts", "Cost allocation", "Anomaly detection", "Cost/reliability trade-offs"], resource: "https://docs.aws.amazon.com/account-billing/" }
);
