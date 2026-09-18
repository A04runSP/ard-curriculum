import { test, expect } from '@playwright/test';

const HTTP_URL = /^https?:\/\//i;

async function assertLinks(locator, label, failures) {
  const entries = await locator.evaluateAll(items =>
    items.map(item => ({
      text: item.textContent?.trim() || '',
      href: item.querySelector('a')?.getAttribute('href') || ''
    }))
  );

  for (const entry of entries) {
    if (!HTTP_URL.test(entry.href)) {
      failures.push(`${label}: ${entry.text || '(unnamed resource)'} → ${entry.href || '(no href)'}`);
    }
  }
}

test('all Stage 1–15 resource entries expose clickable HTTP(S) URLs', async ({ page }) => {
  const failures = [];

  for (let stageIndex = 0; stageIndex < 15; stageIndex += 1) {
    await page.goto('/');
    await page.evaluate(() => localStorage.clear());
    await page.reload();

    const stages = page.locator('.flow-stage');
    await expect(stages).toHaveCount(15);

    await stages.nth(stageIndex).click();
    const stage = page.locator('.stage-view');
    await expect(stage).toBeVisible();

    await assertLinks(
      stage.locator('.meta-block').filter({
        has: stage.getByRole('heading', { name: 'Resources', exact: true })
      }).locator('li'),
      `Stage ${stageIndex + 1}`,
      failures
    );

    const lessonHeading = stage.getByRole('heading', { name: 'Full Lessons in this Stage', exact: true });
    const lessonButtons = stage.locator('button[data-content-type="lesson"]');
    const lessonCount = await lessonButtons.count();

    for (let lessonIndex = 0; lessonIndex < lessonCount; lessonIndex += 1) {
      const lessonButton = lessonButtons.nth(lessonIndex);
      const lessonTitle = (await lessonButton.textContent())?.trim() || '(unnamed lesson)';
      await lessonButton.click();
      const lesson = page.locator('.lesson-view');
      await expect(
        lesson,
        `Stage ${stageIndex + 1}, lesson ${lessonIndex + 1} (${lessonTitle}) did not open`
      ).toBeVisible();

      await assertLinks(
        lesson.locator('.lsection').filter({
          has: lesson.getByRole('heading', { name: '11. Resources', exact: true })
        }).locator('.resource-item'),
        `Stage ${stageIndex + 1} lesson ${lessonIndex + 1} (${lessonTitle})`,
        failures
      );

      await lesson.getByRole('button', { name: new RegExp(`^← .+`) }).first().click();
      await expect(page.locator('.stage-view')).toBeVisible();
    }

    const conceptHeading = stage.getByRole('heading', { name: 'Concept Notes in this Stage', exact: true });
    if (await conceptHeading.count()) {
      const conceptButtons = stage.locator('button[data-content-type="concept"]');
      const conceptCount = await conceptButtons.count();

      for (let conceptIndex = 0; conceptIndex < conceptCount; conceptIndex += 1) {
        await conceptButtons.nth(conceptIndex).click();
        const concept = page.locator('.concept-card');
        await expect(concept).toBeVisible();

        await assertLinks(
          concept.locator('h4').filter({ hasText: 'Resource' }).locator('xpath=following-sibling::p[1]'),
          `Stage ${stageIndex + 1} concept ${conceptIndex + 1}`,
          failures
        );

        await page.getByRole('button', { name: 'Back to stage', exact: true }).click();
        await expect(page.locator('.stage-view')).toBeVisible();
      }
    }
  }

  expect(failures, 'Resources missing clickable HTTP(S) URLs').toEqual([]);
});
