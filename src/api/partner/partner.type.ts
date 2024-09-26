import { Author } from "../types"

export type Partner = {
  _id: string
  title: string
  image: string
  author: Author
  content: string
  category: string
  createdAt: string
}

export type PartnerResponseData = {
  partners: Partner[]
  pages: number
}
