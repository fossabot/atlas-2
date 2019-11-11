import React from "react"

import { Job } from "../types/customTypes"

interface Props {
  job: Job
}

const JobDetail: React.FunctionComponent<Props> = props => {
  const job = props.job
  return (
    <div className="flex bg-gray-100 shadow-lg rounded-lg overflow-hidden">
      <div className="h-full">
        <img className="object-cover" src={job.logo}></img>
      </div>
      <div className="w-full">
        <div className="p-4">
          <div className="flex justify-between">
            <p className="uppercase tracking-wide text-sm font-bold text-gray-700">{job.corp}</p>
            <p>{job.score}</p>
          </div>
          <p className="text-3xl text-gray-900">{job.title}</p>
          <p className="text-gray-700">{job.type}</p>
        </div>
        <div className="flex justify-between items-center p-4 border-t border-gray-300 text-gray-700">
          <div className="">
            <p>
              {job.date}
              <span className="text-gray-900 font-bold ml-2">Nürnberg</span>
            </p>
          </div>
          <div className="">
            <a className="text-gray-900 font-bold hover:text-jb-primary" href="#">
              View
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobDetail
