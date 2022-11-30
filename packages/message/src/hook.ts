import { MessageProps } from "./interface"
import {
  MessageGlobalProps,
  MessageHandler,
  messageStore,
} from "./message-store"
import { v4 } from "uuid"

const showImpl = (message: MessageProps) => {
  if (
    messageStore.getMessage().length > (messageStore.getConfig().maxCount ?? 5)
  ) {
    messageStore.getMessage().shift()
  }
  if (!message.id) {
    message.id = v4()
  }
  if (!message.position) {
    message.position = "top"
  }
  if (!message.type) {
    message.type = "normal"
  }
  messageStore.add(message)
  return message.id
}

const handler = {
  info: (message: MessageProps) => {
    message.type = "info"
    return showImpl(message)
  },
  error: (message: MessageProps) => {
    message.type = "error"
    return showImpl(message)
  },
  success: (message: MessageProps) => {
    message.type = "success"
    return showImpl(message)
  },
  loading: (message: MessageProps) => {
    message.type = "loading"
    return showImpl(message)
  },
  warning: (message: MessageProps) => {
    message.type = "warning"
    return showImpl(message)
  },
  normal: (message: MessageProps) => {
    message.type = "normal"
    return showImpl(message)
  },
  show: showImpl,
  remove: (id: string) => {
    messageStore.remove(id)
  },
  clear: () => {
    messageStore.setMessage([])
  },
  config: (messageGlobalProps: MessageGlobalProps) => {
    messageStore.updateConfig(messageGlobalProps)
  },
} as MessageHandler

export function useMessage(): MessageHandler {
  return handler
}

export const createMessage = useMessage
