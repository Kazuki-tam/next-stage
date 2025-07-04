import { expect, test } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("https://next-stage-demo.vercel.app/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Next-Stage/);
});
