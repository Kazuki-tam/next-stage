import { expect, test } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://next-stage-demo.vercel.app/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Next-Stage/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://next-stage-demo.vercel.app/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Example' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Todo List Example' })).toBeVisible();
});
