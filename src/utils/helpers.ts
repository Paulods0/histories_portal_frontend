import { format } from "date-fns"
import { pt } from "date-fns/locale"

export const createMarkup = (value?: string) => {
  return { __html: value!! }
}

export const formateData = (originalDate: string) => {
  const data = format(originalDate, "dd 'de' LLLL 'de' yyyy", {
    locale: pt,
  })
  return data
}
