import {
  forwardRef,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from "react"
import { NotificationProps } from "./interface"
import { motion } from "framer-motion"
import { notificationStore } from "./notification-store"
import { applyBoxStyle, getColor } from "@illa-design/theme"
import {
  applyContentStyle,
  applyContentWrapperStyle,
  applyNotification,
  applyNotificationAction,
  applyNotificationCloseBtn,
  applyNotificationContentStyle,
  applyNotificationSlide,
  applyNotificationTitle,
} from "./style"
import {
  CloseIcon,
  ErrorCircleIcon,
  InfoCircleIcon,
  SuccessCircleIcon,
  WarningCircleIcon,
} from "@illa-design/icon"

export const Notification = forwardRef<HTMLDivElement, NotificationProps>(
  (props, ref) => {
    const {
      type,
      action,
      closable,
      showIcon = true,
      duration,
      id = "",
      position = "topRight",
      icon,
      content,
      title,
      onClose,
    } = props

    const handlerId = useRef<number | undefined>()

    const delayClose = useCallback(() => {
      let timeId: number | undefined
      if (duration) {
        timeId = window.setTimeout(() => {
          notificationStore.remove(id)
          onClose?.()
        }, duration)
      } else {
        timeId = window.setTimeout(() => {
          notificationStore.remove(id)
          onClose?.()
          handlerId.current = undefined
        }, notificationStore.getConfig()?.duration ?? 3000)
      }
      handlerId.current = timeId
    }, [duration, id, onClose])

    useEffect(() => {
      delayClose()
      return () => {
        if (handlerId.current) {
          clearTimeout(handlerId.current)
          handlerId.current = undefined
        }
      }
    }, [delayClose])

    const normalIcon: ReactNode = useMemo(() => {
      if (showIcon) {
        if (icon) {
          return icon
        } else {
          switch (type) {
            case "info":
              return (
                <InfoCircleIcon mt="2px" fs="16px" c={getColor("blue", "03")} />
              )
            case "error":
              return (
                <ErrorCircleIcon fs="16px" mt="2px" c={getColor("red", "03")} />
              )
            case "success":
              return (
                <SuccessCircleIcon
                  fs="16px"
                  mt="2px"
                  c={getColor("green", "03")}
                />
              )
            case "warning":
              return (
                <WarningCircleIcon
                  fs="16px"
                  mt="2px"
                  c={getColor("orange", "03")}
                />
              )
            case "normal":
            default:
              return <></>
          }
        }
      } else {
        return <></>
      }
    }, [showIcon, icon, type])

    return (
      <motion.div
        ref={ref}
        css={[applyNotification(closable), applyBoxStyle(props)]}
        layout
        initial="initial"
        animate="animate"
        exit="exit"
        variants={applyNotificationSlide(position)}
        onMouseEnter={() => {
          if (handlerId.current) {
            clearTimeout(handlerId.current)
            handlerId.current = undefined
          }
        }}
        onMouseLeave={() => {
          delayClose()
        }}
      >
        <div css={applyContentWrapperStyle}>
          <div className="icon-container">{normalIcon}</div>
          <div css={applyContentStyle(showIcon)}>
            {title && <div css={applyNotificationTitle}>{title}</div>}
            {content && (
              <div css={applyNotificationContentStyle}>{content}</div>
            )}
          </div>
        </div>
        {action && <div css={applyNotificationAction}>{action}</div>}
        {closable && (
          <div
            css={applyNotificationCloseBtn}
            onClick={() => {
              onClose?.()
            }}
          >
            <CloseIcon />
          </div>
        )}
      </motion.div>
    )
  },
)

Notification.displayName = "Notice"
