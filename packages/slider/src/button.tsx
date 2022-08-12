import { memo, SyntheticEvent, useMemo, useRef } from "react"
import { Trigger } from "@illa-design/trigger"
import { isServerRendering, useMergeValue } from "@illa-design/system"
import { SliderButtonProps } from "./interface"
import { applySliderBtn } from "./style"
import { applyBoxStyle } from "@illa-design/theme"

const SliderButton = function(props: SliderButtonProps) {
  const {
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

  const [popupVisible, setPopupVisible] = useMergeValue(false, {
    value: tooltipVisible,
  })
  const position = useMemo(
    () => tooltipPosition || (vertical ? "right" : "top"),
    [tooltipPosition, vertical],
  )
  const delayTimer = useRef<number | null>(null)
  const inButtonOrPopup = useRef(false)
  const isDragging = useRef(false)

  function handleMouseDown(e: SyntheticEvent<Element, Event>) {
    e.stopPropagation()
    if (disabled) return
    moveStart(e)
    if (!isServerRendering) {
      window.addEventListener("mousemove", moving)
      window.addEventListener("mouseup", moveEnd)
      window.addEventListener("contextmenu", moveEnd)
    }
  }

  function handleMouseEnter() {
    inButtonOrPopup.current = true
    clearDelayTimer()
    if (!popupVisible) {
      delayTimer.current = window.setTimeout(() => {
        updatePopupVisible(true)
      }, 50)
    }
  }

  function handleMouseLeave() {
    inButtonOrPopup.current = false
    if (!isDragging.current) {
      clearDelayTimer()
      delayTimer.current = window.setTimeout(() => {
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

  function moving(e: MouseEvent) {
    isDragging.current = true
    onMoving && onMoving(e.clientX, e.clientY)
  }

  function moveEnd() {
    isDragging.current = false
    offEvents()
    updatePopupVisible(inButtonOrPopup.current)
    onMoveEnd && onMoveEnd()
  }

  function offEvents() {
    clearDelayTimer()
    if (!isServerRendering) {
      window.removeEventListener("mousemove", moving)
      window.removeEventListener("mouseup", moveEnd)
      window.removeEventListener("contextmenu", moveEnd)
    }
  }

  function clearDelayTimer() {
    if (delayTimer.current) {
      window.clearTimeout(delayTimer.current)
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

  function renderTooltipContent() {
    return (
      <div
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handlePopupMouseEnter}
        onClick={e => {
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
      content={renderTooltipContent()}
      openDelay={0}
    >
      <div
        onMouseDown={handleMouseDown}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        role={"button"}
        css={[
          applySliderBtn(vertical, reverse, disabled),
          applyBoxStyle(props),
        ]}
      />
    </Trigger>
  )
}

export default memo(SliderButton)
