import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"
import { HiOutlineHome } from "react-icons/hi"
import { FiEdit2 } from "react-icons/fi"
import { ImFilesEmpty } from "react-icons/im"
import { MdOutlineStorefront } from "react-icons/md"
import { SiGoogleanalytics } from "react-icons/si"
import { BiCategory } from "react-icons/bi"
import { FaUserPlus } from "react-icons/fa"

export const url = "http://localhost:8080/api/"

export const NAV_LINKS = [
  {
    name: "Loja",
    link: "/pages/loja",
  },
  {
    name: "Sobre nós",
    link: "/pages/sobre",
  },
  {
    name: "Subscreve",
    link: "/pages/subscrever",
  },
  {
    name: "Escreve para nós",
    link: "/pages/escreveparanos",
  },
  {
    name: "Quero ser vosso",
    link: "/pages/queroservosso",
  },
]
export const SOCIAL_MEDIA_LINKS = [
  {
    icon: <FaFacebookF size={14} color="#FFF" />,
    link: "https://facebook.com",
    name: "facebook",
  },
  {
    icon: <FaTwitter size={14} color="#FFF" />,
    link: "https://x.com",
    name: "twitter",
  },
  {
    icon: <FaYoutube size={14} color="#FFF" />,
    link: "https://youtube.com",
    name: "youtube",
  },
  {
    icon: <FaInstagram size={14} color="#FFF" />,
    link: "https://instagram.com",
    name: "instagram",
  },
]
export const SECOND_NAV_BAR_LINKS = [
  {
    name: "Classificados",
    link: "/categoria/classificados",
  },
  {
    name: "Agenda AO",
    link: "/categoria/agenda",
  },
  {
    name: "Historias",
    link: "/categoria/historias",
  },
  {
    name: "Passeios",
    link: "/categoria/passeios",
  },
  {
    name: "Reviews",
    link: "/categoria/reviews",
  },
  {
    name: "Jornal Overland",
    link: "/categoria/jornaloverland",
  },
  {
    name: "Parceiros",
    link: "/pages/parceiros",
  },
]
export const ADMIN_DASHBOARD_NAV_LINKS = [
  {
    name: "Home",
    icon: <HiOutlineHome size={24} />,
    link: "/history/page/admin/dashboard/home",
  },
  {
    name: "Novo post",
    icon: <FiEdit2 size={20} />,
    link: "/history/page/admin/dashboard/novopost",
  },
  {
    name: "Posts",
    icon: <ImFilesEmpty size={20} />,
    link: "/history/page/admin/dashboard/posts",
  },
  {
    name: "Loja",
    icon: <MdOutlineStorefront size={20} />,
    link: "/history/page/admin/dashboard/loja",
  },
  {
    name: "Ads",
    icon: <SiGoogleanalytics size={20} />,
    link: "/history/page/admin/dashboard/ads",
  },
  {
    name: "Categorias",
    icon: <BiCategory size={20} />,
    link: "/history/page/admin/dashboard/categorias",
  },
  {
    name: "Adicionar gestor",
    icon: <FaUserPlus size={20} />,
    link: "/history/page/admin/dashboard/adicionargestor",
  },
]
