import { http, HttpResponse } from "msw";

import { GetManagedRestaurant } from "../get-managed-restaurant";

export const getManagedRestaurantMock = http.get<
  never,
  never,
  GetManagedRestaurant
>("/managed-restaurant", () => {
  return HttpResponse.json({
    id: "custom-restaurant-id",
    name: "Pizza Shop",
    description: "Some restaurant description",
    managerId: "custom-user-id",
    createdAt: new Date(),
    updatedAt: new Date(),
  });
});
