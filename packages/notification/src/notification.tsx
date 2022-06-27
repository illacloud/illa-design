import { forwardRef, useState, useCallback, useLayoutEffect } from "react"
import {
  NotificationProps,
  NoticeProps,
  ConfigProps,
  NoticePosition,
  NotificationType,
  NotificationSet,
  NotificationWrapper,
  NotificationComponent,
} from "./interface"
import { motion, AnimatePresence } from "framer-motion"
import { Notice } from "./notice"
import { applyNotificationSlide, applyNotificationWrapper } from "./style"
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

const notificationTypes: NotificationType[] = [
  "info",
  "success",
  "error",
  "warning",
  "normal",
]

const notificationPositions: NoticePosition[] = [
  "topLeft",
  "topRight",
  "bottomLeft",
  "bottomRight",
]

let notificationContainer: NotificationWrapper
const initContainer = () => {
  notificationContainer = {}
  notificationPositions.forEach((position) => {
    notificationContainer[position] = document.createElement("div")
    container.appendChild(notificationContainer[position] as Node)
  })
}
initContainer()

export const Notification: NotificationComponent = forwardRef<
  HTMLDivElement,
  NotificationProps
>((props, ref) => {
  const { notice, shouldClear, position = "topRight", removeId } = props
  const [notificationSet, setNotificationSet] = useState<NotificationSet>({
    topRight: [],
    topLeft: [],
    bottomLeft: [],
    bottomRight: [],
  })
  const getRemoves = useCallback(
    (id: string, notificationSet: NotificationSet) => {
      let removeIndex = -1,
        pos = "topRight"
      Object.keys(notificationSet).forEach((position) => {
        const index = notificationSet[
          position as keyof NotificationSet
        ].findIndex((notice: NoticeProps) => notice.id === id)
        if (index > -1) {
          removeIndex = index
          pos = position
        }
      })
      return [removeIndex, pos]
    },
    [],
  )

  if (removeId !== void 0) {
    const [index, pos] = getRemoves(removeId, notificationSet)

    if (index > -1) {
      const newNotices = notificationSet[pos as keyof NotificationSet].filter(
        (notice) => notice.id !== removeId,
      )
      setNotificationSet({ ...notificationSet, [position]: newNotices })
    }
  }

  useLayoutEffect(() => {
    if (shouldClear) {
      setNotificationSet({
        ...notificationSet,
        [position]: [],
      })
    }
  }, [shouldClear])

  const hasUpdate = notificationSet[position].findIndex(
    (notice) => notice.update,
  )
  if (hasUpdate > -1) {
    const newNotices = notificationSet[position].map((notice) => {
      if (notice.update) {
        delete notice.update
      }
      return notice
    })
    setNotificationSet({ ...notificationSet, [position]: newNotices })
  }

  useLayoutEffect(() => {
    if (notice) {
      const isUpdate =
        notificationSet[position].findIndex((item) => item.id === notice.id) >
        -1
      const _notice = { ...notice }
      if (isUpdate) {
        const newNotices = notificationSet[position].map((item) => {
          if (item.id === _notice.id) {
            _notice.update = true
            return _notice
          }
          return item
        })
        setNotificationSet({ ...notificationSet, [position]: newNotices })
      } else {
        const newNotices = [...notificationSet[position]]
        if (newNotices.length >= maxCount) {
          newNotices.shift()
        }
        _notice.id = getId(_notice)
        newNotices.push(_notice)
        setNotificationSet({ ...notificationSet, [position]: newNotices })
      }
    }
  }, [notice])

  return (
    <div ref={ref} css={applyNotificationWrapper(position)}>
      <AnimatePresence>
        {notificationSet[position].map((notice) => (
          <motion.div
            key={notice.id}
            layout
            variants={applyNotificationSlide(position)}
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
              noticeType="Notification"
              removeHook={Notification.remove}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}) as NotificationComponent

Notification.remove = (id: string) => {
  notificationPositions.forEach((position) => {
    render(
      <Notification removeId={id} position={position} />,
      notificationContainer[position] as HTMLDivElement,
    )
  })
}

Notification.add = (notice: NoticeProps) => {
  const { position = "topRight" } = notice
  const noticeProps = {
    duration,
    ...notice,
  }
  render(
    <Notification notice={noticeProps} position={position as NoticePosition} />,
    notificationContainer[position as NoticePosition] as HTMLDivElement,
  )
}

Notification.config = (options: ConfigProps = {}) => {
  if (options.maxCount) {
    maxCount = options.maxCount
  }
  if (options.duration !== void 0 && isFinite(options.duration)) {
    duration = options.duration
  }
  if (options.getContainer && options.getContainer() !== container) {
    container = options.getContainer()
    Notification.clear()
    initContainer()
  }
}
Notification.clear = () => {
  notificationPositions.forEach((position) => {
    render(
      <Notification shouldClear position={position} />,
      notificationContainer[position] as HTMLDivElement,
    )
  })
}

notificationTypes.forEach((type) => {
  Notification[type] = (noticeProps: NoticeProps) => {
    return Notification.add({
      ...noticeProps,
      type,
    })
  }
})
Notification.displayName = "Notification"
