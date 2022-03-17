/** @jsxImportSource @emotion/react */
import { forwardRef, useEffect, useState } from "react"
import { SimplePaginationProps } from "./interface"
import {
  applyDefaultItemCss,
  applyInputCss,
  paginationContainer,
  simplePaginationSumCss,
} from "./style"
import { Input } from "@illa-design/input"
import * as React from "react"

export const SimplePagination = forwardRef<
  HTMLSpanElement,
  SimplePaginationProps
>((props, ref) => {
  const {
    onCurrentChange,
    pageSum,
    defaultSelectedPageIndex,
    prevIcon,
    nextIcon,
    wholeDisabled,
    size,
    ...otherProps
  } = props

  const [compositionValue, setCompositionValue] = useState<string>(
    `${defaultSelectedPageIndex + 1}`,
  )
  const [currentPage, setCurrentPage] = useState<number>(
    defaultSelectedPageIndex,
  )

  useEffect(() => {
    onCurrentChange(currentPage)
    setCompositionValue(`${currentPage + 1}`)
  }, [currentPage])

  return (
    <span css={paginationContainer}>
      <span
        css={applyDefaultItemCss(size, currentPage == 0 || wholeDisabled)}
        onClick={() => {
          if (currentPage - 1 < 0 || wholeDisabled) return
          setCurrentPage(currentPage - 1)
        }}
      >
        {prevIcon}
      </span>
      <Input
        css={applyInputCss(size, wholeDisabled)}
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
      <span css={simplePaginationSumCss}> {`/ ${pageSum}`}</span>
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
})
