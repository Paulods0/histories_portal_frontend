import {
  ClassifiedResponse,
  PartnerResponseData,
  PostResponseData,
  TipsResponseData,
  createClassifiedPost,
  getAllPosts,
  getAllProducts,
  getAllProdutCategories,
  getClassifiedPosts,
  getHighlightedPost,
  getMostLikedPosts,
  getMostViewedPosts,
  getPartners,
  getPostByCategory,
  getSchedulePosts,
  getSinglePartner,
  getSinglePost,
  getSingleTip,
  getTips,
  getUserPosts,
  subscribeToNewsletter,
} from "@/api"
import { Post, Tip } from "@/api/types"
import { useMutation, useQuery } from "@tanstack/react-query"

export const useGetPosts = (
  page: number,
  category?: string,
  limit?: number
) => {
  return useQuery<PostResponseData>({
    queryKey: ["get-posts", page, category, limit],
    queryFn: () => getAllPosts(page, category, limit),
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

export const useGetMostLikedPosts = () => {
  return useQuery<Post[] | []>({
    queryKey: ["get-most-liked-posts"],
    queryFn: getMostLikedPosts,
  })
}

export const useGetPostByCategory = (slug: string) => {
  return useQuery<Post[] | []>({
    queryKey: ["get-post-by-category", slug],
    queryFn: () => getPostByCategory(slug),
  })
}

export const useGetSchedulePost = (page: number) => {
  return useQuery({
    queryKey: ["get-schedule"],
    queryFn: () => getSchedulePosts(page),
  })
}

export const useGetClassifiedPosts = (page: number = 1) => {
  return useQuery<ClassifiedResponse>({
    queryKey: ["get-classified-posts", page],
    queryFn: () => getClassifiedPosts(page),
  })
}

export const useGetTips = (page: number = 1) => {
  return useQuery<TipsResponseData>({
    queryKey: ["get-tips", page],
    queryFn: () => getTips(page),
  })
}

export const useGetSingleTip = (id: string) => {
  return useQuery<Tip>({
    queryKey: ["get-single-tip", id],
    queryFn: () => getSingleTip(id),
  })
}

export const useGetPartners = (page: number = 1) => {
  return useQuery<PartnerResponseData>({
    queryKey: ["get-partners", page],
    queryFn: () => getPartners(page),
  })
}

export const useGetSinglePartner = (id: string) => {
  return useQuery<Tip>({
    queryKey: ["get-single-partner", id],
    queryFn: () => getSinglePartner(id),
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
    queryFn: () => getAllPosts(1),
  })
}

export const useGetProduts = (page: number = 0, category: string = "") => {
  return useQuery({
    queryKey: ["get-products", page, category],
    queryFn: () => getAllProducts(page, category),
  })
}

export const useGetProductCategories = () => {
  return useQuery({
    queryKey: ["get-product-category"],
    queryFn: getAllProdutCategories,
  })
}

export const useCreateClassifiedPost = () => {
  return useMutation({
    mutationFn: createClassifiedPost,
  })
}
export const useSubscribeToNewsletter = () => {
  return useMutation({
    mutationFn: subscribeToNewsletter,
  })
}
