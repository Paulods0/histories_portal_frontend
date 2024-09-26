import {
  WhatsappIcon,
  WhatsappShareButton,
  FacebookIcon,
  FacebookShareButton,
  EmailIcon,
  EmailShareButton,
  PinterestShareButton,
  PinterestIcon,
} from "react-share"
import { formateData } from "@/utils/helpers"
import ClassifiedCarousel from "./classified-carousel"
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog"
import { Classified } from "@/api/classified/classified.type"

type ClassifiedCardProps = {
  post: Classified
}

const ClassifiedCard = ({ post }: ClassifiedCardProps) => {
  const date = formateData(post.createdAt!!)
  const price = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "AKZ",
  }).format(parseFloat(post.price))

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="relative w-full h-[400px] flex flex-col items-center justify-center border pb-4">
          <div className="cursor-pointer relative w-full h-[170px]">
            <h1 className="absolute top-2 left-2 bg-orangeColor text-white rounded-lg px-2 py-1 text-sm">
              {post.type === "buy" ? "Quero comprar" : "Estou a vender"}
            </h1>
            <img
              loading="lazy"
              src={post.mainImage}
              className="w-full h-32 md:h-44 object-contain"
              alt="photo"
            />
          </div>

          <h1 className="text-center font-normal text-2xl md:text-[27px] line-clamp-1 font-Oswald mt-2 mb-2">
            {post.title}
          </h1>

          <p className="text-center text-[15px] font-OpenSans line-clamp-4">
            {post.content}
          </p>

          <div className="flex text-colorGray-light mt-1 items-center justify-center">
            <div className="text-center text-xs md:text-[15px] space-x-1 font-OpenSans ">
              <span>{post.author.firstname}</span>
              <span>{post.author.lastname}</span>
            </div>

            <span className="mx-1">/</span>

            <p className="text-center text-xs md:text-[15px] font-OpenSans ">
              {date}
            </p>
          </div>

          <div className="flex items-center flex-col justify-center mt-2">
            <p className=" text-start text-colorGray-light font-OpenSans font-normal text-xs md:text-[15px]">
              {`À venda por: ${price}`}
            </p>
            <p className=" text-start text-colorGray-light font-OpenSans font-normal text-xs md:text-[15px]">
              {`Contacto: ${post.author.phone}`}
            </p>

            <div className="flex items-center mt-2 gap-x-4">
              <WhatsappShareButton
                url={post.author.phone}
                children={<WhatsappIcon size={26} />}
              />

              <div className="flex items-center w-full gap-x-3">
                <span className="font-semibold text-colorGray-medium italic">
                  share:
                </span>
                <FacebookShareButton
                  children={<FacebookIcon size={26} />}
                  url=""
                />
                <EmailShareButton children={<EmailIcon size={26} />} url="" />
                <PinterestShareButton
                  url=""
                  children={<PinterestIcon size={26} />}
                  media="/1.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent>
        {post.images && <ClassifiedCarousel images={post.images} />}
      </DialogContent>
    </Dialog>
  )
}

export default ClassifiedCard
