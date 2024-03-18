import { useParams } from "react-router-dom"
import SideBar from "../components/sidebar/SideBar"
import { useEffect, useState } from "react"
import { getSinglePost } from "../api/apiCalls"
import { IPostData } from "../api/types"
import { createMarkup } from "../utils/helpers"
import SwiperPosts from "../components/swiper-posts/SwiperPosts"
import AuthorNotes from "../components/AuthorNotes/AuthorNotes"

const PostDetails = () => {
  const { id } = useParams()
  const postId = id?.split("__")[1]

  const [data, setData] = useState<IPostData>()
  const [content, setContent] = useState<{ __html: string }>({ __html: "" })

  useEffect(() => {
    const fetchData = async () => {
      const post = await getSinglePost(postId)
      setData(post)
      const cnt = createMarkup(post.content)
      setContent(cnt)
    }
    fetchData()
  }, [postId])

  return (
    <main className="px-6">
      <div className=" gap-6 flex p-8">
        <div className=" flex-[4] items-center flex-col flex">
          <h1 className="text-[41px] font-Oswald font-normal text-center">
            {data?.title}
          </h1>
          <h4 className="text-center font-OpenSans text-colorGray-light text-[15px]">
            {data?.subtitle}
          </h4>
          <div className="relative w-full mt-4 mb-8 h-[410.7px]">
            <img
              src={data?.mainImage}
              alt="photo"
              className="object-cover w-full h-full"
            />
          </div>
          <p
            className="text-left font-OpenSans text-[15px] text-colorBlack-dark text-base pb-8"
            // content={}
            dangerouslySetInnerHTML={content}
          />
          <AuthorNotes />
          <SwiperPosts />
        </div>
        <aside className="lg:flex flex-col flex-[1.5] hidden md:hidden">
          <SideBar />
        </aside>
      </div>
    </main>
  )
}

export default PostDetails
