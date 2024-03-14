import { useParams } from "react-router-dom"
import SideBar from "../components/sidebar/SideBar"
import HomeCategoryControlller from "../components/home_category/HomeCategoryControlller"
import { useEffect, useState } from "react"
import { getSinglePost } from "../api/apiCalls"
import { IPostData } from "../api/types"
import { createMarkup } from "../utils"

const PostDetails = () => {
  const { id } = useParams()
  const [data, setData] = useState<IPostData>()
  // const content = createMarkup(data!!.content)

  useEffect(() => {
    const fetchData = async () => {
      const post = await getSinglePost(id)
      setData(post)
    }
    fetchData()
  }, [id])

  return (
    <main className="px-6">
      <HomeCategoryControlller label={""} />

      <div className=" gap-6 flex p-8">
        <div className=" flex-[4] items-center flex-col flex">
          <h1 className="text-[38px] font-semibold text-center">
            {data?.title}
          </h1>
          <h4 className="text-center text-black/50 text-2xl">
            {data?.subtitle}
          </h4>
          <div className="relative w-full mt-8 mb-8 h-[747.7px]">
            <img
              src={data?.mainImage}
              alt="photo"
              className="object-cover w-full h-full"
            />
          </div>
          <p
            className="text-left text-lg pb-8"
            // content={}
            // dangerouslySetInnerHTML={content}
          />
        </div>
        <aside className="lg:flex flex-col flex-[1.5] hidden md:hidden">
          <SideBar />
        </aside>
      </div>
    </main>
  )
}

export default PostDetails
