import { motion } from "framer-motion"
import { FC } from "react"
import { SiYoutube, SiInstagram, SiFacebook } from "react-icons/si"

export type IconTypes = "facebook" | "youtube" | "instagram"

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
}

const ContactBlock: FC<Props> = ({ title, icon, content, link }) => {
  return (
    <motion.div
      className="flex flex-col items-center p-4 border w-full gap-4"
      initial={{ y: 0 }}
      whileHover={{ y: -15 }}
      transition={{ duration: 0.3 }}
    >
      <h1 className="font-bold uppercase">{title}</h1>
      {icon ? (
        <a href={link ?? "#"} className="flex gap-4 items-center text-4xl">
          {icons[icon]}
        </a>
      ) : (
        <a href={link ?? "#"} className="flex gap-4 items-center">
          {content}
        </a>
      )}
    </motion.div>
  )
}

export default ContactBlock
