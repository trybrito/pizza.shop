export function formatToBRL(numberToFormat: number) {
  return numberToFormat.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
