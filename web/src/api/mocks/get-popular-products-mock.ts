import { http, HttpResponse } from "msw";

import { GetPopularProductsResponse } from "../get-popular-products";

export const getPopularProductsMock = http.get<
  never,
  never,
  GetPopularProductsResponse
>("/metrics/popular-products", () => {
  return HttpResponse.json([
    { product: "A", amount: 10 },
    { product: "B", amount: 35 },
    { product: "C", amount: 20 },
    { product: "D", amount: 40 },
    { product: "E", amount: 15 },
  ]);
});
