import { FC, useState } from "react"
import { SimplePaginationProps } from "./interface"
import {
  applyCommonItemCss,
  applyDefaultItemCss,
  applyInputCss,
  applyDefaultItemWithMarginCss,
  paginationContainer,
} from "./style"
import { Input } from "@illa-design/input"

export const SimplePagination: FC<SimplePaginationProps> = (props) => {
  const {
    onCurrentChange,
    pageSum,
    defaultSelectedPageIndex,
    prevIcon,
    nextIcon,
    wholeDisabled,
    size,
  } = props

  const [compositionValue, setCompositionValue] = useState<string>(
    `${defaultSelectedPageIndex + 1}`,
  )
  const [currentPage, setCurrentPage] = useState<number>(
    defaultSelectedPageIndex,
  )

  const handleJump = (page: number) => {
    setCurrentPage(page)
    onCurrentChange(page + 1)
    setCompositionValue(`${page + 1}`)
  }

  const onInputJump = () => {
    const value = Number.parseInt(compositionValue)
    if (value == 0) {
      handleJump(0)
    } else if (value > pageSum) {
      handleJump(pageSum - 1)
    } else {
      handleJump(value - 1)
    }
  }

  return (
    <span css={paginationContainer}>
      <span
        css={applyDefaultItemWithMarginCss(
          size,
          currentPage == 0 || wholeDisabled,
        )}
        onClick={() => {
          if (currentPage - 1 < 0 || wholeDisabled) return
          handleJump(currentPage - 1)
        }}
      >
        {prevIcon}
      </span>
      <span css={applyInputCss(size, wholeDisabled)}>
        <Input
          disabled={wholeDisabled}
          value={compositionValue.toString()}
          onChange={(val) => {
            const value = val?.replace(/[^\d]/, "")
            setCompositionValue(value)
          }}
          onBlur={onInputJump}
          onPressEnter={onInputJump}
          textCenterHorizontal={true}
          requirePadding={false}
          variant={"fill"}
        />
      </span>
      <span css={applyCommonItemCss(size)}>/</span>
      <span css={applyCommonItemCss(size, true)}>{pageSum}</span>
      <span
        css={applyDefaultItemCss(
          size,
          currentPage == pageSum - 1 || wholeDisabled,
        )}
        onClick={() => {
          if (currentPage + 1 > pageSum - 1 || wholeDisabled) return
          handleJump(currentPage + 1)
        }}
      >
        {nextIcon}
      </span>
    </span>
  )
}
