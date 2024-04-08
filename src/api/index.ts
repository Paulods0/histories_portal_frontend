import { url } from "../utils/constants"
import { API_URL } from "../utils/enums"
import { ICategoryData, IPostData, IProductData } from "./types"

export async function getAllCategories(): Promise<ICategoryData[] | []> {
  try {
    const response = await fetch(`${url}/${API_URL.GET_ALL_CATEGORIES}`)
    const data: ICategoryData[] = await response.json()
    return data
  } catch (error) {
    console.log("Error: " + error)
    return []
  }
}
export const getAllPosts = async (): Promise<IPostData[]> => {
  const response = await fetch(`${url}/${API_URL.GET_ALL_POSTS}`)
  const posts = await response.json()
  return posts
}
export const getPostsAndPagination = async (
  page: number
): Promise<{ posts: IPostData[]; pages: number }> => {
  const result = await fetch(`${url}/post/posts/page/${page}`)
  const data = await result.json()
  const pages = data.pages
  const posts: IPostData[] = data.posts
  return { posts, pages }
}
export const getSinglePost = async (
  id: string | undefined
): Promise<IPostData> => {
  const response = await fetch(`${url}/post/get/${id}`, {
    method: "GET",
  })
  const post = await response.json()
  return post
}
export const getAllProducts = async (): Promise<IProductData[] | []> => {
  const response = await fetch(`${url}/${API_URL.GET_ALL_PRODUCTS}`)
  const data = await response.json()

  return data
}
export const getProductById = async (id: string): Promise<IProductData> => {
  const response = await fetch(`${url}/${API_URL.GET_PRODUCT_BY_ID}/${id}`, {
    method: "GET",
  })
  const data = await response.json()
  return data
}
export const getPostByCategory = async (
  categoryId: string
): Promise<IPostData[]> => {
  const response = await fetch(`${url}/post/category/${categoryId}`, {
    method: "GET",
  })
  const data = await response.json()

  return data
}
export const getAllProdutCategories = async (): Promise<ICategoryData[]> => {
  const response = await fetch(`${url}/prod-category/categories`)
  const data = await response.json()
  return data
}
export const getAllProductsByCategory = async (
  cat: string
): Promise<IProductData[]> => {
  const response = await fetch(`${url}/product/product-cat?cat=${cat}`)
  const data = await response.json()
  return data
}
export const getMostViewedPosts = async (): Promise<IPostData[]> => {
  const response = await fetch(`${url}/post/mostviewed`)
  const data = await response.json()
  return data
}
export const getHighlightedPost = async (): Promise<IPostData> => {
  const response = await fetch(`${url}/${API_URL.GET_HIGHLIGHTED_POST}`)
  const data = await response.json()
  return data
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
  const response = await fetch(`${url}/post/like/${postId}`, { method: "PUT" })
  const { clicked } = await response.json()
  return clicked
}
export const deslikePost = async (postId: string) => {
  const response = await fetch(`${url}/post/deslike/${postId}`, {
    method: "PUT",
  })
  const { clicked } = await response.json()
  return clicked
}
