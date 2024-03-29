import { useLocation } from "react-router-dom"
import PostCard from "../../components/card/PostCard"
import { useEffect, useState } from "react"
import { IPostData } from "../../api/types"
import { getPostByCategory } from "../../api/apiCalls"
import { ClipLoader } from "react-spinners"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import { Icon } from "leaflet"

const Passeios = () => {
  const path = useLocation()
  const category_id = path.search.split("=")[1]
  const [isLoading, setIsLoading] = useState(true)

  const [posts, setPosts] = useState<IPostData[]>([])

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
        center={[-8.819154381789547, 13.217153548958116]}
        zoom={13}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers.map((loc, index) => (
          //@ts-ignore
          <Marker key={index} icon={customIcon} position={loc.geocode}>
            <Popup>
              <div className="flex gap-1 flex-col justify-center h-[250px]  w-[300px] items-center">
                <div className="relative w-full h-full">
                  <img
                    src="/1.jpg"
                    alt=""
                    className="absolute w-full h-full object-cover"
                  />
                </div>

                <div className="flex flex-col h-[60px] w-full">
                  <h1 className="font-bold font-Oswald uppercase">
                    título do post
                  </h1>
                  <div className="w-full">{loc.popUp}</div>
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
