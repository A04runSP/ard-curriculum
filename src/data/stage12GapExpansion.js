import { lessonB4 } from "./lessonB4.js";
import { concept3 } from "./concept3.js";

const lesson = (id, module, title, what, why, concepts, example, practice, challenge, project, resources, mastery, mistakes = []) => ({
  id,
  stage: "devops",
  module,
  title,
  what,
  why,
  mentalModel: "Treat infrastructure, software supply chains, and cloud spend as engineered systems: declarative, reviewable, observable, reproducible, and controlled.",
  coreConcepts: concepts,
  example,
  code: "# Keep infrastructure and delivery changes declarative, reviewable, reproducible, and auditable.",
  commonMistakes: mistakes.length ? mistakes : ["Applying infrastructure changes without reviewing the plan", "Treating dependency updates as harmless without checking their security impact", "Optimizing cloud cost by sacrificing required reliability or performance"],
  practice,
  challenge,
  miniProject: project,
  resources: resources.map(([title, url, note]) => ({ title, url, note })),
  mastery
});

lessonB4.push(
  lesson(
    "l-devops-iac",
    "Infrastructure as Code",
    "Infrastructure as Code: Terraform/OpenTofu, State & Drift",
    "Manage infrastructure declaratively with Terraform or OpenTofu, using configuration, providers, modules, state, plans, applies, and drift detection instead of manual infrastructure changes.",
    "Infrastructure becomes safer to review and reproduce when the desired state lives in version control and changes can be planned before they are applied. OpenTofu documents plan/apply as the core workflow and uses state to map declared resources to real infrastructure.",
    ["Declarative infrastructure", "Providers and resources", "Variables and outputs", "Modules", "State and remote state", "Plan versus apply", "Dependency graphs", "Drift detection", "Importing existing resources", "State locking and collaboration"],
    "configuration → init → plan → review → apply → state refresh → detect drift → reconcile",
    "Write a small OpenTofu configuration for a non-production resource, run a plan, inspect the proposed changes, then apply it only after review.",
    "Manually change a managed resource outside OpenTofu/Terraform, run a plan, identify the drift, and explain whether to reconcile the configuration or infrastructure.",
    "Create an IaC repository for the capstone's deployment primitives with reusable variables, a documented state strategy, reviewed plans, and a drift/recovery procedure.",
    [
      ["OpenTofu Documentation", "https://opentofu.org/docs/", "Current OpenTofu language and CLI documentation."],
      ["OpenTofu — Provisioning Infrastructure", "https://opentofu.org/docs/cli/run/", "Plan, apply, destroy, and state workflow."],
      ["OpenTofu — State", "https://opentofu.org/docs/language/state/", "How state maps configuration to real infrastructure."],
      ["Terraform — Apply Configuration", "https://developer.hashicorp.com/terraform/tutorials/cli/apply", "Official Terraform init → plan → apply workflow."]
    ],
    ["I can explain desired state versus real infrastructure.", "I can read a plan before approving infrastructure changes.", "I understand why state and state locking matter.", "I can detect and reason about configuration drift.", "I can structure reusable infrastructure with variables and modules."],
    ["Editing infrastructure manually and assuming IaC will automatically know the intended change.", "Committing sensitive state data or credentials to a public repository.", "Running auto-approve in a shared environment without appropriate review and controls."]
  ),
  lesson(
    "l-devops-supply-chain",
    "Software Supply Chain Security",
    "Software Supply Chain: Dependencies, SBOMs & Provenance",
    "Secure the path from dependencies and source code to build artifacts by reviewing dependency changes, generating SBOMs, protecting CI, and establishing artifact provenance.",
    "A secure application can still be compromised through a vulnerable dependency, poisoned build step, leaked CI credential, or artifact whose origin cannot be verified. GitHub documents dependency review, SBOM generation, and signed artifact attestations as practical supply-chain controls.",
    ["Direct and transitive dependencies", "Lockfiles", "Dependency review", "Vulnerability scanning", "SBOMs", "Build provenance", "Artifact attestations", "OIDC and short-lived CI identity", "Immutable release artifacts", "Reproducible builds"],
    "pull request → dependency diff → security review → locked install → build → SBOM → provenance attestation → verified release artifact",
    "Inspect a pull request that changes a lockfile, identify newly introduced dependencies, generate an SBOM, and record the artifact's build provenance.",
    "Design a CI workflow that refuses a release when a newly introduced dependency violates the team's defined security policy, while still allowing documented exceptions.",
    "Harden the capstone pipeline with dependency review, an SBOM artifact, protected build permissions, and artifact provenance/attestation for production releases.",
    [
      ["GitHub — Dependency Review", "https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-review", "Review dependency changes and vulnerabilities in pull requests."],
      ["GitHub — Export an SBOM", "https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/establish-provenance-and-integrity/export-dependencies-as-sbom", "SBOM inventory and SPDX output."],
      ["GitHub — Artifact Attestations", "https://docs.github.com/en/actions/concepts/security/artifact-attestations", "Signed provenance and integrity information for build artifacts."],
      ["GitHub — Secure Builds", "https://docs.github.com/en/code-security/tutorials/implement-supply-chain-best-practices/securing-builds", "Build-system security and provenance practices."]
    ],
    ["I can explain why lockfiles matter.", "I can review dependency changes for security impact.", "I can explain what an SBOM contains and what it does not prove.", "I understand artifact provenance and attestation.", "I can keep CI permissions narrower than production runtime permissions."],
    ["Assuming a dependency is safe because it is popular.", "Treating an SBOM as proof that software is secure rather than an inventory.", "Giving every CI job broad cloud credentials."]
  ),
  lesson(
    "l-devops-cost",
    "Cloud Cost Engineering",
    "Cloud Cost Engineering: Budgets, Sizing & Cost Observability",
    "Treat cloud spending as an operational signal by estimating resource costs, right-sizing workloads, tagging ownership, setting budgets and alerts, and evaluating cost against reliability and performance requirements.",
    "Cloud infrastructure can scale operational capability and also scale spending. Cost needs explicit visibility and guardrails rather than being discovered after a billing surprise. AWS Cost Management provides budgets, usage monitoring, anomaly detection, and optimization tooling as examples of these controls.",
    ["Unit economics", "Resource sizing", "Idle resources", "Storage and network costs", "Budgets and alerts", "Cost allocation tags", "Cost observability", "Forecasting", "Reliability versus cost trade-offs", "Cost guardrails"],
    "request volume → resource usage → unit cost → monthly forecast → budget threshold → investigation → right-size or redesign",
    "Create a simple monthly cost model for a small web application, separating compute, database, storage, network, and observability assumptions.",
    "Given a sudden 3× cost increase, use usage and deployment evidence to distinguish traffic growth, over-provisioning, leaked resources, storage growth, and unexpected network usage.",
    "Create a cost review for the capstone with resource sizing assumptions, ownership tags, a monthly budget, alert thresholds, and one documented cost-versus-reliability trade-off.",
    [
      ["AWS Billing and Cost Management", "https://docs.aws.amazon.com/account-billing/", "Cost analysis, budgets, anomaly detection, and optimization capabilities."],
      ["AWS — Creating a Cost Budget", "https://docs.aws.amazon.com/cost-management/latest/userguide/create-cost-budget.html", "Budget setup and cost monitoring."],
      ["AWS — Budget Actions", "https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-controls.html", "Automated or approved actions when thresholds are reached."],
      ["AWS Cost Management API", "https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/Welcome.html", "Programmatic cost and usage management concepts."]
    ],
    ["I can estimate the major cost drivers of a deployment.", "I can identify idle or oversized resources.", "I can define a meaningful budget and alert threshold.", "I can investigate a cost anomaly using usage evidence.", "I can explain a cost-versus-reliability/performance trade-off without optimizing blindly."],
    ["Treating the cloud bill as an accounting-only concern.", "Choosing the cheapest resource without considering reliability or performance requirements.", "Setting a budget alert but never defining who investigates or what action follows."]
  )
);

concept3.push(
  {
    id: "c-devops-iac",
    stage: "devops",
    module: "Infrastructure as Code",
    title: "Infrastructure as Code & Drift",
    what: "Declarative infrastructure describes the desired state of resources while state connects those declarations to real infrastructure; plan/apply workflows make changes reviewable and drift detectable.",
    why: "Infrastructure that cannot be reproduced, reviewed, or reconciled becomes a manual dependency and an operational risk.",
    keyPoints: ["Declarative configuration", "Resources/providers/modules", "State", "Plan/apply", "Remote collaboration and locking", "Drift", "Import and reconciliation"],
    resource: "https://opentofu.org/docs/cli/run/"
  },
  {
    id: "c-devops-supply-chain",
    stage: "devops",
    module: "Software Supply Chain Security",
    title: "Software Supply Chain Security",
    what: "Supply-chain security protects dependencies, build systems, artifacts, and release provenance rather than focusing only on application source code.",
    why: "Dependency and build compromises can enter a trusted application before deployment, so release integrity needs evidence and controls.",
    keyPoints: ["Lockfiles and dependency review", "Vulnerability scanning", "SBOMs", "Artifact provenance", "Attestations", "Least-privilege CI", "Reproducible releases"],
    resource: "https://docs.github.com/en/actions/concepts/security/artifact-attestations"
  },
  {
    id: "c-devops-cost",
    stage: "devops",
    module: "Cloud Cost Engineering",
    title: "Cloud Cost Engineering",
    what: "Cost engineering makes cloud spend observable and controllable through sizing, allocation, budgets, forecasts, anomaly detection, and explicit trade-offs.",
    why: "Cost can become a production failure mode when resources scale or leak without visibility and guardrails.",
    keyPoints: ["Resource sizing", "Unit economics", "Budgets and alerts", "Cost allocation", "Usage/cost observability", "Anomaly investigation", "Cost versus reliability/performance"],
    resource: "https://docs.aws.amazon.com/account-billing/"
  }
);
