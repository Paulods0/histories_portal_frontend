import { FC } from "react"
import { Icon } from "leaflet"
import { Link } from "react-router-dom"
import { Post } from "@/api/post/post.types"
import { Popup, Marker } from "react-leaflet"

type Props = {
  post: Post
}

const MapMarker: FC<Props> = ({ post }) => {
  const customIcon = new Icon({
    iconUrl: "/others/pin.png",
    iconSize: [38, 38],
  })

  return (
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
                to={`/post/${post._id}`}
                className="text-white p-2 w-[100px] rounded-full  bg-colorBlack-dark flex  items-center justify-center"
              >
                Ver post
              </Link>
            </div>
          </div>
        </div>
      </Popup>
    </Marker>
  )
}

export default MapMarker
