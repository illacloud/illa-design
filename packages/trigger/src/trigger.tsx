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
import { TriggerProviderContext } from "./trigger-context"
import { css } from "@emotion/react"
import {
  autoUpdate,
  computePosition,
  flip,
  FloatingPortal,
  hide,
  Middleware,
  offset,
  safePolygon,
  size,
  useClick,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useMergeRefs,
  useRole,
} from "@floating-ui/react"
import { applyBoxStyle } from "@illa-design/theme"
import { AnimatePresence, motion } from "framer-motion"
import {
  cloneElement,
  FC,
  ReactElement,
  useContext,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react"

export const Trigger: FC<TriggerProps> = (props) => {
  const {
    onBlur,
    onFocus,
    triggerRef,
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
    popupContainer,
  } = props

  const tipsContainerRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState<boolean>(false)
  const finalVisible = popupVisible === undefined ? visible : popupVisible
  const triggerContext = useContext(TriggerProviderContext)
  const _renderInBody = renderInBody ?? triggerContext.renderInBody ?? true
  const _zIndex = zIndex ?? triggerContext.zIndex ?? 5

  let _popupContainer =
    (popupContainer instanceof HTMLElement
      ? popupContainer
      : popupContainer?.current) ?? (_renderInBody ? document.body : null)

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
          apply({ availableWidth, availableHeight, elements }) {
            // Do things with the data, e.g.
            Object.assign(elements.floating.style, {
              width: `${childrenRef.current?.clientWidth}px`,
            })
          },
        }),
      )
    }
    middleware.push(hide())
    return middleware
  }, [autoFitPosition, withoutOffset, autoAlignPopupWidth])

  const { refs, x, y, strategy, placement, context, elements } = useFloating({
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
      handleClose: safePolygon({
        buffer: 1,
      }),
    }),
    useClick(context, {
      enabled: trigger === "click",
      toggle: closeOnClick,
      keyboardHandlers: false,
    }),
    useFocus(context, {
      enabled: trigger === "focus",
      visibleOnly: false,
    }),
    useRole(context, { role: "tooltip" }),
    useDismiss(context, {
      outsidePress: clickOutsideToClose,
      ancestorScroll: closeWhenScroll,
    }),
  ])

  const closeContent = <div css={applyDefaultContentSize}>{content}</div>

  const childrenRef = useRef<HTMLElement>((props.children as any).ref)

  let centerNode: ReactElement = <></>

  switch (placement) {
    case "top":
    case "top-start":
    case "top-end":
      centerNode = (
        <div css={applyVerticalContainer(autoAlignPopupWidth)}>
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
              containerStyle={applyTriangleStyle(colorScheme, placement)}
            />
          )}
        </div>
      )
      break
    case "bottom":
    case "bottom-start":
    case "bottom-end":
      centerNode = (
        <div css={applyVerticalContainer(autoAlignPopupWidth)}>
          {showArrow && (
            <TriangleBottom
              w="8px"
              h="4px"
              containerStyle={applyTriangleStyle(colorScheme, placement)}
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
        <div css={applyHorizontalContainer(autoAlignPopupWidth)}>
          {showArrow && (
            <TriangleRight
              w="4px"
              h="8px"
              containerStyle={applyTriangleStyle(colorScheme, placement)}
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
        <div css={applyHorizontalContainer(autoAlignPopupWidth)}>
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
              containerStyle={applyTriangleStyle(colorScheme, placement)}
            />
          )}
        </div>
      )
      break
  }

  const tipsNode = (
    <motion.div
      css={applyMotionDiv(autoAlignPopupWidth)}
      variants={applyAnimation(placement, showArrow)}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {centerNode}
    </motion.div>
  )

  const mergedRef = useMergeRefs([
    refs.setReference,
    (props.children as any).ref,
    childrenRef,
  ])

  useImperativeHandle(
    triggerRef,
    () => {
      return {
        rerenderPosition: () => {
          if (elements.reference && elements.floating) {
            computePosition(elements.reference, elements.floating, {
              placement: placement,
              middleware: middleware,
            }).then(({ x, y }) => {
              if (elements.floating) {
                Object.assign(elements.floating.style, {
                  left: `${x}px`,
                  top: `${y}px`,
                })
              }
            })
          }
        },
      }
    },
    [elements.floating, elements.reference, middleware, placement],
  )

  return (
    <>
      {cloneElement(
        children as ReactElement,
        getReferenceProps({
          key: "illa-trigger",
          ...(children as any).props,
          ref: mergedRef,
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
      {!disabled && (
        <AnimatePresence>
          {finalVisible && (
            <FloatingPortal
              root={_popupContainer ?? childrenRef?.current ?? document.body}
            >
              <div
                onFocus={onFocus}
                onBlur={onBlur}
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
                  ref: refs.setFloating,
                  style: {
                    position: strategy,
                    top: y ?? 0,
                    left: x ?? 0,
                  },
                })}
              >
                {tipsNode}
              </div>
            </FloatingPortal>
          )}
        </AnimatePresence>
      )}
    </>
  )
}

Trigger.displayName = "Trigger"
