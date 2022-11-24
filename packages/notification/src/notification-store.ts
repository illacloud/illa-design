import { v4 } from "uuid"
import { NotificationProps } from "./interface"

export interface NotificationGlobalProps {
  maxCount?: number
  duration?: number
}

export interface NotificationHandler {
  info: (Notification: NotificationProps) => string
  error: (Notification: NotificationProps) => string
  success: (Notification: NotificationProps) => string
  warning: (Notification: NotificationProps) => string
  normal: (Notification: NotificationProps) => string
  show: (Notification: NotificationProps) => string
  remove: (id: string) => void
  config: (NotificationGlobalProps: NotificationGlobalProps) => void
  clear: () => void
}

export interface SubListener {
  listenerId: string
  onStoreChange: () => void
}

export interface NotificationStoreHandler {
  getNotification: () => NotificationProps[]
  setNotification: (NotificationList: NotificationProps[]) => void
  subscribe: (onStoreChange: () => void) => SubListener
  unSubscribe: (listenerId: string) => void
  updateConfig: (NotificationGlobalProps: NotificationGlobalProps) => void
  getConfig: () => NotificationGlobalProps
  add: (Notification: NotificationProps) => void
  remove: (NotificationId: string) => void
}

export interface NotificationStore {
  maxCount: number
  duration: number
  listener: SubListener[]
  NotificationList: NotificationProps[]
}

const store = {
  maxCount: 5,
  duration: 3000,
  listener: [],
  NotificationList: [],
} as NotificationStore

function createNotificationStore(): NotificationStoreHandler {
  return {
    getNotification: () => {
      return store.NotificationList
    },
    setNotification: (NotificationList: NotificationProps[]) => {
      store.NotificationList = NotificationList
      store.listener.forEach((listener) => {
        listener.onStoreChange()
      })
    },
    subscribe: (change) => {
      const listener = {
        listenerId: v4(),
        onStoreChange: change,
      } as SubListener
      store.listener.push(listener)
      listener.onStoreChange()
      return listener
    },
    unSubscribe: (listenerId) => {
      store.listener.splice(
        store.listener.findIndex(
          (listener) => listener.listenerId === listenerId,
        ),
        1,
      )
    },
    add: (Notification) => {
      store.NotificationList.push(Notification)
      store.listener.forEach((listener) => {
        listener.onStoreChange()
      })
    },
    updateConfig: (NotificationGlobalProps) => {
      if (NotificationGlobalProps.duration != undefined) {
        store.duration = NotificationGlobalProps.duration
      }
      if (NotificationGlobalProps.maxCount != undefined) {
        store.maxCount = NotificationGlobalProps.maxCount
      }
    },
    getConfig: () => {
      return {
        maxCount: store.maxCount,
        duration: store.duration,
      }
    },
    remove: (NotificationId) => {
      const index = store.NotificationList.findIndex(
        (Notification) => Notification.id === NotificationId,
      )
      if (index != -1) {
        store.NotificationList.splice(index, 1)
        store.listener.forEach((listener) => {
          listener.onStoreChange()
        })
      }
    },
  } as NotificationStoreHandler
}

export const notificationStore = createNotificationStore()
