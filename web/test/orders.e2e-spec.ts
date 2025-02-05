import { expect, test } from "@playwright/test";

test("list paginated orders", async ({ page }) => {
  await page.goto("/orders", { waitUntil: "networkidle" });

  await expect(
    page.getByRole("cell", { name: "customer-1", exact: true }),
  ).toBeVisible();
  await expect(
    page.getByRole("cell", { name: "customer-10", exact: true }),
  ).toBeVisible();
});

test("if previous and first page buttons are disabled for first page", async ({
  page,
}) => {
  await page.goto("/orders", { waitUntil: "networkidle" });

  await expect(
    page.getByRole("cell", { name: "customer-1", exact: true }),
  ).toBeVisible();
  await expect(
    page.getByRole("cell", { name: "customer-10", exact: true }),
  ).toBeVisible();
});

test("navigate to next page", async ({ page }) => {
  await page.goto("/orders", { waitUntil: "networkidle" });

  await page.getByRole("button", { name: "Próxima página" }).click();

  await expect(
    page.getByRole("cell", { name: "customer-11", exact: true }),
  ).toBeVisible();
  await expect(
    page.getByRole("cell", { name: "customer-20", exact: true }),
  ).toBeVisible();
});

test("navigate to last page", async ({ page }) => {
  await page.goto("/orders", { waitUntil: "networkidle" });

  await page.getByRole("button", { name: "Última página" }).click();

  await expect(
    page.getByRole("cell", { name: "customer-51", exact: true }),
  ).toBeVisible();
  await expect(
    page.getByRole("cell", { name: "customer-60", exact: true }),
  ).toBeVisible();
});

test("navigate to previous page", async ({ page }) => {
  await page.goto("/orders?page=2", { waitUntil: "networkidle" });

  await page.getByRole("button", { name: "Página Anterior" }).click();

  await expect(
    page.getByRole("cell", { name: "customer-1", exact: true }),
  ).toBeVisible();
  await expect(
    page.getByRole("cell", { name: "customer-10", exact: true }),
  ).toBeVisible();
});

test("navigate to first page", async ({ page }) => {
  await page.goto("/orders?page=3", { waitUntil: "networkidle" });

  await page.getByRole("button", { name: "Primeira página" }).click();

  await expect(
    page.getByRole("cell", { name: "customer-1", exact: true }),
  ).toBeVisible();
  await expect(
    page.getByRole("cell", { name: "customer-10", exact: true }),
  ).toBeVisible();
});

test("if next and last page buttons are disabled for last page", async ({
  page,
}) => {
  await page.goto("/orders?page=6", { waitUntil: "networkidle" });

  await expect(
    page.getByRole("button", { name: "Próxima página" }),
  ).toBeDisabled();
  await expect(
    page.getByRole("button", { name: "Última página" }),
  ).toBeDisabled();
});

test("filter by orderId", async ({ page }) => {
  await page.goto("/orders", { waitUntil: "networkidle" });

  await page.getByPlaceholder("ID do pedido").fill("order-33");
  await page.getByRole("button", { name: "Filtrar resultados" }).click();

  expect(
    page.getByRole("cell", { name: "order-33", exact: true }),
  ).toBeVisible();
});

test("filter by customerName", async ({ page }) => {
  await page.goto("/orders", { waitUntil: "networkidle" });

  await page.getByPlaceholder("Nome do cliente").fill("customer-33");
  await page.getByRole("button", { name: "Filtrar resultados" }).click();

  await expect(
    page.getByRole("cell", { name: "customer-33", exact: true }),
  ).toBeVisible();
});

test("filter by pending status", async ({ page }) => {
  await page.goto("/orders", { waitUntil: "networkidle" });

  await page.getByRole("combobox").click();
  await page.getByLabel("Pendente").click();

  await page.getByRole("button", { name: "Filtrar resultados" }).click();

  const tableRows = page.getByRole("cell", { name: "Pendente" });

  await expect(tableRows).toHaveCount(10);
});

test("filter by canceled status", async ({ page }) => {
  await page.goto("/orders", { waitUntil: "networkidle" });

  await page.getByRole("combobox").click();
  await page.getByLabel("Cancelado").click();

  await page.getByRole("button", { name: "Filtrar resultados" }).click();

  const tableRows = page.getByRole("cell", { name: "Cancelado" });

  await expect(tableRows).toHaveCount(10);
});

test("filter by processing status", async ({ page }) => {
  await page.goto("/orders", { waitUntil: "networkidle" });

  await page.getByRole("combobox").click();
  await page.getByLabel("Em preparo").click();

  await page.getByRole("button", { name: "Filtrar resultados" }).click();

  const tableRows = page.getByRole("cell", { name: "Em preparo" });

  await expect(tableRows).toHaveCount(10);
});

test("filter by delivering status", async ({ page }) => {
  await page.goto("/orders", { waitUntil: "networkidle" });

  await page.getByRole("combobox").click();
  await page.getByLabel("Em entrega").click();

  await page.getByRole("button", { name: "Filtrar resultados" }).click();

  const tableRows = page.getByRole("cell", { name: "Em entrega" });

  await expect(tableRows).toHaveCount(10);
});

test("filter by delivered status", async ({ page }) => {
  await page.goto("/orders", { waitUntil: "networkidle" });

  await page.getByRole("combobox").click();
  await page.getByLabel("Entregue").click();

  await page.getByRole("button", { name: "Filtrar resultados" }).click();

  const tableRows = page.getByRole("cell", { name: "Entregue" });

  await expect(tableRows).toHaveCount(10);
});

test("if order action button will be able to set all order statuses", async ({
  page,
}) => {
  await page.goto("/orders", { waitUntil: "networkidle" });

  await expect(
    page.getByRole("cell", { name: "Pendente" }).first(),
  ).toBeVisible();
  await page.getByRole("button", { name: "Aprovar" }).first().click();

  await expect(
    page.getByRole("cell", { name: "Em preparo" }).first(),
  ).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Em entrega" }).first(),
  ).toBeVisible();

  await page.getByRole("button", { name: "Em entrega" }).first().click();
  await expect(
    page.getByRole("cell", { name: "Em entrega" }).first(),
  ).toBeVisible();

  await expect(
    page.getByRole("button", { name: "Entregue" }).first(),
  ).toBeVisible();
  await page.getByRole("button", { name: "Entregue" }).first().click();

  await expect(
    page.getByRole("cell", { name: "Entregue" }).first(),
  ).toBeVisible();
});

test("if order cancel button will be disabled for canceled orders", async ({
  page,
}) => {
  await page.goto("/orders?status=canceled", { waitUntil: "networkidle" });

  await expect(
    page.getByRole("button", { name: "Cancelar " }).first(),
  ).toBeDisabled();
});

test("if order cancel button will be disabled for delivered orders", async ({
  page,
}) => {
  await page.goto("/orders?status=delivered", { waitUntil: "networkidle" });

  await expect(
    page.getByRole("button", { name: "Cancelar" }).first(),
  ).toBeDisabled();
});

test("cancelling an order", async ({ page }) => {
  await page.goto("/orders", { waitUntil: "networkidle" });

  await page.getByRole("button", { name: "Cancelar" }).first().click();

  await expect(
    page.getByRole("cell", { name: "Cancelado" }).first(),
  ).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Cancelar" }).first(),
  ).toBeDisabled();
});
