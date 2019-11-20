import React from "react"
import { connect } from "react-redux"

import { removeNotification } from "../redux/notifications/actions"
import { Notification as NotificationInterface } from "../redux/notifications/types"

interface DispatchProps {
  remove: (id: number) => void
}

interface StateProps {
  notification: NotificationInterface
}
type NotificationProps = StateProps & DispatchProps

const Notification: React.FunctionComponent<NotificationProps> = props => {
  let color: string
  switch (props.notification.level) {
    case "INFO":
      color = "blue"
      break
    case "WARNING":
      color = "orange"
      break
    case "ERROR":
      color = "red"
      break
    case "SUCCESS":
      color = "green"
      break
    default:
      color = "gray"
  }
  const colorClass = "bg-" + color + "-400"

  return (
    <li key={props.notification.id} className={"w-full p-4 m-4 list-none flex justify-between " + colorClass}>
      <div>
        <span className="text-lg font-bold pb-4">{props.notification.level}</span>
        <p className="leading-tight">{props.notification.content}</p>
      </div>

      <a
        onClick={() => props.remove(props.notification.id)}
        className="text-gray-900 no-underline hover:text-gray-400 "
        href="#"
      >
        <svg className="h-8 py-2 px-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
        </svg>
      </a>
    </li>
  )
}

const mapDispatchToProps = (dispatch: any): DispatchProps => ({
  remove: (id: number): void => {
    dispatch(removeNotification(id))
  },
})

export default connect(null, mapDispatchToProps)(Notification)
