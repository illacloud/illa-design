import { FC, useMemo } from "react"
import { TabHeaderChildProps } from "../interface"
import {
  applyCapsuleHeaderChildCss,
  applyCardHeaderChildCss,
  applyCommonHeaderChildCss,
  applyTextCss,
  deleteButtonCss,
  verticalLineCss,
} from "../style"
import { CloseIcon } from "@illa-design/icon"

export const TabHeaderChild: FC<TabHeaderChildProps> = (props) => {
  const {
    title,
    tabKey,
    isSelected,
    disabled,
    handleSelectTab,
    size = "medium",
    needDivLine,
    variant,
    closable,
    deleteIcon = <CloseIcon size={"8"} />,
    handleDeleteTab,
    tabBarSpacing,
  } = props

  const childCss = useMemo(() => {
    if (variant === "card") {
      return applyCardHeaderChildCss(isSelected)
    } else if (variant === "capsule") {
      return applyCapsuleHeaderChildCss(isSelected)
    }
    return applyCommonHeaderChildCss()
  }, [variant, isSelected])

  return (
    <span
      css={childCss}
      key={tabKey}
      onClick={() => {
        if (disabled) return
        handleSelectTab(tabKey)
      }}
    >
      <span css={applyTextCss(size, isSelected, disabled, tabBarSpacing)}>
        {title}
        {closable && (
          <span
            css={deleteButtonCss}
            onClick={(event) => {
              handleDeleteTab && handleDeleteTab(tabKey)
              event.stopPropagation()
            }}
          >
            {deleteIcon}
          </span>
        )}
      </span>
      {needDivLine && <div css={verticalLineCss} />}
    </span>
  )
}
