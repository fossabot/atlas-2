import React from "react"
import { connect } from "react-redux"

import { setSearch } from "../redux/search/actions"

export interface MenuProps {
  isFullscreen: boolean
  toggleModal(): void
  toggleFullscreen(): void
}

interface DispatchProps {
  search: (search: string) => void
}

interface StateProps {
  search: string
}
// interface OwnProps {}
type Props = StateProps & DispatchProps & MenuProps

const Menu: React.FunctionComponent<Props> = props => {
  const getSearchValue = (): string => {
    const searchForm = document.getElementById("searchForm") as HTMLInputElement
    if (searchForm) {
      return searchForm.value
    } else {
      return ""
    }
  }

  return (
    <nav id="header" className="w-full bg-white border-b border-gray-400">
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
          <div className="flex-1 w-full mx-auto max-w-sm content-center py-4 lg:py-0">
            <div className="relative pull-right pl-4 pr-4 md:pr-0">
              <div className="flex">
                <input
                  id="searchForm"
                  type="search"
                  defaultValue="Nürnberg"
                  className="w-full 
                flex-shrink
                flex-grow
                flex-auto
                text-right
                leading-normal
                w-px
                flex-1
                border
                h-8
                transition
                border-grey-light
                rounded
                px-3
                focus:border-indigo-500
                focus:outline-none
                hover:bg-gray-200
                "
                ></input>
                <button
                  onClick={() => {
                    props.search(getSearchValue())
                  }}
                >
                  Search
                </button>
              </div>
              <div
                className="absolute search-icon"
                style={{ top: "0.5rem", left: "1.5rem" }}
              >
                <svg
                  className="fill-current pointer-events-none text-gray-800 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
                </svg>
              </div>
            </div>
          </div>
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
const mapStateToProps = (state: StateProps): StateProps => ({
  search: state.search,
})

const mapDispatchToProps = (dispatch: any): DispatchProps => ({
  search: (search: string) => dispatch(setSearch(search)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Menu)
