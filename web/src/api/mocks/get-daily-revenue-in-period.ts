import { http, HttpResponse } from "msw";

import { GetDailyRevenueInPeriodResponse } from "../get-daily-revenue-in-period";

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse
>("/metrics/daily-revenue-in-period", () => {
  return HttpResponse.json([
    { date: "28/01/2025", receipt: 1000 },
    { date: "29/01/2025", receipt: 800 },
    { date: "30/01/2025", receipt: 1500 },
    { date: "31/01/2025", receipt: 1200 },
    { date: "01/01/2025", receipt: 700 },
    { date: "02/01/2025", receipt: 600 },
    { date: "03/01/2025", receipt: 1300 },
  ]);
});
