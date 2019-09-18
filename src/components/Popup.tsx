import React from "react"

const Popup: React.FunctionComponent = () => {
  return (
    <div className="relative rounded-lg block flex items-center bg-gray-100 shadow-xl">
      <div className="relative w-2/5 h-full overflow-hidden rounded-t-lg rounded-t-none rounded-l-lg">
        <img
          className="absolute inset-0 w-full h-full object-cover object-center"
          src="https://www.designtagebuch.de/wp-content/uploads/mediathek//2019/01/bosch-markenzeichen-700x513.jpg"
          alt=""
        ></img>

        <div className="absolute w-full h-full bg-jb-primary opacity-75"></div>
        <div className="absolute w-full h-full flex items-center justify-center fill-current text-white">
          <span className="text-6xl font-black uppercase">Bosch</span>
        </div>
        <div className="w-3/5 h-full flex items-center bg-gray-100 rounded-lg">
          <div className="p-12 md:pr-24 md:pl-16 md:py-12">
            <p className="text-gray-600">
              <span className="text-gray-900">Bosch</span> is a UK-based fashion
              retailer that has nearly doubled in size since last year. They
              integrated Stripe to deliver seamless checkout across mobile and
              web for customers in 100+ countries, all while automatically
              combating fraud.
            </p>
            <a
              className="flex items-baseline mt-3 text-indigo-600 hover:text-indigo-900 focus:text-indigo-900"
              href=""
            >
              <span>Learn more about our users</span>
              <span className="text-xs ml-1">&#x279c;</span>
            </a>
          </div>
          <svg
            className="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-gray-100 -ml-12"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon points="0,100 100,50 100,0 0,0" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Popup
