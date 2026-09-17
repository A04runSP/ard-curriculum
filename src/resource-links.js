import {resourceLibrary} from './data/resourceLibrary.js';

const aliases=[
  [/^MDN/i,/MDN Web Docs/i], [/^CS50x/i,/CS50x/i], [/Harvard CS50x/i,/CS50x/i], [/freeCodeCamp/i,/freeCodeCamp/i], [/The Odin Project/i,/The Odin Project/i], [/Full Stack Open/i,/Full Stack Open/i], [/React/i,/React official documentation/i], [/TypeScript/i,/TypeScript Handbook/i], [/Node\.js/i,/Node.js official documentation/i], [/Express/i,/Express.js official documentation/i], [/PostgreSQL/i,/PostgreSQL official documentation/i], [/GitHub/i,/GitHub Docs/i], [/Git(?!Hub)/i,/Git official documentation \/ Pro Git book/i], [/Docker/i,/Docker official Get Started guide/i], [/web\.dev/i,/web.dev/i], [/WCAG/i,/WCAG Quick Reference/i], [/Nielsen Norman/i,/Nielsen Norman Group articles/i], [/Figma/i,/Figma Learn \/ Design 101/i], [/Eloquent JavaScript/i,/Eloquent JavaScript/i], [/You Don't Know JS/i,/You Don't Know JS Yet \(book series\)/i], [/Refactoring UI/i,/Refactoring UI/i], [/System Design Primer/i,/System Design Primer/i], [/Designing Data-Intensive Applications/i,/Designing Data-Intensive Applications/i], [/OWASP Top 10/i,/OWASP Top 10/i], [/Exercism/i,/Exercism/i], [/Missing Semester/i,/MIT — The Missing Semester of Your CS Education/i], [/MIT 6\.006: Introduction to Algorithms/i,/MIT 6.006: Introduction to Algorithms — Lecture Notes/i]
];

const directUrls=new Map([
  ["mdn: keyed collections", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Keyed_collections"],
  ["mdn: javascript testing and test-your-skills resources", "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Test_your_skills"],
  ["mit 6.006: introduction to algorithms — syllabus", "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/pages/syllabus/"],
  ["figma: design systems", "https://help.figma.com/hc/en-us/articles/14552901442839-Overview-Introduction-to-design-systems"],
  ["figma: variables, collections and modes", "https://help.figma.com/hc/en-us/articles/14506821864087-Overview-of-variables-collections-and-modes"],
  ["figma: component properties", "https://help.figma.com/hc/en-us/articles/5579474826519-Explore-component-properties"],
  ["figma: auto layout", "https://help.figma.com/hc/en-us/articles/360040451373-Guide-to-auto-layout"],
  ["figma: prototyping", "https://help.figma.com/hc/en-us/categories/360002051613-Prototyping"],
  ["figma: dev mode", "https://help.figma.com/hc/en-us/articles/15023111056023-Guide-to-Dev-Mode"],
  ["nielsen norman group: user research methods", "https://www.nngroup.com/articles/which-ux-research-methods/"],
  ["nielsen norman group: usability testing 101", "https://www.nngroup.com/articles/usability-testing-101/"],
  ["w3c: wcag 2.2", "https://www.w3.org/TR/WCAG22/"]
]);

const directRules=[
  [/^Full Stack Open Part 3-4/i,"https://fullstackopen.com/en/part3/"],
  [/^Full Stack Open \(complete course\)/i,"https://fullstackopen.com/en/"],
  [/^Express: Using Middleware/i,"https://expressjs.com/en/guide/using-middleware.html"],
  [/^Express: Routing/i,"https://expressjs.com/en/guide/routing.html"],
  [/^Express: Error Handling/i,"https://expressjs.com/en/guide/error-handling.html"],
  [/^OpenAPI Specification/i,"https://spec.openapis.org/oas/latest.html"],
  [/^OWASP API Security Top 10/i,"https://owasp.org/API-Security/editions/2023/en/0x11-t10/"],
  [/^OWASP API Top 10 Developer Guide/i,"https://owasp.org/API-Security/"],
  [/^Node\.js Test Runner/i,"https://nodejs.org/api/test.html"],
  [/^PostgreSQL: Transactions/i,"https://www.postgresql.org/docs/current/tutorial-transactions.html"],
  [/^Node\.js: Streams/i,"https://nodejs.org/api/stream.html"],
  [/^Node\.js: Environment Variables/i,"https://nodejs.org/api/environment_variables.html"],
  [/^PostgreSQL 18 Documentation/i,"https://www.postgresql.org/docs/18/"],
  [/^PostgreSQL 18 Tutorial/i,"https://www.postgresql.org/docs/18/tutorial.html"],
  [/^PostgreSQL 18 SQL Language Tutorial/i,"https://www.postgresql.org/docs/18/tutorial-sql.html"],
  [/^PostgreSQL 18 Window Functions/i,"https://www.postgresql.org/docs/18/tutorial-window.html"],
  [/^PostgreSQL 18 WITH Queries/i,"https://www.postgresql.org/docs/18/queries-with.html"],
  [/^PostgreSQL 18 Indexes/i,"https://www.postgresql.org/docs/18/indexes.html"],
  [/^PostgreSQL 18 Using EXPLAIN/i,"https://www.postgresql.org/docs/18/using-explain.html"],
  [/^PostgreSQL 18 Transactions/i,"https://www.postgresql.org/docs/18/tutorial-transactions.html"],
  [/^PostgreSQL 18 Transaction Isolation/i,"https://www.postgresql.org/docs/18/transaction-iso.html"],
  [/^SQL for Data Analysis/i,"https://mode.com/sql-tutorial/"],
  [/^Use The Index,? L/i,"https://use-the-index-luke.com/"],
  [/^Vercel \/ Render official deployment docs/i,"https://vercel.com/docs"],
  [/^Vercel: Documentation/i,"https://vercel.com/docs"],
  [/^Render: Documentation/i,"https://render.com/docs"],
  [/^OWASP: Authentication Cheat Sheet/i,"https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html"],
  [/^OWASP: API Security Top 10/i,"https://owasp.org/API-Security/"],
  [/^MDN: Set-Cookie/i,"https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Set-Cookie"],
  [/^Martin Fowler — Refactoring/i,"https://refactoring.com/"],
  [/^Martin Fowler — Code Smell/i,"https://martinfowler.com/bliki/CodeSmell.html"],
  [/^Martin Fowler — Software Testing Guide/i,"https://martinfowler.com/testing/"],
  [/^GitHub official documentation on pull requests/i,"https://docs.github.com/en/pull-requests"],
  [/^MADR — Markdown Architectural Decision Records/i,"https://adr.github.io/madr/"],
  [/^Docker official documentation and Get Started guide/i,"https://docs.docker.com/get-started/"],
  [/^Docker multi-stage builds/i,"https://docs.docker.com/build/building/multi-stage/"],
  [/^Docker Compose/i,"https://docs.docker.com/compose/"],
  [/^GitHub Actions official documentation/i,"https://docs.github.com/en/actions"],
  [/^GitHub deployment environments/i,"https://docs.github.com/en/actions/concepts/workflows-and-actions/deployment-environments"],
  [/^AWS Well-Architected Framework/i,"https://aws.amazon.com/architecture/well-architected/"],
  [/^AWS Reliability Pillar/i,"https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html"],
  [/^OpenTelemetry/i,"https://opentelemetry.io/docs/"],
  [/^Kubernetes Concepts/i,"https://kubernetes.io/docs/concepts/"],
  [/^Kubernetes Deployments/i,"https://kubernetes.io/docs/concepts/workloads/controllers/deployment/"],
  [/^Kubernetes Services/i,"https://kubernetes.io/docs/concepts/services-networking/service/"],
  [/^Google SRE Book/i,"https://sre.google/sre-book/table-of-contents/"],
  [/^Google SRE — Service Level Objectives/i,"https://sre.google/sre-book/service-level-objectives/"],
  [/^AWS Elastic Load Balancing/i,"https://docs.aws.amazon.com/elasticloadbalancing/"],
  [/^Azure Architecture Center — Cache-Aside/i,"https://learn.microsoft.com/en-us/azure/architecture/patterns/cache-aside"],
  [/^PostgreSQL — High Availability, Load Balancing, and Replication/i,"https://www.postgresql.org/docs/current/high-availability.html"],
  [/^Azure Architecture Center — Data Partitioning/i,"https://learn.microsoft.com/en-us/azure/architecture/best-practices/data-partitioning"],
  [/^Azure Architecture Center — Asynchronous Messaging Options/i,"https://learn.microsoft.com/en-us/azure/architecture/guide/technology-choices/messaging"],
  [/^Google Cloud Pub\/Sub Architecture/i,"https://cloud.google.com/pubsub/docs/overview"],
  [/^Azure Architecture Center — Circuit Breaker/i,"https://learn.microsoft.com/en-us/azure/architecture/patterns/circuit-breaker"],
  [/^Azure Architecture Center — Retry/i,"https://learn.microsoft.com/en-us/azure/architecture/patterns/retry"],
  [/^Azure Architecture Center — Throttling/i,"https://learn.microsoft.com/en-us/azure/architecture/patterns/throttling"],
  [/^Martin Fowler — Microservices/i,"https://martinfowler.com/articles/microservices.html"],
  [/^Martin Fowler — Monolith First/i,"https://martinfowler.com/bliki/MonolithFirst.html"],
  [/^Chrome DevTools Performance documentation/i,"https://developer.chrome.com/docs/devtools/performance/"],
  [/^React official performance and React 19 references/i,"https://react.dev/"],
  [/^PostgreSQL EXPLAIN and monitoring documentation/i,"https://www.postgresql.org/docs/current/using-explain.html"],
  [/^TypeScript Handbook and Project References/i,"https://www.typescriptlang.org/docs/handbook/project-references.html"],
  [/^OWASP Top 10:2025/i,"https://owasp.org/Top10/2025/"],
  [/^GitHub — Contributing to Open Source/i,"https://docs.github.com/en/get-started/exploring-projects-on-github/contributing-to-open-source"],
  [/^GitHub — Using your GitHub profile to enhance your resume/i,"https://docs.github.com/en/account-and-profile/tutorials/using-your-github-profile-to-enhance-your-resume"],
  [/^GitHub — Pull Requests/i,"https://docs.github.com/en/pull-requests"],
  [/^GitHub Projects documentation/i,"https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects"],
  [/^MDN — Finding a job/i,"https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Soft_skills/Finding_a_job"],
  [/^NeetCode Interview Roadmap/i,"https://neetcode.io/roadmap"],
  [/^GitHub ReadME — Technical Interviews/i,"https://github.com/readme/guides/technical-interviews"],
  [/^Terraform documentation/i,"https://developer.hashicorp.com/terraform/docs"],
  [/^OpenTofu documentation/i,"https://opentofu.org/docs/"],
  [/^OpenTofu plan/i,"https://opentofu.org/docs/cli/commands/plan/"],
  [/^OpenTofu apply/i,"https://opentofu.org/docs/cli/commands/apply/"],
  [/^GitHub — Artifact attestations/i,"https://docs.github.com/en/actions/concepts/security/artifact-attestations"],
  [/^GitHub — Using artifact attestations/i,"https://docs.github.com/en/actions/how-tos/secure-your-work/use-artifact-attestations/use-artifact-attestations"],
  [/^GitHub — Dependency review/i,"https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-dependency-review"],
  [/^AWS Billing and Cost Management/i,"https://docs.aws.amazon.com/account-billing/"],
  [/^AWS — Creating a cost budget/i,"https://docs.aws.amazon.com/cost-management/latest/userguide/create-cost-budget.html"],
  [/^AWS — Budget actions/i,"https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-controls.html"],
  [/^OWASP API Security Top 10/i,"https://owasp.org/API-Security/"]
];

const getUrl=text=>{
  const value=text.trim();
  const direct=directUrls.get(value.toLowerCase());
  if(direct)return direct;
  for(const [pattern,url] of directRules){
    if(pattern.test(value))return url;
  }
  for(const [pattern,titlePattern] of aliases){
    if(pattern.test(value)){
      const item=resourceLibrary.find(r=>titlePattern.test(r.title));
      if(item?.url)return item.url;
    }
  }
  return '';
};

const style=document.createElement('style');
style.textContent='.meta-block .ard-resource-link{color:#20E3E6;text-decoration:underline;text-decoration-color:rgba(32,227,230,.78);text-underline-offset:3px;text-decoration-thickness:1px;transition:color .18s ease,text-decoration-color .18s ease}.meta-block .ard-resource-link:hover{color:#20E3E6;text-decoration-color:#20E3E6}.meta-block .ard-resource-link:focus-visible{outline:2px solid #20E3E6;outline-offset:3px;border-radius:3px}';
document.head.appendChild(style);

const enhanceResources=()=>{
  document.querySelectorAll('.meta-block').forEach(block=>{
    const heading=block.querySelector('h3');
    if(!heading||heading.textContent.trim().toLowerCase()!=='resources')return;
    block.querySelectorAll('li').forEach(li=>{
      if(li.querySelector('a'))return;
      const url=getUrl(li.textContent||'');
      if(!url)return;
      const text=li.textContent.trim();
      li.textContent='';
      const link=document.createElement('a');
      link.className='ard-resource-link'; link.href=url; link.target='_blank'; link.rel='noopener noreferrer'; link.textContent=text;
      li.appendChild(link);
    });
  });
};

enhanceResources();
new MutationObserver(enhanceResources).observe(document.body,{childList:true,subtree:true});
