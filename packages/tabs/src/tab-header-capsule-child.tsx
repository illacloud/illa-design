/** @jsxImportSource @emotion/react */
import { forwardRef, ReactNode } from "react"
import {
  TabHeaderChildProps,
  TabHeaderProps,
  TabPaneProps,
  TabsProps,
} from "./interface"
import {
  applyCapsuleHeaderChildCss,
  applyTextCss,
  verticalLineCss,
} from "./styles"

export const TabHeaderCapsuleChild = forwardRef<
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
      css={applyCapsuleHeaderChildCss(isSelected)}
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
