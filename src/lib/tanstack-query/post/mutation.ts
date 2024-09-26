import { PostAPI } from "@/api/post"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export function useLikePost() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ["like-post"],
    mutationFn: PostAPI.likePost,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["get-single-post"] }),
  })
}

export function useDeslikePost() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ["deslike-post"],
    mutationFn: PostAPI.deslikePost,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["get-single-post"] }),
  })
}
