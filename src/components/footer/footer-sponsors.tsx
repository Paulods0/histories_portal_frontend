import { useGetSponsorsImages } from "@/lib/tanstack-query/partner-image"

const FooterSponsors = () => {
  const footerPlaceholder: string = "sponsors/footer-placeholder.png"
  const { data, isLoading } = useGetSponsorsImages()

  if (isLoading) return <span>Carregando...</span>

  const sponsors = data
    ? [...data, ...Array.from({ length: 6 - data.length })].slice(0, 6)
    : Array.from({ length: 6 })

  const getImgSrc = (sponsor: any): string =>
    sponsor?.image || footerPlaceholder

  return (
    <div className="h-full w-full lg:w-fit flex items-start flex-col ">
      <h1 className="text-2xl lg:text-base font-normal uppercase text-white mb-4">
        Parceiros
      </h1>

      <div className="grid w-full gap-2 grid-cols-2 place-items-start">
        {sponsors.map((sponsor, index) => (
          <div key={index} className="relative w-24 h-10">
            <img
              loading="lazy"
              alt="patrocinador"
              src={getImgSrc(sponsor)}
              className="absolute w-full h-full inset-0 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default FooterSponsors
