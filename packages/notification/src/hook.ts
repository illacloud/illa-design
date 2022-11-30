import { v4 } from "uuid"
import {
  NotificationGlobalProps,
  NotificationHandler,
  notificationStore,
} from "./notification-store"
import { NotificationProps } from "./interface"

const showImpl = (notification: NotificationProps) => {
  if (
    notificationStore.getNotification().length >
    (notificationStore.getConfig().maxCount ?? 5)
  ) {
    notificationStore.getNotification().shift()
  }
  if (!notification.id) {
    notification.id = v4()
  }
  if (!notification.position) {
    notification.position = "topRight"
  }
  if (!notification.type) {
    notification.type = "normal"
  }
  notificationStore.add(notification)
  return notification.id
}

const handler = {
  info: (notification: NotificationProps) => {
    notification.type = "info"
    return showImpl(notification)
  },
  error: (notification: NotificationProps) => {
    notification.type = "error"
    return showImpl(notification)
  },
  success: (notification: NotificationProps) => {
    notification.type = "success"
    return showImpl(notification)
  },
  warning: (notification: NotificationProps) => {
    notification.type = "warning"
    return showImpl(notification)
  },
  normal: (notification: NotificationProps) => {
    notification.type = "normal"
    return showImpl(notification)
  },
  show: showImpl,
  remove: (id: string) => {
    notificationStore.remove(id)
  },
  clear: () => {
    notificationStore.setNotification([])
  },
  config: (notificationGlobalProps: NotificationGlobalProps) => {
    notificationStore.updateConfig(notificationGlobalProps)
  },
} as NotificationHandler

export function useNotification(): NotificationHandler {
  return handler
}

export const createNotification = useNotification
