import { Link, useParams } from "react-router-dom"
import SideBar from "../components/sidebar/SideBar"
import { useEffect, useState } from "react"
import { getSinglePost } from "../api/apiCalls"
import { IPostData } from "../api/types"
import { createMarkup, formatarData } from "../utils/helpers"
import SwiperPosts from "../components/swiper-posts/SwiperPosts"
import AuthorNotes from "../components/AuthorNotes/AuthorNotes"
import { CiShoppingTag } from "react-icons/ci"

const PostDetails = () => {
  const { id } = useParams()
  const postId = id?.split("__")[1]

  const [data, setData] = useState<IPostData>()
  const [content, setContent] = useState<{ __html: string }>({ __html: "" })

  const createdAt = data ? formatarData(data.createdAt) : ""

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
            {`${data?.author.firstname} ${data?.author.lastname} / ${createdAt}`}
          </h4>
          <div className="relative w-full mt-4 mb-8 h-[410.7px]">
            <img
              src={data?.mainImage}
              alt="photo"
              className="object-cover w-full h-full"
            />
          </div>
          <div
            className="text-left font-OpenSans quill text-[15px] text-colorBlack-dark text-base pb-8"
            dangerouslySetInnerHTML={content}
          />
          {data?.author_notes && (
            <AuthorNotes author={data.author} notes={data.author_notes} />
          )}
          <div className="w-full items-center gap-1 mb-12 mt-2 flex">
            <CiShoppingTag color="#AAAAAA" />
            {data?.tag.map((tag, index) => (
              <span
                className="mr-1 text-[14px] italic text-colorGray-light"
                key={index}
              >
                #{tag.trim().toLowerCase()}
              </span>
            ))}
          </div>

          <div className="flex flex-col self-start">
            <div className="text-colorGray font-semibold font-Roboto  uppercase text-[12px] flex self-start gap-1">
              <h1 className="text-colorGray-light">Também em</h1>
              <Link to="/">www.overlandangola.com</Link>
            </div>
          </div>
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
