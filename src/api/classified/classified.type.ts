export type ClassifiedPostType = "sell" | "buy"
export type ClassifiedPostStatus = "active" | "suspended" | "inactive"

export type ClasssifiedAuthor = {
  firstname: string
  lastname: string
  email: string
  phone: string
}

export type Classified = {
  _id?: string
  title: string
  price: string
  content: string
  images?: string[]
  category?: string
  mainImage: string
  createdAt?: string
  category_slug?: string
  type: ClassifiedPostType
  author: ClasssifiedAuthor
  status: ClassifiedPostStatus
}

export type ClassifiedResponseData = {
  pages: number
  posts: Classified[]
}

export type NewClassifiedPost = {
  title: string
  author: {
    firstname: string
    lastname: string
    email: string
    phone: string
  }
  images?: string[]
  content: string
  mainImage: string
  price: string
  type: string
}
