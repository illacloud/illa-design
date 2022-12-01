import { FC, useEffect, useMemo, useState } from "react"
import { AnimatePresence } from "framer-motion"
import { MessageProps } from "./interface"
import { applyBottomContainer, applyTopContainer } from "./style"
import { messageStore } from "./message-store"
import { Message } from "./message"

export const MessageGroup: FC = (props) => {
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
      <div css={applyTopContainer}>
        <AnimatePresence>{topMessage}</AnimatePresence>
      </div>
      <div css={applyBottomContainer}>
        <AnimatePresence>{bottomMessage}</AnimatePresence>
      </div>
    </>
  )
}

MessageGroup.displayName = "MessageGroup"
