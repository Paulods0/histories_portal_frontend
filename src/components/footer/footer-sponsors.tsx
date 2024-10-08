import { partners } from "@/constants"

const FooterSponsors = () => {
  return (
    <div className="h-full w-full lg:w-fit flex items-start flex-col ">
      <h1 className="text-2xl lg:text-base font-normal uppercase text-white mb-4">
        Parceiros
      </h1>

      <div className="grid w-full gap-2 grid-cols-2 place-items-start">
        {partners.map((img, i) => (
          <div key={i} className="relative w-24 h-10">
            <img
              loading="lazy"
              src={img}
              className="absolute w-full h-full inset-0 object-contain"
              alt="patrocinador"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default FooterSponsors
