import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share"

const ShareButtons = () => {
  return (
    <div className="flex items-center w-full gap-x-2">
      <span className="font-semibold text-[14px] italic text-colorGray-light capitalize">
        share:
      </span>
      <div className="flex items-center gap-x-2">
        <FacebookShareButton
          children={<FacebookIcon size={30} />}
          url="https://www.youtube.com/watch?v=x6lMFB3qPbs"
        />
        <TwitterShareButton
          children={<TwitterIcon size={30} />}
          url="https://www.youtube.com/watch?v=x6lMFB3qPbs"
        />
        <WhatsappShareButton
          children={<WhatsappIcon size={30} />}
          url="https://www.youtube.com/watch?v=x6lMFB3qPbs"
        />
        <EmailShareButton
          children={<EmailIcon size={30} />}
          url="https://www.youtube.com/watch?v=x6lMFB3qPbs"
        />
      </div>
    </div>
  )
}

export default ShareButtons
