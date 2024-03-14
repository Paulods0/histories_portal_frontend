import { Link } from "react-router-dom"
import { NAV_LINKS, SOCIAL_MEDIA_LINKS } from "../../constants"

const StoreFooter = () => {
  return (
    <footer className=" bg-black flex-1 p-5 h-[800px] text-white">
      <div className="flex flex-col items-center justify-between">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 place-items-center">
          <div>
            <h1 className="mb-4 text-lg font-normal uppercase">Navegação</h1>
            <ul className="gap-2 flex flex-col">
              {NAV_LINKS.filter((link) => link.name != "loja").map(
                (link, index) => (
                  <li key={index}>
                    <Link to={link.link} target="_blank" className="underline">
                      {link.name != "Loja" ? link.name : ""}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h1 className="mb-4 text-lg font-normal uppercase">
              Medias Sociais
            </h1>
            <ul className="flex flex-col gap-2">
              {SOCIAL_MEDIA_LINKS.map((link, index) => (
                <li key={index} className="flex gap-2 items-center">
                  <div>{link.icon}</div>
                  <Link to={link.link}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          {/* <div>3</div> */}
        </div>
        <hr className="h-[1px] rounded-full my-12 bg-white/20 w-full" />

        <div>
          <span>&copy;</span> 2024 Overland Journal.
        </div>
      </div>
    </footer>
  )
}

export default StoreFooter
