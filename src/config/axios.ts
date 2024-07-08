import axios from "axios"

export default axios.create({
  baseURL: import.meta.env.VITE_RENDER_API,
  headers: {
    "Content-Type": "application/json",
  },
})
