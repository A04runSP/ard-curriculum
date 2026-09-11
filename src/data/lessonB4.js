export const lessonB4 = [
{
  id: "l-docker-deploy",
  stage: "devops",
  module: "Containers & Deployment",
  title: "Docker & Deployment Basics",
  what: "Docker packages an application together with everything it needs to run (code, runtime, dependencies, system libraries) into a single portable unit called a container, so it behaves identically on your laptop, a teammate's machine, and a production server.",
  why: "\"It works on my machine\" is a famous, real, expensive problem. Docker eliminates most of that class of bug by making the environment part of what you ship, not something each machine has to separately, imperfectly, replicate.",
  mentalModel: "A container is like a fully-equipped shipping container for your app: it doesn't matter if it's loaded onto a truck, a ship, or a train (your laptop, a teammate's machine, a cloud server) — the contents and how they're packed never change, so nothing gets 'lost in translation' between environments. A Dockerfile is the packing list: the exact instructions for building that container from scratch, every time, identically.",
  coreConcepts: [
    "Images vs containers: an image is a saved, reusable blueprint; a container is a running instance of that image.",
    "A Dockerfile: a text file of instructions (base image, copy files, install dependencies, expose a port, define the start command) that builds an image.",
    "docker build (create an image from a Dockerfile), docker run (start a container from an image), docker ps (see running containers).",
    "docker-compose: defining and running multiple related containers together (e.g., your app + its database) with one config file and one command.",
    "Environment variables for configuration that differs between environments (dev/staging/prod) without changing code.",
    "The basic idea of CI/CD: automatically running tests and building/deploying your app every time you push code, instead of doing it by hand."
  ],
  example: "# A basic Dockerfile for a Node.js app\nFROM node:20-alpine\nWORKDIR /app\nCOPY package*.json ./\nRUN npm install\nCOPY . .\nEXPOSE 3000\nCMD [\"node\", \"server.js\"]",
  code: "# docker-compose.yml — run the app AND its database together\nservices:\n  app:\n    build: .\n    ports:\n      - \"3000:3000\"\n    environment:\n      - DATABASE_URL=postgres://user:pass@db:5432/mydb\n    depends_on:\n      - db\n  db:\n    image: postgres:16\n    environment:\n      - POSTGRES_PASSWORD=pass\n      - POSTGRES_DB=mydb\n    volumes:\n      - pgdata:/var/lib/postgresql/data\nvolumes:\n  pgdata:",
  commonMistakes: [
    "Copying node_modules into the image instead of installing fresh inside it (breaks on different architectures and bloats the image) — use a .dockerignore file, same idea as .gitignore.",
    "Hardcoding secrets/config directly into the Dockerfile or image instead of passing them as environment variables at runtime.",
    "Not layering the Dockerfile efficiently (e.g., copying all source code before installing dependencies), causing every code change to trigger a full, slow dependency reinstall.",
    "Treating 'it's containerized' as automatically meaning 'it's production-ready' — you still need real monitoring, logging, and a real deployment target."
  ],
  practice: "Write a Dockerfile for one of your simple Node/Express APIs, build it, and run it locally with docker run, confirming it responds correctly on the exposed port.",
  challenge: "Write a docker-compose.yml that runs your API together with a real PostgreSQL container, with the API correctly connecting to the database container by its service name (not localhost).",
  miniProject: "Fully containerize your full-stack capstone-in-progress (frontend build + API + database) with docker-compose, and set up a basic GitHub Actions workflow that runs your test suite on every push.",
  resources: [
    { title: "Docker official \"Get Started\" guide", url: "https://docs.docker.com/get-started/", note: "The official, current starting point." },
    { title: "GitHub Actions official documentation", url: "https://docs.github.com/en/actions", note: "For the CI/CD half of this lesson." }
  ],
  mastery: [
    "I can write a working Dockerfile for a simple app from scratch.",
    "I can run a multi-container app (app + database) locally with docker-compose.",
    "I never hardcode secrets into an image.",
    "I have at least one project with an automated pipeline that runs tests on every push."
  ]
}
];