import { Link, useLocation } from "react-router-dom"
import PostCard from "../../components/card/PostCard"
import { useEffect, useState } from "react"
import { IPostData } from "../../api/types"
import { getPostByCategory } from "../../api"
import { ClipLoader } from "react-spinners"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import { Icon } from "leaflet"

const Passeios = () => {
  const path = useLocation()
  const category_id = path.search.split("=")[1]
  const [isLoading, setIsLoading] = useState(true)

  const [posts, setPosts] = useState<IPostData[]>([])
  console.log(posts)

  const markers = [
    {
      geocode: [-8.823040149556459, 13.226809961900088],
      popUp: "Hello I'm pop up 1",
    },
    {
      geocode: [-8.810359488418246, 13.225440462381833],
      popUp: "Hello I'm pop up 2",
    },
    {
      geocode: [-8.814880975799019, 13.23684171520269],
      popUp: "Hello I'm pop up 3",
    },
  ]
  const customIcon = new Icon({
    iconUrl: "/pin.png",
    iconSize: [38, 38],
  })

  const CENTER_LOCATION = {
    LATITUDE: -12.35769259509275,
    LONGITUDE: 17.36914355209709,
  }

  useEffect(() => {
    setIsLoading(true)
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
  return (
    <div className="w-full min-h-screen gap-10 px-12 flex-col items-center justify-start flex">
      <MapContainer
        className="leaflet-container"
        center={[CENTER_LOCATION.LATITUDE, CENTER_LOCATION.LONGITUDE]}
        zoom={5}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {posts.map((post) => (
          //@ts-ignore
          <Marker
            key={post._id}
            icon={customIcon}
            position={[post.latitude, post.longitude]}
          >
            <Popup>
              <div className="flex gap-1  flex-col justify-start h-[250px] w-[300px] items-center">
                <div className="relative w-full h-[150px]">
                  <img
                    src={post.mainImage}
                    alt="imagem do post"
                    className="absolute w-full h-full object-cover"
                  />
                </div>

                <h1 className="font-bold text-black line-clamp-2 font-Oswald uppercase">
                  {post.title}
                </h1>

                <div className="flex flex-col items-center self-end  justify-center w-full">
                  <div className="w-full flex items-center justify-between">
                    <div className="text-colorBlack-dark text-[12px] rounded-full flex items-center">
                      <span className="font-semibold mr-1">Autor:</span>
                      <div className="flex gap-1">
                        <span>{post.author.firstname}</span>
                        <span>{post.author.lastname}</span>
                      </div>
                    </div>
                    <button
                      onClick={() =>
                        (window.location.href = `/post/${post.title}__${post._id}`)
                      }
                      className="text-white p-2 w-[100px] rounded-full  bg-colorBlack-dark flex  items-center justify-center"
                    >
                      Ver post
                    </button>
                  </div>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      <div className="place-items-center grid md:grid-cols-1 grid-cols-1 lg:grid-cols-2 gap-8">
        {isLoading ? (
          <div className="col-span-2 flex items-center justify-center">
            <ClipLoader size={80} color="#1A101F" />
          </div>
        ) : (
          posts?.map((post) => <PostCard key={post._id} post={post} />)
        )}
      </div>
    </div>
  )
}

export default Passeios
