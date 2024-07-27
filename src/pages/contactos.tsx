import ContactBlock, { IconTypes } from "@/components/contact-block"
import { Helmet } from "react-helmet-async"

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
    <>
      <Helmet>
        <title>Contactos | Overland</title>
        <meta name="description" content="Contactos Overland." />
      </Helmet>
      <main className="flex items-center lg:min-h-[70vh] justify-center mx-auto w-full md:w-[900px] my-12">
        <div className="flex flex-col w-full items-center h-full gap-8 px-8">
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

          <ul className="w-full items-center justify-center gap-2 flex flex-col p-8 border">
            <li className="capitalize space-x-1 font-medium text-lg">
              <span>clube overland admin:</span>
              <span className="text-orangeColor">ricardo matos</span>
            </li>
            <li className="capitalize space-x-1 font-medium text-lg">
              <span>clube overland public affairs:</span>
              <span className="text-orangeColor">daniel alberto</span>
            </li>
            <li className="capitalize space-x-1 font-medium text-lg">
              <span>managment/help desk:</span>
              <span className="text-orangeColor">
                raul souza/amilcar xavier
              </span>
            </li>
            <li className="capitalize space-x-1 font-medium text-lg">
              <span>webmaster/content manager:</span>
              <span className="text-orangeColor">tiago baptista</span>
            </li>
          </ul>
        </div>
      </main>
    </>
  )
}

export default Contactos
