import { forwardRef, useMemo } from "react"
import { TabHeaderChildProps } from "../interface"
import {
  applyCapsuleHeaderChildCss,
  applyCardHeaderChildCss,
  applyCommonHeaderChildCss,
  applyTextCss,
  deleteButtonCss,
  verticalLineCss,
} from "../styles"
import { CloseIcon } from "@illa-design/icon"

export const TabHeaderChild = forwardRef<HTMLSpanElement, TabHeaderChildProps>(
  (props, ref) => {
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
      tabBarSpacing = 16,
    } = props

    const childCss = useMemo(() => {
      if (variant === "card") {
        return applyCardHeaderChildCss(tabBarSpacing, isSelected)
      } else if (variant === "capsule") {
        return applyCapsuleHeaderChildCss(tabBarSpacing, isSelected)
      }
      return applyCommonHeaderChildCss(tabBarSpacing)
    }, [variant, isSelected])

    return (
      <span
        css={childCss}
        key={tabKey}
        ref={ref}
        onClick={() => {
          if (disabled) return
          handleSelectTab(tabKey)
        }}
      >
        <span css={applyTextCss(size, isSelected, disabled)}>{title}</span>
        {needDivLine && !needDivLine && <div css={verticalLineCss} />}
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
    )
  },
)
