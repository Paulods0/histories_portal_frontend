import { PartnerAPI } from "@/api/partner"
import { useQuery } from "@tanstack/react-query"
import { Partner, PartnerResponseData } from "@/api/partner/partner.type"

export const useGetPartners = (page: number = 1) => {
  return useQuery<PartnerResponseData>({
    queryKey: ["get-partners", page],
    queryFn: () => PartnerAPI.getAll(page),
  })
}

export const useGetSinglePartner = (id: string) => {
  return useQuery<Partner>({
    queryKey: ["get-single-partner", id],
    queryFn: () => PartnerAPI.getSingle(id),
  })
}
