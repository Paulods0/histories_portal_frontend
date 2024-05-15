import { Link, useLocation } from "react-router-dom"
import PostCard from "../../components/card/post-card"
import { ClipLoader } from "react-spinners"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import { Icon } from "leaflet"
import { useGetPostByCategory } from "@/lib/react-query"
import FadeInEffect from "@/components/motion/fade-in"
import SwiperPosts from "@/components/global/SwiperPosts"

const Passeios = () => {
  const { pathname } = useLocation()
  const category_slug = pathname.split("/")[2]
  const { data: posts, isLoading } = useGetPostByCategory(category_slug!!)

  if (isLoading) {
    return (
      <main className="w-full flex items-center justify-center h-full">
        <ClipLoader size={40} color="#111111" />
      </main>
    )
  }

  const customIcon = new Icon({
    iconUrl: "/others/pin.png",
    iconSize: [38, 38],
  })

  const CENTER_LOCATION = {
    LATITUDE: -12.39292107197616,
    LONGITUDE: 17.49044231929176,
  }

  return (
    <div className="w-full min-h-screen gap-10 lg:px-12 flex-col items-center justify-start flex">
      <FadeInEffect>
        <MapContainer
          className="leaflet-container"
          center={[CENTER_LOCATION.LATITUDE, CENTER_LOCATION.LONGITUDE]}
          zoom={5}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {posts?.map((post) => (
            //@ts-ignore
            <Marker
              key={post._id}
              icon={customIcon}
              position={[post.latitude, post.longitude]}
            >
              <Popup>
                <div className="flex gap-1  flex-col justify-start h-[228px] w-[300px] items-center">
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
                      <Link
                        to={`https://blendagency.biz/post/${post.title}__${post._id}`}
                        className="text-white p-2 w-[100px] rounded-full  bg-colorBlack-dark flex  items-center justify-center"
                      >
                        Ver post
                      </Link>
                    </div>
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
        <div className="place-items-center mt-8 grid md:grid-cols-1 grid-cols-1 lg:grid-cols-2 gap-8">
          {posts?.length === 0 ? (
            <div className="col-span-2 flex items-center justify-center">
              <h1>Não há posts ainda.</h1>
            </div>
          ) : (
            posts?.map((post) => <PostCard key={post._id} post={post} />)
          )}
        </div>
      </FadeInEffect>
      <div className="mt-12">
        <div className="flex flex-col self-start">
          <div className="text-colorGray font-semibold font-Roboto uppercase text-[12px] flex self-start gap-1">
            <h1 className="text-colorGray-zinc-900">Os mais vistos:</h1>
          </div>
        </div>
        <SwiperPosts />
      </div>
    </div>
  )
}

export default Passeios
