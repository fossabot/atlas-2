import {
  ADD_NOTIFICATION,
  NotificationActionTypes,
  NotificationState,
  REMOVE_NOTIFICATION,
} from "./types"

const initialState: NotificationState = { notifications: [] }

export default function(
  state: NotificationState = initialState,
  action: NotificationActionTypes,
): NotificationState {
  switch (action.type) {
    case ADD_NOTIFICATION:
      return {
        notifications: [action.payload, ...state.notifications],
      }
    case REMOVE_NOTIFICATION:
      return {
        notifications: state.notifications.filter(
          notification => notification.id !== action.payload,
        ),
      }
    default:
      return state
  }
}
