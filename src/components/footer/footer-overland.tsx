import { SOCIAL_MEDIA_LINKS } from "@/utils/constants"

const FooterOverland = () => {
  return (
    <div className="text-white flex flex-row lg:flex-col items-start justify-between h-full w-full lg:w-fit">
      <div className="flex flex-col">
        <h4 className="text-base font-normal uppercase">overland angola</h4>

        <p className="text-colorGray-light text-sm lg:text-base leading-[23px]">
          A aventura começa aqui.
        </p>
      </div>

      <img
        src="/logo/logotipo-texto.png"
        alt="logotipo"
        className="relative md:-left-4 lg:-left-2 self-start w-28 md:w-44 lg:w-32 lg:h-14 object-contain"
      />

      <div className="flex flex-col gap-0">
        <h2 className="font-normal text-white text-base uppercase">
          segue-nos
        </h2>

        <ul className="flex mt-2 lg:mt-0 items-center gap-3 justify-start">
          {SOCIAL_MEDIA_LINKS.map((link, index) => (
            <li key={index}>
              <a
                className="text-xl lg:p-0 lg:text-base"
                key={index}
                href={link.link}
                target="_blank"
              >
                {link.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default FooterOverland
