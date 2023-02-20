import { expect, test } from '@playwright/test';

test('navigation test', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // await expect(page.getByRole('heading', { name: 'HOME' })).toBeVisible();
  // await expect(page.locator('h1')).toHaveText('HOME');

  await page.getByRole('link', { name: 'SHOP' }).click();

  await expect(page).toHaveURL('http://localhost:3000/shop');

  await expect(page.locator('[data-test-id^="product-"]')).toHaveCount(6);

  // E2E: Add to cart, change quantity and remove from cart
  await page.getByRole('link', { name: 'Carolina Reaper 9 €' }).click();
  await expect(page).toHaveURL('http://localhost:3000/shop/1');
  await page
    .getByRole('button', { name: ' Add to cart' })
    .click({ clickCount: 2 });

  await expect(
    page.getByRole('link', {
      name: 'CART (2)',
    }),
  ).toBeVisible;

  await page.getByRole('button', { name: 'My Cart' }).click();

  await expect(page).toHaveURL('http://localhost:3000/cart');

  await page.getByRole('button', { name: 'Remove' }).click();

  await expect(
    page.getByRole('link', {
      name: 'CART (0)',
    }),
  ).toBeVisible;

  // E2E: Checkout flow, payment page, thank you page

  // await expect(
  //   page.getByRole('heading', {
  //     name: 'image with next/image, width and height',
  //   }),
  // ).toBeVisible;

  // await expect(page.getByTestId('product-1')).toBeVisible();

  // const itemsNames = [
  //   'Carolina Reaper',
  //   'Habanero Golden',
  //   'Apocalypse Scorpion Chocolate',
  //   'Trinidad Moruga scorpion',
  //   'Ghost Peach',
  //   'Jalapeño',
  // ];

  // await expect(page.locator('[data-test-id^="product-"] >> h3')).toHaveText(
  //   itemsNames,
  // );

  // await expect(page.getByAltText('trinidad').first()).toBeVisible();
  // await expect(page.getByRole('img', { name: 'trinidad' })).toBeVisible();
  // await page.getByRole('link', { name: 'Carolina Reaper' }).click();
  // await expect(page).toHaveURL('http://localhost:3000/shop/1');
  // await button.getByRole('button', { name: 'Add to cart' }).click();
});
