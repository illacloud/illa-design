import { forwardRef, useContext } from "react"
import { createPortal } from "react-dom"
import FocusLock from "react-focus-lock"
import { RemoveScroll } from "react-remove-scroll"
import { DrawerProps } from "./interface"
import { AnimatePresence, motion } from "framer-motion"
import {
  ConfigProviderContext,
  ConfigProviderProps,
  def,
} from "@illa-design/config-provider"
import { CloseIcon } from "@illa-design/icon"
import { Button } from "@illa-design/button"
import {
  applyDrawerCloseIcon,
  applyDrawerFooter,
  applyDrawerHeader,
  applyDrawerMask,
  applyDrawerScroll,
  applyDrawerSlider,
  applyDrawerStyle,
  applyDrawerTitle,
  applyDrawerWrapper,
  applyModalCancelBtn,
  fullStyle,
  maskAnimation,
} from "./style"
import { applyBoxStyle, deleteCssProps } from "@illa-design/theme"

export const Drawer = forwardRef<HTMLDivElement, DrawerProps>((props, ref) => {
  const {
    children,
    title,
    w = "250px",
    h = "100%",
    footer = true,
    visible,
    mask = true,
    maskClosable = true,
    maskStyle,
    closable = true,
    okText,
    cancelText,
    focusLock = true,
    autoFocus = true,
    placement = "right",
    confirmLoading,
    onOk,
    onCancel,
    afterOpen,
    afterClose,
    ...otherProps
  } = props
  const configProviderProps = useContext<ConfigProviderProps>(
    ConfigProviderContext,
  )
  const locale = configProviderProps?.locale?.drawer ?? def.drawer

  const renderDrawer = () => {
    const element = (
      <RemoveScroll css={fullStyle}>
        <div css={applyDrawerScroll} {...deleteCssProps(otherProps)}>
          {title && (
            <div css={applyDrawerHeader}>
              <div css={applyDrawerTitle}>{title}</div>
            </div>
          )}
          {closable && (
            <div css={applyDrawerCloseIcon} onClick={onCancel}>
              <CloseIcon />
            </div>
          )}
          {children}
          {footer && (
            <div css={applyDrawerFooter}>
              <Button
                css={applyModalCancelBtn}
                onClick={onCancel}
                colorScheme="gray"
                size="medium"
              >
                {cancelText || locale.cancelText}
              </Button>
              <Button size="medium" onClick={onOk} loading={confirmLoading}>
                {okText || locale.okText}
              </Button>
            </div>
          )}
        </div>
      </RemoveScroll>
    )
    return focusLock ? (
      <FocusLock css={fullStyle} disabled={!visible} autoFocus={autoFocus}>
        {element}
      </FocusLock>
    ) : (
      element
    )
  }

  return (
    <>
      {createPortal(
        <AnimatePresence>
          {visible && (
            <div ref={ref} css={applyDrawerWrapper(true)}>
              {mask ? (
                <motion.div
                  variants={maskAnimation}
                  animate="animate"
                  exit="exit"
                  initial="initial"
                  transition={{ duration: 0.3 }}
                  css={[applyDrawerMask, maskStyle]}
                  onClick={(e) => {
                    maskClosable && onCancel && onCancel(e)
                  }}
                />
              ) : null}
              <motion.div
                variants={applyDrawerSlider(placement)}
                animate="animate"
                exit="exit"
                initial="initial"
                transition={{ duration: 0.3 }}
                css={[applyDrawerStyle(w, h, placement), applyBoxStyle(props)]}
                onAnimationComplete={(definition) => {
                  if (definition === "animate") {
                    afterOpen?.()
                  }
                  if (definition === "exit") {
                    afterClose?.()
                  }
                }}
              >
                {renderDrawer()}
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body,
      )}
    </>
  )
})

Drawer.displayName = "Drawer"
