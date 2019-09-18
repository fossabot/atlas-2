import { createNotification } from "./factory"
import {
  ADD_NOTIFICATION,
  AddNotificationAction,
  REMOVE_NOTIFICATION,
  RemoveNotificationAction,
} from "./types"

export const addNotification = (
  level: string,
  content: string,
): AddNotificationAction => {
  return {
    type: ADD_NOTIFICATION,
    payload: createNotification({ level, content }),
  }
}

export const removeNotification = (id: number): RemoveNotificationAction => {
  return {
    type: REMOVE_NOTIFICATION,
    payload: id,
  }
}
