import { FAKE_DATA } from "../../fakedata"
import { Link } from "react-router-dom"

const HighlightedCard = () => {
  return (
    <div className="w-full flex flex-col mb-12 items-center justify-center">
      <h1 className="text-[50px] text-center font-semibold">
        Arctix Winter Gear :: Field Tested
      </h1>
      <h5 className="text-[20px] mb-6 text-[#D0D0D0] font-semibold text-center">
        Luisa Bell and Graeme Bell / February 28th, 2024
      </h5>
      <div className="w-full h-[550px] relative">
        <img
          src="/woman.jpg"
          alt="photo"
          className="absolute object-cover inset-0 w-full h-full"
        />
      </div>
      <p className="text-center my-6 ">
        Arctix is a ski and outerwear company that has been in operation for the
        past twenty years. I came across their affordable products when
        searching for sub-zero outerwear for our trip to the Arctic Circle, and…
      </p>
      <Link
        to={`/post/${FAKE_DATA[3].title}`}
        className="py-2 w-[150px] hover:w-[170px] hover:bg-black/60 duration-200 font-semibold transition-all ease-in text-center text-white uppercase text-[14px] bg-black/80"
      >
        View Post
      </Link>
    </div>
  )
}

export default HighlightedCard
