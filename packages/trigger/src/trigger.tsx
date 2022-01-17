/** @jsxImportSource @emotion/react */
import { FC, MutableRefObject, ReactNode, useEffect, useRef, useState } from "react"
import { TriggerProps } from "./interface"
import { AnimatePresence, motion } from "framer-motion"
import {
  applyAnimation,
  applyChildrenContainer,
  applyCloseButton,
  applyCloseContentCss,
  applyMotionDiv,
  applyTipsContainer,
  applyTipsText,
  applyTriangleStyle,
} from "./style"
import { TriangleBottom, TriangleLeft, TriangleRight, TriangleTop } from "./triangle"
import { adjustLocation, AdjustResult, getFinalPosition } from "./adjust-tips-location"
import { Popup } from "./popup"
import { Link } from "@illa-design/link"

export const Trigger: FC<TriggerProps> = ((props) => {

  const {
    colorScheme = "gray",
    content,
    position = "top",
    showArrow = true,
    closeDelay = 150,
    openDelay = 150,
    autoFitPosition = true,
    closeOnClick = true,
    defaultPopupVisible,
    disabled,
    hasCloseIcon,
    popupVisible,
    onVisibleChange,
    trigger = "hover",
    ...otherProps
  } = props


  const [tipVisible, setTipsVisible] = useState<boolean>(false)

  const tipsRef = useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>
  const childrenRef = useRef<HTMLElement>() as MutableRefObject<HTMLElement>

  const [adjustResult, setAdjustResult] = useState<AdjustResult>()
  const finalPosition = getFinalPosition(adjustResult?.opposite ?? false, position)

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

  const closeContent = <div css={applyCloseContentCss}>
    <div>{content}</div>
    {hasCloseIcon &&
      <Link colorScheme={colorScheme == "white" ? "blue" : "white"} css={applyCloseButton} onClick={() => {
        setTipsVisible(false)
        if (onVisibleChange != undefined) {
          onVisibleChange(false)
        }
      }
      }>Close</Link>}
  </div>

  switch (finalPosition) {
    case "top":
    case "tl":
    case "tr":
      centerNode = <div css={applyTipsContainer(finalPosition)}>
        <div css={applyTipsText(colorScheme)}>{closeContent}</div>
        {showArrow && <TriangleTop css={applyTriangleStyle(colorScheme, finalPosition)} width="8px" height="4px" />}
      </div>
      break
    case "bottom":
    case "bl":
    case "br":
      centerNode = <div css={applyTipsContainer(finalPosition)}>
        {showArrow && <TriangleBottom css={applyTriangleStyle(colorScheme, finalPosition)} width="8px" height="4px" />}
        <div css={applyTipsText(colorScheme)}>{closeContent}</div>
      </div>
      break
    case "left":
    case "lt":
    case "lb":
      centerNode = <div css={applyTipsContainer(finalPosition)}>
        <div css={applyTipsText(colorScheme)}>{closeContent}</div>
        {showArrow && <TriangleLeft css={applyTriangleStyle(colorScheme, finalPosition)} width="4px" height="8px" />}
      </div>
      break
    case "right":
    case "rt":
    case "rb":
      centerNode = <div css={applyTipsContainer(finalPosition)}>
        {showArrow && <TriangleRight css={applyTriangleStyle(colorScheme, finalPosition)} width="4px" height="8px" />}
        <div css={applyTipsText(colorScheme)}>{closeContent}</div>
      </div>
      break
  }

  const showTips = () => {
    delayTodo(async () => {
      if (!tipVisible) {
        const result = await adjustLocation(tipsNode, childrenRef.current, position, autoFitPosition)
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

  tipsNode = <motion.div
    ref={tipsRef}
    css={applyMotionDiv()}
    variants={applyAnimation(finalPosition)}
    initial="initial"
    animate="animate"
    exit="exit"
    onMouseEnter={
      () => {
        if (!disabled && trigger == "hover" && popupVisible == undefined) {
          showTips()
        }
      }
    }
    onMouseLeave={
      () => {
        if (!disabled && trigger == "hover" && popupVisible == undefined) {
          hideTips()
        }
      }
    }
  >{centerNode}</motion.div>

  useEffect(() => {
    let isMount = true
    if (!disabled && (popupVisible || (popupVisible == undefined && defaultPopupVisible))) {
      adjustLocation(tipsNode, childrenRef.current, position, autoFitPosition).then((result) => {
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
    } else {
      if (tipVisible && isMount) {
        setTipsVisible(false)
        if (onVisibleChange != undefined) {
          onVisibleChange(false)
        }
      }
    }
    return () => {
      isMount = false
      window.clearTimeout(timeOutHandlerId)
    }
  }, [popupVisible, position, content, disabled])


  return <>
    <span
      ref={childrenRef} {...otherProps}
      css={applyChildrenContainer}
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
      onFocus={() => {
        if (!disabled && trigger == "focus" && popupVisible == undefined) {
          showTips()
        }
      }}
      onBlur={() => {
        if (!disabled && trigger == "focus" && popupVisible == undefined) {
          hideTips()
        }
      }}
      onClick={() => {
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
            if (!disabled && popupVisible == undefined && closeOnClick && tipVisible) {
              hideTips()
            }
            break
        }
      }}>{props.children}</span>
    <AnimatePresence>
      {!disabled && tipVisible && childrenRef.current != null ?
        <Popup top={`${adjustResult?.transY}px`} left={`${adjustResult?.transX}px`}>
          {tipsNode}
        </Popup> : null}
    </AnimatePresence>
  </>

})