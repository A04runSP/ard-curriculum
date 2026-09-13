export const conceptBeginner = [
  {
    id: "c-operating-system",
    stage: "beginner",
    module: "Computer Fundamentals",
    title: "What Is an Operating System?",
    what: "An operating system is the software layer that manages a computer's hardware and provides common services that applications use, including files, memory, processes, devices, networking, and permissions.",
    why: "Understanding the operating system makes later concepts such as terminals, processes, permissions, filesystems, and servers much less mysterious.",
    keyPoints: [
      "The OS coordinates access to CPU, memory, storage, devices, and networking.",
      "Applications normally ask the OS to perform protected operations instead of directly controlling hardware.",
      "A process is a running program managed by the OS.",
      "The desktop/window system is only one visible part of an operating system.",
      "Windows, macOS, and Linux provide different environments, but the core responsibilities of an OS overlap."
    ],
    resource: { title: "MDN — Operating system basics", url: "https://developer.mozilla.org/en-US/docs/Glossary/Operating_system" }
  },
  {
    id: "c-files-folders-paths",
    stage: "beginner",
    module: "Filesystem Literacy",
    title: "Files, Folders & Paths",
    what: "A filesystem organizes persistent data into files and directories, while a path identifies where a particular file or directory can be found.",
    why: "Paths appear everywhere in development: HTML links, imports, images, scripts, terminal commands, build tools, and configuration. Understanding them early prevents avoidable errors.",
    keyPoints: [
      "A file contains data; a directory contains files and other directories.",
      "An absolute path starts from a filesystem root or drive context; a relative path starts from a known current location.",
      "`.` means the current directory and `..` means the parent directory in common path systems.",
      "File extensions communicate expected formats to people and tools, but an extension does not magically change a file's contents.",
      "A project root is the directory from which the project's structure and tooling are normally understood."
    ],
    resource: { title: "MDN — Creating hyperlinks and using paths", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Creating_links" }
  },
  {
    id: "c-terminal-shell-command",
    stage: "beginner",
    module: "Command Line",
    title: "Terminal vs Shell vs Command",
    what: "A terminal is an interface for interacting with a command-line environment. A shell interprets commands, and each command asks the operating system or another program to perform an operation.",
    why: "These terms are often treated as interchangeable by beginners. Knowing the distinction makes command-line documentation easier to understand and gives you a clearer mental model of what is actually running.",
    keyPoints: [
      "Terminal: the interface in which command-line input and output are displayed.",
      "Shell: the program that reads commands and interprets their syntax, such as Bash, Zsh, or PowerShell.",
      "Command: an instruction interpreted by the shell or a program available through it.",
      "Arguments identify what a command should operate on; options/flags modify behavior.",
      "The current working directory determines how many relative paths are interpreted."
    ],
    resource: { title: "MIT — The Missing Semester", url: "https://missing.csail.mit.edu/" }
  },
  {
    id: "c-browser-devtools",
    stage: "beginner",
    module: "Developer Workspace",
    title: "Browser DevTools",
    what: "Browser Developer Tools are built-in inspection and debugging tools for examining a webpage's DOM, styles, JavaScript behavior, network requests, storage, and performance.",
    why: "A developer should not have to guess what the browser is doing. DevTools turns the browser from something you only look at into something you can inspect and investigate.",
    keyPoints: [
      "Elements/Inspector shows the live DOM and the CSS rules applied to elements.",
      "Console displays JavaScript logs, warnings, and runtime errors.",
      "Network shows requests, status codes, response data, timing, and failed resources.",
      "Sources/Debugger lets you inspect loaded code and pause execution with breakpoints.",
      "Device/responsive tools let you test different viewport sizes and basic mobile conditions."
    ],
    resource: { title: "Chrome DevTools documentation", url: "https://developer.chrome.com/docs/devtools/" }
  },
  {
    id: "c-errors-as-information",
    stage: "beginner",
    module: "Problem Solving",
    title: "Errors Are Information",
    what: "An error is evidence that something did not match the program's expectations. Reading the message, location, and surrounding context gives you clues about what to investigate next.",
    why: "Beginners often treat an error as a verdict that they are bad at programming. In practice, errors are one of the primary feedback mechanisms developers use to locate incorrect assumptions.",
    keyPoints: [
      "Read the exact error message before searching for a solution.",
      "Check the file, line, and stack trace when available.",
      "Reproduce the problem before changing code so you can verify the fix.",
      "Form a hypothesis and test it rather than making unrelated changes at random.",
      "A successful fix is not merely 'the error disappeared'; the original expected behavior must also work."
    ],
    resource: { title: "MDN — What went wrong?", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/What_went_wrong" }
  }
];
