// import React, { InputHTMLAttributes } from "react"
// import { FieldErrors } from "react-hook-form"

// type Props = InputHTMLAttributes<HTMLInputElement> & {
//   name: string
//   error:FieldErrors
// }

// const InputField = forwardRef<HTMLInputElement, Props>((props,ref) => {
//   return    <div className="flex flex-col w-full">
//               <div className="p-2 border w-full">
//                 <input
//                   type="number"
//                   {...register(props.)}
//                   placeholder="Número de telefone"
//                   className="border-none w-full outline-none bg-transparent md:placeholder:text-base placeholder:text-xs md:text-base text-xs"
//                 />
//               </div>
//               {errors.phone && (
//                 <span className="text-xs text-red-600">
//                   {errors.phone.message}
//                 </span>
//               )}
//             </div>
//           </div>
// })

// export default InputField
