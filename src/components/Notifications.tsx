import React from "react"
import { connect } from "react-redux"

import { Notification as NotificationInterface } from "../redux/notifications/types"
import Notification from "./Notification"

interface StateProps {
  notifications: {
    notifications: NotificationInterface[]
  }
}

type NotificationsProps = StateProps

const Notifications: React.FunctionComponent<NotificationsProps> = props => {
  return (
    <ul className="Notifications">
      {props.notifications.notifications.map(notification => {
        return (
          <Notification
            key={notification.id}
            notification={{
              id: notification.id,
              level: notification.level,
              content: notification.content,
            }}
          />
        )
      })}
    </ul>
  )
}

const mapStateToProps = (state: StateProps): StateProps => ({
  notifications: state.notifications,
})

export default connect(mapStateToProps, {})(Notifications)
