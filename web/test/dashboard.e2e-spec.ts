import { expect, test } from "@playwright/test";

test("display month revenue metric", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  await expect(page.getByText("R$ 100,00")).toBeVisible();
  await expect(page.getByText("10% em relação ao mês passado")).toBeVisible();
});

test("display month orders amount metric", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  await expect(page.getByText("20", { exact: true }).first()).toBeVisible();
  await expect(page.getByText("+ 5% em relação ao mês passado")).toBeVisible();
});

test("display day orders amount metric", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  await expect(page.getByText("20", { exact: true }).nth(1)).toBeVisible();
  await expect(page.getByText("-5% em relação a ontem")).toBeVisible();
});

test("display month canceled orders amount metric", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  await expect(page.getByText("10", { exact: true })).toBeVisible();
  await expect(page.getByText("-23% em relação ao mês passado")).toBeVisible();
});
