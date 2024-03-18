import { FAKE_DATA } from "../../fakedata"
import { Link } from "react-router-dom"

const HighlightedCard = () => {
  return (
    <div className="w-full flex flex-col mb-12 items-center justify-center">
      <h1 className="text-[41px] text-center text-[#111111] font-Oswald font-normal">
        Arctix Winter Gear :: Field Tested
      </h1>
      <h5 className="text-[15px] mb-6 text-[#AAAAAA] font-OpenSans font-normal text-center">
        Luisa Bell and Graeme Bell / February 28th, 2024
      </h5>
      <div className="w-full h-[415px] relative">
        <img
          src="/woman.jpg"
          alt="photo"
          className="absolute object-cover inset-0 w-full h-full"
        />
      </div>
      <p className="text-center text-[15px] font-OpenSans my-6 ">
        Arctix is a ski and outerwear company that has been in operation for the
        past twenty years. I came across their affordable products when
        searching for sub-zero outerwear for our trip to the Arctic Circle, and…
      </p>
      <Link
        to={`/post/${FAKE_DATA[3].title}`}
        className="py-3 w-[150px] font-OpenSans hover:w-[170px] hover:bg-colorGray-light duration-200 font-semibold transition-all ease-in text-center text-white uppercase text-[14px] bg-colorGray-dark"
      >
        View Post
      </Link>
    </div>
  )
}

export default HighlightedCard
