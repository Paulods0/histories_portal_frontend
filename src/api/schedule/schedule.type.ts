import { Author } from "../types"

export type SchedulePost = {
  author: Author
  title: string
  file: string
  createdAt: string
}

export type SchedulePostResponseData = {
  posts: SchedulePost[]
  pages: number
}