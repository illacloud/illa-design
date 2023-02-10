import { forwardRef, MouseEvent, useCallback, useMemo, useState } from "react"
import { AlertProps } from "./interface"
import { AnimatePresence, motion } from "framer-motion"
import {
  CloseIcon,
  ErrorCircleIcon,
  InfoCircleIcon,
  SuccessCircleIcon,
  WarningCircleIcon,
} from "@illa-design/icon"
import {
  applyAlertContainer,
  closeIconStyle,
  contentStyle,
  iconColorMap,
  leftContentStyle,
  leftIconSizeStyle,
  leftIconStyle,
  titleStyle,
} from "./style"
import { applyBoxStyle, deleteCssProps } from "@illa-design/theme"

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
  } = props

  const [visible, setVisible] = useState<boolean>(true)

  const leftIcon = useMemo(() => {
    if (showIcon) {
      if (icon) {
        return <span css={[leftIconStyle, leftIconSizeStyle]}>{icon}</span>
      }
      switch (type) {
        case "success":
          return (
            <SuccessCircleIcon
              mr="8px"
              fs="16px"
              mt={content ? "2px" : "0"}
              c={iconColorMap["success"]}
              css={leftIconSizeStyle}
            />
          )
        case "warning":
          return (
            <WarningCircleIcon
              mr="8px"
              fs="16px"
              mt={content ? "2px" : "0"}
              c={iconColorMap["warning"]}
              css={leftIconSizeStyle}
            />
          )
        case "error":
          return (
            <ErrorCircleIcon
              mr="8px"
              fs="16px"
              mt={content ? "2px" : "0"}
              c={iconColorMap["error"]}
              css={leftIconSizeStyle}
            />
          )
        case "info":
          return (
            <InfoCircleIcon
              mr="8px"
              fs="16px"
              mt={content ? "2px" : "0"}
              c={iconColorMap["info"]}
              css={leftIconSizeStyle}
            />
          )
      }
    }
    return <></>
  }, [content, icon, showIcon, type])

  const onHandleClose = useCallback(
    (e: MouseEvent) => {
      setVisible(false)
      onClose?.(e)
    },
    [onClose],
  )

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          css={[
            applyAlertContainer(type, banner, content !== undefined),
            applyBoxStyle(restProps),
          ]}
          variants={variants}
          animate={"show"}
          exit={"hidden"}
          initial={"enter"}
          ref={ref}
          onAnimationComplete={(definition) => {
            if (definition === "hidden") {
              afterClose?.()
            }
          }}
          {...deleteCssProps(restProps)}
        >
          {leftIcon}
          <div css={leftContentStyle}>
            {title && <div css={titleStyle}>{title}</div>}
            {content && <div css={contentStyle}>{content}</div>}
          </div>
          {action}
          {closable && (
            <div css={closeIconStyle} onClick={onHandleClose}>
              {closeElement || <CloseIcon c={iconColorMap[type]} fs="8px" />}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
})

Alert.displayName = "Alert"
