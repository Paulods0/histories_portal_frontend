import { ProductAPI } from "@/api/product"
import { useQuery } from "@tanstack/react-query"
import { ProductsResponseData } from "@/api/product/product.type"

export const useGetProduts = (page: number = 0, category: string = "") => {
  return useQuery<ProductsResponseData>({
    queryKey: ["get-products", page, category],
    queryFn: () => ProductAPI.getAll(page, category),
  })
}
