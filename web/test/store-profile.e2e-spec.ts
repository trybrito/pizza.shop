import { expect, test } from "@playwright/test";

test("update profile successfully", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  await page
    .getByRole("button", {
      name: "Pizza Shop",
    })
    .click();
  await page.getByRole("menuitem", { name: "Perfil da loja" }).click();
  await page.getByRole("textbox", { name: "Nome" }).fill("Rocket Pizza");
  await page.getByRole("button", { name: "Salvar" }).click();

  await page.waitForLoadState("networkidle");

  const toast = page.getByText("Perfil atualizado com sucesso!");

  await expect(toast).toBeVisible();

  await page.getByRole("button", { name: "Cancelar" }).click();

  await expect(
    page.getByRole("button", {
      name: "Rocket Pizza",
    }),
  ).toBeVisible();
});

test("update profile with wrong restaurant name", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  await page
    .getByRole("button", {
      name: "Pizza Shop",
    })
    .click();
  await page.getByRole("menuitem", { name: "Perfil da loja" }).click();
  await page.getByRole("textbox", { name: "Nome" }).fill("Wrong Name");
  await page.getByRole("button", { name: "Salvar" }).click();

  await page.waitForLoadState("networkidle");

  const toast = page.getByText(
    "Não foi possível atualizar o perfil, por favor, tente novamente",
  );

  await expect(toast).toBeVisible();

  await page.getByRole("button", { name: "Cancelar" }).click();

  await expect(
    page.getByRole("button", {
      name: "Pizza Shop",
    }),
  ).toBeVisible();
});
