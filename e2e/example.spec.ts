import { expect, test } from '@playwright/test'

test('test', async ({ page }) => {
  // Go to http://localhost:3000/
  await page.goto('http://localhost:3000/')
  // Click text=Sample >> nth=0
  await page.locator('text=Sample').first().click()
  await expect(page).toHaveURL('http://localhost:3000/sample')
  // Click text=Home >> nth=0
  await page.locator('text=Home').first().click()
  await expect(page).toHaveURL('http://localhost:3000/')
  // Click #headlessui-switch-10
  await page.locator('#headlessui-switch-10').click()
  // Click #headlessui-switch-10
  await page.locator('#headlessui-switch-10').click()
})
