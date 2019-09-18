import React from "react"

import { Job } from "../redux/jobs/types"

interface Props {
  job: Job
}

const JobDetail: React.FunctionComponent<Props> = props => {
  const job = props.job
  return (
    <div className="flex items-center bg-gray-100">
      <div className="w-1/6 lg:w1-4">
        <img src={job.logo}></img>
      </div>
      <div className="m-4">
        <div className="uppercase text-xl font-bold">{job.title}</div>
        <div className="flex justify-between text-xs font-thin  text-gray-700">
          <span>{job.corp}</span>
          <span>{job.score * 100}%</span>
        </div>
        <div className="flex justify-between">
          <span className="uppercase, text-xs">Germany, Nürnberg</span>
          <a className="ml-2 text-xs font-bold" href="#">
            Ansehen
          </a>
        </div>
      </div>
    </div>
  )
}

export default JobDetail
