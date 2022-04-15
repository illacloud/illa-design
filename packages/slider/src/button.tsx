import React, { useState, memo, useRef, useMemo, SyntheticEvent } from "react"
import { Trigger, TriggerPosition } from "@illa-design/trigger"
import { useMergeValue, isServerRendering } from "@illa-design/system"
import { SliderButtonProps } from "./interface"
import { applySliderBtn } from "./style"

const SliderButton = function (props: SliderButtonProps) {
  const {
    style,
    disabled,
    value,
    vertical,
    reverse,
    tooltipVisible,
    tooltipPosition,
    formatTooltip,
    onMoving,
    onMoveEnd,
    onMoveBegin,
  } = props

  // state
  const [isActive, setIsActive] = useState(false)
  const [popupVisible, setPopupVisible] = useMergeValue(false, {
    value: tooltipVisible,
  })
  const position = useMemo(
    () => tooltipPosition || (vertical ? "right" : "top"),
    [tooltipPosition, vertical],
  )
  const delayTimer = useRef(null as any)
  const inButtonOrPopup = useRef(false)
  const isDragging = useRef(false)

  function handleMouseDown(e: SyntheticEvent<Element, Event>) {
    e.stopPropagation()
    if (disabled) return
    moveStart(e)
    setIsActive(true)
    if (!isServerRendering) {
      window.addEventListener("mousemove", moving)
      window.addEventListener("touchmove", moving)
      window.addEventListener("mouseup", moveEnd)
      window.addEventListener("touchend", moveEnd)
      window.addEventListener("contextmenu", moveEnd)
    }
  }

  function handleMouseEnter() {
    inButtonOrPopup.current = true
    clearDelayTimer()
    if (!popupVisible) {
      delayTimer.current = setTimeout(() => {
        updatePopupVisible(true)
      }, 50)
    }
  }

  function handleMouseLeave() {
    inButtonOrPopup.current = false
    if (!isDragging.current) {
      clearDelayTimer()
      delayTimer.current = setTimeout(() => {
        updatePopupVisible(false)
      }, 200)
    }
  }

  function moveStart(e: SyntheticEvent<Element, Event>) {
    // when dragging happens，mouse click event is unexpected,so we need prevent it and let the active element blur.
    e.preventDefault()
    const activeElement = document.activeElement as HTMLElement
    activeElement && activeElement.blur && activeElement.blur()

    onMoveBegin && onMoveBegin()
  }

  function moving(e: any) {
    isDragging.current = true

    if (e.type === "touchstart") {
      e.clientY = e.touches[0].clientY
      e.clientX = e.touches[0].clientX
    }
    onMoving && onMoving(e.clientX, e.clientY)
  }

  function moveEnd() {
    isDragging.current = false
    setIsActive(false)
    offEvents()
    updatePopupVisible(inButtonOrPopup.current)
    onMoveEnd && onMoveEnd()
  }

  function offEvents() {
    clearDelayTimer()
    if (!isServerRendering) {
      window.removeEventListener("mousemove", moving)
      window.removeEventListener("touchmove", moving)
      window.removeEventListener("mouseup", moveEnd)
      window.removeEventListener("touchend", moveEnd)
      window.removeEventListener("contextmenu", moveEnd)
    }
  }

  function clearDelayTimer() {
    if (delayTimer.current) {
      clearTimeout(delayTimer.current)
      delayTimer.current = null
    }
  }

  // setup tooltip's visible
  function updatePopupVisible(value: boolean) {
    if (isDragging.current) return

    const newPopupVisible = tooltipVisible !== void 0 ? tooltipVisible : value
    setPopupVisible(newPopupVisible)
  }

  function handlePopupMouseEnter() {
    inButtonOrPopup.current = true
    clearDelayTimer()
  }

  function renderTooltipContent(position: TriggerPosition) {
    return (
      <div
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handlePopupMouseEnter}
        onClick={(e) => {
          e.stopPropagation()
        }}
      >
        <div>{formatTooltip ? formatTooltip(value) : value}</div>
      </div>
    )
  }

  return (
    <Trigger
      showArrow
      popupVisible={popupVisible}
      disabled={tooltipVisible === false}
      position={position}
      closeOnClick={false}
      content={renderTooltipContent(position)}
      openDelay={0}
    >
      <div
        onMouseDown={handleMouseDown}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        role={"button"}
        css={applySliderBtn(vertical, reverse, disabled)}
        style={style}
      />
    </Trigger>
  )
}

export default memo(SliderButton)
