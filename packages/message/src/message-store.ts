import { MessageProps } from "./interface"
import { v4 } from "uuid"

export interface MessageGlobalProps {
  maxCount?: number
  duration?: number
}

export interface MessageHandler {
  info: (message: MessageProps) => string
  error: (message: MessageProps) => string
  success: (message: MessageProps) => string
  loading: (message: MessageProps) => string
  warning: (message: MessageProps) => string
  normal: (message: MessageProps) => string
  show: (message: MessageProps) => string
  remove: (id: string) => void
  config: (messageGlobalProps: MessageGlobalProps) => void
  clear: () => void
}

export interface SubListener {
  listenerId: string
  onStoreChange: () => void
}

export interface MessageStoreHandler {
  getMessage: () => MessageProps[]
  setMessage: (messageList: MessageProps[]) => void
  subscribe: (onStoreChange: () => void) => SubListener
  unSubscribe: (listenerId: string) => void
  updateConfig: (messageGlobalProps: MessageGlobalProps) => void
  getConfig: () => MessageGlobalProps
  add: (message: MessageProps) => void
  remove: (messageId: string) => void
}

export interface MessageStore {
  maxCount: number
  duration: number
  listener: SubListener[]
  messageList: MessageProps[]
}

const store = {
  maxCount: 5,
  duration: 3000,
  listener: [],
  messageList: [],
} as MessageStore

function createMessageStore(): MessageStoreHandler {
  return {
    getMessage: () => {
      return store.messageList
    },
    setMessage: (messageList: MessageProps[]) => {
      store.messageList = messageList
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
    add: (message) => {
      store.messageList.push(message)
      store.listener.forEach((listener) => {
        listener.onStoreChange()
      })
    },
    updateConfig: (messageGlobalProps) => {
      if (messageGlobalProps.duration != undefined) {
        store.duration = messageGlobalProps.duration
      }
      if (messageGlobalProps.maxCount != undefined) {
        store.maxCount = messageGlobalProps.maxCount
      }
    },
    getConfig: () => {
      return {
        maxCount: store.maxCount,
        duration: store.duration,
      }
    },
    remove: (messageId) => {
      const index = store.messageList.findIndex(
        (message) => message.id === messageId,
      )
      if (index != -1) {
        store.messageList.splice(index, 1)
        store.listener.forEach((listener) => {
          listener.onStoreChange()
        })
      }
    },
  } as MessageStoreHandler
}

export const messageStore = createMessageStore()
