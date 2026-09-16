import { stage14SpecializationModel } from "./data/stage14Tracks.js";

const ROLE_LABELS = {
  core: "Shared core",
  "frontend-performance": "Frontend track",
  "backend-systems": "Backend track",
  "typescript-architecture": "TypeScript track"
};

const lessonById = new Map(
  stage14SpecializationModel.requiredLessonIds
    .map(id => [id, id])
);

stage14SpecializationModel.tracks.forEach(track => {
  track.lessonIds.forEach(id => lessonById.set(id, id));
});

function findLessonButton(id) {
  const lesson = document.querySelector(`.stage-view[data-stage="14"] .content-link[data-stage14-lesson="${id}"]`);
  if (lesson) return lesson;
  return [...document.querySelectorAll('.stage-view[data-stage="14"] .content-link')].find(button => {
    const text = button.textContent || "";
    const lessonIds = [...lessonById.keys()];
    return lessonIds.some(lessonId => {
      const title = document.querySelector(`.stage-view[data-stage="14"] [data-stage14-title="${lessonId}"]`);
      return title && text.includes(title.textContent.trim());
    });
  });
}

function makeLessonLookup() {
  const buttons = [...document.querySelectorAll('.stage-view[data-stage="14"] .content-link')];
  const lookup = new Map();
  buttons.forEach(button => {
    const text = (button.textContent || "").replace(/^→\s*/, "").replace(/complete$/i, "").trim();
    lookup.set(text, button);
  });
  return lookup;
}

function buildPlanner(stageView) {
  if (stageView.querySelector(".stage14-specialization-planner")) return;

  const lookup = makeLessonLookup();
  const lessonTitles = new Map();
  stage14SpecializationModel.core.forEach(title => lessonTitles.set(title, title));
  stage14SpecializationModel.tracks.forEach(track => {
    track.lessonIds.forEach(id => {
      const lesson = [...lookup.entries()].find(([title]) => {
        const normalized = title.toLowerCase();
        return normalized.includes(id.replace("l-ae-", "").replaceAll("-", " "));
      });
      if (lesson) lessonTitles.set(id, lesson[0]);
    });
  });

  const planner = document.createElement("section");
  planner.className = "stage14-specialization-planner";
  planner.innerHTML = `
    <div class="stage14-planner-eyebrow">Stage 14 learning path</div>
    <h2>Shared Core + Choose 1–2 Tracks</h2>
    <p class="stage14-planner-rule">${stage14SpecializationModel.selectionRule}</p>
    <div class="stage14-core-block">
      <div class="stage14-block-title"><span>CORE</span><strong>Required for everyone</strong></div>
      <div class="stage14-chip-grid" data-stage14-core></div>
    </div>
    <div class="stage14-track-grid" data-stage14-tracks></div>
    <div class="stage14-capstone-note"><strong>Capstone rule:</strong> demonstrate measurable depth in at least one selected track; a second selected track may be integrated when it strengthens the engineering problem.</div>
  `;

  const coreGrid = planner.querySelector("[data-stage14-core]");
  stage14SpecializationModel.core.forEach(title => {
    const button = lookup.get(title);
    const chip = document.createElement("button");
    chip.className = "stage14-lesson-chip core";
    chip.type = "button";
    chip.textContent = `✓ ${title}`;
    if (button) chip.addEventListener("click", () => button.click());
    coreGrid.appendChild(chip);
  });

  const trackGrid = planner.querySelector("[data-stage14-tracks]");
  stage14SpecializationModel.tracks.forEach((track, index) => {
    const card = document.createElement("article");
    card.className = "stage14-track-card";
    card.innerHTML = `
      <div class="stage14-track-number">0${index + 1}</div>
      <h3>${track.title}</h3>
      <p>${track.outcome}</p>
      <div class="stage14-track-lessons"></div>
      <div class="stage14-track-project"><strong>Track project</strong><span>${track.project}</span></div>
    `;
    const lessons = card.querySelector(".stage14-track-lessons");
    track.lessonIds.forEach(id => {
      const title = [...lookup.keys()].find(value => {
        const normalized = value.toLowerCase();
        const key = id.replace("l-ae-", "").replaceAll("-", " ");
        return normalized.includes(key);
      });
      const button = title ? lookup.get(title) : null;
      const chip = document.createElement("button");
      chip.className = "stage14-lesson-chip elective";
      chip.type = "button";
      chip.textContent = `→ ${title || id}`;
      if (button) chip.addEventListener("click", () => button.click());
      lessons.appendChild(chip);
    });
    trackGrid.appendChild(card);
  });

  const lessonHeading = [...stageView.querySelectorAll(".subheading")].find(h => h.textContent.includes("Full Lessons in this Stage"));
  if (lessonHeading) lessonHeading.parentNode.insertBefore(planner, lessonHeading);
  else stageView.appendChild(planner);
}

function decorateStage14() {
  const stageView = document.querySelector('.stage-view[data-stage="14"]');
  if (!stageView) return;
  buildPlanner(stageView);
}

const observer = new MutationObserver(() => {
  if (document.querySelector('.stage-view[data-stage="14"]')) {
    requestAnimationFrame(decorateStage14);
  }
});

observer.observe(document.getElementById("root") || document.body, { childList: true, subtree: true });
requestAnimationFrame(decorateStage14);
