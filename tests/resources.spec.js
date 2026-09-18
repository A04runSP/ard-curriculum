import { test, expect } from '@playwright/test';

async function assertResourceLinks(page, scope, label) {
  const resources = scope.locator('.meta-block').filter({ has: scope.getByRole('heading', { name: 'Resources', exact: true }) });
  const count = await resources.count();
  if (!count) return;

  const result = await resources.evaluateAll(blocks => blocks.map(block => ({
    items: [...block.querySelectorAll('li')].map(li => ({
      text: li.textContent?.trim() || '',
      href: li.querySelector('a')?.getAttribute('href') || ''
    }))
  })));

  const missing = result.flatMap(group => group.items.filter(item => !/^https?:\\/\\//i.test(item.href)).map(item => item.text));
  expect(missing, `${label}: resources without clickable HTTP(S) URLs`).toEqual([]);
}

async function assertLessonResources(page, label) {
  const section = page.locator('.lsection').filter({ has: page.getByRole('heading', { name: '11. Resources', exact: true }) });
  if (!(await section.count())) return;

  const result = await section.locator('.resource-item').evaluateAll(items => items.map(item => ({
    title: item.querySelector('a')?.textContent?.trim() || '',
    href: item.querySelector('a')?.getAttribute('href') || ''
  })));

  expect(result.length, `${label}: lesson resource section should contain resource entries`).toBeGreaterThan(0);
  const invalid = result.filter(item => !item.title || !/^https?:\\/\\//i.test(item.href));
  expect(invalid, `${label}: lesson resources without clickable HTTP(S) URLs`).toEqual([]);
}

async function assertConceptResources(page, label) {
  const card = page.locator('.concept-card');
  if (!(await card.count())) return;

  const resourceHeading = card.getByRole('heading', { name: 'Resource', exact: true });
  if (!(await resourceHeading.count())) return;

  const links = card.locator('a');
  const hrefs = await links.evaluateAll(as => as.map(a => ({
    title: a.textContent?.trim() || '',
    href: a.getAttribute('href') || ''
  })));

  const invalid = hrefs.filter(item => !item.title || !/^https?:\\/\\//i.test(item.href));
  expect(invalid, `${label}: concept resources without clickable HTTP(S) URLs`).toEqual([]);
}

test.describe('ARD Curriculum resource QA', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.evaluate(() => localStorage.clear());
    await page.reload();
  });

  test('all Stage 1–15 resource entries become clickable URLs', async ({ page }) => {
    const stages = page.locator('.flow-stage');
    await expect(stages).toHaveCount(15);

    const failures = [];

    for (let index = 0; index < 15; index += 1) {
      await page.locator('.flow-stage').nth(index).click();
      const stage = page.locator('.stage-view');
      await expect(stage).toBeVisible();
      await expect(stage.locator('.meta-block').filter({ hasText: 'Resources' }).first()).toBeVisible();

      try {
        await assertResourceLinks(page, stage, `Stage ${index + 1}`);
      } catch (error) {
        failures.push(error.message);
      }

      await stage.getByRole('button', { name: '← All 15 stages', exact: true }).click();
      await expect(page.locator('.flow-stage')).toHaveCount(15);
    }

    expect(failures).toEqual([]);
  });

  test('lesson resource URLs are present and clickable for every lesson in Stages 1–15', async ({ page }) => {
    const stages = page.locator('.flow-stage');
    await expect(stages).toHaveCount(15);
    const failures = [];

    for (let stageIndex = 0; stageIndex < 15; stageIndex += 1) {
      await stages.nth(stageIndex).click();
      const stage = page.locator('.stage-view');
      await expect(stage).toBeVisible();

      const lessonButtons = stage.locator('.content-link').filter({ hasText: '→' });
      const lessonCount = await lessonButtons.count();

      for (let lessonIndex = 0; lessonIndex < lessonCount; lessonIndex += 1) {
        await stage.locator('.content-link').filter({ hasText: '→' }).nth(lessonIndex).click();
        const lesson = page.locator('.lesson-view');
        await expect(lesson).toBeVisible();

        try {
          await assertLessonResources(page, `Stage ${stageIndex + 1}, lesson ${lessonIndex + 1}`);
        } catch (error) {
          failures.push(error.message);
        }

        await lesson.locator('.lesson-back-btn').click();
        await expect(page.locator('.stage-view')).toBeVisible();
      }

      await stage.getByRole('button', { name: '← All 15 stages', exact: true }).click();
      await expect(page.locator('.flow-stage')).toHaveCount(15);
    }

    expect(failures).toEqual([]);
  });

  test('concept resource URLs are clickable when a concept declares a resource', async ({ page }) => {
    const stages = page.locator('.flow-stage');
    await expect(stages).toHaveCount(15);
    const failures = [];

    for (let stageIndex = 0; stageIndex < 15; stageIndex += 1) {
      await stages.nth(stageIndex).click();
      let stage = page.locator('.stage-view');
      await expect(stage).toBeVisible();

      const conceptButtons = stage.locator('.content-link').filter({ hasText: '→' });
      const buttons = await conceptButtons.allTextContents();

      for (let conceptIndex = 0; conceptIndex < buttons.length; conceptIndex += 1) {
        const currentStage = page.locator('.stage-view');
        const conceptHeading = currentStage.getByRole('heading', { name: 'Concept Notes in this Stage', exact: true });
        if (!(await conceptHeading.count())) break;

        const concepts = currentStage.locator('.content-link').filter({ hasText: '→' });
        const count = await concepts.count();
        if (conceptIndex >= count) break;

        await concepts.nth(conceptIndex).click();
        await expect(page.locator('.concept-card')).toBeVisible();

        try {
          await assertConceptResources(page, `Stage ${stageIndex + 1}, concept ${conceptIndex + 1}`);
        } catch (error) {
          failures.push(error.message);
        }

        await page.locator('.concept-card').locator('xpath=following-sibling::button[1]').click();
        await expect(page.locator('.stage-view')).toBeVisible();
      }

      await page.locator('.stage-view').getByRole('button', { name: '← All 15 stages', exact: true }).click();
      await expect(page.locator('.flow-stage')).toHaveCount(15);
    }

    expect(failures).toEqual([]);
  });
});
