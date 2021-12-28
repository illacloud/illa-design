/** @jsxImportSource @emotion/react */
import { forwardRef, MutableRefObject, ReactNode, useEffect, useRef, useState } from "react"
import { TriggerProps } from "./interface"
import { AnimatePresence, motion } from "framer-motion"
import {
  applyAnimation,
  applyChildrenContainer,
  applyOuterCss,
  applyTipsContainer,
  applyTipsText,
  applyTriangleStyle,
} from "./style"
import { TriangleBottom, TriangleLeft, TriangleRight, TriangleTop } from "./triangle"
import { adjustLocation, AdjustResult } from "./adjust-tips-location"

export const Trigger = forwardRef<HTMLDivElement, TriggerProps>((props, ref) => {

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

  let tipsNode: ReactNode

  switch (position) {
    case "top":
    case "tl":
    case "tr":
      tipsNode = <div css={applyTipsContainer(position, adjustResult)}>
        <span css={applyTipsText(colorScheme)}>{content}</span>
        {showArrow && <TriangleTop css={applyTriangleStyle(colorScheme, position)} width="8px" height="4px" />}
      </div>
      break
    case "bottom":
    case "bl":
    case "br":
      tipsNode = <div css={applyTipsContainer(position, adjustResult)}>
        {showArrow && <TriangleBottom css={applyTriangleStyle(colorScheme, position)} width="8px" height="4px" />}
        <span css={applyTipsText(colorScheme)}>{content}</span>
      </div>
      break
    case "left":
    case "lt":
    case "lb":
      tipsNode = <div css={applyTipsContainer(position, adjustResult)}>
        <span css={applyTipsText(colorScheme)}>{content}</span>
        {showArrow && <TriangleLeft css={applyTriangleStyle(colorScheme, position)} width="4px" height="8px" />}
      </div>
      break
    case "right":
    case "rt":
    case "rb":
      tipsNode = <div css={applyTipsContainer(position, adjustResult)}>
        {showArrow && <TriangleRight css={applyTriangleStyle(colorScheme, position)} width="4px" height="8px" />}
        <span css={applyTipsText(colorScheme)}>{content}</span>
      </div>
      break
  }

  useEffect(() => {
    adjustLocation(tipsNode, childrenRef.current, position, autoFitPosition).then((adjustResult) => {
      setAdjustResult(adjustResult)
    })
  }, [content, position, showArrow])

  return <div ref={ref} css={applyOuterCss} {...otherProps}
              onMouseEnter={(event) => {
                if (!disabled && popupVisible == undefined) {
                  if (autoFitPosition) {
                    adjustLocation(tipsNode, childrenRef.current, position, autoFitPosition).then((adjustResult) => {
                      setAdjustResult(adjustResult)
                      setTipsVisible(true)
                      if (onVisibleChange != undefined) {
                        onVisibleChange(true)
                      }
                    })
                  } else {
                    setTipsVisible(true)
                    if (onVisibleChange != undefined) {
                      onVisibleChange(true)
                    }
                  }
                }
                onMouseEnter && onMouseEnter(event)
              }}
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
              }}>
    <span css={applyChildrenContainer} ref={childrenRef}>{props.children}</span>
    <AnimatePresence>
      {!disabled && finalVisible && <motion.div
        ref={tipsRef}
        style={{ position: "absolute" }}
        variants={applyAnimation(position, closeDelay, openDelay, adjustResult)}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {tipsNode}
      </motion.div>}
    </AnimatePresence>
  </div>

})
