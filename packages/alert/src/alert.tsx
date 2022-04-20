import { forwardRef, useState, useMemo, MouseEvent, ReactNode } from "react"
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
  applyAlertContainer,
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
    transformOrigin: "0% 0%",
    transform: "scaleY(1) translateZ(0)",
  },
  hidden: {
    opacity: 0,
    transformOrigin: "0% 0%",
    transform: "scaleY(0.8) translateZ(0)",
    transition: {
      opacity: { duration: 0.2, ease: "linear" },
      transform: { duration: 0.2, ease: "linear" },
    },
  },
  show: {
    opacity: 1,
    transformOrigin: "0% 0%",
    transform: "scaleY(1) translateZ(0)",
    transition: {
      opacity: { duration: 0.2, ease: "linear" },
      transform: { duration: 0.2, ease: "linear" },
    },
  },
}

export const Alert = forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  const {
    style,
    className,
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
  }: AlertProps & { children?: ReactNode | undefined } = props
  const [visible, setVisible] = useState<boolean>(true)
  const renderIcon = useMemo(() => {
    return icon ? icon : iconMap[type]
  }, [icon, type])

  const onHandleClose = (e: MouseEvent) => {
    setVisible(false)
    onClose && onClose(e)
  }
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          css={applyAlertContainer(type, banner)}
          style={style}
          className={className}
          variants={variants}
          animate={"show"}
          exit={"hidden"}
          initial={"enter"}
          ref={ref}
          onAnimationComplete={(definition) => {
            if (definition === "hidden") {
              afterClose && afterClose()
            }
          }}
        >
          <div css={applyAlert(!!content, showIcon, closable)} {...restProps}>
            {showIcon && (
              <div css={applyAlertIcon(type, !!content)}>{renderIcon}</div>
            )}
            <div css={applyAlertContentWrapper}>
              {title && <div css={applyAlertTitle(!!content)}>{title}</div>}
              {content && <div css={applyAlertContent}>{content}</div>}
            </div>
            {action && <div css={applyAlertAction}>{action}</div>}
            {closable && (
              <div
                css={applyAlertCloseBtn(type, !!content)}
                onClick={onHandleClose}
              >
                {closeElement || <CloseIcon />}
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
})

Alert.displayName = "Alert"
