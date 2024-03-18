import SwiperCard from "./SwiperCard"

const SwiperPosts = () => {
  return (
    <div className="w-[800px] px-4 scroll mt-10 overflow-x-auto scroll-bar py-3 flex gap-2 ">
      {Array(10)
        .fill("")
        .map((index) => (
          <div key={index}>
            <SwiperCard image={`/3.jpg`} />
          </div>
        ))}
    </div>
  )
}

export default SwiperPosts
