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
  description: string
  createdAt?: string
  totalPrice?: string
  storequantity?: number
}

export type ProductsResponseData = {
  products: Product[]
  pages: number
}
