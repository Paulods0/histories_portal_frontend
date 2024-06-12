import { ClipLoader } from "react-spinners"
import { useParams } from "react-router-dom"
import { createMarkup } from "@/utils/helpers"
import SideBar from "@/components/sidebar/side-bar"
import { useGetSingleTip } from "@/lib/react-query"
import LikeButton from "@/components/global/like-button"
import SwiperPosts from "@/components/global/SwiperPosts"
import SlideDownEffect from "@/components/motion/slide-down"
import ShareButtons from "@/components/global/share-buttons"
import GoBackButton from "@/components/global/go-back-button"
import HomeCategoryControlller from "@/components/home_category/home-category-controlller"

const TipDetailPage = () => {
  const { id } = useParams()
  const { data, isLoading } = useGetSingleTip(id!!)

  if (isLoading) {
    return (
      <div className="w-full flex items-center justify-center">
        <ClipLoader />
      </div>
    )
  }

  const content = createMarkup(data?.content)
  console.log(data)

  return (
    <>
      <HomeCategoryControlller
        label={data?.title}
        text="arquivos de:"
        hide={false}
      />
      <SlideDownEffect>
        <main className="lg:px-6">
          <div className=" gap-6 flex p-8">
            <div className="lg:flex-[4] w-full items-center flex-col flex">
              <h1 className="text-[41px] font-Oswald font-normal text-center">
                {data?.title}
              </h1>

              <h4 className="text-center font-OpenSans text-colorGray-light text-[15px]">
                {`${data?.author.firstname} ${data?.author.lastname}`}
              </h4>
              <div className="relative w-full mt-4 mb-8 h-[240px] lg:h-[410.7px]">
                <img
                  loading="lazy"
                  src={data!!.image}
                  alt="photo"
                  className="object-cover w-full h-full"
                />
              </div>

              <div
                className="text-left font-OpenSans quill text-[15px] text-colorBlack-dark text-base pb-8"
                dangerouslySetInnerHTML={content}
              />

              <div className="w-full flex lg:flex-row gap-4 mg flex-col items-start justify-between lg:gap-1 mb-6 px-6 ">
                <div className="flex flex-col items-end gap-y-4">
                  <ShareButtons image={data!!.image} />
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

export default TipDetailPage
