import { url } from "../utils/constants"
import { API_URL } from "../utils/enums"
import { ICategoryData, IPostData, IProductData } from "./types"

export async function getAllCategories(): Promise<ICategoryData[] | []> {
  try {
    const response = await fetch(`${url}${API_URL.GET_ALL_CATEGORIES}`)
    const data: ICategoryData[] = await response.json()
    return data
  } catch (error) {
    console.log("Error: " + error)
    return []
  }
}
export const getAllPosts = async (): Promise<IPostData[]> => {
  const response = await fetch(url + API_URL.GET_ALL_POSTS)
  const posts = await response.json()
  return posts
}
export const getPostsAndPagination = async (
  page: number
): Promise<IPostData[]> => {
  const result = await fetch(`${url}post/posts?page=${page}`)
  const { data, posts } = await result.json()
  return data
}
export const getSinglePost = async (
  id: string | undefined
): Promise<IPostData> => {
  const response = await fetch(`http://localhost:8080/api/post/get/${id}`, {
    method: "GET",
  })
  const post = await response.json()
  return post
}
export const getAllProducts = async (): Promise<IProductData[] | []> => {
  const response = await fetch(`${url}${API_URL.GET_ALL_PRODUCTS}`)
  const data = await response.json()

  return data
}
export const getProductById = async (id: string): Promise<IProductData> => {
  const response = await fetch(`${url}${API_URL.GET_PRODUCT_BY_ID}/${id}`, {
    method: "GET",
  })
  const data = await response.json()
  return data
}
export const getPostByCategory = async (
  categoryId: string
): Promise<IPostData[]> => {
  const response = await fetch(`${url}post/category/${categoryId}`, {
    method: "GET",
  })
  const data = await response.json()

  return data
}
export const getAllProdutCategories = async (): Promise<ICategoryData[]> => {
  const response = await fetch(`${url}prod-category/categories`)
  const data = await response.json()
  return data
}
export const getAllProductsByCategory = async (
  cat: string
): Promise<IProductData[]> => {
  const response = await fetch(`${url}product/product-cat?cat=${cat}`)
  const data = await response.json()
  return data
}
export const getMostViewedPosts = async (): Promise<IPostData[]> => {
  const response = await fetch(`${url}post/mostviewed`)
  const data = await response.json()
  return data
}
