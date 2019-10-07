import React from "react"

import SearchBar from "./SearchBar"

export interface MenuProps {
  isFullscreen: boolean
  toggleModal(): void
  toggleFullscreen(): void
}

const Menu: React.FunctionComponent<MenuProps> = props => {
  return (
    <nav id="header" className="w-full bg-white">
      <div className="w-full flex flex-no-wrap items-center justify-between mt-0 py-4">
        <div className="pl-4 flex items-center">
          <a
            className="text-gray-900 text-base no-underline hover:no-underline font-extrabold text-xl"
            href="#"
          >
            Map
          </a>
        </div>
        <div
          className="flex-grow flex  items-center w-auto block"
          id="nav-content"
        >
          <SearchBar defaultValue="Nürnberg"></SearchBar>

          <ul className="list-reset lg:flex justify-end items-center">
            <li className="mr-3 py-2 lg:py-0">
              <a
                onClick={props.toggleModal}
                className="inline-block text-gray-900 no-underline hover:text-gray-900 hover:underline py-2 px-4"
                href="#"
              >
                Modal
              </a>
            </li>
            <li className="mr-3 py-2 lg:py-0">
              <a
                onClick={props.toggleFullscreen}
                className="text-gray-900 no-underline hover:text-gray-900 "
                href="#"
              >
                <svg
                  className="h-8 py-2 px-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  {props.isFullscreen ? (
                    <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                  ) : (
                    <path d="M2.8 15.8L0 13v7h7l-2.8-2.8 4.34-4.32-1.42-1.42L2.8 15.8zM17.2 4.2L20 7V0h-7l2.8 2.8-4.34 4.32 1.42 1.42L17.2 4.2zm-1.4 13L13 20h7v-7l-2.8 2.8-4.32-4.34-1.42 1.42 4.33 4.33zM4.2 2.8L7 0H0v7l2.8-2.8 4.32 4.34 1.42-1.42L4.2 2.8z" />
                  )}
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Menu
