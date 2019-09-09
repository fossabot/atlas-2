import React from "react"

export interface ModalProps {
  show: boolean
  toggle(): void
  children?: React.ReactNode
}

const Modal: React.FunctionComponent<ModalProps> = props => {
  if (props.show) {
    return (
      <div
        className="
      fixed
      w-screen
      h-screen
      animated
      bg-smoke-dark
      fadeIn
      flex
      top-0
      left-0
      z-50
      "
      >
        <div
          className="
        overflow-x-hidden
        overflow-y-auto
        animated
        fadeInUp
        p-10
        m-auto
        md:relative
        pin-b
        align-top
        lg:w-full
        lg:max-w-6xl
        md:justify-center
        bg-white
        md:rounded
        flex
        flex-col
        lg:w-auto
        "
        >
          {props.children}
          <span onClick={props.toggle} className="absolute top-0 right-0 p-4">
            <svg
              className="
            h-6
            w-6
            fill-current
            text-gray-900
            hover:text-indigo-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </span>
        </div>
      </div>
    )
  } else {
    return null
  }
}

export default Modal
