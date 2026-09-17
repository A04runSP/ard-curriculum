import { test, expect } from '@playwright/test';

test.describe('ARD Curriculum application smoke tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.evaluate(() => localStorage.clear());
    await page.reload();
  });

  test('dashboard and curriculum stages render', async ({ page }) => {
    await expect(page).toHaveTitle('The ARD Curriculum');
    await expect(page.getByText('The 15 Stages', { exact: true })).toBeVisible();
    await expect(page.locator('.flow-stage')).toHaveCount(15);
  });

  test('stage view exposes lessons and concepts', async ({ page }) => {
    await page.locator('.flow-stage').nth(7).click();

    await expect(page.getByRole('heading', { name: 'Backend', exact: true })).toBeVisible();
    await expect(page.locator('.lesson-link')).toHaveCount(0);
    await expect(page.locator('.stage-lesson')).toHaveCount(0);

    const lessonButtons = page.locator('button').filter({ hasText: '→' });
    await expect(lessonButtons.first()).toBeVisible();

    const firstLessonLabel = (await lessonButtons.first().innerText()).replace(/^→\s*/, '').trim();
    await lessonButtons.first().click();
    await expect(page.getByRole('heading', { name: firstLessonLabel, exact: true })).toBeVisible();
  });

  test('concept view is reachable from a stage', async ({ page }) => {
    await page.locator('.flow-stage').nth(8).click();
    const conceptButtons = page.locator('button').filter({ hasText: '→' });
    const count = await conceptButtons.count();
    expect(count).toBeGreaterThan(0);

    const conceptText = await conceptButtons.last().innerText();
    const label = conceptText.replace(/^→\s*/, '').trim();
    await conceptButtons.last().click();
    await expect(page.getByRole('heading', { name: label, exact: true })).toBeVisible();
  });

  test('search returns a navigable lesson/resource result', async ({ page }) => {
    const search = page.locator('input[placeholder*="Search lessons"]');
    await search.first().fill('PostgreSQL');

    await expect(page.locator('.search-results.open')).toBeVisible();
    await expect(page.locator('.search-result-item')).toHaveCount(20);

    const result = page.locator('.search-result-item').filter({ hasText: 'PostgreSQL' }).first();
    await expect(result).toBeVisible();
    await result.click();
    await expect(page.getByRole('heading', { name: /PostgreSQL/i }).first()).toBeVisible();
  });

  test('lesson completion updates progress and persists', async ({ page }) => {
    await page.locator('.flow-stage').first().click();
    const lessonButton = page.locator('button').filter({ hasText: '→' }).first();
    const lessonLabel = (await lessonButton.innerText()).replace(/^→\s*/, '').trim();
    await lessonButton.click();
    await expect(page.getByRole('heading', { name: lessonLabel, exact: true })).toBeVisible();

    const completionButton = page.getByRole('button', { name: /complete/i }).first();
    await expect(completionButton).toBeVisible();
    await completionButton.click();

    await expect(page.locator('.progress-chip')).toContainText('1 /');
    await expect(page.locator('body')).toContainText('complete');

    const stored = await page.evaluate(() => JSON.parse(localStorage.getItem('ard_curriculum_progress_v1') || '{}'));
    expect(Object.values(stored)).toContain(true);
  });
});
