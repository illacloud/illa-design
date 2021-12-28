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
import { AdjustResult, getFinalPosition } from "./adjust-tips-location"
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
    defaultPopupVisible = false,
    disabled = false,
    popupVisible,
    onVisibleChange,
    onMouseEnter,
    onMouseLeave,
    onClick,
    ...otherProps
  } = props


  const [tipVisible, setTipsVisible] = useState<boolean>(defaultPopupVisible)

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

  })

  return <>
    <span ref={childrenRef} {...otherProps}
          onMouseEnter={(event) => {
            if (!disabled && popupVisible == undefined) {
              setTipsVisible(true)
              if (onVisibleChange != undefined) {
                onVisibleChange(true)
              }
            }
            onMouseEnter && onMouseEnter(event)
          }}
          css={applyChildrenContainer}
          onMouseLeave={(event) => {
            if (!disabled && popupVisible == undefined) {
              setTipsVisible(false)
              if (onVisibleChange != undefined) {
                onVisibleChange(false)
              }
            }
            onMouseLeave && onMouseLeave(event)
          }}
          onClick={(event) => {
            if (!disabled && closeOnClick && popupVisible == undefined) {
              setTipsVisible(false)
              if (onVisibleChange != undefined) {
                onVisibleChange(false)
              }
            }
            onClick && onClick(event)
          }}>{props.children}</span>
    <AnimatePresence>{!disabled && finalVisible ?
      <Popup>
        {tipsNode}
      </Popup> : null}
    </AnimatePresence>
  </>

})