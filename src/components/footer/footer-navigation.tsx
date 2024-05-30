import { NAV_LINKS } from "@/utils/constants"
import { Link } from "react-router-dom"

const FooterNavigation = () => {
  return (
    <div className="h-full border-zinc-900 w-full lg:w-fit">
      
      <div className="w-full flex flex-col gap-y-2 items-start">
        <h1 className="font-normal text-white text-base uppercase">
          navegação
        </h1>

        <ul className="text-colorGray-light grid grid-cols-2 w-full place-items-start lg:flex lg:gap-0 lg:flex-col text-base capitalize list-none">
          {NAV_LINKS.map((link, index) => (
            <li key={index}>
              <Link className="text-white" to={link.link}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default FooterNavigation
