const makeCareerLesson = (id, title, what, why, mentalModel, coreConcepts, practice, challenge, miniProject, resources, mastery) => ({
  id,
  stage: "professional",
  module: "Career Execution",
  title,
  what,
  why,
  mentalModel,
  coreConcepts,
  example: "Use your real experience and project evidence; never invent production experience, metrics, responsibilities, or competing offers.",
  code: "const evidence = { role, contribution, proof, status, nextAction };",
  commonMistakes: ["Making unsupported claims", "Using one generic application for every role", "Failing to track decisions and next actions", "Treating assumptions as confirmed terms"],
  practice,
  challenge,
  miniProject,
  resources,
  mastery
});

export const stage15CareerLessons = [
  makeCareerLesson(
    "l-prof-career-resume",
    "CV, Resume & Professional Profile Engineering",
    "Build a concise, evidence-based CV/resume and professional profile that connect real experience, projects, GitHub evidence, and the target role without exaggeration.",
    "A strong portfolio does not replace a clear application document. Employers need a fast, truthful way to understand relevance and evidence.",
    "Target role → relevant evidence → concise claim → proof link → tailored version → consistency check.",
    ["Resume structure", "Evidence-based bullets", "Role targeting", "Readable/ATS-aware formatting", "GitHub profile", "Profile consistency", "Portfolio alignment"],
    "Take one target role and rewrite your summary, three experience bullets, and two project entries around evidence relevant to that role.",
    "Map requirements from a job description to truthful evidence from your projects and experience without claiming production experience you do not have.",
    "Create a master CV/resume, one tailored role version, and a consistent GitHub/profile presentation with supporting evidence links.",
    [
      { title: "MDN — Finding a job", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Soft_skills/Finding_a_job", note: "CV, portfolio, profile, applications, and interview preparation." },
      { title: "GitHub — Using your GitHub profile to enhance your resume", url: "https://docs.github.com/en/account-and-profile/tutorials/using-your-github-profile-to-enhance-your-resume", note: "Official guidance for connecting GitHub evidence with a resume." }
    ],
    ["I can produce a concise resume for a specific role.", "Important claims have truthful supporting evidence.", "My resume, portfolio, and profiles tell a consistent story."]
  ),
  makeCareerLesson(
    "l-prof-job-search",
    "Job Search, Applications & Recruiter Communication",
    "Run a structured job-search process: qualify roles, research companies, tailor applications, track submissions, communicate professionally with recruiters, and follow up with appropriate context.",
    "Job searching is a workflow rather than a single application. A structured process prevents lost follow-ups, inconsistent information, and indiscriminate applications.",
    "Target → qualify → research → tailor → apply → record → communicate → prepare → follow up → learn.",
    ["Role qualification", "Company research", "Application tailoring", "Application tracking", "Recruiter communication", "Networking", "Follow-up", "Feedback loops"],
    "Create an application tracker containing role, company, requirements, resume version, portfolio evidence, contact, date, status, and next action.",
    "A recruiter asks whether you have production experience with a technology used only in projects. Write a concise, truthful response that still explains relevant evidence.",
    "Run a simulated application cycle with tailored applications, recruiter messages, follow-ups, interview preparation, and a retrospective.",
    [
      { title: "MDN — Finding a job", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Soft_skills/Finding_a_job", note: "Job search, application, networking, follow-up, and interview workflow." },
      { title: "GitHub — Using your GitHub profile to enhance your resume", url: "https://docs.github.com/en/account-and-profile/tutorials/using-your-github-profile-to-enhance-your-resume", note: "Professional evidence for applications." }
    ],
    ["I can qualify a role before applying.", "I can tailor an application without inventing experience.", "I can communicate professionally and track next actions."]
  ),
  makeCareerLesson(
    "l-prof-offers-transition",
    "Offer Evaluation, Negotiation & Professional Transition",
    "Evaluate an offer across compensation, role scope, benefits, working conditions, location, notice constraints, and expectations; negotiate professionally where appropriate and plan the transition.",
    "A professional decision should account for the whole offer rather than one headline number. Negotiation should be based on accurate information and concrete priorities rather than bluffing.",
    "Understand terms → compare total package → identify priorities → ask questions → negotiate where justified → document agreement → plan transition.",
    ["Total compensation", "Role scope", "Benefits", "Work mode", "Location", "Notice period", "Probation", "Growth expectations", "Negotiation", "Start date"],
    "Build a neutral offer-comparison worksheet and list factual questions that should be answered before accepting an unfamiliar engineering offer.",
    "An offer has higher pay but a different role, location requirement, and probation structure. Identify the factual questions needed before comparing it with another offer.",
    "Create an offer-comparison worksheet, negotiation question list, and first-week transition checklist.",
    [{ title: "MDN — Finding a job", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Soft_skills/Finding_a_job", note: "Interview preparation and offer considerations." }],
    ["I can compare offers using explicit categories.", "I can distinguish confirmed terms from assumptions and questions.", "I can negotiate truthfully and professionally without fabricated leverage."]
  )
];

export const stage15CareerConceptNotes = [
  {
    id: "c-prof-resume-engineering",
    stage: "professional",
    module: "Career Execution",
    title: "Evidence-Based Resume Engineering",
    what: "A resume is a concise, role-targeted representation of real experience and evidence; relevant contribution should be easy to verify without exaggeration.",
    why: "Application materials are often reviewed quickly, so relevance, consistency, and evidence matter.",
    keyPoints: ["Role targeting", "Evidence-based bullets", "Concise structure", "Truthful claims", "Portfolio links", "Profile consistency"],
    resource: { title: "MDN — Finding a job", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Soft_skills/Finding_a_job" }
  },
  {
    id: "c-prof-application-workflow",
    stage: "professional",
    module: "Career Execution",
    title: "Professional Application Workflow",
    what: "A job search can be managed as an evidence-driven workflow from role qualification through application, recruiter communication, interview preparation, follow-up, and retrospective learning.",
    why: "Tracking applications and next actions reduces avoidable process errors and makes outcomes easier to learn from.",
    keyPoints: ["Role qualification", "Application tracking", "Tailoring", "Recruiter communication", "Follow-up", "Feedback"],
    resource: { title: "MDN — Finding a job", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Soft_skills/Finding_a_job" }
  },
  {
    id: "c-prof-offer-evaluation",
    stage: "professional",
    module: "Career Execution",
    title: "Offer Evaluation & Professional Negotiation",
    what: "Offer evaluation compares compensation, role scope, benefits, working conditions, constraints, and expectations; negotiation should use accurate information and explicit priorities.",
    why: "A single salary figure does not describe the full employment arrangement, and unclear assumptions can create avoidable problems after acceptance.",
    keyPoints: ["Total package", "Role scope", "Working conditions", "Clarifying questions", "Negotiation boundaries", "Start-date planning"],
    resource: { title: "MDN — Finding a job", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Soft_skills/Finding_a_job" }
  }
];
