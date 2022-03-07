/** @jsxImportSource @emotion/react */
import React, {
  forwardRef,
  useMemo,
  useRef,
  useEffect,
  MouseEvent,
} from "react"
import { NoticeProps } from "./interface"
import {
  applyNotification,
  applyNotificationTitle,
  applyNotificationAction,
  applyNotificationContent,
  applyNotificationCloseBtn,
  applyNotificationContentWrapper,
  applyNotificationIcon,
} from "./style"
import {
  RightIcon,
  ErrorIcon,
  WarningCircleIcon,
  CloseIcon,
  InfoCircleIcon,
} from "@illa-design/icon"
import { AlertType } from "@illa-design/alert"
import { Notification } from "./notification"
const iconMap = {
  info: <InfoCircleIcon />,
  success: <RightIcon />,
  warning: <WarningCircleIcon />,
  error: <ErrorIcon />,
  normal: void 0,
}

export const Notice = forwardRef<HTMLDivElement, NoticeProps>((props, ref) => {
  const {
    title,
    action,
    closable,
    type = "info",
    noticeType = "Notification",
    content,
    icon,
    showIcon = true,
    closeElement,
    duration = 3000,
    position = "topLeft",
    id,
    onMouseEnter,
    onMouseLeave,
    onClose,
    afterClose,
    update,
    ...restProps
  } = props
  const timerRef = useRef<number | undefined>(undefined)
  useEffect(() => {
    startTimer()
    return () => {
      removeTimer()
    }
  }, [update, duration])
  const handleClose = () => {
    onClose && onClose()
    Notification.remove(id as string)
  }
  const removeTimer = () => {
    if (timerRef.current) {
      window.clearTimeout(timerRef.current)
      timerRef.current = void 0
    }
  }
  const startTimer = () => {
    if (duration > 0) {
      timerRef.current = window.setTimeout(() => {
        handleClose()
        removeTimer()
      }, duration)
    }
  }

  const renderIcon = useMemo(() => {
    return icon ? icon : iconMap[type]
  }, [icon, type])

  const handleMouseEnter = (event: MouseEvent<HTMLDivElement>) => {
    onMouseEnter && onMouseEnter(event)
    removeTimer()
  }
  const handleMouseLeave = (event: MouseEvent<HTMLDivElement>) => {
    onMouseLeave && onMouseLeave(event)
    startTimer()
  }
  return (
    <div
      css={applyNotification}
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...restProps}
    >
      {showIcon && renderIcon && (
        <div css={applyNotificationIcon(type as AlertType)}>{renderIcon}</div>
      )}
      <div css={applyNotificationContentWrapper}>
        {title && <div css={applyNotificationTitle}>{title}</div>}
        <div css={applyNotificationContent(!!title)}>{content}</div>
        {action && <div css={applyNotificationAction}>{action}</div>}
      </div>
      {closable && (
        <div css={applyNotificationCloseBtn} onClick={handleClose}>
          {closeElement || <CloseIcon />}
        </div>
      )}
    </div>
  )
})

Notice.displayName = "Notice"
