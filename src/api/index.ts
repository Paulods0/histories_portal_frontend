import axios from "@/config/axios"
import { url } from "../utils/constants"
import { API_URL } from "../utils/enums"
import {
  PostCategory,
  Post,
  Product,
  SchedulePost,
  ClassifiedPost,
  NewClassifiedPost,
} from "./types"

export type PostResponseData = {
  posts: Post[]
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

type ProductsResponse = {
  products: Product[]
  pages: number
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
export const getAllProdutCategories = async (): Promise<PostCategory[]> => {
  const response = await axios.get("/product-category")
  return response.data
}
export const getAllProductsByCategory = async (
  cat: string
): Promise<Product[]> => {
  const response = await fetch(`${url}/product/product-cat?cat=${cat}`)
  const data = await response.json()
  return data
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

export type SchedulePostResponse = {
  posts: SchedulePost[]
  pages: number
}
export const getSchedulePosts = async (
  page: number
): Promise<SchedulePostResponse> => {
  const response = await axios.get(`/schedule-post?page=${page}`)
  return response.data
}

export type ClassifiedResponse = {
  pages: number
  posts: ClassifiedPost[]
}
export const getClassifiedPosts = async (): Promise<ClassifiedResponse> => {
  const response = await axios.get("/classified-post")
  return response.data
}
export const getUserPosts = async (user_id: string): Promise<Post[]> => {
  const response = await axios.get(`/post/user-posts/${user_id}`)
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
