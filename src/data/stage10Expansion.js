import { stage1 } from "./stage1.js";

const stage10 = stage1.find(s => s.id === "full-stack");

if (stage10) {
  stage10.skills.push(
    "Designing clear frontend/backend boundaries",
    "Integrating React applications with reliable API contracts",
    "Implementing full-stack authentication and session flows",
    "Enforcing authorization and resource ownership end to end",
    "Managing development, staging, and production configuration",
    "Debugging failures across browser, network, API, and database layers",
    "Deploying frontend, API, and PostgreSQL components with HTTPS and DNS",
    "Shipping a complete tested and verified full-stack capstone"
  );
  stage10.concepts.push(
    "Frontend/backend architecture and contracts",
    "Request lifecycle and API integration",
    "Authentication, sessions, cookies, tokens, and CSRF",
    "Authorization and resource ownership",
    "Environment configuration and secret boundaries",
    "End-to-end testing and debugging",
    "Production deployment, DNS, and HTTPS",
    "Release readiness and capstone engineering"
  );
  stage10.projects.push(
    "Build a full-stack CRUD feature as a vertical slice from React UI through Express API to PostgreSQL",
    "Build a multi-user authenticated application with server-enforced authorization",
    "Deploy the application with separate frontend, API, and PostgreSQL production services",
    "Ship a complete full-stack capstone with tests, migrations, security review, and release verification"
  );
  stage10.assessments.push(
    "Can you trace a feature from a React interaction through the API and database and back to the rendered state?",
    "Can you explain the complete authentication/session lifecycle and the security role of cookies, tokens, and CSRF protection?",
    "Can you identify and fix an object-level authorization failure that allows one user to access another user's resource?",
    "Can you separate public frontend configuration from server-only secrets across development, staging, and production?",
    "Can you diagnose a production bug using browser network evidence, API logs, and database evidence?",
    "Can you deploy the frontend, API, and database, connect HTTPS/DNS, run migrations, and verify the critical user journey?",
    "Can you perform a release review covering functionality, authorization, secrets, migrations, configuration, and rollback?"
  );
  stage10.resources.push(
    "MDN: CORS",
    "OWASP: Authentication Cheat Sheet",
    "OWASP: API Security Top 10",
    "MDN: Set-Cookie",
    "Full Stack Open: General Information",
    "Vercel: Documentation",
    "Render: Documentation"
  );
  stage10.exitCriteria = "You can take a product requirement through a complete vertical slice: React UI → API contract → authentication/authorization → PostgreSQL → tests → production configuration → deployment → HTTPS/DNS → production verification. You can explain the system boundaries, debug failures across layers, and ship a capstone without relying on tutorial-driven copying.";
}