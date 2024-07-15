import "leaflet/dist/leaflet.css"

import { useLocation } from "react-router-dom"
import PostCard from "../../components/card/post-card"
import { ClipLoader } from "react-spinners"
import { MapContainer, TileLayer } from "react-leaflet"
import { useGetPosts } from "@/lib/react-query"
import FadeInEffect from "@/components/motion/fade-in"
import SwiperPosts from "@/components/global/SwiperPosts"
import PaginationController from "@/components/pagination/pagination-controller"
import { memo, useMemo } from "react"
import MapMarker from "@/components/card/map-marker"
import { Helmet } from "react-helmet-async"

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

  const handlePaginate = (newPage: number) => {
    window.location.href = `?page=${newPage}`
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
            <div className="w-full  flex flex-col">
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
          <div className="flex flex-col self-start">
            <PaginationController
              paginate={handlePaginate}
              pages={posts!!.pages}
            />
            <div className="text-colorGray font-semibold font-Roboto uppercase text-[12px] flex self-start gap-1">
              <h1 className="text-colorGray-zinc-900">Os mais vistos:</h1>
            </div>
          </div>
          <SwiperPosts />
        </div>
      </div>
    </>
  )
}

export default Passeios
