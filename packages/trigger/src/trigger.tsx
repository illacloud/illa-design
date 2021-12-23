/** @jsxImportSource @emotion/react */
import { forwardRef, MutableRefObject, ReactNode, useEffect, useRef, useState } from "react"
import { TriggerPosition, TriggerProps } from "./interface"
import { AnimatePresence, motion, Variants } from "framer-motion"
import { applyChildrenContainer, applyOuterCss, applyTipsContainer, applyTipsText, applyTriangleStyle } from "./style"
import { TriangleBottom, TriangleLeft, TriangleRight, TriangleTop } from "./triangle"
import { getAnimation } from "./transform"
import { adjustLocation, AdjustResult } from "./adjust-tips-location"

function applyAnimation(position: TriggerPosition, closeDelay: number, openDelay: number, adjustResult?: AdjustResult): Variants {
  switch (position) {
    case "top":
      return getAnimation(`calc(50% + ${adjustResult?.transX ?? 0}px)`, `calc(100% + ${adjustResult?.transY ?? 0}px)`, closeDelay, openDelay)
    case "tl":
      return getAnimation(`calc(12px + ${adjustResult?.transX ?? 0}px)`, `calc(100% + ${adjustResult?.transY ?? 0}px)`, closeDelay, openDelay)
    case "tr":
      return getAnimation(`calc(100% - 12px + ${adjustResult?.transX ?? 0}px)`, `calc(100% + ${adjustResult?.transY ?? 0}px)`, closeDelay, openDelay)
    case "bottom":
      return getAnimation(`calc(50% + ${adjustResult?.transX ?? 0}px)`, `${adjustResult?.transY ?? 0}px`, closeDelay, openDelay)
    case "bl":
      return getAnimation(`calc(12px + ${adjustResult?.transX ?? 0}px)`, `${adjustResult?.transY ?? 0}px`, closeDelay, openDelay)
    case "br":
      return getAnimation(`calc(100% - 12px + ${adjustResult?.transX ?? 0}px)`, `${adjustResult?.transY ?? 0}px`, closeDelay, openDelay)
    case "left":
      return getAnimation(`calc(100% + ${adjustResult?.transX ?? 0}px)`, `calc(50% + ${adjustResult?.transY ?? 0}px)`, closeDelay, openDelay)
    case "lt":
      return getAnimation(`calc(100% + ${adjustResult?.transX ?? 0}px)`, `calc(12px + ${adjustResult?.transY ?? 0}px)`, closeDelay, openDelay)
    case "lb":
      return getAnimation(`calc(100% + ${adjustResult?.transX ?? 0}px)`, `calc(100% - 12px + ${adjustResult?.transY ?? 0}px)`, closeDelay, openDelay)
    case "right":
      return getAnimation(`${adjustResult?.transX ?? 0}px`, `calc(50% + ${adjustResult?.transY ?? 0}px)`, closeDelay, openDelay)
    case "rt":
      return getAnimation(`${adjustResult?.transX ?? 0}px`, `calc(12px + ${adjustResult?.transY ?? 0}px)`, closeDelay, openDelay)
    case "rb":
      return getAnimation(`${adjustResult?.transX ?? 0}px`, `calc(100% - 12px + ${adjustResult?.transY ?? 0}px)`, closeDelay, openDelay)
  }
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
  const [tipsTransform, setTipsTransform] = useState<AdjustResult>()

  let tipsNode: ReactNode

  switch (position) {
    case "top":
    case "tl":
    case "tr":
      tipsNode = <div css={applyTipsContainer(position, tipsTransform)}>
        <span css={applyTipsText(colorScheme)}>{content}</span>
        {showArrow && <TriangleTop css={applyTriangleStyle(colorScheme, position)} width="8px" height="4px" />}
      </div>
      break
    case "bottom":
    case "bl":
    case "br":
      tipsNode = <div css={applyTipsContainer(position, tipsTransform)}>
        {showArrow && <TriangleBottom css={applyTriangleStyle(colorScheme, position)} width="8px" height="4px" />}
        <span css={applyTipsText(colorScheme)}>{content}</span>
      </div>
      break
    case "left":
    case "lt":
    case "lb":
      tipsNode = <div css={applyTipsContainer(position, tipsTransform)}>
        <span css={applyTipsText(colorScheme)}>{content}</span>
        {showArrow && <TriangleLeft css={applyTriangleStyle(colorScheme, position)} width="4px" height="8px" />}
      </div>
      break
    case "right":
    case "rt":
    case "rb":
      tipsNode = <div css={applyTipsContainer(position, tipsTransform)}>
        {showArrow && <TriangleRight css={applyTriangleStyle(colorScheme, position)} width="4px" height="8px" />}
        <span css={applyTipsText(colorScheme)}>{content}</span>
      </div>
      break
  }

  useEffect(() => {
    adjustLocation(tipsNode, childrenRef.current, position).then((adjustResult) => {
      setTipsTransform(adjustResult)
    })
  }, [content, position, showArrow])

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
    <span css={applyChildrenContainer} ref={childrenRef}>{props.children}</span>
    <AnimatePresence>
      {!disabled && finalVisible && <motion.div
        ref={tipsRef}
        style={{ position: "absolute" }}
        variants={applyAnimation(position, closeDelay, openDelay, tipsTransform)}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {tipsNode}
      </motion.div>}
    </AnimatePresence>
  </div>

})
