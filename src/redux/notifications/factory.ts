import { Notification } from "./types"

let notificationID = 0
/**
 * @param options
 */
export function createNotification(options: { level: string; content: string }): Notification {
  return {
    ...options,
    id: notificationID++,
  }
}
