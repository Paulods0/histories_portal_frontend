const AuthorNotes = ({
  notes,
  author,
}: {
  author: { firstname: string; lastname: string; image?: string }
  notes: string
}) => {
  console.log(author)

  return (
    <div className="flex mt-20 justify-between w-full px-8 py-4 gap-4 self-start mb-20 border border-colorGray-light/30 rounded-sm bg-colorGray-light/10">
      <img
        src={`${author.image ? author.image : "/user.png"}`}
        alt="Imagem do author"
        className="relative w-20 h-20 object-cover rounded-full"
      />
      {/* ${formatarData(data!!.createdAt)} */}
      <div className="flex flex-col">
        <h1 className="font-PlayFair text-colorBlack-light font-normal text-[19px]">
          {`${author.firstname} ${author.lastname}`}
        </h1>
        <p className="text-[15px]  text-colorBlack-dark font-OpenSans">
          {notes}
        </p>
      </div>
    </div>
  )
}

export default AuthorNotes
