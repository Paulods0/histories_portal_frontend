import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  PinterestShareButton,
  PinterestIcon,
} from "react-share"
type Props = {
  image: string
  postTitle?: string
}
const ShareButtons = ({ image, postTitle }: Props) => {
  const location = window.location.href

  return (
    <div className="flex items-center w-full gap-x-2">
      <span className="font-semibold text-[14px] italic text-colorGray-light capitalize">
        share:
      </span>
      <div className="flex items-center gap-x-2">
        <FacebookShareButton
          url={location}
          content={postTitle}
          children={<FacebookIcon size={30} />}
        />
        <PinterestShareButton
          media={image}
          url={location}
          children={<PinterestIcon size={30} />}
        />
        <WhatsappShareButton
          url={location}
          children={<WhatsappIcon size={30} />}
        />
        <EmailShareButton children={<EmailIcon size={30} />} url={location} />
      </div>
    </div>
  )
}

export default ShareButtons
