import FadeInEffect from "@/components/motion/fade-in"
import ContactBlock, { IconTypes } from "@/components/contact-block"

export const contacts = [
  {
    id: 1,
    title: "Email",
    content: "webmaster.overlandangola@aol.com",
    link: "mailto:webmaster.overlandangola@aol.com",
  },

  {
    id: 2,
    icon: "facebook" as IconTypes,
    title: "Facebook",
    link: "https://www.facebook.com/clubeoverland.angola",
  },
  {
    id: 3,
    title: "Instagram",
    icon: "instagram" as IconTypes,
    link: "https://www.instagram.com/clubeoverlandangola/",
  },
  {
    id: 4,
    title: "Youtube",
    icon: "youtube" as IconTypes,
    link: "https://www.youtube.com/@OverlandAngola",
  },
]

const Contactos = () => {
  return (
    <main className="flex items-center lg:h-[300px] justify-center mx-auto w-full md:w-[900px] my-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 place-items-center">
        {contacts.map((contact) => (
          <FadeInEffect key={contact.id} index={contact.id}>
            <ContactBlock
              link={contact.link}
              icon={contact.icon}
              title={contact.title}
              content={contact?.content}
            />
          </FadeInEffect>
        ))}
      </div>
    </main>
  )
}

export default Contactos
