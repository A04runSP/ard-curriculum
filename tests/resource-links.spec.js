import { test, expect } from '@playwright/test';

test('all Stage 1–15 resource entries expose clickable HTTP(S) URLs', async ({ page }) => {
  await page.goto('/');
  await page.evaluate(() => localStorage.clear());
  await page.reload();

  const stages = page.locator('.flow-stage');
  await expect(stages).toHaveCount(15);

  const failures = [];

  for (let stageIndex = 0; stageIndex < 15; stageIndex += 1) {
    await stages.nth(stageIndex).click();
    const stage = page.locator('.stage-view');
    await expect(stage).toBeVisible();

    const resourceBlocks = stage.locator('.meta-block').filter({
      has: stage.getByRole('heading', { name: 'Resources', exact: true })
    });

    if (await resourceBlocks.count()) {
      const entries = await resourceBlocks.locator('li').evaluateAll(items =>
        items.map(li => ({
          text: li.textContent?.trim() || '',
          href: li.querySelector('a')?.getAttribute('href') || ''
        }))
      );

      for (const entry of entries) {
        if (!/^https?:\\/\\//i.test(entry.href)) {
          failures.push(`Stage ${stageIndex + 1}: ${entry.text || '(unnamed resource)'} → ${entry.href || '(no href)'}`);
        }
      }
    }

    await stage.getByRole('button', { name: '← All 15 stages', exact: true }).click();
    await expect(page.locator('.flow-stage')).toHaveCount(15);
  }

  expect(failures, 'Resources missing clickable HTTP(S) URLs').toEqual([]);
});
