import { FieldValues, UseFormRegister } from "react-hook-form"

type Props = {
  register: UseFormRegister<FieldValues>
  name: string
}

const InputField = ({ register, name }: Props) => {
  return (
    <div className="p-2 border">
      <input
        {...register(name)}
        type="text"
        placeholder="Nome"
        className="border-none w-full outline-none bg-transparent"
      />
    </div>
  )
}

export default InputField
