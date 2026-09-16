import { stage14SpecializationModel } from "./data/stage14Tracks.js";
import { lessonB7 } from "./data/lessonB7.js";

const lessonTitleById = new Map(lessonB7.map(lesson => [lesson.id, lesson.title]));

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
  stage14SpecializationModel.requiredLessonIds.forEach(id => {
    const title = lessonTitleById.get(id) || id;
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
      const title = lessonTitleById.get(id) || id;
      const button = lookup.get(title);
      const chip = document.createElement("button");
      chip.className = "stage14-lesson-chip elective";
      chip.type = "button";
      chip.textContent = `→ ${title}`;
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
