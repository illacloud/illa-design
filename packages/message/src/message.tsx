import {
  forwardRef,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from "react"
import { MessageProps } from "./interface"
import { applyMessageTextStyle, messageContainerStyle } from "./style"
import {
  CloseIcon,
  ErrorCircleIcon,
  InfoCircleIcon,
  LoadingIcon,
  WarningCircleIcon,
  SuccessCircleIcon,
} from "@illa-design/icon"
import { applyBoxStyle, getColor } from "@illa-design/theme"
import { messageStore } from "./message-store"
import { motion } from "framer-motion"

export const Message = forwardRef<HTMLDivElement, MessageProps>(
  (props, ref) => {
    const {
      type,
      closable,
      showIcon = true,
      duration,
      id = "",
      position,
      icon,
      content,
      onClose,
    } = props

    const handlerId = useRef<number | undefined>()

    const delayClose = useCallback(() => {
      let timeId: number | undefined
      if (duration) {
        timeId = window.setTimeout(() => {
          messageStore.remove(id)
          onClose?.()
        }, duration)
      } else {
        timeId = window.setTimeout(() => {
          messageStore.remove(id)
          onClose?.()
          handlerId.current = undefined
        }, messageStore.getConfig()?.duration ?? 3000)
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
              return <InfoCircleIcon fs="16px" c={getColor("blue", "03")} />
            case "error":
              return <ErrorCircleIcon fs="16px" c={getColor("red", "03")} />
            case "success":
              return <SuccessCircleIcon fs="16px" c={getColor("green", "03")} />
            case "warning":
              return <WarningCircleIcon fs="16px" c={getColor("red", "03")} />
            case "loading":
              return <LoadingIcon spin fs="16px" c={getColor("blue", "03")} />
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
        layout
        exit={{
          opacity: 0,
          transition: {
            opacity: { duration: 0.2, ease: "linear" },
          },
        }}
        animate={{
          opacity: 1,
        }}
        initial={{
          opacity: 0,
        }}
        transition={{ duration: 0.2 }}
        css={[messageContainerStyle, applyBoxStyle(props)]}
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
        {normalIcon}
        <span css={applyMessageTextStyle(showIcon && type !== "normal")}>
          {content}
        </span>
        {closable && (
          <CloseIcon
            fs="8px"
            ml="15px"
            c={getColor("gray", "03")}
            onClick={() => {
              messageStore.remove(id)
              onClose?.()
            }}
          />
        )}
      </motion.div>
    )
  },
)

Message.displayName = "Message"
