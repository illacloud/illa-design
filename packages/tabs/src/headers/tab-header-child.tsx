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

  const [applyChildCss, applyTabTextCss] = useMemo(() => {
    let _childCss, _textCss
    if (variant === "card") {
      _childCss = applyCardHeaderChildCss
    } else if (variant === "capsule") {
      _childCss = applyCapsuleHeaderChildCss
    } else {
      _childCss = applyCommonHeaderChildCss
    }
    if (variant === "text") {
      _textCss = applyTextCss
    } else {
      _textCss = applyTextCss
    }
    return [_childCss, _textCss]
  }, [variant, isSelected])

  return (
    <span
      css={applyChildCss(isSelected, disabled)}
      key={tabKey}
      onClick={() => {
        if (disabled) return
        handleSelectTab(tabKey)
      }}
    >
      <span
        css={applyTabTextCss(
          size,
          isSelected,
          disabled,
          tabBarSpacing,
          variant,
        )}
      >
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
    </span>
  )
}
