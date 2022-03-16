/** @jsxImportSource @emotion/react */
import { forwardRef, useMemo } from "react"
import { TabHeaderChildProps, Variant } from "../interface"
import {
  applyCapsuleHeaderChildCss,
  applyCardHeaderChildCss,
  applyTextCss,
  commonHeaderChildCss,
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
    } = props

    const childCss = useMemo(() => {
      if (variant === "card") {
        return applyCardHeaderChildCss(isSelected)
      } else if (variant === "capsule") {
        return applyCapsuleHeaderChildCss(isSelected)
      }
      return commonHeaderChildCss
    }, [variant, isSelected])

    return (
      <span
        css={childCss}
        key={tabKey}
        ref={ref}
        onClick={() => {
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
              return true
            }}
          >
            {deleteIcon}
          </span>
        )}
      </span>
    )
  },
)
