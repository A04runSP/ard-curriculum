import { stage1 } from "./stage1.js";
import { concept3 } from "./concept3.js";

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

concept3.push(
  { id:"c-fullstack-contracts", stage:"full-stack", module:"Architecture", title:"Frontend/Backend Contracts", what:"A contract defines the requests, responses, errors, and assumptions shared across the application boundary.", why:"The frontend and backend can evolve independently only when the boundary remains explicit.", keyPoints:["Request parameters, payloads, response shapes, status codes, validation rules, and error semantics.","Document one endpoint with success, validation, authorization, and server failure cases.","OpenAPI can provide a machine-readable API contract."], resource:{title:"OpenAPI Specification", url:"https://spec.openapis.org/oas/latest.html"} },
  { id:"c-auth-session-security", stage:"full-stack", module:"Authentication", title:"Authentication, Sessions & Cookies", what:"Authentication establishes identity; session management keeps that identity state secure across requests.", why:"A login form alone is not authentication. The server and browser must agree on secure identity state and its lifecycle.", keyPoints:["Sessions, bearer tokens, secure cookies, HttpOnly, Secure, SameSite, expiration, revocation, and TLS.","The server remains the authority for authentication.","Trace login, protected navigation, expiration, and logout from browser to server."], resource:{title:"OWASP Authentication Cheat Sheet", url:"https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html"} },
  { id:"c-cookies-tokens-csrf", stage:"full-stack", module:"Browser Security", title:"Cookies, Tokens & CSRF", what:"Browser credential mechanisms have different storage, transmission, and attack considerations.", why:"Credential handling is a security boundary between an untrusted browser environment and protected server operations.", keyPoints:["Cookie attributes such as HttpOnly, Secure, and SameSite affect exposure and transmission.","Bearer tokens must be protected from theft and validated by the server.","When browsers automatically attach credentials, CSRF becomes relevant to state-changing operations."], resource:{title:"MDN — Set-Cookie", url:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Set-Cookie"} },
  { id:"c-resource-authorization", stage:"full-stack", module:"Authorization", title:"Authorization & Resource Ownership", what:"Authorization is the policy decision about whether an identity may perform an action on a specific resource.", why:"Being logged in does not grant access to every object or action.", keyPoints:["Ask who is calling, which resource is targeted, which action is requested, and which policy permits it.","Frontend hiding is not API protection; enforce authorization on the server.","Write cross-user access tests for protected CRUD operations."], resource:{title:"OWASP API Security Top 10", url:"https://api-security.owasp.org/"} },
  { id:"c-environment-boundaries", stage:"full-stack", module:"Configuration", title:"Environment & Configuration Boundaries", what:"Environment-specific configuration should change without changing application behavior or exposing secrets to the browser.", why:"Development, staging, and production need deliberate configuration rather than accidental differences.", keyPoints:["Classify values as public frontend configuration, server-only configuration, credentials, or deployment-specific values.","Never treat a frontend environment variable as secret merely because it was configured through an environment file.","Audit every environment variable before deployment."], resource:{title:"Full Stack Open — General Information", url:"https://fullstackopen.com/en/part0/general_info/"} },
  { id:"c-fullstack-debugging", stage:"full-stack", module:"Testing & Debugging", title:"End-to-End Debugging", what:"Full-stack debugging follows evidence from the visible symptom through network, API, application logic, and persistence.", why:"A frontend failure can originate in a payload, authorization rule, server exception, migration, or database operation.", keyPoints:["Capture the request, inspect the response, trace the server operation, inspect persistence, and reproduce the smallest failure.","Use browser Network tools, request IDs, structured logs, and database inspection as one evidence chain.","Turn discovered bugs into regression tests."], resource:{title:"Full Stack Open", url:"https://fullstackopen.com/en/part0/general_info/"} },
  { id:"c-production-deployment", stage:"full-stack", module:"Deployment", title:"Production Deployment Architecture", what:"Production is a coordinated runtime containing frontend hosting, API hosting, database infrastructure, configuration, domains, and HTTPS.", why:"A local application is not finished until its production runtime is reproducible, secure, and verifiable.", keyPoints:["Deploy frontend, API, and database boundaries deliberately.","Run migrations, configure secrets/CORS, connect domains, verify HTTPS, and test critical flows.","Plan for schema/application compatibility when rollback is required."], resource:{title:"Vercel Documentation", url:"https://vercel.com/docs"} },
  { id:"c-fullstack-testing", stage:"full-stack", module:"Testing", title:"Full-Stack Testing Strategy", what:"Different test layers prove different properties; confidence comes from combining focused tests with end-to-end journeys.", why:"A UI test alone cannot prove a database constraint, and a unit test cannot prove a deployed authentication journey.", keyPoints:["Unit tests prove isolated rules.","Integration tests prove boundaries such as API/database behavior.","End-to-end tests prove critical user journeys through the browser.","Choose the cheapest test that proves the required behavior."], resource:{title:"Full Stack Open", url:"https://fullstackopen.com/en/"} },
  { id:"c-release-readiness", stage:"full-stack", module:"Release", title:"Full-Stack Release Checklist", what:"A release is a verified change, not merely a successful build.", why:"Functional correctness, security, data safety, configuration, and deployment can fail independently.", keyPoints:["Functional: acceptance criteria and critical journeys.","Security: authorization, secrets, HTTPS, CORS, cookie configuration, abuse cases.","Data: migrations, recovery considerations, constraints, representative data.","Operations: configuration, health checks, logs, DNS, deployment verification, rollback plan."], resource:{title:"Full Stack Open", url:"https://fullstackopen.com/en/"} }
);