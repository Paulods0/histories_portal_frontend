import axios from "@/config/axios"
import { Partner, PartnerResponseData } from "./partner.type"

export class PartnerAPI {
  static async getAll(page: number = 1): Promise<PartnerResponseData> {
    const response = await axios.get(`/partner?page=${page}`)
    return response.data
  }

  static async getSingle(id: string): Promise<Partner> {
    const response = await axios.get(`/partner/${id}`)
    return response.data
  }
}
