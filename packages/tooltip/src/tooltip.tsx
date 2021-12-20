/** @jsxImportSource @emotion/react */
import { forwardRef } from "react"
import { TooltipProps } from "./interface"
import { applyOuterCss, applyTipsContainer, applyTipsText, applyTriangleStyle } from "./style"
import { Triangle } from "./triangle"

export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>((props, ref) => {

  const {
    colorScheme = "blackAlpha",
    content = "123123123",
    position = "top",
    showArrow = true,
    closeDelay = 150,
    openDelay = 150,
    autoFitPosition = true,
    closeOnClick = true,
    defaultPopupVisible = false,
    popupVisible = false,
    disabled = false,
    onVisibleChange,
  } = props

  return <div ref={ref} css={applyOuterCss}
              onMouseEnter={() => {
                if (onVisibleChange != undefined && !disabled) {
                  onVisibleChange(true)
                }
              }}>
    {props.children}
    {!disabled && <div css={applyTipsContainer(position)}>
      <span css={applyTipsText(colorScheme)}>{content}</span>
      {showArrow && <Triangle css={applyTriangleStyle(colorScheme, position)} width="8px" height="4px" />}
    </div>}
  </div>

})
