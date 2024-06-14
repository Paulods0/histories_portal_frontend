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
    title: "Contacto telefónico",
    content: "+244 939 378 026",
    link: "tel:+244939378026",
  },

  {
    id: 3,
    icon: "whatsapp" as IconTypes,
    title: "whatsapp travelers help group",
    link: "https://chat.whatsapp.com/COmdwH2ND7p89srUi1WQZe",
  },
  {
    id: 4,
    icon: "facebook" as IconTypes,
    title: "Facebook",
    link: "https://www.facebook.com/clubeoverland.angola",
  },
  {
    id: 5,
    title: "Instagram",
    icon: "instagram" as IconTypes,
    link: "https://www.instagram.com/clubeoverlandangola/",
  },
  {
    id: 6,
    title: "Youtube",
    icon: "youtube" as IconTypes,
    link: "https://www.youtube.com/@OverlandAngola",
  },
]

const Contactos = () => {
  return (
    <main className="flex items-center lg:h-[70vh] justify-center mx-auto w-full md:w-[900px] my-12">
      <div className="flex flex-col w-full h-full gap-8 px-8">
        <div className="w-full flex items-center justify-center">
          <ContactBlock
            link={contacts[0].link}
            icon={contacts[0].icon}
            title={contacts[0].title}
            content={contacts[0]?.content}
          />
        </div>
        <div className="w-full gap-4 flex lg:flex-row flex-col items-center justify-center">
          <ContactBlock
            link={contacts[1].link}
            icon={contacts[1].icon}
            title={contacts[1].title}
            content={contacts[1]?.content}
          />
          <div className="w-full text-center">
            <ContactBlock
              link={contacts[2].link}
              icon={contacts[2].icon}
              title={contacts[2].title}
              content={contacts[2]?.content}
            />
          </div>
        </div>
        <div className="w-full gap-4 flex lg:flex-row flex-col items-center justify-center ">
          <ContactBlock
            link={contacts[3].link}
            icon={contacts[3].icon}
            title={contacts[3].title}
            content={contacts[3]?.content}
          />
          <ContactBlock
            link={contacts[4].link}
            icon={contacts[4].icon}
            title={contacts[4].title}
            content={contacts[4]?.content}
          />
          <ContactBlock
            link={contacts[5].link}
            icon={contacts[5].icon}
            title={contacts[5].title}
            content={contacts[5]?.content}
          />
        </div>
      </div>
    </main>
  )
}

export default Contactos
//  <FadeInEffect key={contact.id} index={contact.id}>
//             <ContactBlock
//               link={contact.link}
//               icon={contact.icon}
//               title={contact.title}
//               content={contact?.content}
//             />
//           </FadeInEffect>
