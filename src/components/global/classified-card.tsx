import { ClassifiedPost } from "@/api/types"
import { formateData } from "@/utils/helpers"
// import { format } from "date-fns"
import {
  WhatsappIcon,
  WhatsappShareButton,
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  PinterestShareButton,
  PinterestIcon,
} from "react-share"

type ClassifiedCardProps = {
  post: ClassifiedPost
}

const ClassifiedCard = ({ post }: ClassifiedCardProps) => {
  const date = formateData(post.createdAt!!)
  const price = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "AKZ",
  }).format(parseFloat(post.price))

  // console.log(price)

  return (
    <div className="relative w-full h-fit flex flex-col items-center justify-center">
      <div className="w-full relative">
        <div className="cursor-pointer relative w-full h-[250px]">
          <div className="h-full w-full">
            <div className="absolute inset-0 w-full h-full hover:bg-colorGray-light/30 transition-all duration-200 ease-linear" />
            <img
              src={post.mainImage ?? "/1.jpg"}
              className="w-full h-full object-cover"
              alt="photo"
            />
          </div>
        </div>

        <div>
          <h1 className="text-center font-normal text-[27px] line-clamp-1 font-Oswald mt-2 mb-2">
            {post.title}
          </h1>
        </div>
        <p className="text-center text-[15px] font-OpenSans line-clamp-4">
          {post.content}
        </p>
        <div className="flex text-colorGray-light mt-1 items-center justify-center">
          <div className="text-center text-[15px] space-x-1 font-OpenSans ">
            <span>{post.author.firstname}</span>
            <span>{post.author.lastname}</span>
          </div>

          <span className="mx-1">/</span>

          <p className="text-center text-[15px] font-OpenSans ">{date}</p>
        </div>

        <div className="flex items-center flex-col justify-center mt-2">
          <p className=" text-start text-colorGray-light font-OpenSans font-normal text-[15px]">
            {`Vendo por: ${price}`}
          </p>
          <p className=" text-start text-colorGray-light font-OpenSans font-normal text-[15px]">
            {`Contacto: ${post.author.phone}`}
          </p>

          <div className="flex items-center mt-2 gap-x-4">
            <WhatsappShareButton url="" children={<WhatsappIcon size={22} />} />

            <div className="flex items-center w-full gap-x-3">
              <span className="font-semibold text-colorGray-medium italic">
                share:
              </span>
              <FacebookShareButton
                children={<FacebookIcon size={20} />}
                url=""
              />
              <TwitterShareButton children={<TwitterIcon size={20} />} url="" />
              <PinterestShareButton
                url=""
                children={<PinterestIcon size={20} />}
                media="/1.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClassifiedCard
