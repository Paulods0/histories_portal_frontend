import axios from "axios"
// baseURL: "http://localhost:8080/api/v1",

export const instance = axios.create({
  baseURL: "https://overland-angola.onrender.com/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
})
