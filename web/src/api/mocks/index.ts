import { setupWorker } from "msw/browser";

import { env } from "@/env";

import { approveOrderMock } from "./approve-order-mock";
import { cancelOrderMock } from "./cancel-order";
import { deliverOrderMock } from "./deliver-order";
import { dispatchOrderMock } from "./dispatch-order";
import { getDailyRevenueInPeriodMock } from "./get-daily-revenue-in-period";
import { getDayOrdersAmountMock } from "./get-day-orders-amount-mock";
import { getManagedRestaurantMock } from "./get-managed-restaurant-mock";
import { getMonthCanceledOrdersAmountMock } from "./get-month-canceled-orders-amount-mock";
import { getMonthOrdersAmountMock } from "./get-month-orders-amount";
import { getMonthRevenueMock } from "./get-month-revenue-mock";
import { getOrderDetailsMock } from "./get-order-details-mock";
import { getOrdersMock } from "./get-orders-mock";
import { getPopularProductsMock } from "./get-popular-products-mock";
import { getProfileMock } from "./get-profile-mock";
import { registerRestaurantMock } from "./register-restaurant-mock";
import { signInMock } from "./sign-in-mock";
import { updateProfileMock } from "./update-profile.mock";

export const worker = setupWorker(
  signInMock,
  registerRestaurantMock,
  getDayOrdersAmountMock,
  getMonthRevenueMock,
  getMonthOrdersAmountMock,
  getMonthCanceledOrdersAmountMock,
  getDailyRevenueInPeriodMock,
  getPopularProductsMock,
  getProfileMock,
  getManagedRestaurantMock,
  updateProfileMock,
  getOrdersMock,
  getOrderDetailsMock,
  approveOrderMock,
  cancelOrderMock,
  deliverOrderMock,
  dispatchOrderMock,
);

export async function enableMSW() {
  if (env.MODE !== "test") {
    return;
  }

  await worker.start();
}
