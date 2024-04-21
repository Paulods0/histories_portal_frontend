import React from "react"
import { FieldError } from "react-hook-form"

type ErrorMessageProps = {
  error?: FieldError
  message?: string
}

const ErrorMessage = ({ error, message }: ErrorMessageProps) => {
  return (
    <>{error && <span className="text-[12px] text-red-700">{message}</span>}</>
  )
}

export default ErrorMessage
