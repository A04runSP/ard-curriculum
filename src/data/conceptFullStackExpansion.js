export const conceptFullStackExpansion = [
  {
    id: "c-fullstack-contracts",
    stage: "full-stack",
    title: "Frontend/Backend Contracts",
    summary: "A contract defines the requests, responses, errors, and assumptions shared across the application boundary.",
    sections: [
      ["What it covers", "Request parameters, payloads, response shapes, status codes, validation rules, and error semantics."],
      ["Why it matters", "The frontend and backend can evolve independently only when the boundary remains explicit."],
      ["Practice", "Document one API endpoint with request, success response, validation failure, authorization failure, and server failure cases."],
      ["Resources", "OpenAPI: https://spec.openapis.org/oas/latest.html"]
    ]
  },
  {
    id: "c-auth-session-security",
    stage: "full-stack",
    title: "Authentication, Sessions & Cookies",
    summary: "Authentication establishes identity; session management keeps that identity state secure across requests.",
    sections: [
      ["Key ideas", "Sessions, bearer tokens, secure cookies, HttpOnly, Secure, SameSite, expiration, revocation, and TLS."],
      ["Boundary", "The server must remain the authority for authentication even when the frontend displays login state."],
      ["Practice", "Trace login, protected navigation, expiration, and logout from browser to server."],
      ["Resources", "OWASP Authentication Cheat Sheet: https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html"]
    ]
  },
  {
    id: "c-cookies-tokens-csrf",
    stage: "full-stack",
    title: "Cookies, Tokens & CSRF",
    summary: "Browser credential mechanisms have different storage, transmission, and attack considerations.",
    sections: [
      ["Cookies", "Cookie attributes such as HttpOnly, Secure, and SameSite affect how credentials are exposed and transmitted."],
      ["Tokens", "Bearer tokens must be protected from theft and validated by the server; putting a token in browser storage does not make it inherently safe."],
      ["CSRF", "When browsers automatically attach credentials, cross-site request forgery becomes a relevant threat to state-changing operations."],
      ["Resources", "MDN Set-Cookie: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Set-Cookie"]
    ]
  },
  {
    id: "c-resource-authorization",
    stage: "full-stack",
    title: "Authorization & Resource Ownership",
    summary: "Authorization is a policy decision about whether an identity may perform an action on a specific resource.",
    sections: [
      ["Four questions", "Who is calling? Which resource? Which action? Which policy permits it?"],
      ["Common failure", "A hidden frontend button does not protect an API. Server-side authorization must check the actual resource and action."],
      ["Practice", "Write cross-user access tests for every protected CRUD operation."],
      ["Resources", "OWASP API Security Top 10: https://api-security.owasp.org/"]
    ]
  },
  {
    id: "c-environment-boundaries",
    stage: "full-stack",
    title: "Environment & Configuration Boundaries",
    summary: "Environment-specific configuration should change without changing application behavior or exposing secrets to the browser.",
    sections: [
      ["Classify values", "Public frontend configuration, server-only configuration, credentials, and deployment-specific values have different security properties."],
      ["Three environments", "Development, staging, and production should have deliberate configuration rather than accidental differences."],
      ["Practice", "Audit a project and classify every environment variable as public, private, or deployment-specific."],
      ["Resources", "Full Stack Open: https://fullstackopen.com/en/part0/general_info/"]
    ]
  },
  {
    id: "c-fullstack-debugging",
    stage: "full-stack",
    title: "End-to-End Debugging",
    summary: "Full-stack debugging follows evidence from the user-visible symptom through network, API, application logic, and persistence.",
    sections: [
      ["Method", "Capture the request, inspect the response, trace the server operation, inspect logs and persistence, reproduce the smallest failing case."],
      ["Evidence", "Browser Network tools, request IDs, structured server logs, database inspection, and regression tests form a connected evidence chain."],
      ["Practice", "Debug one deliberately broken feature without changing code until you can state the failing boundary."],
      ["Resources", "Full Stack Open: https://fullstackopen.com/en/part0/general_info/"]
    ]
  },
  {
    id: "c-production-deployment",
    stage: "full-stack",
    title: "Production Deployment Architecture",
    summary: "Production is a coordinated runtime containing frontend hosting, API hosting, database infrastructure, configuration, domains, and HTTPS.",
    sections: [
      ["Architecture", "A common deployment separates the web application and API while keeping the database private to the server side."],
      ["Verification", "Deploy, migrate, configure, connect the domain, verify HTTPS, then test authentication and a representative user journey."],
      ["Failure planning", "Database changes and application releases must be considered together when rollback is required."],
      ["Resources", "Vercel Docs: https://vercel.com/docs | Render Docs: https://render.com/docs"]
    ]
  },
  {
    id: "c-fullstack-testing",
    stage: "full-stack",
    title: "Full-Stack Testing Strategy",
    summary: "Different test layers prove different properties; full-stack confidence comes from combining focused tests with end-to-end journeys.",
    sections: [
      ["Unit", "Prove isolated business rules and transformations."],
      ["Integration", "Prove boundaries such as API/database behavior and authentication policies."],
      ["End-to-end", "Prove critical user journeys through the browser and deployed system."],
      ["Practice", "Choose one capstone feature and define what each test layer proves before writing the tests."]
    ]
  },
  {
    id: "c-release-readiness",
    stage: "full-stack",
    title: "Full-Stack Release Checklist",
    summary: "A release is a verified change, not merely a successful build.",
    sections: [
      ["Functional", "Acceptance criteria, critical flows, validation, empty/error states, and authentication."],
      ["Security", "Authorization, secrets, HTTPS, CORS, cookie configuration, and abuse cases."],
      ["Data", "Migration safety, backups/recovery considerations, constraints, and representative production-like data."],
      ["Operations", "Environment configuration, health checks, logs, domain/DNS, deployment verification, and rollback plan."]
    ]
  }
];