import React from "react"
import { connect } from "react-redux"

import { setSearch } from "../redux/search/actions"

interface DispatchProps {
  search: (search: string) => void
}
interface StateProps {
  search: string
}
interface OwnProps {
  defaultValue: string
}
type Props = StateProps & DispatchProps & OwnProps

const SearchBar: React.FunctionComponent<Props> = props => {
  const loading = false
  const getSearchValue = (): string => {
    const searchForm = document.getElementById("searchForm") as HTMLInputElement
    if (searchForm) {
      return searchForm.value
    } else {
      return ""
    }
  }
  const onSubmit = (): void => {
    props.search(getSearchValue())
  }

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>): void => {
    if (event.key === "Enter") {
      event.preventDefault()
      event.stopPropagation()
      onSubmit()
    }
  }

  return (
    <form className={` w-full mx-auto max-w-sm content-center py-4 lg:py-0 relative  ${loading ? "bg-gray-900" : ""} `}>
      {loading ? "HELLO WORLD" : ""}
      <input
        onKeyDown={onKeyDown}
        id="searchForm"
        type="search"
        defaultValue={props.defaultValue}
        className="w-full 
                  flex-shrink
                  flex-grow
                  flex-auto
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
        id="searchSubmit"
        type="button"
        onClick={onSubmit}
        className="absolute"
        style={{ top: "0.5rem", right: "1.5rem" }}
      >
        <svg
          className="fill-current hover:text-red-800 text-gray-800 w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
        </svg>
      </button>
    </form>
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
)(SearchBar)
