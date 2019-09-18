import { Notification } from "./types"

let notificationID = 0
export function createNotification(options: {
  level: string
  content: string
}): Notification {
  return {
    ...options,
    id: notificationID++,
  }
}
