/** @jsxImportSource @emotion/react */
import { forwardRef, MutableRefObject, ReactNode, useRef, useState } from "react"
import { TriggerPosition, TriggerProps } from "./interface"
import { AnimatePresence, motion, Variants } from "framer-motion"
import { applyOuterCss, applyTipsContainer, applyTipsText, applyTriangleStyle } from "./style"
import { TriangleBottom, TriangleLeft, TriangleRight, TriangleTop } from "./triangle"
import { getTransform } from "./transform"

function applyTransform(position: TriggerPosition): Variants {
  switch (position) {
    case "top":
      return getTransform("50%", "100%")
    case "tl":
      return getTransform("12px", "100%")
    case "tr":
      return getTransform("calc(100% - 12px)", "100%")
    case "bottom":
      return getTransform("50%", "0")
    case "bl":
      return getTransform("12px", "0")
    case "br":
      return getTransform("calc(100% - 12px)", "0")
    case "left":
      return getTransform("100%", "50%")
    case "lt":
      return getTransform("100%", "12px")
    case "lb":
      return getTransform("100%", "calc(100% - 12px)")
    case "right":
      return getTransform("0", "50%")
    case "rt":
      return getTransform("0", "12px")
    case "rb":
      return getTransform("0", "calc(100% - 12px)")
  }
}

function adjustLocation(tipsRef: HTMLElement, childrenRef: HTMLElement) {
  console.log(tipsRef, childrenRef)
}

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

  let tipsNode: ReactNode

  switch (position) {
    case "top":
    case "tl":
    case "tr":
      tipsNode = <div css={applyTipsContainer(position)}>
        <span css={applyTipsText(colorScheme)}>{content}</span>
        {showArrow && <TriangleTop css={applyTriangleStyle(colorScheme, position)} width="8px" height="4px" />}
      </div>
      break
    case "bottom":
    case "bl":
    case "br":
      tipsNode = <div css={applyTipsContainer(position)}>
        {showArrow && <TriangleBottom css={applyTriangleStyle(colorScheme, position)} width="8px" height="4px" />}
        <span css={applyTipsText(colorScheme)}>{content}</span>
      </div>
      break
    case "left":
    case "lt":
    case "lb":
      tipsNode = <div css={applyTipsContainer(position)}>
        <span css={applyTipsText(colorScheme)}>{content}</span>
        {showArrow && <TriangleLeft css={applyTriangleStyle(colorScheme, position)} width="4px" height="8px" />}
      </div>
      break
    case "right":
    case "rt":
    case "rb":
      tipsNode = <div css={applyTipsContainer(position)}>
        {showArrow && <TriangleRight css={applyTriangleStyle(colorScheme, position)} width="4px" height="8px" />}
        <span css={applyTipsText(colorScheme)}>{content}</span>
      </div>
      break
  }

  return <div ref={ref} css={applyOuterCss} {...otherProps}
              onMouseEnter={(event) => {
                if (!disabled && popupVisible == undefined) {
                  setTipsVisible(true)
                  if (onVisibleChange != undefined) {
                    onVisibleChange(true)
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
    <span ref={childrenRef}>{props.children}</span>
    <AnimatePresence>
      {!disabled && finalVisible && <motion.div
        ref={tipsRef}
        style={{ position: "absolute" }}
        variants={applyTransform(position)}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {tipsNode}
      </motion.div>}
    </AnimatePresence>
  </div>

})
