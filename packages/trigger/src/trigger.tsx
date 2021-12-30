/** @jsxImportSource @emotion/react */
import { FC, MutableRefObject, ReactNode, useEffect, useRef, useState } from "react"
import { TriggerProps } from "./interface"
import { AnimatePresence, motion } from "framer-motion"
import { v4 as uuidv4 } from "uuid"
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


  const [tipVisible, setTipsVisible] = useState<boolean>(defaultPopupVisible ?? false)

  let finalVisible: boolean
  if (popupVisible != undefined) {
    finalVisible = popupVisible
  } else {
    finalVisible = tipVisible
  }

  const tipsRef = useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>
  const childrenRef = useRef<HTMLElement>() as MutableRefObject<HTMLElement>

  const [adjustResult, setAdjustResult] = useState<AdjustResult>()
  const finalPosition = getFinalPosition(adjustResult?.opposite ?? false, position)

  let tipsNode: ReactNode
  let centerNode: ReactNode
  switch (finalPosition) {
    case "top":
    case "tl":
    case "tr":
      centerNode = <div css={applyTipsContainer(finalPosition, adjustResult)}>
        <div css={applyTipsText(colorScheme)}>{content}</div>
        {showArrow && <TriangleTop css={applyTriangleStyle(colorScheme, finalPosition)} width="8px" height="4px" />}
      </div>
      break
    case "bottom":
    case "bl":
    case "br":
      centerNode = <div css={applyTipsContainer(finalPosition, adjustResult)}>
        {showArrow && <TriangleBottom css={applyTriangleStyle(colorScheme, finalPosition)} width="8px" height="4px" />}
        <div css={applyTipsText(colorScheme)}>{content}</div>
      </div>
      break
    case "left":
    case "lt":
    case "lb":
      centerNode = <div css={applyTipsContainer(finalPosition, adjustResult)}>
        <div css={applyTipsText(colorScheme)}>{content}</div>
        {showArrow && <TriangleLeft css={applyTriangleStyle(colorScheme, finalPosition)} width="4px" height="8px" />}
      </div>
      break
    case "right":
    case "rt":
    case "rb":
      centerNode = <div css={applyTipsContainer(finalPosition, adjustResult)}>
        {showArrow && <TriangleRight css={applyTriangleStyle(colorScheme, finalPosition)} width="4px" height="8px" />}
        <div css={applyTipsText(colorScheme)}>{content}</div>
      </div>
      break
  }
  tipsNode = <motion.div
    ref={tipsRef}
    css={applyMotionDiv}
    variants={applyAnimation(finalPosition, closeDelay, openDelay, adjustResult)}
    initial="initial"
    animate="animate"
    exit="exit"
  >{centerNode}</motion.div>


  useEffect(() => {
    let isMount = true
    if (finalVisible) {
      adjustLocation(tipsNode, childrenRef.current, position, autoFitPosition).then((result) => {
        if (isMount) {
          setAdjustResult(result)
        }
      })
    }
    return () => {
      isMount = false
    }
  }, [popupVisible, position, showArrow])

  return <>
    <span ref={childrenRef} {...otherProps}
          css={applyChildrenContainer}
          onMouseEnter={async () => {
            if (!disabled && !finalVisible && popupVisible == undefined) {
              console.log("优秀")
              const result = await adjustLocation(tipsNode, childrenRef.current, position, autoFitPosition)
              // async deal
              if (!finalVisible) {
                setAdjustResult(result)
                setTipsVisible(true)
                if (onVisibleChange != undefined) {
                  onVisibleChange(true)
                }
              }
            }
          }}
          onMouseLeave={() => {
            if (!disabled && finalVisible && popupVisible == undefined) {
              setTipsVisible(false)
              if (onVisibleChange != undefined) {
                onVisibleChange(false)
              }
            }
          }}
          onClick={() => {
            if (!disabled && closeOnClick && finalVisible && popupVisible == undefined) {
              setTipsVisible(false)
              if (onVisibleChange != undefined) {
                onVisibleChange(false)
              }
            }
          }}>{props.children}</span>
    <AnimatePresence>
      {!disabled && finalVisible ?
        <Popup key={uuidv4()}>
          {tipsNode}
        </Popup> : null}
    </AnimatePresence>
  </>

})