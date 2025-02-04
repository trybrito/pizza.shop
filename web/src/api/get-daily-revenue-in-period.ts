import { api } from "@/lib/axios";

export type GetDailyRevenueInPeriodResponse = {
  date: string;
  receipt: number;
}[];

export interface GetDailyRevenueInPeriodProps {
  from?: Date;
  to?: Date;
}

export async function getDailyRevenueInPeriod({
  from,
  to,
}: GetDailyRevenueInPeriodProps) {
  const response = await api.get<GetDailyRevenueInPeriodResponse>(
    "/metrics/daily-revenue-in-period",
    {
      params: {
        from,
        to,
      },
    },
  );

  return response.data;
}
