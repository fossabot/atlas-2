import React from "react"

import Form from "./Form"

interface ModalProps {
  show: boolean
  setShowing(show: boolean): void
  children?: React.ReactNode
}

const Modal: React.FunctionComponent<ModalProps> = props => {
  const closeOnESC = (event: KeyboardEvent): void => {
    if (event.key === "Enter") {
      props.setShowing(false)
    }
  }
  const close = (): void => {
    props.setShowing(false)
  }

  return (
   
    <div
      style={{
        transform: props.show ? "translateY(0vh)" : "translateY(-100vh)",
        opacity: props.show ? 1 : 0,
      }}
      className="fixed pin w-full h-full top-0 flex items-center justify-center"
      >
      <div className="p-16 bg-white z-50 shadow-xl">
        {props.children}
        <div className="flex justify-end pt-2">
          <button
            onClick={close}
            className="
            bg-grey-lighter flex-1 md:flex-none border-b-2 border-red-700 ml-2 hover:bg-red-200 text-grey-900 font-bold py-4 px-6 rounded"
            >
            Close
          </button>
          <button className="bg-grey-lighter flex-1 border-b-2 md:flex-none border-blue-700 ml-2 hover:bg-blue-200 text-grey-900 font-bold py-4 px-6 rounded">
            Search
          </button>
        </div>
            </div>
    </div>
  )
}

export default Modal
