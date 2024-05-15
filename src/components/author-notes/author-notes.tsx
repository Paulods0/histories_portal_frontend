const AuthorNotes = ({
  notes,
  author,
}: {
  author: { firstname: string; lastname: string; image?: string }
  notes: string
}) => {
  return (
    <div className="flex mt-2 w-full px-8 py-4 gap-4 lg:flex-row items-center flex-col lg:self-start mb-10 border border-colorGray-light/30 rounded-sm bg-colorGray-light/10">
      <img
        src={`${author.image ? author.image : "/user.png"}`}
        alt="Imagem do author"
        className="relative size-28 md:size-36 object-contain rounded-full"
      />

      <div className="flex flex-col">
        <h1 className="font-PlayFair text-colorBlack-light font-semibold text-[19px]">
          {`${author.firstname} ${author.lastname}`}
        </h1>

        <p className="text-sm md:text-[15px] text-colorBlack-dark font-OpenSans">
          {notes}
        </p>
      </div>

    </div>
  )
}

export default AuthorNotes
