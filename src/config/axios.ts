import axios from "axios"

export const instance = axios.create({
  baseURL: "https://histories-portal-backend.vercel.app/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
})
