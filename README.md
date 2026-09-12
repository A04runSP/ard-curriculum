# The ARD Curriculum

A structured learning system for Web Development, UI/UX Design, Computer Science, and Software Engineering.

Live site: https://ard-curriculum-git-react-m-123565-arunsridhar692-6569s-projects.vercel.app/

GitHub: https://github.com/A04runSP/ard-curriculum

The curriculum follows a practical learning loop: **learn → practice → build → test → ship**.

## Stack

- React 19
- Vite 7
- JavaScript (ES modules)
- CSS

## Development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Project structure

```text
ard-curriculum/
├── index.html
├── package.json
├── src/
│   ├── main.jsx
│   ├── styles.css
│   └── data/
│       ├── curriculum.js
│       ├── stage1.js
│       ├── stage2.js
│       ├── lessonA1.js
│       ├── lessonA2.js
│       ├── lessonA3.js
│       ├── lessonB1.js
│       ├── lessonB2.js
│       ├── lessonB3.js
│       ├── lessonB4.js
│       ├── concept1.js
│       ├── concept2.js
│       ├── concept3.js
│       ├── skillMatrix.js
│       ├── tools.js
│       ├── resourceLibrary.js
│       ├── projectLadder.js
│       └── methodology.js
└── .github/
    └── workflows/
        └── vite-build.yml
```

`src/main.jsx` contains the current application shell, navigation, views, and interaction logic. `src/styles.css` is the active React stylesheet. Curriculum content is kept as modular data under `src/data/` and assembled through `curriculum.js`.

## Build workflow

The `react-migration` branch uses `.github/workflows/vite-build.yml` to install dependencies and verify the Vite production build on pushes to that branch.
