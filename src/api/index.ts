import axios from "@/config/axios"
import { url } from "../utils/constants"
import { API_URL } from "../utils/enums"
import {
  Post,
  Product,
  SchedulePost,
  ClassifiedPost,
  NewClassifiedPost,
  Tip,
} from "./types"

export type ClassifiedResponse = {
  pages: number
  posts: ClassifiedPost[]
}

export type PostResponseData = {
  posts: Post[]
  pages: number
}
export type TipsResponseData = {
  posts: Tip[]
  pages: number
}

type ProductsResponse = {
  products: Product[]
  pages: number
}

export type PartnerResponseData = {
  partners: Tip[]
  pages: number
}

export type SchedulePostResponse = {
  posts: SchedulePost[]
  pages: number
}

export const getAllPosts = async (
  page: number,
  category: string = "",
  limit?: number
): Promise<PostResponseData> => {
  const response = await axios.get(
    `/post?page=${page}&category=${category}&limit=${limit}`
  )

  return response.data
}

export const getSinglePost = async (id: string): Promise<Post> => {
  const response = await axios.get(`/post/${id}`)
  return response.data
}

export const getPostsAndPagination = async (
  page: number
): Promise<{ posts: Post[]; pages: number }> => {
  const result = await fetch(`${url}/post/posts/page/${page}`)
  const data = await result.json()
  const pages = data.pages
  const posts: Post[] = data.posts
  return { posts, pages }
}

export const getAllProducts = async (
  page?: number,
  category?: string
): Promise<ProductsResponse> => {
  const response = await axios.get(`/product?page=${page}&category=${category}`)
  return response.data
}

export const getProductById = async (id: string): Promise<Product> => {
  const response = await fetch(`${url}/${API_URL.GET_PRODUCT_BY_ID}/${id}`, {
    method: "GET",
  })
  const data = await response.json()
  return data
}

export const getPostByCategory = async (
  category_slug: string
): Promise<Post[]> => {
  const response = await axios.get(`/post/category/${category_slug}`)
  return response.data
}

export const getMostViewedPosts = async (): Promise<Post[]> => {
  const response = await axios.get("/post/get/most-views-post")
  return response.data
}

export const getHighlightedPost = async (): Promise<Post> => {
  const response = await axios.get("/post/get/highlighted-post")
  return response.data
}

export const getSearchedPosts = async (key: string) => {
  const response = await fetch(`${url}/post/search?value=${key}`)
  const data = await response.json()
  return data
}

export const subscribeToNewsletter = async (user: {
  name: string
  phone?: string
  email: string
  country?: string
  countryCode?: string
}) => {
  await axios.post("/newsletter/register", user)
}

export const likePost = async (postId: string) => {
  const response = await axios.put(`/post/like/${postId}`)
  const { clicked } = await response.data
  return clicked
}

export const deslikePost = async (postId: string) => {
  const response = await fetch(`${url}/post/deslike/${postId}`, {
    method: "PUT",
  })
  const { clicked } = await response.json()
  return clicked
}

export const getSchedulePosts = async (
  page: number
): Promise<SchedulePostResponse> => {
  const response = await axios.get(`/schedule-post?page=${page}`)
  return response.data
}

export const getClassifiedPosts = async (
  page: number = 1
): Promise<ClassifiedResponse> => {
  const response = await axios.get(`/classified-post?page=${page}`)
  return response.data
}

export const getUserPosts = async (user_id: string): Promise<Post[]> => {
  const response = await axios.get(`/post/user-posts/${user_id}`)
  return response.data
}

export const getTips = async (page: number = 1): Promise<TipsResponseData> => {
  const response = await axios.get(`/tip?page=${page}`)
  return response.data
}

export const getSingleTip = async (id: string): Promise<Tip> => {
  const response = await axios.get(`/tip/${id}`)
  return response.data
}

export const getPartners = async (
  page: number = 1
): Promise<PartnerResponseData> => {
  const response = await axios.get(`/partner?page=${page}`)
  return response.data
}

export const getSinglePartner = async (id: string): Promise<Tip> => {
  const response = await axios.get(`/partner/${id}`)
  return response.data
}

export const getMostLikedPosts = async (): Promise<Post[]> => {
  const response = await axios.get("/post/get/most-liked")
  return response.data
}

export const createClassifiedPost = async (data: NewClassifiedPost) => {
  await axios.post("/classified-post/", data)
}

export const unsubscribeNewsletter = async (email: string) => {
  try {
    await axios.put("/newsletter/unregister", { email: email })
  } catch (error) {
    console.log(error)
  }
}
