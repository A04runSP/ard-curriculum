import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

async function auditPage(page, label) {
  const results = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'])
    .analyze();

  if (results.violations.length) {
    const details = results.violations.map(v =>
      `[${v.id}] ${v.help} — ${v.nodes.length} node(s): ${v.nodes.map(n => n.target.join(', ')).join(' | ')}`
    ).join('\n');
    throw new Error(`${label} accessibility violations:\n${details}`);
  }
}

test.describe('ARD Curriculum accessibility audit', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.evaluate(() => localStorage.clear());
    await page.reload();
  });

  test('dashboard has a valid main landmark and passes WCAG audit', async ({ page }) => {
    await expect(page.locator('main')).toHaveCount(1);
    await expect(page.locator('main')).toBeVisible();
    await auditPage(page, 'Dashboard');
  });

  test('stage view passes WCAG audit', async ({ page }) => {
    await page.locator('.flow-stage').first().click();
    await expect(page.locator('.stage-view')).toBeVisible();
    await auditPage(page, 'Stage view');
  });

  test('lesson view passes WCAG audit', async ({ page }) => {
    await page.locator('.flow-stage').first().click();
    const lessonButton = page.locator('.stage-view button').filter({ hasText: '→' }).first();
    await lessonButton.click();
    await expect(page.locator('.lesson-view')).toBeVisible();
    await auditPage(page, 'Lesson view');
  });
});
