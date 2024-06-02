import ContactBlock, { IconTypes } from "@/components/contact-block"
import FadeInEffect from "@/components/motion/fade-in"

const contacts = [
  {
    id: 1,
    title: "Email",
    content: "overlandagola@gmail.com",
    link: "mailto:overlandagola@gmail.com",
  },
  { id: 2, title: "Residência", content: "Angola, Luanda", link: "#" },
  { id: 3, title: "Telemóvel", content: "+244 123 456", link: "+244123456" },
  {
    id: 4,
    icon: "facebook" as IconTypes,
    title: "Facebook",
    link: "https://facebook.com",
  },
  {
    id: 5,
    title: "Instagram",
    icon: "instagram" as IconTypes,
    link: "https://instagram.com",
  },
  {
    id: 6,
    title: "Youtube",
    icon: "youtube" as IconTypes,
    link: "https://youtube.com",
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
