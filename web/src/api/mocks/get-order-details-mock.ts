import { http, HttpResponse } from "msw";

import {
  GetOrderDetailsParams,
  GetOrderDetailsResponse,
} from "../get-order-details";

export const getOrderDetailsMock = http.get<
  GetOrderDetailsParams,
  never,
  GetOrderDetailsResponse
>("/orders/:orderId", ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    status: "pending",
    customer: {
      name: "John Doe",
      email: "johndoe@example.com",
      phone: "199999999",
    },
    orderItems: [
      {
        id: "order-item-1",
        priceInCents: 10000,
        quantity: 1,
        product: {
          name: "product-name-1",
        },
      },
      {
        id: "order-item-2",
        priceInCents: 10000,
        quantity: 1,
        product: {
          name: "product-name-2",
        },
      },
    ],
    totalInCents: 20000,
    createdAt: new Date().toISOString(),
  });
});
