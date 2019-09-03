import React from "react"

const Form: React.FunctionComponent = () => {
  return (
    <form className="w-full max-w-xl">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block
        uppercase
        tracking-wide
        text-gray-800
        text-xs
        font-bold
        mb-2"
            htmlFor="grid-name"
          >
            Name
          </label>
          <input
            className="block
        w-full
        bg-transparent
        text-gray-800
        border
        border-gray-400
        py-3
        px-4
        leading-tight focus:outline-none focus:bg-gray-100 focus:border-orange-500"
            id="grid-name"
            type="text"
            placeholder="Your Name"
          ></input>
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-gray-800 text-xs font-bold mb-2"
            htmlFor="grid-email"
          >
            Email
          </label>
          <input
            className="block w-full bg-transparent text-gray-800 border border-gray-400  py-3 px-4 leading-tight focus:outline-none focus:bg-gray-100 focus:border-orange-500"
            id="grid-email"
            type="email"
            placeholder="Your Email"
          ></input>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-800 text-xs font-bold mb-2"
            htmlFor="grid-message"
          >
            Message
          </label>
        </div>
      </div>
      <div className="flex justify-end">
        <button
          className="
          bg-transparent
          border
          border-gray-500
          font-semibold
          hover:bg-gray-200
          hover:text-gray-900
          px-4
          py-2
          text-gray-800
          hover:border-transparent
"
        >
          Submit
        </button>
      </div>
    </form>
  )
}

export default Form
