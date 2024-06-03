import { format } from "date-fns"
import { pt } from "date-fns/locale"
import imageCompression from "browser-image-compression"
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage"
import { toast } from "react-toastify"
import { storage } from "@/config/firebase"

export const createMarkup = (value?: string) => {
  return { __html: value!! }
}

export const formateData = (originalDate: string) => {
  const data = format(originalDate, "dd 'de' LLLL 'de' yyyy", {
    locale: pt,
  })
  return data
}

export async function handleImageUpload(img: File) {
  const imageFile = img
  // console.log(`originalFile size ${imageFile.size / 1024 / 1024} MB`)

  const options = {
    maxSizeMB: 1,
    maxWidthOrHeight: 1024,
    useWebWorker: true,
  }

  try {
    const compressedFile = await imageCompression(imageFile, options)
    // console.log(`newFile size ${compressedFile.size / 1024 / 1024} MB`)
    return compressedFile
  } catch (error) {
    console.log(error)
  }
}

export function renameImageName(image: string) {
  const regex = /[^\w\s]/g
  const imageName = image.split(".")
  const ext = imageName[imageName.length - 1]
  const name = imageName[0]
  const rawName = new Date().getTime() + "-" + name
  const rawNameWithouNonAlphaNumeric = rawName.replace(regex, "")
  const filename = rawNameWithouNonAlphaNumeric.concat(`.${ext}`)

  return filename
}

export async function uploadImageToFirebaseStorage(
  image: File,
  firbaseImageFolderPath: string = "classified-posts"
) {
  const filename = renameImageName(image?.name)
  const imageRef = ref(storage, `${firbaseImageFolderPath}/` + filename)
  const uploadTask = uploadBytesResumable(imageRef, image)

  await new Promise((resolve: (value?: unknown) => void, reject) => {
    uploadTask.on(
      "state_changed",
      () => {},
      (error) => {
        toast.error(error.message, {
          autoClose: 1000,
          hideProgressBar: true,
        })
        reject()
      },
      () => {
        resolve()
      }
    )
  })
  const downloadURL = await getDownloadURL(uploadTask.snapshot.ref)
  return downloadURL
}
