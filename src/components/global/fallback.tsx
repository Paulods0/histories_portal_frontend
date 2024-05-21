import { ClipLoader } from "react-spinners"

const Fallback = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <ClipLoader size={36} color="#C7A770" />
    </div>
  )
}

export default Fallback
