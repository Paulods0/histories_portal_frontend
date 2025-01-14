import { useEffect } from "react"
import { ClipLoader } from "react-spinners"
import { CiShoppingTag } from "react-icons/ci"
import SideBar from "../components/sidebar/side-bar"
import LikeButton from "../components/global/like-button"
import { useLocation, useParams } from "react-router-dom"
import { createMarkup, formateData } from "../utils/helpers"
import SlideDownEffect from "@/components/motion/slide-down"
import ShareButtons from "../components/global/share-buttons"
import GoBackButton from "../components/global/go-back-button"
import { useGetSinglePost } from "@/lib/tanstack-query/post/query"
import AuthorNotes from "../components/author-notes/author-notes"
import SwiperPosts from "../components/global/more-viewed/more-viewed-container"
import HomeCategoryControlller from "@/components/home_category/home-category-controlller"

const PostDetails = () => {
  const { id } = useParams()
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  const { data: post, isLoading } = useGetSinglePost(id!)

  if (isLoading && !post) {
    return (
      <main className="w-full h-[300px] flex items-center justify-center">
        <ClipLoader size={40} color="#111111" />
      </main>
    )
  }



  const createdAt = formateData(post!.date)
  const content = createMarkup(post!.content)

  return (
    <>
      <HomeCategoryControlller
        label={post!.title}
        text="arquivos de:"
        hide={false}
      />
      <SlideDownEffect>
        <main className="lg:px-6">
          <div className=" gap-6 flex p-8">
            <div className="lg:flex-[4] w-full items-center flex-col flex">
              <h1 className="text-[41px] font-Oswald font-normal text-center">
                {post!.title}
              </h1>

              <h4 className="text-center font-OpenSans text-colorGray-light text-[15px]">
                {`${post!.author.firstname} ${
                  post!.author.lastname
                } / ${createdAt}`}
              </h4>
              <div className="relative w-full mt-4 mb-8 h-[240px] lg:h-[410.7px]">
                <img
                  loading="lazy"
                  src={post!.mainImage}
                  alt="photo"
                  className="object-cover w-full h-full"
                />
              </div>

              <div
                className="text-left font-OpenSans tip-tap-content text-[15px] text-colorBlack-dark text-base pb-8"
                dangerouslySetInnerHTML={content}
              />

              {post!.author_notes && (
                <AuthorNotes author={post!.author} notes={post!.author_notes} />
              )}

              <div className="w-full flex lg:flex-row gap-4 mg flex-col items-start justify-between lg:gap-1 mb-6 px-6 ">
                <div className="flex items-center flex-wrap">
                  <CiShoppingTag color="#AAAAAA" />
                  {post!.tag.map((tag, index) => (
                    <span
                      className="mr-1 text-[14px] italic text-colorGray-light"
                      key={index}
                    >
                      #{tag.trim().toLowerCase()}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col items-end gap-y-4">
                  <ShareButtons image={post!!.mainImage} />
                  <LikeButton postId={id!!} />
                </div>
              </div>

              <SwiperPosts />
            </div>
            <aside className="lg:flex flex-col flex-[1.5] hidden md:hidden">
              <SideBar />
            </aside>
          </div>
          <GoBackButton />
        </main>
      </SlideDownEffect>
    </>
  )
}

export default PostDetails
