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
  ElementProps,
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

  let l: ElementProps[] = []
  switch (trigger) {
    case "hover":
      l = [
        useHover(context, {
          move: true,
          delay: {
            open: openDelay,
            close: closeDelay,
          },
        }),
        useRole(context, { role: "tooltip" }),
        useDismiss(context, {
          outsidePointerDown: clickOutsideToClose,
          ancestorScroll: true,
        }),
      ]
      break
    case "click":
      l = [
        useClick(context, {
          toggle: closeOnClick,
        }),
        useRole(context, { role: "tooltip" }),
        useDismiss(context, {
          outsidePointerDown: clickOutsideToClose,
          ancestorScroll: true,
        }),
      ]
      break
    case "focus":
      l = [
        useFocus(context, {
          keyboardOnly: false,
        }),
        useRole(context, { role: "tooltip" }),
        useDismiss(context, {
          outsidePointerDown: clickOutsideToClose,
          ancestorScroll: true,
        }),
      ]
      break
    case "contextmenu":
      l = [
        useRole(context, { role: "menu" }),
        useDismiss(context, {
          outsidePointerDown: clickOutsideToClose,
          ancestorScroll: true,
        }),
      ]
  }

  const { getReferenceProps, getFloatingProps } = useInteractions(l)

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
          ref,
          ...(props.children as any).props,
        }),
      )}
      <FloatingPortal
        root={document.body}
        children={
          !disabled && (
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
          )
        }
      />
    </>
  )
}

Trigger.displayName = "Trigger"
