import { ScheduleAPI } from "@/api/schedule"
import { useQuery } from "@tanstack/react-query"
import { SchedulePostResponseData } from "@/api/schedule/schedule.type"

export const useGetSchedulePost = (page: number) => {
  return useQuery<SchedulePostResponseData>({
    queryKey: ["get-schedule"],
    queryFn: () => ScheduleAPI.getAll(page),
  })
}
