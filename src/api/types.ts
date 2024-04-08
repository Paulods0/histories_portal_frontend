export interface ICategoryData {
  _id: string
  name: string
}
export interface IAuthor {
  _id: string
  firstname: string
  lastname: string
  image?: string
}
export interface IPostData {
  _id: string
  title: string
  mainImage: string
  content: string
  isHighlighted: boolean
  author: IAuthor
  rating: number
  category: {
    name: string
  }
  author_notes?: string
  createdAt: string
  latitude: number
  longitude: number
  tag: string[]
}

export interface IProductData {
  _id: string
  name: string
  category: {
    _id: string
    name: string
  }
  price: string
  image: string
  quantity?: number
  createdAt?: string
}
