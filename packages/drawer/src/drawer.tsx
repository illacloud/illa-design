import React, {
  forwardRef,
  useState,
  useContext,
  useMemo,
  useEffect,
  useCallback,
} from "react"
import { findDOMNode } from "react-dom"
import { DrawerProps } from "./interface"
import { motion, AnimatePresence } from "framer-motion"
import { isServerRendering } from "@illa-design/system"
import { Portal } from "@illa-design/modal"
import {
  ConfigProviderContext,
  ConfigProviderProps,
  def,
} from "@illa-design/config-provider"
import { CloseIcon } from "@illa-design/icon"
import { Button } from "@illa-design/button"
import {
  applyDrawerWrapper,
  applyDrawerCloseIcon,
  applyDrawerContent,
  applyDrawerFooter,
  applyDrawerHeader,
  applyDrawerMask,
  applyDrawerTitle,
  applyModalCancelBtn,
  applyDrawer,
  applyDrawerScroll,
  maskAnimation,
  applyDrawerSlider,
} from "./style"

export const Drawer = forwardRef<HTMLDivElement, DrawerProps>((props, ref) => {
  const {
    style,
    className,
    children,
    title,
    width = 250,
    height = 250,
    footer = true,
    visible,
    mask = true,
    maskClosable = true,
    closable = true,
    okText,
    cancelText,
    placement = "right",
    confirmLoading,
    onOk,
    onCancel,
    afterOpen,
    afterClose,
    getPopupContainer = () => document.body,
    ...otherProps
  } = props
  const configProviderProps = useContext<ConfigProviderProps>(
    ConfigProviderContext,
  )
  const locale = configProviderProps?.locale?.drawer ?? def.drawer
  const [shouldReComputeFixed, setShouldReComputeFixed] = useState(false)

  const getContainer = useCallback((): HTMLElement => {
    const container = getPopupContainer && getPopupContainer()
    return (findDOMNode(container) || document.body) as HTMLElement
  }, [getPopupContainer])

  const isFixed = useMemo(() => {
    return !isServerRendering && getContainer() === document.body
  }, [shouldReComputeFixed, getContainer])

  // thx arco
  useEffect(() => {
    if (visible && props.getPopupContainer) {
      // Recompute `isFixed` to avoid style error resulting from truthy `isFixed` value due to the custom container dom is not mounted yet.
      setShouldReComputeFixed(true)
    }
  }, [])

  const renderDrawer = () => {
    const element = (
      <div css={applyDrawerScroll} {...otherProps}>
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
        <div css={applyDrawerContent}>{children}</div>
        {footer && (
          <div css={applyDrawerFooter}>
            <Button
              css={applyModalCancelBtn}
              onClick={onCancel}
              colorScheme="gray"
              size={"medium"}
            >
              {cancelText || locale.cancelText}
            </Button>
            <Button size={"medium"} onClick={onOk} loading={confirmLoading}>
              {okText || locale.okText}
            </Button>
          </div>
        )}
      </div>
    )
    return element
  }

  return (
    <Portal container={getContainer()}>
      <AnimatePresence>
        {visible && (
          <div ref={ref} css={applyDrawerWrapper(isFixed)}>
            {mask ? (
              <motion.div
                variants={maskAnimation}
                animate={"animate"}
                exit={"exit"}
                initial={"initial"}
                transition={{ duration: 0.3 }}
                css={applyDrawerMask}
                onClick={(e) => {
                  maskClosable && onCancel && onCancel(e)
                }}
              />
            ) : null}
            <motion.div
              className={className}
              variants={applyDrawerSlider(placement)}
              animate={"animate"}
              exit={"exit"}
              initial={"initial"}
              transition={{ duration: 0.3 }}
              style={Object.assign(
                placement === "left" || placement === "right"
                  ? { width }
                  : { height },
                { [placement]: 0 },
                style,
              )}
              css={applyDrawer}
              onAnimationComplete={(definition) => {
                if (definition === "animate") {
                  afterOpen && afterOpen()
                }
                if (definition === "exit") {
                  afterClose && afterClose()
                }
              }}
            >
              {renderDrawer()}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </Portal>
  )
})

Drawer.displayName = "Drawer"
