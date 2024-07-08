import { motion } from "framer-motion"
import { FC } from "react"
import { SiYoutube, SiInstagram, SiFacebook, SiWhatsapp } from "react-icons/si"

export type IconTypes = "facebook" | "youtube" | "instagram" | "whatsapp"

type Props = {
  title: string
  link?: string
  content?: string
  icon?: IconTypes
}

const icons = {
  facebook: <SiFacebook />,
  instagram: <SiInstagram />,
  youtube: <SiYoutube />,
  whatsapp: <SiWhatsapp />,
}

const ContactBlock: FC<Props> = ({ title, icon, content, link }) => {
  return (
    <motion.a
      href={link ?? "#"}
      target="_blank"
      className="flex flex-col items-center p-8 lg:h-[130px] border w-full gap-4"
      initial={{ y: 0 }}
      whileHover={{ y: -15 }}
      transition={{ duration: 0.3 }}
    >
      <h1 className="font-bold uppercase">{title}</h1>
      {icon ? (
        <span className="flex gap-4 items-center text-4xl">{icons[icon]}</span>
      ) : (
        <span className="flex text-orangeColor gap-4 items-center">{content}</span>
      )}
    </motion.a>
  )
}

export default ContactBlock
