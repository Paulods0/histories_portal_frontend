import { useLocation } from "react-router-dom"

import NewsletterForm from "./newsletter-form"
import FooterSponsors from "./footer-sponsors"
import FooterNavigation from "./footer-navigation"
import FooterOverland from "./footer-overland"

const Footer = () => {
  const path = useLocation()

  const isStore =
    path.pathname.includes("/pages/loja") ||
    path.pathname.includes("/unsubscribe/")
  if (isStore) {
    return
  }

  return (
    <footer className="w-full bg-colorGray-medium flex mt-10 flex-col lg:flex-row p-8 lg:px-8 lg:py-2 font-Oswald ">
      <div className="mx-auto w-full grid grid-cols-1 lg:grid-cols-4 place-items-start gap-y-12 lg:gap-y-0 lg:place-items-center lg:p-2">
        <FooterOverland />
        <NewsletterForm />
        <FooterNavigation />
        <FooterSponsors />
      </div>
    </footer>
  )
}

export default Footer
