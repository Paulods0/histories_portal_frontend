import axios from "axios"

const URL_DEV_MODE = "http://localhost:8080/api/v1"
const URL_PROD_MODE = "https://overland-angola.onrender.com"

export default axios.create({
  baseURL: import.meta.env.MODE === "production" ? URL_PROD_MODE : URL_DEV_MODE,
  headers: {
    "Content-Type": "application/json",
  },
})
