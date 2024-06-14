import { FC } from "react"
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

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel"
import { GoArrowRight } from "react-icons/go"

type Props = {
  images: string[]
}

const ClassifiedCarousel: FC<Props> = ({ images }) => {
  if (!images.length) {
    return <div className="p-6">Não há imagens</div>
  }
  return (
    <Carousel>
      <CarouselContent className="md:p-4">
        {images?.map((image, index) => (
          <CarouselItem key={index}>
            <img loading="lazy" src={image} className="w-full h-[300px] p-4" />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="md:size-14 bg-zinc-100 ml-6 md:ml-0" />
      <CarouselNext className="md:size-14 bg-zinc-100 mr-6 md:mr-0" />

      <div className="w-full h-12 flex items-center justify-center gap-4">
        <h2 className="text-colorBlack flex items-center gap-2">
          Entrar em contacto <GoArrowRight />
        </h2>
        <div className="flex items-center gap-4">
          <WhatsappShareButton url="" children={<WhatsappIcon size={30} />} />
          <FacebookShareButton url="" children={<FacebookIcon size={30} />} />
          <EmailShareButton url="" children={<EmailIcon size={30} />} />
          <PinterestShareButton
            media=""
            url=""
            children={<PinterestIcon size={30} />}
          />
        </div>
      </div>
    </Carousel>
  )
}

export default ClassifiedCarousel
