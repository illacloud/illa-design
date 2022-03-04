/** @jsxImportSource @emotion/react */
import React, { ReactInstance } from "react"
import ReactDOM from "react-dom"
import {
  NotificationProps,
  ConfigProps,
  NoticePosition,
  NotificationType,
} from "./interface"
import { motion, AnimatePresence } from "framer-motion"
import { Notice } from "./notice"
import BaseNotice from "./baseNotice"
import { applyNotificationSlide, applyNotificationWrapper } from "./style"
import * as _ from "lodash"

let maxCount: number
let duration: number
let container: HTMLElement

const notificationTypes: NotificationType[] = [
  "info",
  "success",
  "error",
  "warning",
  "normal",
]
let notificationInstance: {
  [propName: string]: Notification | null
} = {}

class Notification extends BaseNotice {
  static success: (config: NotificationProps) => ReactInstance | null

  static info: (config: NotificationProps) => ReactInstance | null

  static warning: (config: NotificationProps) => ReactInstance | null

  static error: (config: NotificationProps) => ReactInstance | null

  static normal: (config: NotificationProps) => ReactInstance | null

  static config = (options: ConfigProps = {}): void => {
    if (options.maxCount) {
      maxCount = options.maxCount
    }
    if (_.isFinite(options.duration)) {
      duration = options.duration as number
    }
    if (options.getContainer && options.getContainer() !== container) {
      container = options.getContainer()
      Object.keys(notificationInstance).forEach((notice) =>
        notificationInstance[notice]!.clear(),
      )
      notificationInstance = {}
    }
  }

  static clear: () => void = () => {
    Object.keys(notificationInstance).forEach((ins) => {
      notificationInstance[ins]!.clear()
    })
  }

  static remove: (id: string) => void = (id: string) => {
    Object.keys(notificationInstance).forEach((ins) => {
      notificationInstance[ins]!.remove(id)
    })
  }

  static addInstance: (config: NotificationProps) => ReactInstance | null = (
    noticeProps: NotificationProps,
  ) => {
    const { position = "topRight" } = noticeProps
    const _noticeProps = {
      duration,
      ...noticeProps,
    }
    if (notificationInstance[position]) {
      const notices = notificationInstance[position]!.state.notices
      if (notices.length >= maxCount) {
        const updated = notices[0]
        notices.shift()
        notificationInstance[position]!.add({
          ..._noticeProps,
          id: updated.id,
        })
      } else {
        notificationInstance[position]!.add(_noticeProps)
      }
      return notificationInstance[position]
    }
    const div = document.createElement("div")
    let instance = null
    ;(container || document.body).appendChild(div)
    ReactDOM.render(
      <Notification
        ref={(ref) => {
          notificationInstance[position] = ref
          notificationInstance[position]!.add(_noticeProps)
          instance = notificationInstance[position]
          return instance
        }}
      />,
      div,
    )
    return instance
  }

  render() {
    const { notices, position = "topRight" } = this.state
    return (
      <div css={applyNotificationWrapper(position as NoticePosition)}>
        <AnimatePresence>
          {notices.map((notice) => (
            <motion.div
              key={notice.id}
              layout
              variants={applyNotificationSlide(position as NoticePosition)}
              animate={"animate"}
              exit={"exit"}
              initial={"initial"}
              transition={{ duration: 0.2 }}
              onAnimationComplete={(definition) => {
                if (definition === "exit") {
                  notice.afterClose && notice.afterClose()
                }
              }}
            >
              <Notice
                {...notice}
                onClose={this.remove}
                noticeType="Notification"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    )
  }
}

notificationTypes.forEach((type) => {
  Notification[type] = (noticeProps: NotificationProps) => {
    return Notification.addInstance({
      ...noticeProps,
      type,
    })
  }
})

export default Notification
