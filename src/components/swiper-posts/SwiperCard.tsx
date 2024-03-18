import { Link } from "react-router-dom"

const SwiperCard = ({ image }: { image: string }) => {
  return (
    <Link
      to={"/"}
      className="h-[200px] w-[200px] flex flex-col pb-2 rounded-md border border-colorGray-light/20"
    >
      <div className="relative w-full h-[100px]">
        <img
          src={image}
          className="absolute w-full h-full object-cover rounded-t-md inset-0"
          alt=""
        />
        <h1 className="absolute bottom-1 text-[16px] left-2 text-white font-Roboto font-semibold">
          Lorem ipsum dolor sit amet consectetur.
        </h1>
      </div>
      <div className="p-2 w-full flex flex-col  font-Roboto">
        <h1 className="text-colorGray-light font-semibold text-[12px] ">
          Há 12 dias
        </h1>
        <p className="text-colorBlack-dark w-full text-[14px] font-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta odit.
        </p>
      </div>
    </Link>
  )
}

export default SwiperCard
