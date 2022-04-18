import { forwardRef, useState, useCallback, useEffect } from "react"

import {
  MessageComponent,
  MessageProps,
  MessageSet,
  MessageWrapper,
} from "./interface"
import { motion, AnimatePresence } from "framer-motion"
import {
  Notice,
  NoticeProps,
  MessageType,
  ConfigProps,
  MessagePosition,
} from "@illa-design/notification"
import { applyMessageSlide, applyMessageWrapper } from "./style"
import { render } from "react-dom"

let maxCount: number
let duration: number
let container: HTMLElement = document.body

function getId(noticeProps: NoticeProps) {
  if (noticeProps.id) {
    return noticeProps.id
  }
  return `illa_notice_id_${Date.now()}_${Math.random()}`
}

const messageTypes: MessageType[] = [
  "info",
  "success",
  "error",
  "warning",
  "loading",
  "normal",
]

const messagePosition: MessagePosition[] = ["top", "bottom"]

let messageContainer: MessageWrapper
const initContainer = () => {
  messageContainer = {}
  messagePosition.forEach((position) => {
    messageContainer[position] = document.createElement("div")
    container.appendChild(messageContainer[position] as Node)
  })
}
initContainer()

export const Message: MessageComponent = forwardRef<
  HTMLDivElement,
  MessageProps
>((props, ref) => {
  const { notice, shouldClear, position = "top", removeId } = props
  const [messageSet, setMessageSet] = useState<MessageSet>({
    top: [],
    bottom: [],
  })
  const getRemoves = useCallback((id: string, messageSet: any) => {
    let removeIndex = -1,
      pos = "top"
    Object.keys(messageSet).forEach((position) => {
      const index = messageSet[position as keyof MessageSet].findIndex(
        (notice: NoticeProps) => notice.id === id,
      )
      if (index > -1) {
        removeIndex = index
        pos = position
      }
    })
    return [removeIndex, pos]
  }, [])

  if (removeId !== void 0) {
    const [index, pos] = getRemoves(removeId, messageSet)

    if (index > -1) {
      const newNotices = messageSet[pos as keyof MessageSet].filter(
        (notice) => notice.id !== removeId,
      )
      setMessageSet({ ...messageSet, [position]: newNotices })
    }
  }

  useEffect(() => {
    if (shouldClear) {
      setMessageSet({
        ...messageSet,
        [position]: [],
      })
    }
  }, [shouldClear])

  const hasUpdate = messageSet[position].findIndex((notice) => notice.update)
  if (hasUpdate > -1) {
    const newNotices = messageSet[position].map((notice) => {
      if (notice.update) {
        delete notice.update
      }
      return notice
    })
    setMessageSet({ ...messageSet, [position]: newNotices })
  }

  useEffect(() => {
    if (notice) {
      const isUpdate =
        messageSet[position].findIndex((item) => item.id === notice.id) > -1
      const _notice = { ...notice }
      if (isUpdate) {
        const newNotices = messageSet[position].map((item) => {
          if (item.id === _notice.id) {
            _notice.update = true
            return _notice
          }
          return item
        })
        setMessageSet({ ...messageSet, [position]: newNotices })
      } else {
        const newNotices = [...messageSet[position]]
        if (newNotices.length >= maxCount) {
          newNotices.shift()
        }
        _notice.id = getId(_notice)
        newNotices.push(_notice)
        setMessageSet({ ...messageSet, [position]: newNotices })
      }
    }
  }, [notice])

  return (
    <div ref={ref} css={applyMessageWrapper(position)}>
      <AnimatePresence>
        {messageSet[position].map((notice) => (
          <motion.div
            key={notice.id}
            layout
            variants={applyMessageSlide}
            animate={"animate"}
            exit={"exit"}
            initial={"initial"}
            transition={{ duration: 0.2 }}
          >
            <Notice
              {...notice}
              noticeType="Message"
              removeHook={Message.remove}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}) as MessageComponent

Message.remove = (id: string) => {
  messagePosition.forEach((position) => {
    render(
      <Message removeId={id} position={position} />,
      messageContainer[position] as HTMLDivElement,
    )
  })
}

Message.add = (notice: NoticeProps) => {
  const { position = "top" } = notice
  const noticeProps = {
    duration,
    ...notice,
  }
  render(
    <Message notice={noticeProps} position={position as MessagePosition} />,
    messageContainer[position as MessagePosition] as HTMLDivElement,
  )
}

Message.config = (options: ConfigProps = {}) => {
  if (options.maxCount) {
    maxCount = options.maxCount
  }
  if (options.duration && isFinite(options.duration)) {
    duration = options.duration as number
  }
  if (options.getContainer && options.getContainer() !== container) {
    container = options.getContainer()
    Message.clear()
    initContainer()
  }
}
Message.clear = () => {
  messagePosition.forEach((position) => {
    render(
      <Message shouldClear position={position} />,
      messageContainer[position] as HTMLDivElement,
    )
  })
}

messageTypes.forEach((type) => {
  Message[type] = (noticeProps: NoticeProps | string) => {
    if (typeof noticeProps === "string") {
      noticeProps = { content: noticeProps }
    }
    return Message.add({
      ...noticeProps,
      type,
    })
  }
})
Message.displayName = "Message"
