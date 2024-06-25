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
}
const ShareButtons = ({ image }: Props) => {
  const location = window.location.href
  console.log(location)
  return (
    <div className="flex items-center w-full gap-x-2">
      <span className="font-semibold text-[14px] italic text-colorGray-light capitalize">
        share:
      </span>
      <div className="flex items-center gap-x-2">
        <FacebookShareButton
          children={<FacebookIcon size={30} />}
          url={location}
        />
        <PinterestShareButton
          children={<PinterestIcon size={30} />}
          url={location}
          media={image}
        />
        <WhatsappShareButton
          children={<WhatsappIcon size={30} />}
          url={location}
        />
        <EmailShareButton children={<EmailIcon size={30} />} url={location} />
      </div>
    </div>
  )
}

export default ShareButtons
