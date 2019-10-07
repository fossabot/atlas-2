import React from "react"

import { connect } from "react-redux"
import { Job } from "../types/customTypes"

interface StateProps {
  jobs: {
    allJobs: Job[]
    shownJobs: Job[]
  }
}

type Props = StateProps & {}

const Statistics: React.FunctionComponent<Props> = props => {
  return (
    <div className="bg-white flex justify-between p-2">
      <div className="flex-1 text-right md:text-center">
        <h5 className="font-bold uppercase text-gray-600">All Jobs</h5>
        <h3 className="font-bold text-xl">{props.jobs.allJobs.length}</h3>
      </div>

      <div className="flex-1 text-right md:text-center">
        <h5 className="font-bold uppercase text-gray-600">Shown Jobs</h5>
        <h3 className="font-bold text-xl">{props.jobs.shownJobs.length}</h3>
      </div>
    </div>
  )
}
const mapStateToProps = (state: StateProps): StateProps => ({
  jobs: state.jobs,
})

export default connect(
  mapStateToProps,
  {},
)(Statistics)
