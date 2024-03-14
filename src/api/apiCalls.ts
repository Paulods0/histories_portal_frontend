import { API_URL } from "../utils"
import { ICategoryData, IPostData } from "./types"

export const url = "http://localhost:8080/api/"

export async function getAllCategories(): Promise<ICategoryData[] | []> {
  try {
    const response = await fetch(url + "category/all")
    const data: ICategoryData[] = await response.json()
    // console.log(data)
    return data
  } catch (error) {
    console.log("Error: " + error)
    return []
  }
}

export const getAllPosts = async (): Promise<IPostData[]  > => {
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

export const createCategories = async () => {}
