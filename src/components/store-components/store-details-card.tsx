const StoreDetailsCard = ({ image }: { image: string }) => {
  return (
    <div className="relative shadow-md w-[200px] h-[200px]">
      <img
        src={image}
        className="absolute object-cover inset-0 w-full h-full"
        alt="Imagem do produto"
      />
    </div>
  )
}

export default StoreDetailsCard
