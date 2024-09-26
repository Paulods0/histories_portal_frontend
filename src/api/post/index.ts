import axios from "@/config/axios"
import { Post, PostResponseData } from "./post.types"

export class PostAPI {
  static async getAll(
    page: number,
    category: string = "",
    limit?: number
  ): Promise<PostResponseData> {
    const response = await axios.get(
      `/post?page=${page}&category=${category}&limit=${limit}`
    )
    return response.data
  }

  static async getSingle(id: string): Promise<Post> {
    const response = await axios.get(`/post/${id}`)
    return response.data
  }

  static async getMostViewed(): Promise<Post[]> {
    const response = await axios.get("/post/get/most-views-post")
    return response.data
  }
  static async getHighlighted(): Promise<Post> {
    const response = await axios.get("/post/get/highlighted-post")
    return response.data
  }
  static async getSearched(key: string): Promise<Post[]> {
    const response = await axios.get(`/post/search?value=${key}`)
    return response.data
  }

  static async getUserPosts(user_id: string): Promise<Post[]> {
    const response = await axios.get(`/post/user-posts/${user_id}`)
    return response.data
  }

  static async getMostLiked(): Promise<Post[]> {
    const response = await axios.get("/post/get/most-liked")
    return response.data
  }

  static async likePost(postId: string) {
    const response = await axios.put(`/post/like/${postId}`)
    const { clicked } = await response.data
    return clicked
  }
  static async deslikePost(postId: string) {
    const response = await axios.put(`/post/deslike/${postId}`, {
      method: "PUT",
    })
    const { clicked } = response.data
    return clicked
  }
}
