import { Link, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import { getPostByCategory } from "../../api"
import { IPostData } from "../../api/types"
import { PiDownloadSimpleThin } from "react-icons/pi"
import { ClipLoader } from "react-spinners"

const AgendaAo = () => {
  const path = useLocation()
  const category_id = path.search.split("=")[1]

  const [posts, setPosts] = useState<IPostData[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPostByCategory(category_id)
        setPosts(data)
        setIsLoading(false)
      } catch (error) {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])
  const labels = [
    "planejamento das Viagens",
    "discursos",
    "Comunicado de imprensa",
    "Mensagens de ano novo",
    "Viagens",
  ]
  return (
    <div className="w-full min-h-screen gap-8 flex-col ">
      <div className="place-items-center grid md:grid-cols-1 grid-cols-1 lg:grid-cols-1 gap-8">
        {Array.from({ length: 5 }).map((_, index) => (
          <Link
            key={index}
            className=" w-full flex relative flex-col group p-4 items-center hover:bg-zinc-100 transition-all duration-200 ease-in-out justify-center  border rounded-md"
            to="../../pdf/1.pdf "
            download
            target="_blank"
          >
            <PiDownloadSimpleThin
              size={20}
              className="absolute hidden transition-all duration-200 ease-in-out group-hover:block top-2 right-2"
            />
            <div className="relative w-[80px] h-[110px]">
              <img
                src="/pdf-image.png"
                className="absolute w-full h-full object-cover"
                alt=""
              />
            </div>
            <h3 className="uppercase text-[14px] font-semibold text-goldenColor">
              {labels[index]}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default AgendaAo
