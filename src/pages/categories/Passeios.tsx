import "leaflet/dist/leaflet.css"

import { memo, useMemo } from "react"
import { ClipLoader } from "react-spinners"
import { Helmet } from "react-helmet-async"
import { useLocation } from "react-router-dom"
import MapMarker from "@/components/card/map-marker"
import FadeInEffect from "@/components/motion/fade-in"
import PostCard from "../../components/card/post-card"
import { MapContainer, TileLayer } from "react-leaflet"
import { useGetPosts } from "@/lib/tanstack-query/post/query"
import MoreViewedContainer from "@/components/global/more-viewed/more-viewed-container"

const MemoizedPostMarker = memo(MapMarker)
const MemoizedPostCard = memo(PostCard)

const Passeios = () => {
  const path = useLocation()
  const category = path.pathname.split("/")[2]!!
  const currPage = parseInt(path.search.split("=")[1]) || 1

  const { data: postsMaps } = useGetPosts(currPage, category, 0)
  const { data: posts, isLoading } = useGetPosts(currPage, category)

  const postsMapsMemo = useMemo(() => {
    return postsMaps?.posts.map((post) => (
      <MemoizedPostMarker key={post._id} post={post} />
    ))
  }, [postsMaps?.posts])

  const memoizedPosts = useMemo(() => {
    return posts?.posts.map((post) => (
      <MemoizedPostCard key={post._id} post={post} />
    ))
  }, [posts?.posts])

  if (isLoading) {
    return (
      <div className="col-span-2 flex items-center justify-center">
        <ClipLoader size={80} color="#1A101F" />
      </div>
    )
  }

  const CENTER_LOCATION = {
    LATITUDE: -12.39292107197616,
    LONGITUDE: 17.49044231929176,
  }

  return (
    <>
      <Helmet>
        <title>Passeios | Overland Angola</title>
        <meta name="description" content={`Veja passeios ao no Overland`} />
      </Helmet>
      <div className="w-full min-h-screen gap-10 lg:px-12 flex-col items-center justify-start flex">
        <FadeInEffect>
          {memoizedPosts?.length === 0 ? (
            <div className="flex items-center justify-center mt-6">
              <h1>Não há posts ainda.</h1>
            </div>
          ) : (
            <div className="w-full flex flex-col">
              <MapContainer
                className="leaflet-container"
                center={[CENTER_LOCATION.LATITUDE, CENTER_LOCATION.LONGITUDE]}
                zoom={5}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {postsMapsMemo}
              </MapContainer>
              <div className="place-items-center mt-8 grid md:grid-cols-1 grid-cols-1 lg:grid-cols-2 gap-8">
                {memoizedPosts}
              </div>
            </div>
          )}
        </FadeInEffect>

        <div className="mt-12">
          <MoreViewedContainer />
        </div>
      </div>
    </>
  )
}

export default Passeios
