export type PostCategory = {
  _id: string
  name: string
  slug: string
}
export type ProductCategory = {
  _id: string
  name: string
  slug: string
}
export type Author = {
  _id: string
  firstname: string
  lastname: string
  image?: string
}
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
  createdAt: string
  latitude: number
  longitude: number
  tag: string[]
  category_slug: string
}
export type Product = {
  _id: string
  name: string
  category: {
    _id: string
    name: string
  }
  price: string
  image: string
  quantity?: number
  description:string
  createdAt?: string
  totalPrice?:string
  storequantity?: number
}
export type SchedulePost = {
  author: Author
  title: string
  file: string
  createdAt: string
}
export type ClassifiedPost = {
  _id?: string
  title: string
  author: {
    firstname: string
    lastname: string
    email: string
    phone: string
  }
  mainImage: string
  content: string
  category?: string
  price: string
  category_slug?: string
  createdAt?: string
  type: ClassifiedPostType
  status: ClassifiedPostStatus
}
export type NewClassifiedPost = {
  title: string
  author: {
    firstname: string
    lastname: string
    email: string
    phone: string
  }
  content: string
  mainImage: string
  price: string
  type: string
}
type ClassifiedPostStatus = "active" | "suspended" | "inactive"
type ClassifiedPostType = "sell" | "buy"
