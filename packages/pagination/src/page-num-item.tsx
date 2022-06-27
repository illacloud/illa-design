import { FC } from "react"
import { PageNumProps } from "./interface"
import {
  applyDefaultItemWithMarginCss,
  applyPageNumItemSelectedCss,
} from "./style"
import { isNumber } from "@illa-design/system"

export const PageNumItem: FC<PageNumProps> = (props) => {
  const {
    index,
    selected,
    isMoreIndex,
    moreIcon,
    handleClick,
    wholeDisable,
    size,
  } = props

  const itemCss = selected
    ? applyPageNumItemSelectedCss(
        size,
        wholeDisable,
        index >= 99 && !isMoreIndex,
      )
    : applyDefaultItemWithMarginCss(
        size,
        wholeDisable,
        index >= 99 && !isMoreIndex,
      )

  return isMoreIndex ? (
    <span
      css={itemCss}
      onClick={() => {
        if (wholeDisable) return
        if (isNumber(index)) handleClick(index)
      }}
    >
      {moreIcon}
    </span>
  ) : (
    <span
      css={itemCss}
      onClick={() => {
        if (wholeDisable) return
        if (isNumber(index)) handleClick(index)
      }}
    >
      {isNumber(index) ? `${index + 1}` : index}
    </span>
  )
}
