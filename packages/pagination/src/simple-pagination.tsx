import { FC, useEffect, useState } from "react"
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

  useEffect(() => {
    onCurrentChange(currentPage + 1)
    setCompositionValue(`${currentPage + 1}`)
  }, [currentPage])

  return (
    <span css={paginationContainer}>
      <span
        css={applyDefaultItemWithMarginCss(
          size,
          currentPage == 0 || wholeDisabled,
        )}
        onClick={() => {
          if (currentPage - 1 < 0 || wholeDisabled) return
          setCurrentPage(currentPage - 1)
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
            if (value.length > 0) {
              setCurrentPage(Number.parseInt(value) - 1)
            }
          }}
          onBlur={() => {
            if (Number.parseInt(compositionValue) > pageSum) {
              setCurrentPage(pageSum - 1)
            }
          }}
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
          setCurrentPage(currentPage + 1)
        }}
      >
        {nextIcon}
      </span>
    </span>
  )
}
