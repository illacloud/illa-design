import { ModalProps } from "./interface"
import {
  applyModal,
  applyModalContainer,
  applyModalContent,
  applyModalFooter,
  applyModalHeader,
  applyModalMask,
  applyModalTitle,
  maskAnimation,
  modalAnimation,
  modalCloseIconStyle,
} from "./style"
import { Button } from "@illa-design/button"
import {
  ConfigProviderContext,
  ConfigProviderProps,
  def,
} from "@illa-design/config-provider"
import {
  CloseIcon,
  ErrorCircleIcon,
  InfoCircleIcon,
  SuccessCircleIcon,
  WarningCircleIcon,
} from "@illa-design/icon"
import { applyBoxStyle, deleteCssProps, getColor } from "@illa-design/theme"
import { TriggerProvider } from "@illa-design/trigger"
import { AnimatePresence, motion } from "framer-motion"
import React, { forwardRef, ReactNode, useContext, useMemo } from "react"
import FocusLock from "react-focus-lock"
import { useHotkeys } from "react-hotkeys-hook"

export const Modal = forwardRef<HTMLDivElement, ModalProps>((props, ref) => {
  const {
    withoutPadding,
    children,
    visible,
    type,
    mask = true,
    title,
    withoutLine = true,
    okLoading,
    maskClosable = true,
    hideCancel,
    closable,
    closeElement,
    okText,
    cancelText,
    okButtonProps,
    cancelButtonProps,
    footer = true,
    footerAlign = "",
    focusLock = true,
    autoFocus = true,
    maskStyle,
    modalContentStyle,
    enableOnFormTags,
    onCancel,
    onOk,
    afterClose,
    afterOpen,
    z,
    ...otherProps
  } = props

  const configProviderProps = useContext<ConfigProviderProps>(
    ConfigProviderContext,
  )
  const locale = configProviderProps?.locale?.modal ?? def.modal

  // hot key
  useHotkeys(
    "Enter,Escape",
    (event, handler) => {
      switch (event.key) {
        case "Enter":
          if (visible) {
            onOk?.()
          }
          break
        case "Escape":
          if (visible) {
            onCancel?.()
          }
          break
      }
    },
    {
      enableOnFormTags: enableOnFormTags ?? ["INPUT"],
    },
    [visible],
  )

  const normalIcon: ReactNode = useMemo(() => {
    if (type && title) {
      switch (type) {
        case "info":
          return (
            <InfoCircleIcon fs="16px" mr="8px" c={getColor("blue", "03")} />
          )
        case "error":
          return (
            <ErrorCircleIcon fs="16px" mr="8px" c={getColor("red", "03")} />
          )
        case "success":
          return (
            <SuccessCircleIcon fs="16px" mr="8px" c={getColor("green", "03")} />
          )
        case "warning":
          return (
            <WarningCircleIcon fs="16px" mr="8px" c={getColor("red", "03")} />
          )
        default:
          return <></>
      }
    } else {
      return <></>
    }
  }, [title, type])

  return (
    <TriggerProvider renderInBody={false} zIndex={10}>
      <AnimatePresence>
        {visible && (
          <>
            {mask ? (
              <motion.div
                css={[applyModalMask(z), maskStyle]}
                variants={maskAnimation}
                animate="animate"
                exit="exit"
                initial="initial"
                transition={{ duration: 0.2 }}
              />
            ) : null}
            <div
              css={[applyModalContainer(z), modalContentStyle]}
              onClick={() => {
                if (maskClosable) {
                  onCancel?.()
                }
              }}
            >
              <motion.div
                onClick={(e) => {
                  e.stopPropagation()
                }}
                ref={ref}
                role="dialog"
                variants={modalAnimation}
                animate="animate"
                transition={{ duration: 0.2 }}
                exit="exit"
                initial="initial"
                css={[applyModal(), applyBoxStyle(props)]}
                onAnimationComplete={(definition) => {
                  if (definition === "animate") {
                    afterOpen?.()
                  }
                  if (definition === "exit") {
                    afterClose?.()
                  }
                }}
                {...deleteCssProps(otherProps)}
              >
                {title && (
                  <div css={applyModalHeader(closable, withoutLine)}>
                    {normalIcon}
                    <div css={applyModalTitle()}>{title}</div>
                    {closable && (
                      <>
                        {closeElement ? (
                          closeElement
                        ) : (
                          <div css={modalCloseIconStyle} onClick={onCancel}>
                            <CloseIcon
                              size="14px"
                              c={getColor("grayBlue", "02")}
                            />
                          </div>
                        )}
                      </>
                    )}
                  </div>
                )}
                {focusLock ? (
                  <FocusLock disabled={!visible} autoFocus={autoFocus}>
                    {children && (
                      <div css={applyModalContent(withoutPadding)}>
                        {children}
                      </div>
                    )}
                  </FocusLock>
                ) : (
                  children && (
                    <div css={applyModalContent(withoutPadding)}>
                      {children}
                    </div>
                  )
                )}
                {footer && (
                  <div css={applyModalFooter(withoutLine)}>
                    {!hideCancel && (
                      <Button
                        type="button"
                        onClick={onCancel}
                        colorScheme="gray"
                        size="medium"
                        flex="1"
                        {...cancelButtonProps}
                      >
                        {cancelText || locale.cancelText}
                      </Button>
                    )}
                    {
                      <Button
                        type="button"
                        loading={okLoading}
                        size="medium"
                        onClick={onOk}
                        flex="1"
                        {...okButtonProps}
                      >
                        {okText || locale.okText}
                      </Button>
                    }
                  </div>
                )}
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </TriggerProvider>
  )
})

Modal.displayName = "Modal"
