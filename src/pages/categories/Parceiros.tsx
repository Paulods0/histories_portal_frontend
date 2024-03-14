import { Link } from "react-router-dom"
import HomeCategoryControlller from "../../components/home_category/HomeCategoryControlller"
import { FAKE_PARTNERS } from "../../fakedata"

const Parceiros = () => {
  return (
    <main className="px-8 pb-8">
      <HomeCategoryControlller label="Parceiros" />
      <div className="w-full grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-12 place-items-center">
        {FAKE_PARTNERS.map((partner, index) => (
          <Link
            to={""}
            className="hover:scale-95 ease-out duration-300 transition-all"
          >
            <div
              key={index}
              className="shadow-[0px_2px_8px_1px_#dcdcdc] flex items-center justify-center w-[250px] h-[120px] rounded-xl p-2 "
            >
              <img
                src={partner.img}
                className="object-contain h-[100px] w-full"
                alt="photo"
              />
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}

export default Parceiros
