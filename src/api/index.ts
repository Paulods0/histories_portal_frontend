import { instance as axios } from "@/config/axios"
import { url } from "../utils/constants"
import { API_URL } from "../utils/enums"
import {
  PostCategory,
  Post,
  Product,
  SchedulePost,
  ClassifiedPost,
} from "./types"

export async function getPostCategories(): Promise<PostCategory[] | []> {
  try {
    const response = await axios.get("/post-category/")
    return response.data
  } catch (error) {
    console.log("Erro: " + error)
    return []
  }
}
export const getAllPosts = async (): Promise<Post[]> => {
  const response = await axios.get("/post")
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
export const getAllProducts = async (): Promise<Product[] | []> => {
  const response = await axios.get("/product")
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
export const subscribeToNewsLetter = async (email: string, name: string) => {
  await fetch(`${url}/newsletter/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email, name: name }),
  })
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
export const getSchedulePosts = async (): Promise<{ data: SchedulePost[] }> => {
  const response = await axios.get("/schedule-post")
  return response.data
}
export const getClassifiedPosts = async (): Promise<ClassifiedPost[]> => {
  const response = await axios.get("/classified-post")
  return response.data.data
}
export const getUserPosts = async (user_id: string): Promise<Post[]> => {
  const response = await axios.get(`/post/user-posts/${user_id}`)
  return response.data
}

export const createClassifiedPost = async (data: ClassifiedPost) => {
  await axios.post("/classified-post/", data)
}
