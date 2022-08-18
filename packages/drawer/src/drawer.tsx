import {
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react"
import { findDOMNode } from "react-dom"
import FocusLock from "react-focus-lock"
import { RemoveScroll } from "react-remove-scroll"
import { DrawerProps } from "./interface"
import { AnimatePresence, motion } from "framer-motion"
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
  applyDrawerCloseIcon,
  applyDrawerContent,
  applyDrawerFooter,
  applyDrawerHeader,
  applyDrawerMask,
  applyDrawerScroll,
  applyDrawerSlider,
  applyDrawerStyle,
  applyDrawerTitle,
  applyDrawerWrapper,
  applyModalCancelBtn,
  maskAnimation,
} from "./style"
import { applyBoxStyle } from "@illa-design/theme"
import { deleteCssProps } from "@illa-design/theme"

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
    getPopupContainer = () => document.body,
    ...otherProps
  } = props
  const configProviderProps = useContext<ConfigProviderProps>(
    ConfigProviderContext,
  )
  const locale = configProviderProps?.locale?.drawer ?? def.drawer
  const [shouldReComputeFixed, setShouldReComputeFixed] = useState(false)

  const getContainer = useCallback((): HTMLElement => {
    const container = getPopupContainer()
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
      <RemoveScroll>
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
          <div css={applyDrawerContent}>{children}</div>
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
      <FocusLock disabled={!visible} autoFocus={autoFocus}>
        {element}
      </FocusLock>
    ) : (
      element
    )
  }

  return (
    <Portal container={getContainer()}>
      <AnimatePresence>
        {visible && (
          <div ref={ref} css={applyDrawerWrapper(isFixed)}>
            {mask ? (
              <motion.div
                variants={maskAnimation}
                animate="animate"
                exit="exit"
                initial="initial"
                transition={{ duration: 3 }}
                css={applyDrawerMask}
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
              transition={{ duration: 3 }}
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
      </AnimatePresence>
    </Portal>
  )
})

Drawer.displayName = "Drawer"
