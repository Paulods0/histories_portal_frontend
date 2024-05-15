import { useQuery } from "@tanstack/react-query"
import { ICountryData } from "countries-list"
import { getCountryDataList } from "countries-list"
import { useState } from "react"

export const getAllCountries = () => {
  const responses = getCountryDataList()
  return responses
}

export const useGetCountryList = () => {
  return useQuery({
    queryKey: ["get-countries"],
    queryFn: () => getAllCountries(),
  })
}
