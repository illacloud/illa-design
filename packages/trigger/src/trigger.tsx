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
import { TriggerProps } from "./interface"
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
import { mergeRefs } from "@illa-design/system"
import useClickAway from "react-use/lib/useClickAway"
import useMouse from "react-use/lib/useMouse"

export const Trigger: FC<TriggerProps> = (props) => {
  const {
    colorScheme = "gray",
    content,
    position = "top",
    clickOutsideToClose,
    showArrow = true,
    closeDelay = 150,
    openDelay = 150,
    autoFitPosition = true,
    autoAlignPopupWidth,
    closeOnClick = true,
    defaultPopupVisible,
    maxWidth = "588px",
    withoutPadding,
    disabled,
    popupVisible,
    onVisibleChange,
    trigger = "hover",
  } = props

  const [tipVisible, setTipsVisible] = useState<boolean>(false)

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

  switch (finalPosition) {
    case "top":
    case "tl":
    case "tr":
      centerNode = (
        <div css={applyTipsContainer(finalPosition)}>
          <div
            css={applyTipsText(
              colorScheme,
              maxWidth,
              withoutPadding,
              adjustResult,
              autoAlignPopupWidth,
            )}
          >
            {closeContent}
          </div>
          {showArrow && (
            <TriangleTop
              css={applyTriangleStyle(colorScheme, finalPosition)}
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
        <div css={applyTipsContainer(finalPosition)}>
          {showArrow && (
            <TriangleBottom
              css={applyTriangleStyle(colorScheme, finalPosition)}
              width="8px"
              height="4px"
            />
          )}
          <div
            css={applyTipsText(
              colorScheme,
              maxWidth,
              withoutPadding,
              adjustResult,
              autoAlignPopupWidth,
            )}
          >
            {closeContent}
          </div>
        </div>
      )
      break
    case "left":
    case "lt":
    case "lb":
      centerNode = (
        <div css={applyTipsContainer(finalPosition)}>
          <div
            css={applyTipsText(
              colorScheme,
              maxWidth,
              withoutPadding,
              adjustResult,
              autoAlignPopupWidth,
            )}
          >
            {closeContent}
          </div>
          {showArrow && (
            <TriangleLeft
              css={applyTriangleStyle(colorScheme, finalPosition)}
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
        <div css={applyTipsContainer(finalPosition)}>
          {showArrow && (
            <TriangleRight
              css={applyTriangleStyle(colorScheme, finalPosition)}
              width="4px"
              height="8px"
            />
          )}
          <div
            css={applyTipsText(
              colorScheme,
              maxWidth,
              withoutPadding,
              adjustResult,
              autoAlignPopupWidth,
            )}
          >
            {closeContent}
          </div>
        </div>
      )
      break
  }

  const showTips = (control?: boolean) => {
    delayTodo(async () => {
      if (childrenRef.current != null) {
        const result = await adjustLocation(
          tipsNode,
          childrenRef.current,
          position,
          autoFitPosition,
        )
        // async deal
        setAdjustResult(result)
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

  tipsNode = (
    <motion.div
      css={applyMotionDiv()}
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
      {centerNode}
    </motion.div>
  )

  useEffect(() => {
    let isMount = true
    if (!disabled && childrenRef.current != null) {
      if (popupVisible == undefined) {
        if (tipVisible || defaultPopupVisible) {
          showTips()
        }
      } else {
        popupVisible ? showTips(true) : hideTips(true)
      }
    }
    return () => {
      isMount = false
      window.clearTimeout(timeOutHandlerId)
    }
  }, [
    popupVisible,
    position,
    content,
    disabled,
    measureInfo,
    maxWidth,
    autoAlignPopupWidth,
  ])

  const protalRef = useRef<HTMLDivElement>(null)
  const { elX, elY } = useMouse(protalRef)

  useClickAway(childrenRef, () => {
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
  })

  const newProps = {
    onMouseEnter: (e: SyntheticEvent<Element, Event>) => {
      if (!disabled && trigger == "hover") {
        showTips()
      }
    },
    onMouseLeave: (e: SyntheticEvent<Element, Event>) => {
      if (!disabled && trigger == "hover") {
        hideTips()
      }
    },
    onFocus: (e: SyntheticEvent<Element, Event>) => {
      if (!disabled && trigger == "focus") {
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
        case "click":
          if (!disabled) {
            if (!tipVisible) {
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
      e.stopPropagation()
    },
  }

  const protalContent = (
    <AnimatePresence>
      {!disabled && tipVisible && childrenRef.current != null ? (
        <Popup
          ref={mergeRefs(protalRef, tipsMeasureRef)}
          top={`${adjustResult?.transY}px`}
          left={`${adjustResult?.transX}px`}
        >
          {tipsNode}
        </Popup>
      ) : null}
    </AnimatePresence>
  )

  if (isValidElement(props.children)) {
    const finalProps = {
      ref: mergeRefs(
        (props.children as ReactElement).props?.ref ?? null,
        measureRef,
        childrenRef,
      ),
      onMouseEnter: (e: SyntheticEvent<Element, Event>) => {
        newProps.onMouseEnter(e)
        ;(props.children as ReactElement).props?.onMouseEnter?.call(e)
      },
      onMouseLeave: (e: SyntheticEvent<Element, Event>) => {
        newProps.onMouseLeave(e)
        ;(props.children as ReactElement).props?.onMouseLeave?.call(e)
      },
      onFocus: (e: SyntheticEvent<Element, Event>) => {
        newProps.onFocus(e)
        ;(props.children as ReactElement).props?.onFocus?.call(e)
      },
      onBlur: (e: SyntheticEvent<Element, Event>) => {
        newProps.onBlur(e)
        ;(props.children as ReactElement).props?.onBlur?.call(e)
      },
      onClick: (e: SyntheticEvent<Element, Event>) => {
        newProps.onClick(e)
        ;(props.children as ReactElement).props?.onClick?.call(e)
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
