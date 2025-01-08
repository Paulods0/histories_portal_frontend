import axios from "@/config/axios"

export type SponsorsResponseData = {
  image: string
}
export class SponsorsAPI {
  static async getAll(): Promise<SponsorsResponseData[]> {
    const response = await axios.get("/partner-image")
    return response.data
  }
}
