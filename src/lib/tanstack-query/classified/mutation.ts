import { ClassifiedAPI } from "@/api/classified"
import { useMutation } from "@tanstack/react-query"

export const useCreateClassifiedPost = () => {
  return useMutation({
    mutationFn: ClassifiedAPI.create,
  })
}
