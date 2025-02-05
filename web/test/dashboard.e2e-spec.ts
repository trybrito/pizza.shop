import { expect, test } from "@playwright/test";

test("display month revenue metric", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  expect(page.getByText("R$ 100,00")).toBeVisible();
  expect(page.getByText("10% em relação ao mês passado")).toBeVisible();

  await page.waitForTimeout(1000);
});

test("display month orders amount metric", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  expect(page.getByText("20", { exact: true }).first()).toBeVisible();
  expect(page.getByText("+ 5% em relação ao mês passado")).toBeVisible();

  await page.waitForTimeout(1000);
});

test("display day orders amount metric", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  expect(page.getByText("20", { exact: true }).nth(1)).toBeVisible();
  expect(page.getByText("-5% em relação a ontem")).toBeVisible();

  await page.waitForTimeout(1000);
});

test("display month canceled orders amount metric", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  expect(page.getByText("10", { exact: true })).toBeVisible();
  expect(page.getByText("-23% em relação ao mês passado")).toBeVisible();

  await page.waitForTimeout(1000);
});
