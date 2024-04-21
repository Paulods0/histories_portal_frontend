import {
  getAllPosts,
  getClassifiedPosts,
  getHighlightedPost,
  getMostViewedPosts,
  getPostByCategory,
  getPostCategories,
  getSchedulePosts,
  getSinglePost,
  getUserPosts,
} from "@/api"
import { PostCategory, Post, ClassifiedPost } from "@/api/types"
import { useQuery } from "@tanstack/react-query"

export const useGetPosts = () => {
  return useQuery<Post[]>({
    queryKey: ["get-posts"],
    queryFn: getAllPosts,
  })
}

export const useGetHighlightedPost = () => {
  return useQuery<Post>({
    queryKey: ["get-highlighted-post"],
    queryFn: getHighlightedPost,
  })
}

export const useGetSinglePost = (id: string) => {
  return useQuery<Post>({
    queryKey: ["get-single-post", id],
    queryFn: () => getSinglePost(id),
  })
}

export const useGetMostViewsPosts = () => {
  return useQuery<Post[]>({
    queryKey: ["get-most-view"],
    queryFn: getMostViewedPosts,
  })
}

export const useGetPostCategories = () => {
  return useQuery<PostCategory[] | []>({
    queryKey: ["get-post-categories"],
    queryFn: getPostCategories,
  })
}

export const useGetPostByCategory = (slug: string) => {
  return useQuery<Post[] | []>({
    queryKey: ["get-post-by-category", slug],
    queryFn: () => getPostByCategory(slug),
  })
}

export const useGetSchedulePost = () => {
  return useQuery({
    queryKey: ["get-schedule"],
    queryFn: getSchedulePosts,
  })
}

export const useGetClassifiedPosts = () => {
  return useQuery<ClassifiedPost[]>({
    queryKey: ["get-classified-posts"],
    queryFn: getClassifiedPosts,
  })
}

export const useGetUserPosts = (user_id: string) => {
  return useQuery({
    queryKey: ["get-user-posts", user_id],
    queryFn: () => getUserPosts(user_id),
  })
}

export const useGetSearchResults = (search: string) => {
  return useQuery({
    queryKey: ["get-search-results", search],
    queryFn: getAllPosts,
  })
}
