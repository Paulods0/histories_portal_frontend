import axios from "@/config/axios"
import { Tip, TipsResponseData } from "./tip.type"

export class TipAPI {
  static async getAll(page: number = 1): Promise<TipsResponseData> {
    const response = await axios.get(`/tip?page=${page}`)
    return response.data
  }

  static async getSingle(id: string): Promise<Tip> {
    const response = await axios.get(`/tip/${id}`)
    return response.data
  }
}
