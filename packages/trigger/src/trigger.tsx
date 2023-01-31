import { TriggerProps } from "./interface"
import {
  applyAnimation,
  applyDefaultContentSize,
  applyHorizontalContainer,
  applyMotionDiv,
  applyTipsText,
  applyTriangleStyle,
  applyVerticalContainer,
} from "./style"
import {
  TriangleBottom,
  TriangleLeft,
  TriangleRight,
  TriangleTop,
} from "./triangle"
import { TriggerProviderContext } from "./triggerContext"
import { css } from "@emotion/react"
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
  safePolygon,
  useInteractions,
  useRole,
} from "@floating-ui/react"
import { mergeRefs } from "@illa-design/system"
import { applyBoxStyle } from "@illa-design/theme"
import { AnimatePresence, motion } from "framer-motion"
import {
  cloneElement,
  FC,
  ReactElement,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react"

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
    renderInBody,
    zIndex,
  } = props

  const tipsContainerRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState<boolean>(false)
  const finalVisible = popupVisible === undefined ? visible : popupVisible
  const triggerContext = useContext(TriggerProviderContext)
  const _renderInBody = renderInBody ?? triggerContext.renderInBody ?? true
  const _zIndex = zIndex ?? triggerContext.zIndex ?? 1

  useEffect(() => {
    if (defaultPopupVisible) {
      if (popupVisible === undefined) {
        setVisible(true)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        if (!disabled && finalVisible !== v) {
          if (popupVisible === undefined) {
            setVisible(v)
          }
          onVisibleChange?.(v)
        }
      },
      middleware: middleware,
      whileElementsMounted: autoUpdate,
    })

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useHover(context, {
      enabled: trigger === "hover",
      move: true,
      restMs: 200,
      delay: {
        open: openDelay,
        close: closeDelay,
      },
      handleClose: safePolygon(),
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
      outsidePress: clickOutsideToClose,
      ancestorScroll: closeWhenScroll,
    }),
  ])

  const closeContent = <div css={applyDefaultContentSize}>{content}</div>

  const childrenRef = useRef<HTMLElement>(null)

  let centerNode: ReactElement = <></>

  switch (placement) {
    case "top":
    case "top-start":
    case "top-end":
      centerNode = (
        <div css={applyVerticalContainer}>
          <div
            ref={tipsContainerRef}
            css={applyTipsText(
              colorScheme,
              maxW,
              withoutPadding,
              withoutShadow,
              autoAlignPopupWidth,
            )}
          >
            {closeContent}
          </div>
          {showArrow && (
            <TriangleTop
              w="8px"
              h="4px"
              css={applyTriangleStyle(colorScheme, placement)}
            />
          )}
        </div>
      )
      break
    case "bottom":
    case "bottom-start":
    case "bottom-end":
      centerNode = (
        <div css={applyVerticalContainer}>
          {showArrow && (
            <TriangleBottom
              w="8px"
              h="4px"
              css={applyTriangleStyle(colorScheme, placement)}
            />
          )}
          <div
            ref={tipsContainerRef}
            css={applyTipsText(
              colorScheme,
              maxW,
              withoutPadding,
              withoutShadow,
              autoAlignPopupWidth,
            )}
          >
            {closeContent}
          </div>
        </div>
      )
      break
    case "right":
    case "right-start":
    case "right-end":
      centerNode = (
        <div css={applyHorizontalContainer}>
          {showArrow && (
            <TriangleRight
              w="4px"
              h="8px"
              css={applyTriangleStyle(colorScheme, placement)}
            />
          )}
          <div
            ref={tipsContainerRef}
            css={applyTipsText(
              colorScheme,
              maxW,
              withoutPadding,
              withoutShadow,
              autoAlignPopupWidth,
            )}
          >
            {closeContent}
          </div>
        </div>
      )
      break
    case "left":
    case "left-start":
    case "left-end":
      centerNode = (
        <div css={applyHorizontalContainer}>
          <div
            ref={tipsContainerRef}
            css={applyTipsText(
              colorScheme,
              maxW,
              withoutPadding,
              withoutShadow,
              autoAlignPopupWidth,
            )}
          >
            {closeContent}
          </div>
          {showArrow && (
            <TriangleLeft
              w="4px"
              h="8px"
              css={applyTriangleStyle(colorScheme, placement)}
            />
          )}
        </div>
      )
      break
  }

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
          key: "illa-trigger",
          ...(children as any).props,
          ref: mergeRefs(reference, (props.children as any).ref, childrenRef),
          onContextMenu: (e) => {
            if (disabled) {
              return
            }
            if ((children as any).props.onContextMenu != undefined) {
              ;(children as any).props.onContextMenu(e)
            }
            if (trigger === "contextmenu") {
              e.preventDefault()
              if (alignPoint) {
                if (childrenRef.current != null) {
                  Object.assign(childrenRef.current, {
                    getBoundingClientRect: () => ({
                      x: e.clientX,
                      y: e.clientY,
                      width: 0,
                      height: 0,
                      top: e.clientY,
                      right: e.clientX,
                      bottom: e.clientY,
                      left: e.clientX,
                    }),
                  })
                }
              }
              if (popupVisible === undefined) {
                if (finalVisible) {
                  setVisible(false)
                } else {
                  setVisible(true)
                }
              } else {
                onVisibleChange?.(!finalVisible)
              }
            }
          },
          onClick: (e) => {
            if ((children as any).props.onClick != undefined) {
              ;(children as any).props.onClick(e)
            }
            if (alignPoint && trigger === "click") {
              if (childrenRef.current != null) {
                Object.assign(childrenRef.current, {
                  getBoundingClientRect: () => ({
                    x: e.clientX,
                    y: e.clientY,
                    width: 0,
                    height: 0,
                    top: e.clientY,
                    right: e.clientX,
                    bottom: e.clientY,
                    left: e.clientX,
                  }),
                })
              }
            }
          },
        }),
      )}
      <FloatingPortal
        root={
          _renderInBody ? document.body : childrenRef?.current || document.body
        }
      >
        {!disabled && (
          <AnimatePresence>
            {finalVisible && (
              <div
                css={[
                  css`
                    display: inline-flex;
                    z-index: ${_zIndex};
                  `,
                  applyBoxStyle(props),
                ]}
                {...getFloatingProps({
                  onClick: (e) => {
                    if (closeOnInnerClick) {
                      if (popupVisible === undefined) {
                        setVisible(false)
                      } else {
                        onVisibleChange?.(false)
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
      </FloatingPortal>
    </>
  )
}

Trigger.displayName = "Trigger"
