/** @jsxImportSource @emotion/react */
import { forwardRef } from "react"
import { TabHeaderChildProps } from "./interface"
import {
  applyCardHeaderChildCss,
  applyTextCss,
  commonHeaderChildCss,
  verticalLineCss,
} from "./styles"

export const TabHeaderCardChild = forwardRef<
  HTMLSpanElement,
  TabHeaderChildProps
>((props, ref) => {
  const {
    title,
    tabKey,
    isSelected,
    disabled,
    onSelectTab,
    size,
    needDivLine,
  } = props

  return (
    <span
      css={applyCardHeaderChildCss(isSelected)}
      key={tabKey}
      ref={ref}
      onClick={() => {
        onSelectTab(tabKey)
      }}
    >
      <span css={applyTextCss(size, isSelected, disabled)}>{title}</span>
      {needDivLine && !needDivLine && <div css={verticalLineCss} />}
    </span>
  )
})
