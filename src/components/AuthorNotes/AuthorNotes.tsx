const AuthorNotes = () => {
  return (
    <div className="flex justify-between w-full px-8 py-4 gap-4 self-start mb-10 border border-colorGray-light/30 rounded-sm bg-colorGray-light/10">
      <img
        src="/1.jpg"
        alt="Imagem do author"
        className="relative w-24 h-24 object-cover rounded-full"
      />

      <div className="flex flex-col">
        <h1 className="font-PlayFair text-colorBlack-light font-medium text-[19px]">
          Paulo Da Silva
        </h1>
        <p className="text-[15px]  text-colorBlack-dark font-OpenSans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
          temporibus officiis harum atque repudiandae perferendis illum eveniet
          cumque, cupiditate autem odit officia praesentium itaque quod nostrum
          impedit ullam dolorem maxime libero. Nesciunt vero adipisci est
          perspiciatis praesentium doloremque atque quasi modi quaerat?
          Quibusdam sequi minus accusantium labore nemo inventore deleniti
          laborum animi. Laborum dicta magni omnis ut optio dolor dignissimos.
        </p>
      </div>
    </div>
  )
}

export default AuthorNotes
