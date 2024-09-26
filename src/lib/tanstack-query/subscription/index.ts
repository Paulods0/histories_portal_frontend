import { SubscriptionAPI } from "@/api/subscription"
import { useMutation } from "@tanstack/react-query"

export const useSubscribe = () => {
  return useMutation({
    mutationFn: SubscriptionAPI.subscribe,
  })
}

export const useUnSubscribe = () => {
  return useMutation({
    mutationFn: SubscriptionAPI.unsubscribe,
  })
}
