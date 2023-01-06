import { FC, useEffect, useMemo, useState } from "react"
import { AnimatePresence } from "framer-motion"
import { MessageProps } from "./interface"
import { applyBottomContainer, applyTopContainer } from "./style"
import { messageStore } from "./message-store"
import { Message } from "./message"
import { applyBoxStyle, BoxProps } from "@illa-design/theme"

export const MessageGroup: FC<BoxProps> = (props) => {
  const [topMessageList, setTopMessageList] = useState<MessageProps[]>([])
  const [bottomMessageList, setBottomMessageList] = useState<MessageProps[]>([])

  useEffect(() => {
    const listener = messageStore.subscribe(() => {
      setTopMessageList(
        messageStore.getMessage().filter((item) => {
          return item.position === "top"
        }),
      )
      setBottomMessageList(
        messageStore.getMessage().filter((item) => {
          return item.position === "bottom"
        }),
      )
    })
    return () => {
      messageStore.unSubscribe(listener.listenerId)
    }
  }, [])

  const topMessage = useMemo(() => {
    return topMessageList.map((message) => {
      return <Message key={message.id} {...message} />
    })
  }, [topMessageList])

  const bottomMessage = useMemo(() => {
    return bottomMessageList.map((message) => {
      return <Message key={message.id} {...message} />
    })
  }, [bottomMessageList])

  return (
    <>
      <div css={[applyTopContainer, applyBoxStyle(props)]}>
        <AnimatePresence>{topMessage}</AnimatePresence>
      </div>
      <div css={[applyBottomContainer, applyBoxStyle(props)]}>
        <AnimatePresence>{bottomMessage}</AnimatePresence>
      </div>
    </>
  )
}

MessageGroup.displayName = "MessageGroup"
