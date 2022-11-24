import { forwardRef, MouseEvent, ReactNode, useMemo, useState } from "react"
import { AlertProps } from "./interface"
import { AnimatePresence, motion } from "framer-motion"
import {
  CloseIcon,
  ErrorIcon,
  InfoCircleIcon,
  SuccessCircleIcon,
  WarningCircleIcon,
} from "@illa-design/icon"
import {
  applyAlert,
  applyAlertAction,
  applyAlertCloseBtn,
  applyAlertContainer,
  applyAlertContent,
  applyAlertContentWrapper,
  applyAlertIcon,
  applyAlertTitle,
} from "./style"
import { applyBoxStyle, deleteCssProps } from "@illa-design/theme"

const iconMap = {
  info: <InfoCircleIcon />,
  success: <SuccessCircleIcon />,
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
          css={[applyAlertContainer(type, banner), applyBoxStyle(restProps)]}
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
          <div
            css={applyAlert(!!content, showIcon, closable)}
            {...deleteCssProps(restProps)}
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
