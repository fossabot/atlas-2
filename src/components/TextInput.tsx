import React from "react"

export interface TextInputProps {
  label: string
  placeholder?: string
}

const TextInput: React.FunctionComponent<TextInputProps> = props => {
  return (
    <div className="flex w-full mt-2">
      <span className="flex w-1/2 lg:w-1/3 items-center bg-gray-100 rounded-l border border-r-0 border-grey-light px-3 text-grey-dark text-sm whitespace-no-wrap">
        {props.label}
      </span>
      <input
        type="text"
        placeholder={props.placeholder}
        className="
        flex-shrink
        flex-grow
        flex-auto
        text-right
        leading-normal
        w-px
        flex-1
        border
        h-8
        border-grey-light
        rounded
        rounded-l-none
        px-3
        relative
        focus:border-indigo-500
        focus:outline-none
        hover:bg-gray-200
      "
      ></input>
    </div>
  )
}

export default TextInput
