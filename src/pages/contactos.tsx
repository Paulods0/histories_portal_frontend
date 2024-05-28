import ContactBlock from "@/components/contact-block"
import FadeInEffect from "@/components/motion/fade-in"
import { SiYoutube, SiInstagram, SiFacebook } from "react-icons/si"

const Contactos = () => {
  return (
    <main className="flex items-center h-[300px] justify-center mx-auto w-[900px] my-12">
      <FadeInEffect>
        <div className="grid grid-cols-3 gap-12 place-items-center">
          <ContactBlock
            title="Email"
            content="overlandagola@gmail.com"
            link="mailto:overlandagola@gmail.com"
          />

          <ContactBlock title="Residência" content="Angola, Luanda" link="#" />

          <ContactBlock
            title="Telemóvel"
            content="+244 123 456"
            link="+244123456"
          />

          <ContactBlock
            title="Facebook"
            icon="facebook"
            link="https://facebook.com"
          />
          <ContactBlock
            title="Instagram"
            icon="instagram"
            link="https://instagram.com"
          />

          <ContactBlock
            title="Youtube"
            icon="youtube"
            link="https://youtube.com"
          />
        </div>
      </FadeInEffect>
    </main>
  )
}

export default Contactos