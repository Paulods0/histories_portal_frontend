import axios from "@/config/axios"
import { SchedulePostResponseData } from "./schedule.type"

export class ScheduleAPI {
  static async getAll(page: number): Promise<SchedulePostResponseData> {
    const response = await axios.get(`/schedule-post?page=${page}`)
    return response.data
  }
}
