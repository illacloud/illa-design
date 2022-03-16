/** @jsxImportSource @emotion/react */
import * as React from "react"
import {
  cloneElement,
  FC,
  Fragment,
  isValidElement,
  MutableRefObject,
  ReactElement,
  ReactNode,
  Ref,
  RefObject,
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
import useClickAway from "react-use/lib/useClickAway"
import useMeasure from "react-use/lib/useMeasure"
import { isFunction, isObject } from "@illa-design/system"

type ReactRef<T> = Ref<T> | RefObject<T> | MutableRefObject<T>

/**
 * Assigns a value to a ref function or object
 *
 * @param ref the ref to assign to
 * @param value the value
 */
function assignRef<T = any>(ref: ReactRef<T> | undefined, value: T) {
  if (ref == null) return

  if (isObject(value)) {
    if (isFunction(ref)) {
      // @ts-ignore
      ref(value?.dom)
      return
    }

    try {
      // @ts-ignore
      ref.current = value?.dom
    } catch (error) {
      throw new Error(`Cannot assign value '${value}' to ref '${ref}'`)
    }
  } else {
    if (isFunction(ref)) {
      ref(value)
      return
    }

    try {
      // @ts-ignore
      ref.current = value
    } catch (error) {
      throw new Error(`Cannot assign value '${value}' to ref '${ref}'`)
    }
  }
}

/**
 * Combine multiple React refs into a single ref function.
 * This is used mostly when you need to allow consumers forward refs to
 * internal components
 *
 * @param refs refs to assign to value to
 */
function mergeRefs<T>(...refs: (ReactRef<T> | undefined)[]) {
  return (node: T | null) => {
    refs.forEach((ref) => assignRef(ref, node))
  }
}

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
    withoutPadding,
    disabled,
    popupVisible,
    onVisibleChange,
    trigger = "hover",
  } = props

  const [tipVisible, setTipsVisible] = useState<boolean>(false)

  const tipsRef = useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>

  const childrenRef = useRef<HTMLElement>() as MutableRefObject<HTMLElement>

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
    timeOutHandlerId = window.setTimeout(() => {
      todo()
      timeOutHandlerId = undefined
    }, timeout)
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

  const showTips = () => {
    delayTodo(async () => {
      if (!tipVisible && childrenRef.current != null) {
        const result = await adjustLocation(
          tipsNode,
          childrenRef.current,
          position,
          autoFitPosition,
        )
        // async deal
        setAdjustResult(result)
        if (popupVisible == undefined) {
          setTipsVisible(true)
        }
        if (onVisibleChange != undefined) {
          onVisibleChange(true)
        }
      }
    }, openDelay)
  }

  const hideTips = () => {
    delayTodo(() => {
      if (tipVisible) {
        if (popupVisible == undefined) {
          setTipsVisible(false)
        }
        if (onVisibleChange != undefined) {
          onVisibleChange(false)
        }
      }
    }, closeDelay)
  }

  tipsNode = (
    <motion.div
      ref={tipsRef}
      css={applyMotionDiv()}
      variants={applyAnimation(finalPosition, showArrow)}
      initial="initial"
      animate="animate"
      exit="exit"
      onClick={() => {
        if (!disabled && trigger == "click" && clickOutsideToClose) {
          showTips()
        }
      }}
      onMouseEnter={() => {
        if (!disabled && trigger == "hover") {
          showTips()
        }
      }}
      onMouseLeave={() => {
        if (!disabled && trigger == "hover") {
          hideTips()
        }
      }}
    >
      {centerNode}
    </motion.div>
  )

  useClickAway(childrenRef, () => {
    if (!disabled && clickOutsideToClose) {
      hideTips()
    }
  })

  useEffect(() => {
    let isMount = true
    if (!disabled && childrenRef.current != null) {
      if (tipVisible && popupVisible == undefined) {
        adjustLocation(
          tipsNode,
          childrenRef.current,
          position,
          autoFitPosition,
        ).then((result) => {
          // async deal
          if (isMount) {
            setAdjustResult(result)
            if (onVisibleChange != undefined) {
              onVisibleChange(true)
            }
          }
        })
      } else if (
        popupVisible ||
        (popupVisible == undefined && defaultPopupVisible)
      ) {
        adjustLocation(
          tipsNode,
          childrenRef.current,
          position,
          autoFitPosition,
        ).then((result) => {
          // async deal
          if (isMount) {
            setAdjustResult(result)
            if (!tipVisible) {
              setTipsVisible(true)
              if (onVisibleChange != undefined) {
                onVisibleChange(true)
              }
            }
          }
        })
      } else if (popupVisible == false) {
        adjustLocation(
          tipsNode,
          childrenRef.current,
          position,
          autoFitPosition,
        ).then((result) => {
          // async deal
          if (isMount) {
            setAdjustResult(result)
            if (tipVisible) {
              setTipsVisible(false)
              if (onVisibleChange != undefined) {
                onVisibleChange(false)
              }
            }
          }
        })
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
    autoAlignPopupWidth,
    measureInfo,
  ])

  const newProps = {
    onMouseEnter: () => {
      if (!disabled && trigger == "hover") {
        showTips()
      }
    },
    onMouseLeave: () => {
      if (!disabled && trigger == "hover") {
        hideTips()
      }
    },
    onFocus: () => {
      if (!disabled && trigger == "focus") {
        showTips()
      }
    },
    onBlur: () => {
      if (!disabled && trigger == "focus") {
        hideTips()
      }
    },
    onClick: () => {
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
    },
  }

  const protalContent = (
    <AnimatePresence>
      {!disabled && tipVisible && childrenRef.current != null ? (
        <Popup
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
      onMouseEnter: (e: Event) => {
        newProps.onMouseEnter()
        ;(props.children as ReactElement).props?.onMouseEnter?.call(e)
      },
      onMouseLeave: (e: Event) => {
        newProps.onMouseLeave()
        ;(props.children as ReactElement).props?.onMouseLeave?.call(e)
      },
      onFocus: (e: Event) => {
        newProps.onFocus()
        ;(props.children as ReactElement).props?.onFocus?.call(e)
      },
      onBlur: (e: Event) => {
        newProps.onBlur()
        ;(props.children as ReactElement).props?.onBlur?.call(e)
      },
      onClick: (e: Event) => {
        newProps.onClick()
        ;(props.children as ReactElement).props?.onClick?.call(e)
      },
    }
    return (
      <Fragment>
        {cloneElement(props.children as ReactElement, { ...finalProps })}
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
