/** @jsxImportSource @emotion/react */
import React, { forwardRef, useState, useMemo, MouseEvent } from "react"
import { AlertProps } from "./interface"
import { motion, AnimatePresence } from "framer-motion"
import {
  RightIcon,
  ErrorIcon,
  WarningCircleIcon,
  CloseIcon,
  InfoCircleIcon,
} from "@illa-design/icon"
import {
  applyAlertCloseBtn,
  applyAlert,
  applyAlertAction,
  applyAlertContent,
  applyAlertContentWrapper,
  applyAlertIcon,
  applyAlertTitle,
} from "./style"

const iconMap = {
  info: <InfoCircleIcon />,
  success: <RightIcon />,
  warning: <WarningCircleIcon />,
  error: <ErrorIcon />,
}

const variants = {
  enter: {
    opacity: 1,
    "transform-origin": "0% 0%",
    transform: "scaleY(1) translateZ(0)",
  },
  hidden: {
    opacity: 0,
    "transform-origin": "0% 0%",
    transform: "scaleY(0.8) translateZ(0)",
    transition: {
      opacity: { duration: 0.2, ease: "linear" },
      transform: { duration: 0.2, ease: "linear" },
    },
  },
  show: {
    opacity: 1,
    "transform-origin": "0% 0%",
    transform: "scaleY(1) translateZ(0)",
    transition: {
      opacity: { duration: 0.2, ease: "linear" },
      transform: { duration: 0.2, ease: "linear" },
    },
  },
}

export const Alert = forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  const {
    title,
    action,
    closable,
    type = "info",
    content,
    icon,
    showIcon = true,
    banner,
    closeElement,
    onClose,
    afterClose,
    ...restProps
  }: AlertProps & { children?: React.ReactNode | undefined } = props
  const [visible, setVisible] = useState<boolean>(true)

  const renderIcon = useMemo(() => {
    return icon ? icon : iconMap[type]
  }, [icon, type])

  const onHandleClose = (e: MouseEvent) => {
    setVisible(false)
    onClose && onClose(e)
    afterClose && afterClose()
  }
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          variants={variants}
          animate={"show"}
          exit={"hidden"}
          initial={"enter"}
        >
          <div
            css={applyAlert(type, !!content, !!banner)}
            ref={ref}
            {...restProps}
          >
            {showIcon && (
              <div css={applyAlertIcon(type, !!content)}>{renderIcon}</div>
            )}
            <div css={applyAlertContentWrapper}>
              {title && <div css={applyAlertTitle(!!content)}>{title}</div>}
              {content && <div css={applyAlertContent}>{content}</div>}
            </div>
            {action && <div css={applyAlertAction}>{action}</div>}
            {closable && (
              <button css={applyAlertCloseBtn} onClick={onHandleClose}>
                {closeElement || <CloseIcon />}
              </button>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
})

Alert.displayName = "Alert"
