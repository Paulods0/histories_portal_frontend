import { z } from "zod"

export const ClassifiedFormValidation = z.object({
  fisrtname: z.string().min(1, { message: "*Por favor insira o seu nome." }),
  lastname: z
    .string()
    .min(1, { message: "*Por favor insira o seu sobrenome." }),
  phonenumber: z.string().regex(/^\d+$/, {
    message: "*Por favor insira apenas números para o número de telefone.",
  }),

  email: z.string().email({ message: "*Por favor insira um email válido." }),
  productname: z
    .string()
    .min(1, { message: "*Por favor insira o nome do artigo." }),
  price: z
    .string()
    .regex(/^\d+$/, {
      message: "*Por favor insira apenas números para o preço do artigo.",
    })
    .min(3, { message: "*Por favor insira o preço do artigo." }),
  image: z.array(
    z.object({
      name: z.custom<File>(),
    })
  ),
})

export const buyProductFormSchema = z.object({
  name: z.string().min(1, "*Insira o seu nome"),
  email: z.string().min(1, "*Insira o seu email").email(),
  phone: z.coerce.string().min(1, "*Insira o seu número de telefone"),
})

export type BuyProductType = z.infer<typeof buyProductFormSchema>
