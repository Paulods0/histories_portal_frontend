import { TipAPI } from "@/api/tip"
import { useQuery } from "@tanstack/react-query"
import { Tip, TipsResponseData } from "@/api/tip/tip.type"

export const useGetTips = (page: number = 1) => {
  return useQuery<TipsResponseData>({
    queryKey: ["get-tips", page],
    queryFn: () => TipAPI.getAll(page),
  })
}

export const useGetSingleTip = (id: string) => {
  return useQuery<Tip>({
    queryKey: ["get-single-tip", id],
    queryFn: () => TipAPI.getSingle(id),
  })
}
