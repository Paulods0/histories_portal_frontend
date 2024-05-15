import FadeInEffect from "@/components/motion/fade-in"

const OverlandExperience = () => {
  return (
    <div className="w-full min-h-screen gap-10 lg:px-12 flex-col ">
      <FadeInEffect>
        <div className="place-items-center h-full grid md:grid-cols-1 grid-cols-1 lg:grid-cols-2 gap-8">
          <h1 className="text-3xl font-Oswald">
            Esta seccção está sendo atualizada.
          </h1>
        </div>
      </FadeInEffect>
    </div>
  )
}

export default OverlandExperience
