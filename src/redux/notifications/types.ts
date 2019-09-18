export const ADD_NOTIFICATION = "ADD_NOTIFICACTION"
export const REMOVE_NOTIFICATION = "REMOVE_NOTIFICATION"

export interface Notification {
  id: number
  level: string
  content: string
}

export interface AddNotificationAction {
  type: typeof ADD_NOTIFICATION
  payload: Notification
}

export interface RemoveNotificationAction {
  type: typeof REMOVE_NOTIFICATION
  payload: number
}

export interface NotificationState {
  notifications: Notification[]
}

export type NotificationActionTypes =
  | AddNotificationAction
  | RemoveNotificationAction
