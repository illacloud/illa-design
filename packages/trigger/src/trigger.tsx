import {
  cloneElement,
  FC,
  ReactElement,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react"
import { TriggerProps } from "./interface"
import { AnimatePresence, motion } from "framer-motion"
import {
  applyAnimation,
  applyDefaultContentSize,
  applyMotionDiv,
  applyTipsText,
} from "./style"
import {
  autoUpdate,
  flip,
  FloatingPortal,
  hide,
  Middleware,
  offset,
  size,
  useClick,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
} from "@floating-ui/react-dom-interactions"
import { mergeRefs } from "@illa-design/system"

export const Trigger: FC<TriggerProps> = (props) => {
  const {
    children,
    closeWhenScroll = true,
    autoFitPosition = true,
    colorScheme = "gray",
    clickOutsideToClose = true,
    content,
    closeOnInnerClick,
    position = "top",
    showArrow = true,
    closeDelay = 150,
    openDelay = 150,
    autoAlignPopupWidth,
    closeOnClick = true,
    defaultPopupVisible,
    withoutPadding,
    withoutShadow,
    withoutOffset,
    disabled,
    popupVisible,
    maxW = "566px",
    onVisibleChange,
    trigger = "hover",
    alignPoint,
  } = props

  const tipsContainerRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState<boolean>(false)
  const [mouseRecord, setMouseRecord] = useState({ x: 0, y: 0 })
  const finalVisible = popupVisible === undefined ? visible : popupVisible

  useEffect(() => {
    if (defaultPopupVisible) {
      if (popupVisible === undefined) {
        setVisible(true)
      }
    }
  }, [])

  const middleware = useMemo(() => {
    let middleware: Middleware[] = []
    if (autoFitPosition) {
      middleware.push(flip())
    }
    if (!withoutOffset) {
      middleware.push(offset(4))
    }
    if (autoAlignPopupWidth) {
      middleware.push(
        size({
          apply({ rects }) {
            if (autoAlignPopupWidth) {
              if (tipsContainerRef?.current !== null) {
                Object.assign(tipsContainerRef.current.style, {
                  width: `${rects.reference.width}px`,
                })
              }
            }
          },
        }),
      )
    }
    middleware.push(hide())
    return middleware
  }, [autoFitPosition, withoutOffset, autoAlignPopupWidth])

  const { x, y, reference, floating, strategy, placement, context } =
    useFloating({
      placement: position,
      open: finalVisible,
      onOpenChange: (v) => {
        if (popupVisible === undefined) {
          setVisible(v)
        }
        onVisibleChange?.(v)
      },
      middleware: middleware,
      whileElementsMounted: autoUpdate,
    })

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useHover(context, {
      enabled: trigger === "hover",
      move: true,
      delay: {
        open: openDelay,
        close: closeDelay,
      },
    }),
    useClick(context, {
      enabled: trigger === "click",
      toggle: closeOnClick,
    }),
    useFocus(context, {
      enabled: trigger === "focus",
      keyboardOnly: false,
    }),
    useRole(context, { role: "tooltip" }),
    useDismiss(context, {
      outsidePointerDown: clickOutsideToClose,
      ancestorScroll: closeWhenScroll,
    }),
  ])

  const ref = useMemo(
    () => mergeRefs(reference, (children as any).ref),
    [reference, children],
  )

  const closeContent = <div css={applyDefaultContentSize}>{content}</div>

  const centerNode = (
    <div
      ref={tipsContainerRef}
      css={applyTipsText(colorScheme, maxW, withoutPadding, withoutShadow)}
    >
      {closeContent}
    </div>
  )

  const tipsNode = (
    <motion.div
      css={applyMotionDiv()}
      variants={applyAnimation(placement, showArrow)}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {centerNode}
    </motion.div>
  )

  return (
    <>
      {cloneElement(
        children as ReactElement,
        getReferenceProps({
          onContextMenu: (e) => {
            if (trigger === "contextmenu") {
              e.preventDefault()
              if (alignPoint) {
                setMouseRecord({
                  x: e.clientX,
                  y: e.clientY,
                })
              }
              if (popupVisible === undefined) {
                if (finalVisible) {
                  setVisible(false)
                } else {
                  setVisible(true)
                }
              }
            }
          },
          onClick: (e) => {
            if (alignPoint) {
              setMouseRecord({
                x: e.clientX,
                y: e.clientY,
              })
            }
          },
          onMouseEnter: (e) => {
            if (alignPoint) {
              setMouseRecord({
                x: e.clientX,
                y: e.clientY,
              })
            }
          },
          key: "illa-trigger",
          ref,
          ...(props.children as any).props,
        }),
      )}
      <FloatingPortal root={document.body}>
        {!disabled && (
          <AnimatePresence>
            {finalVisible && (
              <div
                {...getFloatingProps({
                  onClick: (e) => {
                    if (closeOnInnerClick) {
                      if (popupVisible === undefined) {
                        setVisible(false)
                      }
                    }
                  },
                  ref: floating,
                  style: {
                    position: strategy,
                    top: alignPoint ? mouseRecord.y ?? 0 : y ?? 0,
                    left: alignPoint ? mouseRecord.x ?? 0 : x ?? 0,
                  },
                })}
              >
                {tipsNode}
              </div>
            )}
          </AnimatePresence>
        )}
      </FloatingPortal>
    </>
  )
}

Trigger.displayName = "Trigger"
