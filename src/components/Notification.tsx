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
    case "WARN":
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
    <li className={"w-full p-4 m-4 " + colorClass}>
      <span className="text-lg font-bold pb-4">{props.notification.level}</span>
      <p className="leading-tight">{props.notification.content}</p>
      <button
        className="p-4 bg-red-600"
        onClick={() => props.remove(props.notification.id)}
      >
        x
      </button>
    </li>
  )
}

const mapDispatchToProps = (dispatch: any): DispatchProps => ({
  remove: (id: number): void => {
    dispatch(removeNotification(id))
  },
})

export default connect(
  null,
  mapDispatchToProps,
)(Notification)
