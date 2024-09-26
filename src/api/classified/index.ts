import axios from "@/config/axios"
import { ClassifiedResponseData, NewClassifiedPost } from "./classified.type"

export class ClassifiedAPI {
  static async getAll(page: number = 1): Promise<ClassifiedResponseData> {
    const response = await axios.get(`/classified-post?page=${page}`)
    return response.data
  }

  static async create(data: NewClassifiedPost) {
    await axios.post("/classified-post/", data)
  }
}
