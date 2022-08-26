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
import { ElementProps } from "@floating-ui/react-dom-interactions/src/types"

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
    disabled,
    popupVisible,
    maxW = "566px",
    onVisibleChange,
    trigger = "hover",
    alignPoint,
  } = props

  const tipsContainerRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState<boolean>(false)
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
  middleware.push(offset(0))
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
  middleware.push(offset(4))

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
        }),
      ]
      break
    case "focus":
      l = [
        useFocus(context),
        useRole(context, { role: "tooltip" }),
        useDismiss(context, {
          outsidePointerDown: clickOutsideToClose,
        }),
      ]
      break
    case "contextmenu":
      l = [
        useRole(context, { role: "menu" }),
        useDismiss(context, {
          outsidePointerDown: clickOutsideToClose,
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
        getReferenceProps({ ref, ...(props.children as any).props }),
      )}
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
                onContextMenu: (e) => {
                  if (trigger === "contextmenu") {
                    e.preventDefault()
                    if (popupVisible === undefined) {
                      if (finalVisible) {
                        setVisible(false)
                      } else {
                        setVisible(true)
                      }
                    }
                  }
                },
                ref: floating,
                style: {
                  position: strategy,
                  top: y ?? 0,
                  left: x ?? 0,
                },
              })}
            >
              {tipsNode}
            </div>
          )}
        </AnimatePresence>
      )}
    </>
  )
}

Trigger.displayName = "Trigger"
