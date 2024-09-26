import axios from "@/config/axios"
import { UserSubscriptionData } from "./subscription.type"
import { isAxiosError } from "axios"

export class SubscriptionAPI {
  static async subscribe(
    user: UserSubscriptionData
  ): Promise<{ message: string }> {
    try {
      const response = await axios.post("/newsletter/register", user)
      return response.data
    } catch (error) {
      if (isAxiosError(error)) {
        if (error.response) {
          throw new Error(error.response.data.message)
        } else {
          throw new Error(error.message)
        }
      } else {
        throw new Error("Ocorreu um erro. Tente novamente mais tarde.")
      }
    }
  }

  static async unsubscribe(email: string) {
    try {
      await axios.put("/newsletter/unregister", { email: email })
    } catch (error) {
      console.log(error)
    }
  }
}
