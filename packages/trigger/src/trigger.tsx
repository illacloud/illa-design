/** @jsxImportSource @emotion/react */
import {
  Children,
  cloneElement,
  FC,
  isValidElement,
  MutableRefObject,
  ReactElement,
  ReactNode,
  RefCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react"
import { TriggerProps } from "./interface"
import { AnimatePresence, motion } from "framer-motion"
import {
  applyAnimation,
  applyCloseButton,
  applyCloseContentCss,
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
import { Link } from "@illa-design/link"
import {
  ConfigProviderContext,
  ConfigProviderProps,
  def,
} from "@illa-design/config-provider"
import useMeasure from "react-use/lib/useMeasure"
import useClickAway from "react-use/lib/useClickAway"

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
    hasCloseIcon,
    popupVisible,
    onVisibleChange,
    trigger = "hover",
  } = props

  const [tipVisible, setTipsVisible] = useState<boolean>(false)

  const tipsRef = useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>

  const [measureRef, measureInfo] = useMeasure<HTMLElement>()

  const childrenRef = useRef<HTMLElement>() as MutableRefObject<HTMLElement>

  const [adjustResult, setAdjustResult] = useState<AdjustResult>()
  const finalPosition = getFinalPosition(
    adjustResult?.opposite ?? false,
    position,
  )

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

  const configProviderProps = useContext<ConfigProviderProps>(
    ConfigProviderContext,
  )
  const locale = configProviderProps?.locale?.trigger ?? def.trigger

  const closeContent = (
    <div css={applyCloseContentCss}>
      <div css={applyDefaultContentSize}>{content}</div>
      {hasCloseIcon && (
        <Link
          colorScheme={colorScheme == "white" ? "blue" : "white"}
          css={applyCloseButton}
          onClick={() => {
            setTipsVisible(false)
            if (onVisibleChange != undefined) {
              onVisibleChange(false)
            }
          }}
        >
          {locale["close"]}
        </Link>
      )}
    </div>
  )

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
      if (!tipVisible) {
        const result = await adjustLocation(
          tipsNode,
          childrenRef.current,
          position,
          autoFitPosition,
        )
        // async deal
        setAdjustResult(result)
        setTipsVisible(true)
        if (onVisibleChange != undefined) {
          onVisibleChange(true)
        }
      }
    }, openDelay)
  }

  const hideTips = () => {
    delayTodo(() => {
      if (tipVisible) {
        setTipsVisible(false)
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
      variants={applyAnimation(finalPosition)}
      initial="initial"
      animate="animate"
      exit="exit"
      onClick={() => {
        if (
          !disabled &&
          trigger == "click" &&
          clickOutsideToClose &&
          popupVisible == undefined
        ) {
          showTips()
        }
      }}
      onMouseEnter={() => {
        if (!disabled && trigger == "hover" && popupVisible == undefined) {
          showTips()
        }
      }}
      onMouseLeave={() => {
        if (!disabled && trigger == "hover" && popupVisible == undefined) {
          hideTips()
        }
      }}
    >
      {centerNode}
    </motion.div>
  )

  useClickAway(childrenRef, () => {
    if (
      !disabled &&
      trigger == "click" &&
      clickOutsideToClose &&
      popupVisible == undefined
    ) {
      hideTips()
    }
  })

  useEffect(() => {
    let isMount = true
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
      !disabled &&
      (popupVisible || (popupVisible == undefined && defaultPopupVisible))
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
    ref: (rawRef: HTMLElement | null) => {
      if (rawRef != null) {
        measureRef(rawRef)
        childrenRef.current = rawRef
      }
    },
    onMouseEnter: () => {
      if (!disabled && trigger == "hover" && popupVisible == undefined) {
        showTips()
      }
    },
    onMouseLeave: () => {
      if (!disabled && trigger == "hover" && popupVisible == undefined) {
        hideTips()
      }
    },
    onFocus: () => {
      if (!disabled && trigger == "focus" && popupVisible == undefined) {
        showTips()
      }
    },
    onBlur: () => {
      if (!disabled && trigger == "focus" && popupVisible == undefined) {
        hideTips()
      }
    },
    onClick: () => {
      switch (trigger) {
        case "click":
          if (!disabled && popupVisible == undefined) {
            if (!tipVisible) {
              showTips()
            } else {
              if (closeOnClick) {
                hideTips()
              }
            }
          }
          break
        case "hover":
        case "focus":
          if (
            !disabled &&
            popupVisible == undefined &&
            closeOnClick &&
            tipVisible
          ) {
            hideTips()
          }
          break
      }
    },
  }

  return (
    <>
      {Children.count(props.children) > 0 &&
        Children.map(props.children, (child) => {
          if (isValidElement(child)) {
            const finalProps = {
              ref: (rawRef: HTMLElement | null) => {
                newProps.ref(rawRef)
                if ((child as ReactElement).props?.ref != undefined) {
                  const newRef = (child as ReactElement).props?.ref
                  if (typeof newRef == "function") {
                    ;(newRef as RefCallback<any>).call(rawRef, undefined)
                  } else if (typeof newRef == "object") {
                    ;(newRef as MutableRefObject<any>).current = rawRef
                  }
                }
              },
              onMouseEnter: (e: Event) => {
                newProps.onMouseEnter()
                ;(child as ReactElement).props?.onMouseEnter?.call(e)
              },
              onMouseLeave: (e: Event) => {
                newProps.onMouseLeave()
                ;(child as ReactElement).props?.onMouseLeave?.call(e)
              },
              onFocus: (e: Event) => {
                newProps.onFocus()
                ;(child as ReactElement).props?.onFocus?.call(e)
              },
              onBlur: (e: Event) => {
                newProps.onBlur()
                ;(child as ReactElement).props?.onBlur?.call(e)
              },
              onClick: (e: Event) => {
                newProps.onClick()
                ;(child as ReactElement).props?.onClick?.call(e)
              },
            }
            return cloneElement(child as ReactElement, { ...finalProps })
          }
        })}
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
    </>
  )
}

Trigger.displayName = "Trigger"
