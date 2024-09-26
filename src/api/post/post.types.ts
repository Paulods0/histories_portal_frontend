import { Author } from "../types"

export type Post = {
  _id: string
  title: string
  mainImage: string
  content: string
  highlighted: boolean
  author: Author
  rating: number
  category: string
  author_notes?: string
  date: string
  createdAt: string
  latitude: number
  longitude: number
  tag: string[]
  category_slug: string
}

export type PostResponseData = {
  posts: Post[]
  pages: number
}