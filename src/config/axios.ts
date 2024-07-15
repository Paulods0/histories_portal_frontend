import axios from "axios"

const URL_DEV_MODE = "http://localhost:8080/api/v1"

export default axios.create({
  baseURL:
    import.meta.env.MODE === "production"
      ? import.meta.env.VITE_RENDER_API
      : URL_DEV_MODE,
  headers: {
    "Content-Type": "application/json",
  },
})
