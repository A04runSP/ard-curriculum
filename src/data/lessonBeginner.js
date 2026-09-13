export const lessonBeginner = [
  {
    id: "l-computer-fundamentals",
    stage: "beginner",
    module: "Computer Fundamentals",
    title: "Computer Fundamentals for Developers",
    what: "A computer is a system of hardware and software that stores data, runs instructions, and produces results. As a developer, you do not need to repair hardware, but you do need a working mental model of the CPU, memory, storage, operating system, applications, and processes.",
    why: "If these words are vague, later explanations about programs, terminals, servers, memory, and performance become memorization instead of understanding. This lesson gives you the vocabulary needed to reason about a development machine.",
    mentalModel: "Think of a computer as a workshop. Storage is the warehouse where things remain when you are not using them. RAM is the workbench where active things are placed. The CPU is the worker executing instructions. The operating system is the workshop manager that coordinates hardware and gives applications controlled access to it.",
    coreConcepts: [
      "Hardware is the physical machine: CPU, RAM, storage, display, keyboard, network hardware, and other components.",
      "The CPU executes instructions; RAM holds data and instructions that active programs need quickly; storage keeps data when power is off.",
      "The operating system manages hardware and provides services that applications use, including files, memory, processes, networking, and permissions.",
      "An application is software designed to perform a task. A process is a running instance of a program managed by the operating system.",
      "A file is stored data with a name and format; a folder is an organizational container in the filesystem.",
      "When you open an application, the operating system loads the required program data into memory and gives the running process access to resources it needs."
    ],
    example: "When you open VS Code, the application is stored on your disk. The operating system starts a process for it, loads required code and data into RAM, and the CPU executes instructions from that process while VS Code reads and writes files through the operating system.",
    code: "// You do not need code to understand the model yet.\n// Notice how a running program is still just instructions + data.\nconst message = \"Hello\";\nconsole.log(message);",
    commonMistakes: [
      "Thinking storage and RAM are the same thing. Storage persists; RAM is working memory used by running programs.",
      "Thinking the operating system is just the desktop interface. The visible interface is only one part of a much larger system.",
      "Using 'program', 'application', and 'process' as exact synonyms. They are related but describe different things.",
      "Assuming faster hardware automatically fixes badly designed software. Hardware and software performance interact, but they are different problems."
    ],
    practice: "Open your operating system's task/process manager. Identify five running applications or processes and describe, in plain language, what each appears to be doing.",
    challenge: "Explain the journey of a text editor from 'installed on disk' to 'currently running' using the terms storage, operating system, RAM, process, and CPU.",
    miniProject: "Create a one-page 'My Computer Map' in your project folder. Record your OS, CPU, RAM, storage, browser, editor, and terminal, then write one sentence explaining the role of each.",
    resources: [
      { title: "CS50x — Introduction to Computer Science", url: "https://cs50.harvard.edu/x/", note: "Use the early lectures for a broader mental model of computers and computation." },
      { title: "MDN — How the web works", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works", note: "Useful bridge from your computer to the wider web." }
    ],
    mastery: [
      "I can explain CPU, RAM, storage, operating system, application, process, file, and folder in my own words.",
      "I can explain why a running application uses both storage and RAM.",
      "I understand that the operating system sits between applications and much of the underlying hardware."
    ]
  },
  {
    id: "l-files-folders-paths",
    stage: "beginner",
    module: "Filesystem Literacy",
    title: "Files, Folders & Paths",
    what: "Filesystems organize persistent data into files and directories. A path tells the computer where something is located. Developers work with paths constantly when opening projects, importing code, loading images, running commands, and configuring tools.",
    why: "A large amount of beginner frustration is really filesystem confusion: the file exists but the command is being run from the wrong directory, an asset path is wrong, or a project was opened at the wrong level. This lesson removes that ambiguity.",
    mentalModel: "Think of a filesystem as an address system. A folder is a building, a file is a room or document inside it, and a path is the address that tells you how to reach it. An absolute path gives the full address; a relative path gives directions from where you currently are.",
    coreConcepts: [
      "Files hold data; folders/directories group files and other folders.",
      "A file extension such as .html, .css, .js, or .png helps tools understand the file's format; the extension alone does not determine what the file actually contains.",
      "An absolute path identifies a location from a filesystem root. A relative path describes a location from the current project or working directory.",
      "The current working directory matters when a terminal command uses a relative path.",
      "Parent-directory notation (..) moves one level upward; . refers to the current directory.",
      "Good project structure makes files discoverable and reduces path mistakes."
    ],
    example: "In `my-site/pages/about.html`, the path is relative to the project directory. From `pages/about.html`, an image in `assets/logo.png` would be reached with `../assets/logo.png` because `..` moves from `pages` back to the project root.",
    code: "my-site/\n├── index.html\n├── pages/\n│   └── about.html\n├── styles/\n│   └── main.css\n└── assets/\n    └── logo.png",
    commonMistakes: [
      "Confusing a filename with a path. `main.css` is a name; `styles/main.css` is a relative path.",
      "Using the wrong number of `../` segments and accidentally pointing outside the intended folder.",
      "Putting unrelated files everywhere instead of establishing a predictable project structure.",
      "Deleting a file just because it is not visible in the normal file explorer view; hidden/system files may have special purposes."
    ],
    practice: "Create a folder named `beginner-files` with `pages`, `styles`, `scripts`, and `assets` inside it. Create one test file in each folder and write its relative path from the project root.",
    challenge: "Given the project tree in this lesson, write the relative path from `pages/about.html` to `assets/logo.png`, then explain why that path works.",
    miniProject: "Build a tiny mock website folder containing an HTML file, CSS file, JavaScript file, and image placeholder. Open the HTML file and verify that every referenced path resolves correctly.",
    resources: [
      { title: "MDN — File paths", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Creating_links", note: "The links module provides practical relative-path examples." }
    ],
    mastery: [
      "I can create, rename, move, copy, and delete files and folders safely.",
      "I can distinguish absolute and relative paths.",
      "I can look at a project tree and determine the correct relative path between two files."
    ]
  },
  {
    id: "l-developer-workspace",
    stage: "beginner",
    module: "Developer Workspace",
    title: "The Developer Workspace",
    what: "A developer workspace combines an editor, terminal, browser, and browser DevTools into one repeatable environment for creating and inspecting software. You should be able to open a project, edit a file, run or view it, inspect the result, and locate basic problems without hand-holding.",
    why: "Tools are not the skill, but friction with tools can hide whether you actually understand the work. A predictable workspace lets you spend your attention on learning instead of repeatedly wondering where to open a file or how to inspect a page.",
    mentalModel: "Think of the workspace as a small laboratory: VS Code is where you prepare the experiment, the terminal is where you issue controlled commands, the browser is where you observe a web result, and DevTools is your inspection equipment.",
    coreConcepts: [
      "VS Code is a source-code editor with project navigation, search, extensions, integrated terminal, and debugging features.",
      "The browser is both a consumer of websites and a development environment for inspecting HTML, CSS, JavaScript, network requests, and runtime errors.",
      "DevTools Elements shows the live DOM and applied styles; Console shows logs and runtime errors; Network shows requests and responses; Sources helps inspect loaded code.",
      "A project should be opened at its root folder so relative paths, searches, and tooling behave predictably.",
      "Extensions should solve a real problem. More extensions do not automatically make an editor better.",
      "A good workspace is repeatable: you know how to open the project, run it, inspect it, and find the important files."
    ],
    example: "Create `index.html`, open the project folder in VS Code, add a heading, save it, open the HTML in a browser, right-click and choose Inspect, then locate the heading in Elements. This is your first complete edit → run/view → inspect loop.",
    code: "<!doctype html>\n<html lang=\"en\">\n  <head><title>My first workspace</title></head>\n  <body>\n    <h1>Hello, developer.</h1>\n  </body>\n</html>",
    commonMistakes: [
      "Opening individual files instead of the project root, making navigation and relative paths harder to reason about.",
      "Installing a large collection of extensions before knowing what problem they solve.",
      "Looking only at the visual page when something is wrong; the Console and Network tabs often provide the useful evidence.",
      "Changing several files at once when learning, which makes it harder to identify which change caused a result."
    ],
    practice: "Create a project folder, open it in VS Code, create `index.html`, view it in a browser, and inspect its `<h1>` in DevTools. Repeat the workflow until you can do it without a checklist.",
    challenge: "Add an intentional mistake to the page, such as referencing a missing image or script. Use DevTools to identify the evidence that something is wrong, then fix it.",
    miniProject: "Create your first Developer Workspace project: a tiny personal introduction page with a title, paragraph, link, and placeholder image. Verify the HTML in the browser and inspect at least three elements in DevTools.",
    resources: [
      { title: "Visual Studio Code — Getting Started", url: "https://code.visualstudio.com/docs/getstarted/getting-started", note: "Official guide to the editor and workspace basics." },
      { title: "Chrome DevTools documentation", url: "https://developer.chrome.com/docs/devtools/", note: "Reference for the browser inspection tools." },
      { title: "Firefox Developer Tools", url: "https://firefox-source-docs.mozilla.org/devtools-user/", note: "Alternative browser DevTools documentation." }
    ],
    mastery: [
      "I can open a project folder in VS Code and find its files quickly.",
      "I can open DevTools and use Elements and Console without being intimidated by them.",
      "I can complete the edit → view → inspect loop independently."
    ]
  },
  {
    id: "l-terminal-basics",
    stage: "beginner",
    module: "Command Line",
    title: "Terminal & Command Line Basics",
    what: "A terminal lets you interact with your computer by typing commands into a shell. Developers use command-line tools to navigate projects, run programs, install dependencies, inspect files, automate work, and eventually operate servers and deployment systems.",
    why: "You do not need to become a Linux administrator in Beginner, but you do need to stop treating the terminal as mysterious. A small command vocabulary is enough to make later development workflows much easier.",
    mentalModel: "The terminal is a text-based control panel. You type a command, optionally provide arguments or flags, and the shell asks the operating system to perform the requested action. The output is evidence of what happened.",
    coreConcepts: [
      "Terminal is the interface; a shell such as Bash, Zsh, or PowerShell interprets commands typed into it.",
      "`pwd` shows the current directory; `ls`/`dir` lists contents; `cd` changes directory; `mkdir` creates a directory.",
      "`cp`/`copy` copies files; `mv`/`move` moves or renames them; `rm`/`del` removes them. Destructive commands require care.",
      "A command can receive arguments that tell it what to operate on. Flags/options modify how a command behaves.",
      "Command history and tab completion reduce repetitive typing and mistakes.",
      "The most important Beginner skill is understanding where you are before running a command and reading its output afterward."
    ],
    example: "A typical session is: open the terminal → `pwd` to see where you are → `cd` into your project → `ls` to inspect it → run the appropriate tool or script → read the output.",
    code: "pwd\nls\ncd my-project\nls\nmkdir practice\ncd practice",
    commonMistakes: [
      "Running a command from the wrong directory because the current location was never checked.",
      "Copying a command from a tutorial without understanding what path or file it targets.",
      "Treating `rm`/`del` as harmless. Deletion commands can be destructive and should be verified before execution.",
      "Ignoring terminal output instead of reading the error and the command that produced it."
    ],
    practice: "Using a safe practice folder, navigate into it, create two directories, create or place test files inside them, move one file, rename another, and return to the project root. Confirm each step with a listing command.",
    challenge: "Starting from your home directory, navigate to your Beginner project without using the file explorer. Once there, prove your location and list the project's files.",
    miniProject: "Create a `terminal-practice` directory containing `notes`, `assets`, and `scripts`. Populate it with a few harmless text files, reorganize them using terminal commands, and finish with the intended directory tree.",
    resources: [
      { title: "MIT — The Missing Semester", url: "https://missing.csail.mit.edu/", note: "Use the command-line section for a deeper follow-up when ready." }
    ],
    mastery: [
      "I understand the difference between a terminal and a shell at a basic level.",
      "I can navigate a project and perform basic file operations from the command line.",
      "I check my current directory before running a command that changes files."
    ]
  },
  {
    id: "l-search-docs-troubleshooting",
    stage: "beginner",
    module: "Problem Solving",
    title: "Searching, Documentation & Troubleshooting",
    what: "Technical problem solving is the disciplined process of turning a vague failure into evidence, a hypothesis, a targeted search or documentation lookup, and a verified fix. You are not expected to know everything; you are expected to know how to find out.",
    why: "Professional developers constantly encounter APIs, errors, tools, and systems they have never seen before. The ability to investigate independently is therefore a core technical skill, not a backup plan for when you are stuck.",
    mentalModel: "Treat a bug like a small investigation. First reproduce it. Then collect evidence. Form one plausible hypothesis. Test that hypothesis. Search using the exact evidence you have. Apply the smallest justified fix and reproduce the original problem to verify it is actually gone.",
    coreConcepts: [
      "A useful technical search includes the technology, exact error or symptom, and relevant context instead of a vague description.",
      "Read official documentation for concepts and APIs; use search results and community discussions to discover approaches, but verify important claims against authoritative sources.",
      "Error messages are evidence. Read the message, file/location, and stack trace before changing code randomly.",
      "Reproduction means you can reliably make the problem happen. Without a reliable reproduction, you cannot confidently verify a fix.",
      "Change one meaningful thing at a time when investigating so you can identify cause and effect.",
      "A good help request includes what you expected, what happened, the exact error, what you already tried, and a minimal example when possible."
    ],
    example: "Instead of searching `javascript button broken`, search for the exact symptom: `querySelector returns null button script loaded before DOM`. The second search contains a concrete mechanism that can lead to a useful explanation.",
    code: "// A deliberate error to investigate:\nconst button = document.querySelector('#does-not-exist');\nbutton.addEventListener('click', () => console.log('clicked'));\n\n// The Console gives evidence. Read it before guessing.",
    commonMistakes: [
      "Changing five unrelated things and then assuming the last change fixed the bug.",
      "Searching only for a complete solution and copying it without understanding why it works.",
      "Ignoring version numbers, exact error messages, and the environment when searching for technical help.",
      "Stopping when the error disappears without checking whether the original expected behavior actually works."
    ],
    practice: "Take three small broken examples supplied by your instructor or deliberately break your own Beginner project. For each one, write: expected behavior, actual behavior, evidence, hypothesis, test, fix, verification.",
    challenge: "Write a technical search query for a page where an image is not loading because its path is wrong. Then explain why your query is more useful than `image not working`.",
    miniProject: "Create a `troubleshooting-log.md` containing five small problems you encountered during Beginner. For each, record the symptom, evidence, search/documentation used, root cause, fix, and how you verified the fix.",
    resources: [
      { title: "MDN — What went wrong?", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/What_went_wrong", note: "Practical introduction to reading browser JavaScript errors and debugging." },
      { title: "MDN — Learn web development", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development", note: "Use the documentation itself as practice: find answers instead of only following tutorials." }
    ],
    mastery: [
      "I can turn a vague problem into a specific technical question.",
      "I read an error before searching for a fix and can identify the useful parts of the message.",
      "I can document a problem from reproduction through verified fix.",
      "I know how to ask for technical help with enough context for another developer to investigate."
    ]
  }
];
