import {
  cloneElement,
  FC,
  Fragment,
  isValidElement,
  MutableRefObject,
  ReactElement,
  ReactNode,
  SyntheticEvent,
  useEffect,
  useRef,
  useState,
} from "react"
import { CustomPositionType, TriggerProps } from "./interface"
import { AnimatePresence, motion } from "framer-motion"
import {
  applyAnimation,
  applyChildrenContainer,
  applyDefaultContentSize,
  applyMotionDiv,
  applyTipsContainer,
  applyTipsText,
  applyTriangleStyle,
} from "./style"
import {
  TriangleBottom,
  TriangleLeft,
  TriangleRight,
  TriangleTop,
} from "./triangle"
import {
  adjustLocation,
  AdjustResult,
  getFinalPosition,
} from "./adjust-tips-location"
import { Popup } from "./popup"
import useMeasure from "react-use/lib/useMeasure"
import useWindowSize from "react-use/lib/useWindowSize"
import { getScrollElements, mergeRefs } from "@illa-design/system"
import useClickAway from "react-use/lib/useClickAway"
import useMouse from "react-use/lib/useMouse"
import { RemoveScroll } from "react-remove-scroll"
import { css } from "@emotion/react"

export const Trigger: FC<TriggerProps> = (props) => {
  const {
    _css,
    colorScheme = "gray",
    content,
    closeOnInnerClick,
    position = "top",
    clickOutsideToClose,
    showArrow = true,
    closeDelay = 150,
    openDelay = 150,
    zIndex = "auto",
    autoFitPosition = true,
    autoAlignPopupWidth,
    closeOnClick = true,
    defaultPopupVisible,
    maxWidth = "588px",
    withoutPadding,
    withoutShadow,
    disabled,
    popupVisible,
    onVisibleChange,
    trigger = "hover",
    alignPoint,
    disabledOutsideScrollable,
  } = props

  const [tipVisible, setTipsVisible] = useState<boolean>(false)
  const { width: windowWidth, height: windowHeight } = useWindowSize()

  const [customPosition, setCustomPosition] = useState<CustomPositionType>({})

  const childrenRef = useRef<HTMLElement>(null) as MutableRefObject<HTMLElement>

  const [adjustResult, setAdjustResult] = useState<AdjustResult>()
  const finalPosition = getFinalPosition(
    adjustResult?.opposite ?? false,
    position,
  )

  const [measureRef, measureInfo] = useMeasure<HTMLElement>()

  // delay to do sth
  let timeOutHandlerId: number | undefined
  const delayTodo = (todo: () => void, timeout: number) => {
    if (timeOutHandlerId != undefined) {
      window.clearTimeout(timeOutHandlerId)
    }
    if (timeout <= 0) {
      todo()
    } else {
      timeOutHandlerId = window.setTimeout(() => {
        todo()
        timeOutHandlerId = undefined
      }, timeout)
    }
  }

  let tipsNode: ReactNode
  let centerNode: ReactNode

  const closeContent = <div css={applyDefaultContentSize}>{content}</div>

  const stateValue = {
    colorScheme,
    maxWidth,
    withoutPadding,
    withoutShadow,
    adjustResult,
    autoAlignPopupWidth,
  }

  switch (finalPosition) {
    case "top":
    case "tl":
    case "tr":
      centerNode = (
        <div css={css(applyTipsContainer(finalPosition, showArrow), _css)}>
          <div css={applyTipsText(stateValue)}>{closeContent}</div>
          {showArrow && (
            <TriangleTop
              css={applyTriangleStyle(colorScheme, finalPosition, alignPoint)}
              width="8px"
              height="4px"
            />
          )}
        </div>
      )
      break
    case "bottom":
    case "bl":
    case "br":
      centerNode = (
        <div css={css(applyTipsContainer(finalPosition, showArrow), _css)}>
          {showArrow && (
            <TriangleBottom
              css={applyTriangleStyle(colorScheme, finalPosition, alignPoint)}
              width="8px"
              height="4px"
            />
          )}
          <div css={applyTipsText(stateValue)}>{closeContent}</div>
        </div>
      )
      break
    case "left":
    case "lt":
    case "lb":
      centerNode = (
        <div css={css(applyTipsContainer(finalPosition, showArrow), _css)}>
          <div css={applyTipsText(stateValue)}>{closeContent}</div>
          {showArrow && (
            <TriangleLeft
              css={applyTriangleStyle(colorScheme, finalPosition, alignPoint)}
              width="4px"
              height="8px"
            />
          )}
        </div>
      )
      break
    case "right":
    case "rt":
    case "rb":
      centerNode = (
        <div css={css(applyTipsContainer(finalPosition, showArrow), _css)}>
          {showArrow && (
            <TriangleRight
              css={applyTriangleStyle(colorScheme, finalPosition, alignPoint)}
              width="4px"
              height="8px"
            />
          )}
          <div css={applyTipsText(stateValue)}>{closeContent}</div>
        </div>
      )
      break
  }

  const adjustLocationAndResult = () => {
    if (childrenRef.current != null && tipsMeasureInfo != null) {
      let width = 0,
        height = 0

      if (protalRef.current) {
        ;({ width, height } = protalRef?.current.getBoundingClientRect())
      }

      /*
       * tipsMeasureInfo.width & tipsMeasureInfo.height may be 0,
       * but tip's width & height is necessary, so get the maximun between
       * `getBoundingClientRect` and `tipsMeasureinfo` as width & height
       */
      width = Math.max(width, tipsMeasureInfo.width)
      height = Math.max(height, tipsMeasureInfo.height)

      const result = adjustLocation(
        width,
        height,
        childrenRef.current,
        position,
        autoFitPosition,
        customPosition,
        showArrow,
      )
      setAdjustResult(result)
    }
  }

  const showTips = (control?: boolean) => {
    delayTodo(async () => {
      if (childrenRef.current != null) {
        if (popupVisible == undefined || control) {
          setTipsVisible(true)
        }
        if (onVisibleChange != undefined) {
          if (popupVisible != undefined) {
            onVisibleChange(true)
          } else {
            if (!tipVisible) {
              onVisibleChange(true)
            }
          }
        }
      }
    }, openDelay)
  }

  const hideTips = (control?: boolean) => {
    delayTodo(() => {
      if (popupVisible == undefined || control) {
        setTipsVisible(false)
      }
      if (onVisibleChange != undefined) {
        if (popupVisible != undefined) {
          onVisibleChange(false)
        } else {
          if (tipVisible) {
            onVisibleChange(false)
          }
        }
      }
    }, closeDelay)
  }

  const [tipsMeasureRef, tipsMeasureInfo] = useMeasure<HTMLDivElement>()
  const protalRef = useRef<HTMLDivElement>(null)
  const { elX, elY } = useMouse(protalRef)

  tipsNode = (
    <motion.div
      css={applyMotionDiv()}
      ref={mergeRefs(protalRef, tipsMeasureRef)}
      variants={applyAnimation(finalPosition, showArrow)}
      initial="initial"
      animate="animate"
      exit="exit"
      onMouseEnter={(event) => {
        if (!disabled && trigger == "hover") {
          showTips()
        }
      }}
      onMouseLeave={(event) => {
        if (!disabled && trigger == "hover") {
          hideTips()
        }
      }}
    >
      {disabledOutsideScrollable ? (
        <RemoveScroll>{centerNode}</RemoveScroll>
      ) : (
        centerNode
      )}
    </motion.div>
  )

  useClickAway(
    childrenRef,
    () => {
      if (!disabled && clickOutsideToClose) {
        if (
          elX < 0 ||
          elX > tipsMeasureInfo.width ||
          elY < 0 ||
          elY > tipsMeasureInfo.height
        ) {
          hideTips()
        }
      }
    },
    ["click"],
  )

  useEffect(() => {
    if (tipVisible) {
      adjustLocationAndResult()
    }
  }, [
    tipVisible,
    windowWidth,
    windowHeight,
    tipsMeasureInfo.width,
    tipsMeasureInfo.height,
    measureInfo,
    content,
    customPosition,
  ])

  useEffect(() => {
    if (popupVisible != undefined) {
      popupVisible
        ? delayTodo(async () => {
            setTipsVisible(true)
          }, openDelay)
        : delayTodo(async () => {
            setTipsVisible(false)
          }, closeDelay)
    }
  }, [popupVisible])

  useEffect(() => {
    if (defaultPopupVisible) {
      showTips(popupVisible !== undefined)
    }
  }, [])

  useEffect(() => {
    if (childrenRef.current != null) {
      let scrollElements = getScrollElements(childrenRef.current)
      scrollElements.forEach((item) => {
        item.addEventListener("scroll", () => {
          adjustLocationAndResult()
        })
      })
    }
  }, [])

  const protalContent = (
    <AnimatePresence>
      {!disabled && tipVisible && childrenRef.current !== null ? (
        <Popup
          onClick={() => {
            if (closeOnInnerClick) {
              hideTips(popupVisible !== undefined)
            }
          }}
          top={`${adjustResult?.transY ?? 0}px`}
          left={`${adjustResult?.transX ?? 0}px`}
          zIndex={zIndex}
        >
          {tipsNode}
        </Popup>
      ) : null}
    </AnimatePresence>
  )

  const newProps = {
    onMouseEnter: (e: SyntheticEvent<Element, Event>) => {
      if (!disabled && trigger == "hover") {
        if (alignPoint) {
          setCustomPosition({
            x: (e.nativeEvent as MouseEvent).clientX,
            y: (e.nativeEvent as MouseEvent).clientY,
          })
        }
        showTips()
      }
    },
    onMouseLeave: (e: SyntheticEvent<Element, Event>) => {
      if (!disabled && trigger == "hover") {
        hideTips()
      }
    },
    onContextMenu: (e: SyntheticEvent<Element, Event>) => {
      if (trigger == "contextmenu") {
        if (!disabled) {
          e.preventDefault()
          if (alignPoint) {
            setCustomPosition({
              x: (e.nativeEvent as MouseEvent).clientX,
              y: (e.nativeEvent as MouseEvent).clientY,
            })
          }
          showTips()
        }
      }
    },
    onFocus: (e: SyntheticEvent<Element, Event>) => {
      if (!disabled && trigger == "focus") {
        if (alignPoint) {
          if (e.target instanceof HTMLElement) {
            setCustomPosition({
              x: (e.nativeEvent as MouseEvent).clientX,
              y: (e.nativeEvent as MouseEvent).clientY,
            })
          }
        }
        showTips()
      }
    },
    onBlur: (e: SyntheticEvent<Element, Event>) => {
      if (!disabled && trigger == "focus") {
        hideTips()
      }
    },
    onClick: (e: SyntheticEvent<Element, Event>) => {
      switch (trigger) {
        case "contextmenu":
          if (tipVisible) {
            if (closeOnClick) {
              hideTips()
            }
          }
          break
        case "click":
          if (!disabled) {
            if (!tipVisible) {
              if (alignPoint) {
                setCustomPosition({
                  x: (e.nativeEvent as MouseEvent).clientX,
                  y: (e.nativeEvent as MouseEvent).clientY,
                })
              }
              showTips()
            } else if (tipVisible) {
              if (closeOnClick) {
                hideTips()
              }
            }
          }
          break
        case "hover":
        case "focus":
          if (!disabled && closeOnClick && tipVisible) {
            hideTips()
          }
          break
      }
    },
  }

  if (isValidElement(props.children)) {
    const finalProps = {
      ref: mergeRefs(
        (props.children as ReactElement).props?.ref ?? null,
        measureRef,
        childrenRef,
      ),
      onMouseEnter: (e: SyntheticEvent<Element, Event>) => {
        newProps.onMouseEnter(e)
        ;(props.children as ReactElement).props?.onMouseEnter?.(e.nativeEvent)
      },
      onMouseLeave: (e: SyntheticEvent<Element, Event>) => {
        newProps.onMouseLeave(e)
        ;(props.children as ReactElement).props?.onMouseLeave?.(e.nativeEvent)
      },
      onContextMenu: (e: SyntheticEvent<Element, Event>) => {
        newProps.onContextMenu(e)
        ;(props.children as ReactElement).props?.onContextMenu?.(e.nativeEvent)
      },
      onFocus: (e: SyntheticEvent<Element, Event>) => {
        newProps.onFocus(e)
        ;(props.children as ReactElement).props?.onFocus?.(e.nativeEvent)
      },
      onBlur: (e: SyntheticEvent<Element, Event>) => {
        newProps.onBlur(e)
        ;(props.children as ReactElement).props?.onBlur?.(e.nativeEvent)
      },
      onClick: (e: SyntheticEvent<Element, Event>) => {
        newProps.onClick(e)
        ;(props.children as ReactElement).props?.onClick?.(e.nativeEvent)
      },
    }
    return (
      <Fragment>
        {cloneElement(props.children as ReactElement, {
          key: "illa-trigger",
          ...finalProps,
        })}
        {protalContent}
      </Fragment>
    )
  } else {
    return (
      <span
        css={applyChildrenContainer}
        ref={(ref) => {
          if (ref != null) {
            measureRef(ref)
            childrenRef.current = ref
          }
        }}
        {...newProps}
      >
        {props.children}
        {protalContent}
      </span>
    )
  }
}

Trigger.displayName = "Trigger"
