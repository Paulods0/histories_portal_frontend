import { SponsorsAPI, SponsorsResponseData } from "@/api/sponsors"
import { useQuery } from "@tanstack/react-query"

export function useGetSponsorsImages() {
  return useQuery<SponsorsResponseData[]>({
    queryKey: ["get-partner-images"],
    queryFn: SponsorsAPI.getAll,
  })
}
