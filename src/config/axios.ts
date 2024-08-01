import axios from "axios"

const URL = "https://overland-angola.onrender.com/api/v1"
// const URL = "http://localhost:8080/api/v1"

export default axios.create({
  baseURL: URL,
  headers: {
    "Content-Type": "application/json",
  },
})
