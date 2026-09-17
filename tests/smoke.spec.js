import { test, expect } from '@playwright/test';

test.describe('ARD Curriculum application smoke tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.evaluate(() => localStorage.clear());
    await page.reload();
  });

  test('dashboard and curriculum stages render', async ({ page }) => {
    await expect(page).toHaveTitle('The ARD Curriculum');
    await expect(page.locator('.dash-hero h1')).toBeVisible();
    await expect(page.locator('.flow-stage')).toHaveCount(15);
  });

  test('stage view exposes lessons and concepts', async ({ page }) => {
    await page.locator('.flow-stage').nth(7).click();

    const stage = page.locator('.stage-view');
    await expect(stage.getByRole('heading', { name: 'Backend', exact: true })).toBeVisible();

    const arrowButtons = stage.locator('button').filter({ hasText: '→' });
    await expect(arrowButtons.first()).toBeVisible();
    expect(await arrowButtons.count()).toBeGreaterThan(1);

    const firstLessonLabel = (await arrowButtons.first().innerText()).replace(/^→\s*/, '').trim();
    await arrowButtons.first().click();
    await expect(page.getByRole('heading', { name: firstLessonLabel, exact: true })).toBeVisible();
  });

  test('concept view is reachable from a stage', async ({ page }) => {
    await page.locator('.flow-stage').nth(8).click();
    const stage = page.locator('.stage-view');
    const arrowButtons = stage.locator('button').filter({ hasText: '→' });
    const count = await arrowButtons.count();
    expect(count).toBeGreaterThan(1);

    const conceptText = await arrowButtons.last().innerText();
    const label = conceptText.replace(/^→\s*/, '').trim();
    await arrowButtons.last().click();
    await expect(page.locator('body')).toContainText(label);
  });

  test('search returns a navigable lesson or resource result', async ({ page }) => {
    const search = page.locator('.desktop-topbar-search input[placeholder*="Search lessons"]');
    await search.fill('PostgreSQL');

    const results = page.locator('.desktop-topbar-search .search-results.open');
    await expect(results).toBeVisible();
    expect(await results.locator('.search-result-item').count()).toBeGreaterThan(0);

    const result = results.locator('.search-result-item').filter({ hasText: 'PostgreSQL' }).first();
    await expect(result).toBeVisible();
    await result.click();
    await expect(page.locator('body')).toContainText('PostgreSQL');
  });

  test('lesson completion updates progress and persists', async ({ page }) => {
    await page.locator('.flow-stage').first().click();
    const stage = page.locator('.stage-view');
    const lessonButton = stage.locator('button').filter({ hasText: '→' }).first();
    const lessonLabel = (await lessonButton.innerText()).replace(/^→\s*/, '').trim();
    await lessonButton.click();
    await expect(page.getByRole('heading', { name: lessonLabel, exact: true })).toBeVisible();

    const completionButton = page.getByRole('button', { name: /complete/i }).first();
    await expect(completionButton).toBeVisible();
    await completionButton.click();

    await expect(page.locator('.progress-chip')).toContainText('1 /');
    const stored = await page.evaluate(() => JSON.parse(localStorage.getItem('ard_curriculum_progress_v1') || '{}'));
    expect(Object.values(stored)).toContain(true);
  });
});
