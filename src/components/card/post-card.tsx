import { Link } from "react-router-dom";
import LazyImage from "../global/lazy-image";
import { createMarkup, formateData } from "../../utils/helpers";
import { Post } from "@/api/post/post.types";

type Props = {
  post: Post;
};

const PostCard = ({
  post: { _id, mainImage, content, author, title, date },
}: Props) => {
  const dataContent = createMarkup(content);
  const postDate = formateData(date);
  const postContent = dataContent.__html.substring(0, 120).concat("...");

  return (
    <div className="relative w-full h-fit flex flex-col items-center justify-center">
      <div className="w-full relative">
        <div className="cursor-pointer relative w-full md:h-[350px] lg:h-[270px]">
          <Link className="h-full w-full" to={`/post/${_id}`}>
            <div className="absolute inset-0 w-full h-full hover:bg-colorGray-light/30 transition-all duration-200 ease-linear" />
            <LazyImage
              id={_id}
              className="w-full h-full object-cover"
              image={mainImage}
            />
          </Link>
        </div>

        <Link to={`/post/${_id}`}>
          <h1 className="text-center font-normal text-[27px] line-clamp-1 font-Oswald mt-2 mb-2">
            {title}
          </h1>
        </Link>
        <div
          className="text-center text-[15px] font-OpenSans line-clamp-4"
          dangerouslySetInnerHTML={{ __html: postContent }}
        />

        <div className="flex items-center gap-2 justify-center mt-4">
          <img
            loading="lazy"
            src={author?.image ? author.image : "/user.png"}
            className="w-9 h-9 rounded-full object-contain"
            alt={title}
          />

          <Link
            to={`/post/user/${author?._id!}`}
            className=" text-center text-colorGray-light font-OpenSans capitalize font-normal text-[15px]"
          >
            {`${author?.firstname} ${author?.lastname} / ${postDate}`}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
