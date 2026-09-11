# The ARD Curriculum

A structured learning system for Web Development, UI/UX Design, Computer Science, and Software Engineering.

Live site: https://ard-curriculum.vercel.app/

GitHub: https://github.com/A04runSP/ard-curriculum

The curriculum follows a practical learning loop: **learn → practice → build → test → ship**.

## Current layout

The interface uses a fixed vertical navigation rail with a separate, breathable main workspace. On smaller screens the navigation remains a left-side rail instead of stacking above the content.

## Roadmap

The curriculum is organized into 15 progressive stages covering computer fundamentals, programming, computer science, web development, frontend, UI/UX, backend, databases, software engineering, testing, deployment, and professional practice.

## Project structure

```text
ard-curriculum/
├── index.html
├── style.css
├── base.css
└── README.md
```

`style.css` contains the current workspace-layout layer. `base.css` preserves the earlier visual system so layout changes can be iterated without losing the curriculum's existing styling.
