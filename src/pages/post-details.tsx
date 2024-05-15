import { useParams } from "react-router-dom"
import SideBar from "../components/sidebar/side-bar"
import { createMarkup, formateData } from "../utils/helpers"
import SwiperPosts from "../components/global/SwiperPosts"
import AuthorNotes from "../components/author-notes/author-notes"
import { CiShoppingTag } from "react-icons/ci"
import ShareButtons from "../components/global/share-buttons"
import LikeButton from "../components/global/like-button"
import GoBackButton from "../components/global/go-back-button"
import { ClipLoader } from "react-spinners"
import { useGetSinglePost } from "@/lib/react-query"
import HomeCategoryControlller from "@/components/home_category/home-category-controlller"
import SlideDownEffect from "@/components/motion/slide-down"

const PostDetails = () => {
  const { id } = useParams()
  const { data: post, isLoading } = useGetSinglePost(id!!)

  if (isLoading) {
    return (
      <main className="w-full h-[300px] flex items-center justify-center">
        <ClipLoader size={40} color="#111111" />
      </main>
    )
  }

  const createdAt = post ? formateData(post.createdAt) : ""
  const content = createMarkup(post?.content)

  return (
    <>
      <HomeCategoryControlller
        label={post?.title}
        text="arquivos de:"
        hide={false}
      />
      <SlideDownEffect>
        <main className="lg:px-6">
          <div className=" gap-6 flex p-8">
            <div className="lg:flex-[4] w-full items-center flex-col flex">
              <h1 className="text-[41px] font-Oswald font-normal text-center">
                {post?.title}
              </h1>

              <h4 className="text-center font-OpenSans text-colorGray-light text-[15px]">
                {`${post?.author.firstname} ${post?.author.lastname} / ${createdAt}`}
              </h4>
              <div className="relative w-full mt-4 mb-8 h-[240px] lg:h-[410.7px]">
                <img
                  loading="lazy"
                  src={post?.mainImage}
                  alt="photo"
                  className="object-cover w-full h-full"
                />
              </div>

              <div
                className="text-left font-OpenSans quill text-[15px] text-colorBlack-dark text-base pb-8"
                dangerouslySetInnerHTML={content}
              />

              {post?.author_notes && (
                <AuthorNotes author={post.author} notes={post.author_notes} />
              )}

              <div className="w-full flex lg:flex-row gap-4 mg flex-col items-start justify-between lg:gap-1 mb-6 px-6 ">
                <div className="flex items-center flex-wrap">
                  <CiShoppingTag color="#AAAAAA" />
                  {post?.tag.map((tag, index) => (
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

              <div className="flex flex-col self-start">
                <div className="text-colorGray font-semibold font-Roboto uppercase text-[12px] flex self-start gap-1">
                  <h1 className="text-colorGray-zinc-900">Os mais vistos:</h1>
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
