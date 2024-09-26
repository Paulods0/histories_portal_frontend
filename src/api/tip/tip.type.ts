import { Author } from "../types"

export type Tip = {
  _id: string
  title: string
  image: string
  content: string
  author: Author
  category: string
  createdAt: string
}

export type TipsResponseData = {
  posts: Tip[]
  pages: number
}
