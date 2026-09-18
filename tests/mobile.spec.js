import { test, expect } from '@playwright/test';

const MOBILE_WIDTHS = [360, 390, 412];

async function assertNoHorizontalOverflow(page) {
  const overflow = await page.evaluate(() => ({
    viewport: document.documentElement.clientWidth,
    scrollWidth: document.documentElement.scrollWidth,
    bodyScrollWidth: document.body.scrollWidth
  }));

  expect(overflow.scrollWidth).toBeLessThanOrEqual(overflow.viewport + 1);
  expect(overflow.bodyScrollWidth).toBeLessThanOrEqual(overflow.viewport + 1);
}

async function openFirstStage(page) {
  await page.locator('.flow-stage').first().click();
  await expect(page.locator('.stage-view')).toBeVisible();
}

test.describe('ARD Curriculum mobile QA', () => {
  for (const width of MOBILE_WIDTHS) {
    test.describe(`${width}px viewport`, () => {
      test.use({ viewport: { width, height: 844 }, isMobile: true, hasTouch: true });

      test.beforeEach(async ({ page }) => {
        await page.goto('/');
        await page.evaluate(() => localStorage.clear());
        await page.reload();
      });

      test('dashboard fits the viewport and all 15 stages are usable', async ({ page }) => {
        await expect(page.locator('.dash-hero h1')).toBeVisible();
        await expect(page.locator('.flow-stage')).toHaveCount(15);
        await assertNoHorizontalOverflow(page);

        const firstStage = page.locator('.flow-stage').first();
        await expect(firstStage).toBeVisible();
        await firstStage.click();
        await expect(page.locator('.stage-view')).toBeVisible();
        await assertNoHorizontalOverflow(page);
      });

      test('stage, lesson and concept views remain usable', async ({ page }) => {
        await openFirstStage(page);

        const stage = page.locator('.stage-view');
        const lessonButton = stage.locator('button').filter({ hasText: '→' }).first();
        await expect(lessonButton).toBeVisible();
        await lessonButton.click();
        await expect(page.locator('.lesson-view')).toBeVisible();
        await assertNoHorizontalOverflow(page);

        await page.goBack();
        await expect(page.locator('.stage-view')).toBeVisible();

        const conceptHeading = stage.getByRole('heading', { name: 'Concept Notes in this Stage', exact: true });
        if (await conceptHeading.count()) {
          const conceptButton = conceptHeading.locator('xpath=following-sibling::button[1]');
          if (await conceptButton.count()) {
            await conceptButton.click();
            await expect(page.locator('.concept-card')).toBeVisible();
            await assertNoHorizontalOverflow(page);
          }
        }
      });

      test('mobile navigation opens, exposes navigation labels, and closes', async ({ page }) => {
        const toggle = page.getByRole('button', { name: 'Show collapsed navigation' });
        await expect(toggle).toBeVisible();
        await toggle.click();

        await expect(page.getByRole('button', { name: 'Hide collapsed navigation' })).toBeVisible();
        await expect(page.getByRole('button', { name: 'Roadmap Overview' })).toBeVisible();
        await expect(page.getByRole('button', { name: 'Stages' })).toBeVisible();

        await page.getByRole('button', { name: 'Hide collapsed navigation' }).click();
        await expect(page.getByRole('button', { name: 'Show collapsed navigation' })).toBeVisible();
      });

      test('search remains visible and navigates to a lesson', async ({ page }) => {
        const search = page.locator('input[placeholder*="Search lessons"]').last();
        await expect(search).toBeVisible();
        await search.fill('Indexes');

        const results = page.locator('.search-results.open').last();
        await expect(results).toBeVisible();

        const result = results.locator('.search-result-item').filter({ hasText: 'Indexes, Selectivity & Query Performance' }).first();
        await expect(result).toBeVisible();
        await result.click();

        await expect(page.getByRole('heading', { name: 'Indexes, Selectivity & Query Performance', exact: true })).toBeVisible();
        await assertNoHorizontalOverflow(page);
      });

      test('lesson completion control remains tappable', async ({ page }) => {
        await openFirstStage(page);
        const lessonButton = page.locator('.stage-view button').filter({ hasText: '→' }).first();
        await lessonButton.click();

        const completionButton = page.getByRole('button', { name: /complete/i }).first();
        await expect(completionButton).toBeVisible();

        const box = await completionButton.boundingBox();
        expect(box).not.toBeNull();
        expect(box.width).toBeGreaterThanOrEqual(44);
        expect(box.height).toBeGreaterThanOrEqual(40);

        await completionButton.tap();
        await expect(page.locator('.progress-chip')).toContainText('1 /');
      });
    });
  }
});
