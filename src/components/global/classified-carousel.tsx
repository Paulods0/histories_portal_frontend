import { FC } from "react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel"

type Props = {
  images?: string[]
}

const ClassifiedCarousel: FC<Props> = ({}) => {
  return (
    <Carousel>
      <CarouselContent className="p-4">
        {Array.from({ length: 3 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="bg-red-200 w-full h-[300px] p-4"></div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="size-14" />
      <CarouselNext className="size-14" />
      <div className="w-full h-12 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="text-blue-700">Facebook</span>
          <span className="text-green-600">Whatsapp</span>
          <span className="text-zinc-400">Email</span>
        </div>
        <button className="bg-colorBlack text-white px-3 py-2">
          Estou interessado
        </button>
      </div>
    </Carousel>
  )
}

export default ClassifiedCarousel
