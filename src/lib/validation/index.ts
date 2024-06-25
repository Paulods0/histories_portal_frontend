import { handleImageUpload } from "@/utils/helpers"
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
  code: z.coerce.string().nullable(),
  name: z.string().min(1, "*Insira o seu nome"),
  email: z.string().min(1, "*Insira o seu email").email(),
  phone: z.coerce.string().min(1, "*Insira o seu número de telefone"),
})

export const subscribeFormSchema = z.object({
  country: z.string(),
  countryCode: z.string(),
  name: z.string().min(1, "*Insira o seu nome"),
  email: z.string().min(1, "*Insira o seu email").email(),
  phone: z.coerce.string().min(1, "*Insira o seu número de telefone"),
})

export const writeForUsSchemaType = z.object({
  name: z.string().min(1, "*Insira o seu nome"),
  country: z.string().optional(),
  email: z.string().min(1, "*Insira o seu email").email(),
  countryCode: z.string().optional(),
  contextualize: z
    .string()
    .min(1, "*Contextualize a sua história")
    .max(400, "*Número máximo  de caracteres: 400"),
  write: z
    .string()
    .min(1, "*Escreva para nós")
    .max(400, "*Número máximo de caracteres: 400"),
  phone: z.coerce.string().min(1, "*Insira o seu número de telefone"),
  images: z.array(
    z.object({
      image: z.instanceof(FileList).transform((file) => {
        if (file.item(0) !== null) {
          return handleImageUpload(file.item(0)!!)
        }
      }),
    })
  ),
})

export const wantToBeYoursFormSchema = z.object({
  name: z.string().min(1, "*Insira o seu nome"),
  country: z.string().optional(),
  email: z.string().min(1, "*Insira o seu email").email(),
  countryCode: z.string().optional(),
  phone: z.coerce.string().min(1, "*Insira o seu número de telefone"),
  type: z.string().min(1, "*Selecione uma das opções"),
  description: z
    .string()
    .min(1, "*Que tipo de parceria gostaria de estabelecer connosco?"),
})

export const classifiedFormSchema = z.object({
  name: z.string().min(1, "*Insira o nome do produto"),
  author: z.object({
    firstname: z.string().min(1, "*Insira o seu nome"),
    lastname: z.string().min(1, "*Insira o seu sobrenome"),
    email: z.string().min(1, "*Insira o seu sobrenome").email(),
    phone: z.coerce.string().min(1, "*Insira o seu número de telefone"),
  }),
  images: z
    .array(
      z.object({
        image: z.instanceof(FileList).transform((file) => {
          if (file.item(0) !== null) {
            return handleImageUpload(file.item(0)!!)
          }
        }),
      })
    )
    .max(3, "Não deve ter mais que 3 imagens")
    .optional(),

  image: z
    .instanceof(FileList)
    .refine((image) => {
      return image.item(0) !== null
    }, "*Insira uma imagem")
    .transform((image) => {
      if (image.item(0) !== null) {
        return handleImageUpload(image.item(0)!!)
      }
    }),
  content: z.string().min(1, "*Insira uma descrição"),
  price: z.coerce.string().min(1, "*Insira um o preço do produto"),
  type: z.string().optional(),
})

export type ClassifiedFormType = z.infer<typeof classifiedFormSchema>

export type WantToBeYoursFormType = z.infer<typeof wantToBeYoursFormSchema>
export type WriteForUsFormType = z.infer<typeof writeForUsSchemaType>
export type SubscribeFormType = z.infer<typeof subscribeFormSchema>
export type BuyProductType = z.infer<typeof buyProductFormSchema>
