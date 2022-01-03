/** @jsxImportSource @emotion/react */
import { FC, MutableRefObject, ReactNode, useEffect, useRef, useState } from "react"
import { TriggerProps } from "./interface"
import { AnimatePresence, motion } from "framer-motion"
import {
  applyAnimation,
  applyChildrenContainer,
  applyMotionDiv,
  applyTipsContainer,
  applyTipsText,
  applyTriangleStyle,
} from "./style"
import { TriangleBottom, TriangleLeft, TriangleRight, TriangleTop } from "./triangle"
import { adjustLocation, AdjustResult, getFinalPosition } from "./adjust-tips-location"
import { Popup } from "./popup"

export const Trigger: FC<TriggerProps> = ((props) => {

  const {
    colorScheme = "blackAlpha",
    content = "",
    position = "top",
    showArrow = true,
    closeDelay = 150,
    openDelay = 150,
    autoFitPosition = true,
    closeOnClick = true,
    defaultPopupVisible,
    disabled,
    popupVisible,
    onVisibleChange,
    onClick,
    ...otherProps
  } = props


  const [tipVisible, setTipsVisible] = useState<boolean>(false)

  const tipsRef = useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>
  const childrenRef = useRef<HTMLElement>() as MutableRefObject<HTMLElement>

  const [adjustResult, setAdjustResult] = useState<AdjustResult>()
  const finalPosition = getFinalPosition(adjustResult?.opposite ?? false, position)

  let timeOutHandlerId: number | undefined
  const delayTodo = (todo: () => void, timeout: number) => {
    if (timeOutHandlerId != undefined) {
      window.clearTimeout(timeOutHandlerId)
    }
    timeOutHandlerId = window.setTimeout(() => {
      timeOutHandlerId = undefined
      todo()
    }, timeout)
  }

  let tipsNode: ReactNode
  let centerNode: ReactNode
  switch (finalPosition) {
    case "top":
    case "tl":
    case "tr":
      centerNode = <div css={applyTipsContainer(finalPosition)}>
        <div css={applyTipsText(colorScheme)}>{content}</div>
        {showArrow && <TriangleTop css={applyTriangleStyle(colorScheme, finalPosition)} width="8px" height="4px" />}
      </div>
      break
    case "bottom":
    case "bl":
    case "br":
      centerNode = <div css={applyTipsContainer(finalPosition)}>
        {showArrow && <TriangleBottom css={applyTriangleStyle(colorScheme, finalPosition)} width="8px" height="4px" />}
        <div css={applyTipsText(colorScheme)}>{content}</div>
      </div>
      break
    case "left":
    case "lt":
    case "lb":
      centerNode = <div css={applyTipsContainer(finalPosition)}>
        <div css={applyTipsText(colorScheme)}>{content}</div>
        {showArrow && <TriangleLeft css={applyTriangleStyle(colorScheme, finalPosition)} width="4px" height="8px" />}
      </div>
      break
    case "right":
    case "rt":
    case "rb":
      centerNode = <div css={applyTipsContainer(finalPosition)}>
        {showArrow && <TriangleRight css={applyTriangleStyle(colorScheme, finalPosition)} width="4px" height="8px" />}
        <div css={applyTipsText(colorScheme)}>{content}</div>
      </div>
      break
  }

  const showTips = () => {
    if (!disabled && popupVisible == undefined) {
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
  }

  const hideTips = () => {
    if (!disabled && popupVisible == undefined) {
      delayTodo(() => {
        if (tipVisible) {
          setTipsVisible(false)
          if (onVisibleChange != undefined) {
            onVisibleChange(false)
          }
        }
      }, closeDelay)
    }
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
        showTips()
      }
    }
    onMouseLeave={
      () => {
        hideTips()
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
      if (tipVisible) {
        setTipsVisible(false)
        if (onVisibleChange != undefined) {
          onVisibleChange(false)
        }
      }
    }
    return () => {
      isMount = false
    }
  }, [popupVisible, position, content, disabled])


  return <>
    <span ref={childrenRef} {...otherProps}
          css={applyChildrenContainer}
          onMouseEnter={() => {
            showTips()
          }}
          onMouseLeave={() => {
            hideTips()
          }}
          onClick={() => {
            hideTips()
          }}>{props.children}</span>
    <AnimatePresence>
      {!disabled && tipVisible && childrenRef.current != null ?
        <Popup top={`${adjustResult?.transY}px`} left={`${adjustResult?.transX}px`}>
          {tipsNode}
        </Popup> : null}
    </AnimatePresence>
  </>

})