import axios from "@/config/axios"
import { ProductsResponseData } from "./product.type"

export class ProductAPI {
  static async getAll(
    page?: number,
    category?: string
  ): Promise<ProductsResponseData> {
    const response = await axios.get(
      `/product?page=${page}&category=${category}`
    )
    return response.data
  }
}
