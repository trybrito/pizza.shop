import { expect, test } from "@playwright/test";

test("sign up successfully", async ({ page }) => {
  await page.goto("/sign-up", { waitUntil: "networkidle" });

  await page
    .getByRole("textbox", { name: "Nome do estabelecimento" })
    .fill("Pizza Shop");

  await page.getByRole("textbox", { name: "Seu nome" }).fill("John Doe");
  await page
    .getByRole("textbox", { name: "Seu e-mail" })
    .fill("johndoe@example.com");
  await page
    .getByRole("textbox", { name: "Seu número de telefone" })
    .fill("19999999999");

  await page.getByRole("button", { name: "Finalizar cadastro" }).click();

  const toast = page.getByText("Restaurante cadastrado com sucesso!");

  expect(toast).toBeVisible();

  await page.waitForTimeout(1000);
});

test("navigate to sign in page after signing up successfully", async ({
  page,
}) => {
  await page.goto("/sign-up", { waitUntil: "networkidle" });

  await page
    .getByRole("textbox", { name: "Nome do estabelecimento" })
    .fill("Pizza Shop");

  await page.getByRole("textbox", { name: "Seu nome" }).fill("John Doe");
  await page
    .getByRole("textbox", { name: "Seu e-mail" })
    .fill("johndoe@example.com");
  await page
    .getByRole("textbox", { name: "Seu número de telefone" })
    .fill("19999999999");

  await page.getByRole("button", { name: "Finalizar cadastro" }).click();

  await page.getByRole("button", { name: "Login" }).click();

  expect(page.url()).toContain("/sign-in");
  expect(page.url()).toContain("johndoe@example.com");

  await page.waitForTimeout(1000);
});

test("sign up with wrong credentials", async ({ page }) => {
  await page.goto("/sign-up", { waitUntil: "networkidle" });

  await page
    .getByRole("textbox", { name: "Nome do estabelecimento" })
    .fill("Wrong Name");

  await page.getByRole("textbox", { name: "Seu nome" }).fill("John Doe");
  await page
    .getByRole("textbox", { name: "Seu e-mail" })
    .fill("johndoe@example.com");
  await page
    .getByRole("textbox", { name: "Seu número de telefone" })
    .fill("19999999999");

  await page.getByRole("button", { name: "Finalizar cadastro" }).click();

  const toast = page.getByText("Erro ao cadastrar restaurante.");

  expect(toast).toBeVisible();

  await page.waitForTimeout(1000);
});

test("navigate to sign in page", async ({ page }) => {
  await page.goto("/sign-up", { waitUntil: "networkidle" });

  await page.getByRole("link", { name: "Fazer login" }).click();

  expect(page.url()).toContain("/sign-in");
  await page.waitForTimeout(1000);
});
