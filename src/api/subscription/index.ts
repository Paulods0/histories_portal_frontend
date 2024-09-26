import axios from "@/config/axios"
import { UserSubscriptionData } from "./subscription.type"

export class SubscriptionAPI {
  static async subscribe(user: UserSubscriptionData) {
    await axios.post("/newsletter/register", user)
  }
  
  static async unsubscribe(email: string) {
    try {
      await axios.put("/newsletter/unregister", { email: email })
    } catch (error) {
      console.log(error)
    }
  }
}
