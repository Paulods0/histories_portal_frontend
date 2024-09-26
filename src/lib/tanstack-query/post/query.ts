import { PostAPI } from "@/api/post"
import { useQuery } from "@tanstack/react-query"
import { Post, PostResponseData } from "@/api/post/post.types"

export const useGetPosts = (
  page: number,
  category?: string,
  limit?: number
) => {
  return useQuery<PostResponseData>({
    queryKey: ["get-posts", page, category, limit],
    queryFn: () => PostAPI.getAll(page, category, limit),
  })
}

export const useGetHighlightedPost = () => {
  return useQuery<Post>({
    queryKey: ["get-highlighted-post"],
    queryFn: PostAPI.getHighlighted,
  })
}

export const useGetSinglePost = (id: string) => {
  return useQuery<Post>({
    queryKey: ["get-single-post", id],
    queryFn: () => PostAPI.getSingle(id),
  })
}

export const useGetMostViewsPosts = () => {
  return useQuery<Post[]>({
    queryKey: ["get-most-view"],
    queryFn: PostAPI.getMostViewed,
  })
}

export const useGetMostLikedPosts = () => {
  return useQuery<Post[]>({
    queryKey: ["get-most-liked-posts"],
    queryFn: PostAPI.getMostLiked,
  })
}

export const useGetUserPosts = (user_id: string) => {
  return useQuery({
    queryKey: ["get-user-posts", user_id],
    queryFn: () => PostAPI.getUserPosts(user_id),
  })
}

export const useGetSearchResults = (search: string) => {
  return useQuery<Post[]>({
    queryKey: ["get-search-results", search],
    queryFn: () => PostAPI.getSearched(search),
  })
}
