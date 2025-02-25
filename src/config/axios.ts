import axios from "axios"

export default axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  // baseURL: "https://overland-angola.onrender.com/api/v1",

  headers: {
    "Content-Type": "application/json",
  },
})
