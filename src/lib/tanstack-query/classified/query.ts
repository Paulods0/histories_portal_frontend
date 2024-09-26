import { ClassifiedAPI } from "@/api/classified"
import { useQuery } from "@tanstack/react-query"
import { ClassifiedResponseData } from "@/api/classified/classified.type"

export const useGetClassifiedPosts = (page: number = 1) => {
  return useQuery<ClassifiedResponseData>({
    queryKey: ["get-classified-posts", page],
    queryFn: () => ClassifiedAPI.getAll(page),
  })
}
