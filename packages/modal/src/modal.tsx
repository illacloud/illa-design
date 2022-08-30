import React, {
  cloneElement,
  forwardRef,
  ReactElement,
  useContext,
  useRef,
} from "react"
import {
  ConfirmProps,
  ModalComponent,
  ModalProps,
  ModalReturnProps,
} from "./interface"
import { Portal } from "./portal"
import {
  ConfigProviderContext,
  ConfigProviderProps,
  def,
} from "@illa-design/config-provider"
import {
  applyModal,
  applyModalCancelBtn,
  applyModalContent,
  applyModalFooter,
  applyModalHeader,
  applyModalMask,
  applyModalTitle,
  applyModalWrapper,
  maskAnimation,
  modalAnimation,
  modalCloseIconStyle,
} from "./style"
import { confirm } from "./confirm"
import { destroyList, setModalConfig } from "./config"
import { AnimatePresence, motion } from "framer-motion"
import { omit, useMergeValue } from "@illa-design/system"
import { Button } from "@illa-design/button"
import { CloseIcon } from "@illa-design/icon"
import { AlertType as ConfirmType } from "@illa-design/alert"
import FocusLock from "react-focus-lock"
import { RemoveScroll } from "react-remove-scroll"
import useModal from "./useModal"
import { applyBoxStyle, deleteCssProps } from "@illa-design/theme"
import { useHotkeys } from "react-hotkeys-hook"

export const Modal: ModalComponent = forwardRef<HTMLDivElement, ModalProps>(
  (props, ref) => {
    const {
      withoutPadding,
      children,
      visible,
      mask = true,
      confirmLoading,
      title,
      alignCenter = true,
      maskClosable = true,
      hideCancel,
      simple,
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
      getPopupContainer = () => document.body,
      onCancel,
      onOk,
      afterOpen,
      afterClose,
      ...otherProps
    } = props

    const maskClickRef = useRef(false)
    const showCloseIcon = closable !== void 0 ? closable : !simple
    const [loading, setLoading] = useMergeValue(false, {
      defaultValue: false,
      value: confirmLoading,
    })

    const configProviderProps = useContext<ConfigProviderProps>(
      ConfigProviderContext,
    )
    const locale = configProviderProps?.locale?.modal ?? def.modal

    const renderFooter = () => {
      if (!footer) {
        return
      }

      const cancelButtonNode = (
        <Button
          css={applyModalCancelBtn}
          onClick={onCancel}
          colorScheme="gray"
          size="medium"
          {...cancelButtonProps}
        >
          {cancelText || locale.cancelText}
        </Button>
      )
      const okButtonNode = (
        <Button
          loading={loading}
          size="medium"
          onClick={onConfirm}
          {...okButtonProps}
        >
          {okText || locale.okText}
        </Button>
      )
      return (
        <div css={applyModalFooter(simple, footerAlign)}>
          {!hideCancel && cancelButtonNode}
          {okButtonNode}
        </div>
      )
    }

    const renderModal = () => {
      const element = (
        <RemoveScroll>
          {title && (
            <div css={applyModalHeader(simple, showCloseIcon)}>
              <div css={applyModalTitle(simple)}>{title}</div>
            </div>
          )}
          {children && (
            <div css={applyModalContent(simple, withoutPadding)}>
              {children}
            </div>
          )}
          {renderFooter()}
          {showCloseIcon && (
            <>
              {closeElement ? (
                cloneElement(closeElement as ReactElement, {
                  onClick: onCancel,
                })
              ) : (
                <div css={modalCloseIconStyle} onClick={onCancel}>
                  <CloseIcon size="14px" />
                </div>
              )}
            </>
          )}
        </RemoveScroll>
      )
      return (
        <motion.div
          variants={modalAnimation}
          animate="animate"
          exit="exit"
          initial="initial"
          transition={{ duration: 0.2 }}
          css={[applyModal(alignCenter, simple), applyBoxStyle(props)]}
          onMouseDown={() => {
            maskClickRef.current = false
          }}
          onMouseUp={() => {
            maskClickRef.current = false
          }}
          onAnimationComplete={(definition) => {
            if (definition === "animate") {
              afterOpen?.()
            }
            if (definition === "exit") {
              afterClose?.()
            }
          }}
        >
          {focusLock ? (
            <FocusLock disabled={!visible} autoFocus={autoFocus}>
              {element}
            </FocusLock>
          ) : (
            element
          )}
        </motion.div>
      )
    }

    const onClickMask: React.MouseEventHandler<HTMLDivElement> = (e) => {
      if (!maskClickRef.current) return
      maskClickRef.current = false
      if (mask && maskClosable && e.target === e.currentTarget) {
        onCancel?.()
      }
    }

    const onConfirm: React.MouseEventHandler<HTMLButtonElement> = (e) => {
      let res
      if (onOk) {
        res = onOk(e)
      }
      if (res?.then) {
        setLoading(true)
        res.then(
          () => {
            setLoading(false)
          },
          (e: Error) => {
            setLoading(false)
            console.error(e)
          },
        )
      }
    }

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
        enableOnTags: ["INPUT"],
      },
      [visible],
    )

    return (
      <Portal container={getPopupContainer()}>
        <div ref={ref}>
          <AnimatePresence>
            {visible && mask ? (
              <motion.div
                css={applyModalMask}
                variants={maskAnimation}
                animate="animate"
                exit="exit"
                initial="initial"
                transition={{ duration: 0.2 }}
              />
            ) : null}
          </AnimatePresence>
          <div
            role="dialog"
            css={applyModalWrapper(alignCenter, visible)}
            onMouseDown={(e) => {
              maskClickRef.current = e.target === e.currentTarget
            }}
            onClick={onClickMask}
            {...omit(deleteCssProps(otherProps), ["isNotice", "noticeType"])}
          >
            <AnimatePresence>{visible && renderModal()}</AnimatePresence>
          </div>
        </div>
      </Portal>
    )
  },
) as ModalComponent

Modal.config = setModalConfig

Modal.confirm = (props: ConfirmProps): ModalReturnProps => {
  return confirm(props)
}

const confirmTypes: ConfirmType[] = ["info", "success", "warning", "error"]
confirmTypes.forEach((type) => {
  Modal[type] = (props: ConfirmProps) => {
    return confirm({
      ...props,
      isNotice: true,
      noticeType: type,
    })
  }
})

Modal.destroyAll = () => {
  while (destroyList.length) {
    const close = destroyList.pop()
    if (close) {
      close()
    }
  }
}

Modal.useModal = useModal

Modal.displayName = "Modal"
