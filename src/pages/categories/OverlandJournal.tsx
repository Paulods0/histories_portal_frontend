import PostCard from "../../components/card/PostCard"
import { FAKE_DATA } from "../../fakedata"

const OverlandJournal = () => {
  return (
    <div className="w-full min-h-screen gap-10 px-12 flex-col">
      <div className="gap-8 grid grid-cols-1 lg:grid-cols-2">
        {/* {FAKE_DATA.map((post, index) => (
          <PostCard key={index} post={post} />
        ))} */}
      </div>
    </div>
  )
}

export default OverlandJournal
