import { Link } from "react-router-dom"
import HomeCategoryControlller from "../components/home_category/HomeCategoryControlller"
import SwiperPosts from "../components/swiper-posts/SwiperPosts"

const AboutUs = () => {
  return (
    <main className="px-8 flex py-3 flex-col w-full h-full items-center justify-center">
      <div className="relative w-full h-[800px]">
        <img
          src="/logotipo-tradicional.png"
          alt=""
          className="absolute inset-0 w-full h-full object-contain"
        />
      </div>

      <div className="flex w-full h-full items-center justify-center flex-col">
        <h1 className="font-semibold font-Oswald text-[41px] text-center">
          Sobre nós
        </h1>
        <div className="w-full  mb-6">
          <h1 className="font-PlayFair text-[36px] font-medium text-left">
            About Expedition Portal
          </h1>
          <p className="font-OpenSans text-[15px]">
            Expedition Portal is a community of adventure travelers, where the
            primary means of exploration is by 4wd and motorcycle. Founded in
            2005 by Scott Brady, CEO of Overland International, Expedition
            Portal is operated by a team of experienced adventurers, our staff
            having completed expeditions on all seven continents and travels in
            140+ countries. With the growing popularity of overland travel,
            Expedition Portal has expanded in membership and content to
            represent the single-largest repository of online overland resources
            on the web. This includes 4,000+ feature editorials, 180,000+
            community members on the forum with over 2.5 million forum posts.
            Most know us as ExPo.
          </p>
        </div>

        <div className="w-full mb-6">
          <h1 className="font-PlayFair font-medium text-left text-[36px]">
            About Overland International
          </h1>
          <p className="font-OpenSans text-[15px]">
            Overland International, Inc. is the parent company for the Overland
            Journal magazine, the Expedition Portal website and the Overland
            Rally event series. Along with these channels, our team also
            produces high-quality video for the web and television. The company
            is an employee-owned, veteran-owned business headquartered in
            Prescott, Arizona.
          </p>
        </div>
        <div className="w-full">
          <h1 className="font-PlayFair font-medium text-left text-[36px]">
            About Overland Journal
          </h1>
          <p className="font-OpenSans text-[15px]">
            Started in 2007, Overland Journal is an archive quality, journal
            format publication dedicated to expedition travel and exploration in
            North America and around the world. The magazine is published five
            times per year with a print and digital circulation of 20,000
            copies. Overland Journal features over 140 pages of expedition
            vehicles, travel stories, equipment reviews and breathtaking
            photography. Learn more about Overland Journal at
            overlandjournal.com.
          </p>
        </div>
        <div className="w-full mt-6">
          <h1 className="font-PlayFair font-medium text-left text-[36px]">
            What is Overlanding?
          </h1>
          <p className="font-OpenSans text-[15px]">
            Overlanding is about exploration and adventure travel. While the
            roads and trails we travel might be rough or technically
            challenging, they are the means to an end, not the goal itself. The
            pursuit is to see and learn about our world, whether on a weekend
            trip 100 miles from home or a 10,000-mile expedition across another
            continent. The vehicle and equipment can be simple or extravagant –
            they, too, are simply means to an end. History, wildlife, culture,
            scenery, self-sufficiency – these are the rewards of overlanding.
            Click here for a complete definition.
          </p>
        </div>
      </div>

      <div className="mt-8 w-full flex flex-col">
        <div className="text-colorGray font-semibold font-Roboto  uppercase text-[12px] flex self-start gap-1">
          <h1 className="text-colorGray-light">Também em</h1>
          <Link to="/">www.overlandangola.com</Link>
        </div>
        <SwiperPosts />
      </div>
    </main>
  )
}

export default AboutUs
