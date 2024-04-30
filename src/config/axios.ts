import axios from "axios"

export const instance = axios.create({
  baseURL: "https://overland-angola.onrender.com/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
})
