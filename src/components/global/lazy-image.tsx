import { useEffect, useRef, useState } from "react"

type Props = {
  image: string
  id: string
  className?: string
}

const LazyImage = (props: Props) => {
  const [isInview, setIsInview] = useState(false)

  const callbackFunction = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsInview(true)
      }
    })
  }

  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction)
    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return isInview ? (
    <img
      loading="lazy"
      ref={ref}
      id={props.id}
      alt="imagem"
      src={props.image}
      className={props.className}
    />
  ) : (
    <div
      ref={ref}
      id={props.id}
      className="h-[250px] w-full object-cover bg-goldenColor"
    />
  )
}

export default LazyImage
