// @ts-check
import { test, expect } from '@playwright/test';

const LOCALHOST_URI = 'http://localhost:5173/';

const URI_CAT_IMG = 'https://cataas.com/cat/says/';

test('app shows ramdon fact an image', async ({ page }) => {
  await page.goto(LOCALHOST_URI);

  // Expect a title "to contain" a substring.
  // await expect(page).toHaveTitle(/Playwright/);
  const text = await page.getByRole('paragraph')
  const image = await page.getByRole('img')

  const textContent = await text.textContent()
  const imageSrc = await image.getAttribute('src')

  // await expect(textContent).not.toBeNull()
  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imageSrc?.startsWith(URI_CAT_IMG)).toBeTruthy();


});
