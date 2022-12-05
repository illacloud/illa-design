import { FC, useEffect, useMemo, useState } from "react"
import { AnimatePresence } from "framer-motion"
import { NotificationProps } from "./interface"
import { notificationStore } from "./notification-store"
import { Notification } from "./notification"
import { applyNotificationContainerStyle } from "./style"
import { applyBoxStyle, BoxProps } from "@illa-design/theme"

export const NotificationGroup: FC<BoxProps> = (props) => {
  const [topLeftNotificationList, setTopLeftNotificationList] = useState<
    NotificationProps[]
  >([])
  const [topRightNotificationList, setTopRightNotificationList] = useState<
    NotificationProps[]
  >([])
  const [bottomLeftNotificationList, setBottomLeftNotificationList] = useState<
    NotificationProps[]
  >([])
  const [bottomRightNotificationList, setBottomRightNotificationList] =
    useState<NotificationProps[]>([])

  useEffect(() => {
    const listener = notificationStore.subscribe(() => {
      setTopLeftNotificationList(
        notificationStore.getNotification().filter((item) => {
          return item.position === "topLeft"
        }),
      )
      setTopRightNotificationList(
        notificationStore.getNotification().filter((item) => {
          return item.position === "topRight"
        }),
      )
      setBottomLeftNotificationList(
        notificationStore.getNotification().filter((item) => {
          return item.position === "bottomLeft"
        }),
      )
      setBottomRightNotificationList(
        notificationStore.getNotification().filter((item) => {
          return item.position === "bottomRight"
        }),
      )
    })
    return () => {
      notificationStore.unSubscribe(listener.listenerId)
    }
  }, [])

  const topLeftNotification = useMemo(() => {
    return topLeftNotificationList.map((notification) => {
      return <Notification key={notification.id} {...notification} />
    })
  }, [topLeftNotificationList])

  const topRightNotification = useMemo(() => {
    return topRightNotificationList.map((notification) => {
      return <Notification key={notification.id} {...notification} />
    })
  }, [topRightNotificationList])

  const bottomLeftNotification = useMemo(() => {
    return bottomLeftNotificationList.map((notification) => {
      return <Notification key={notification.id} {...notification} />
    })
  }, [bottomLeftNotificationList])

  const bottomRightNotification = useMemo(() => {
    return bottomRightNotificationList.map((notification) => {
      return <Notification key={notification.id} {...notification} />
    })
  }, [bottomRightNotificationList])

  return (
    <>
      <div
        css={[applyNotificationContainerStyle("topLeft"), applyBoxStyle(props)]}
      >
        <AnimatePresence>{topLeftNotification}</AnimatePresence>
      </div>
      <div
        css={[
          applyNotificationContainerStyle("topRight"),
          applyBoxStyle(props),
        ]}
      >
        <AnimatePresence>{topRightNotification}</AnimatePresence>
      </div>
      <div
        css={[
          applyNotificationContainerStyle("bottomLeft"),
          applyBoxStyle(props),
        ]}
      >
        <AnimatePresence>{bottomLeftNotification}</AnimatePresence>
      </div>
      <div
        css={[
          applyNotificationContainerStyle("bottomRight"),
          applyBoxStyle(props),
        ]}
      >
        <AnimatePresence>{bottomRightNotification}</AnimatePresence>
      </div>
    </>
  )
}

NotificationGroup.displayName = "NotificationGroup"
