import * as React from "react"
import { forwardRef, ReactNode, useContext, useEffect, useState } from "react"
import { MoreIcon, NextIcon, PreIcon } from "@illa-design/icon"
import {
  ConfigProviderContext,
  ConfigProviderProps,
  def,
} from "@illa-design/config-provider"
import { applyBoxStyle, deleteCssProps } from "@illa-design/theme"
import {
  applyDefaultItemCss,
  applyDefaultItemWithMarginCss,
  paginationContainer,
  totalTextCss,
} from "./style"
import { PageNumGroup } from "./page-num-group"
import { JumperInput } from "./jump-input"
import { PageSizeSelector } from "./page-size-selector"
import { SimplePagination } from "./simple-pagination"
import { PaginationProps } from "./interface"
import { useMergeValue } from "@illa-design/system"

export const Pagination = forwardRef<HTMLDivElement, PaginationProps>(
  (props, ref) => {
    const {
      currentPage,
      pageSize,
      total = 0,
      defaultCurrent = 1,
      defaultPageSize = 10,
      disabled,
      hideOnSinglePage = true,
      size = "medium",
      showTotal,
      sizeCanChange = true,
      sizeOptions = [10, 20, 30, 40, 50],
      simple,
      showJumper,
      placeholder,
      onChange,
      onPageSizeChange,
      prevIcon,
      nextIcon,
      moreIcon,
      ...otherProps
    } = props

    const [curPage, setCurPage] = useMergeValue(0, {
      defaultValue: defaultCurrent - 1,
      value: currentPage,
    })
    const [itemCount, setItemCount] = useMergeValue(10, {
      defaultValue: defaultPageSize,
      value: pageSize,
    })

    const configProviderProps = useContext<ConfigProviderProps>(
      ConfigProviderContext,
    )
    const locale = configProviderProps?.locale?.pagination ?? def.pagination

    const totalText = locale["total"]

    let pageSum: number
    if (total <= 0) {
      pageSum = 0
    } else {
      pageSum = Math.ceil(total / itemCount)
    }

    const prevDisable = curPage == 0 || disabled || pageSum == 0
    const nextDisable = curPage == pageSum - 1 || disabled || pageSum == 0

    if (hideOnSinglePage && pageSum == 1) {
      return <></>
    }

    let totalElement: ReactNode = null
    if (typeof showTotal === "boolean" && showTotal) {
      totalElement = (
        <span css={totalTextCss}>
          {totalText.replace("{0}", total.toString())}
        </span>
      )
    }

    if (typeof showTotal === "function") {
      totalElement = (
        <div css={totalTextCss}>
          {showTotal(total, [
            curPage * itemCount + 1,
            (curPage + 1) * itemCount,
          ])}
        </div>
      )
    }

    const _preIcon: ReactNode = prevIcon ?? <PreIcon />
    const _nextIcon: ReactNode = nextIcon ?? <NextIcon />
    const _moreIcon: ReactNode = moreIcon ?? <MoreIcon />

    const changeCurrentPage = (currentPage: number) => {
      if (!("currentPage" in props)) {
        setCurPage(currentPage)
      }
    }
    const changePageSize = (pageSize: number) => {
      if (!("pageSize" in props)) {
        setItemCount(pageSize)
      }
    }

    return (
      <div
        css={[paginationContainer, applyBoxStyle(props)]}
        placeholder={placeholder}
        ref={ref}
        {...deleteCssProps(otherProps)}
      >
        {totalElement}
        {simple ? (
          <SimplePagination
            defaultSelectedPageIndex={curPage}
            pageSum={pageSum}
            size={size}
            onCurrentChange={(pageNum) => {
              if (pageNum == 0) return
              changeCurrentPage(pageNum - 1)
              onChange?.(pageNum - 1, itemCount)
            }}
            nextIcon={_nextIcon}
            prevIcon={_preIcon}
            wholeDisabled={disabled == true}
          />
        ) : (
          <span css={paginationContainer}>
            <span
              css={applyDefaultItemWithMarginCss(size, prevDisable)}
              onClick={() => {
                if (prevDisable) return
                changeCurrentPage(curPage - 1)
                onChange?.(curPage - 1, itemCount)
              }}
            >
              {_preIcon}
            </span>
            {pageSum > 0 && (
              <PageNumGroup
                total={pageSum}
                moreIcon={_moreIcon}
                selectedIndex={curPage}
                wholeDisable={disabled}
                size={size}
                onCurPageIndexChanged={(index) => {
                  changeCurrentPage(index)
                  onChange?.(index, itemCount)
                }}
              />
            )}
            <span
              css={applyDefaultItemCss(size, nextDisable)}
              onClick={() => {
                if (nextDisable) return
                changeCurrentPage(curPage + 1)
                onChange?.(curPage + 1, itemCount)
              }}
            >
              {_nextIcon}
            </span>
          </span>
        )}

        {!simple && showJumper && (
          <JumperInput
            currentPage={curPage}
            totalPages={pageSum}
            wholeDisable={disabled}
            size={size}
            onEnterPress={(pageNum) => {
              if (pageNum > pageSum - 1) {
                changeCurrentPage(pageSum - 1)
                onChange?.(pageSum - 1, itemCount)
              } else {
                changeCurrentPage(pageNum - 1)
                onChange?.(pageNum - 1, itemCount)
              }
            }}
          />
        )}
        {!simple && sizeCanChange && (
          <PageSizeSelector
            sizeOptions={sizeOptions}
            wholeDisable={disabled}
            size={size}
            onPageSizeSelected={(pageSize) => {
              changePageSize(pageSize)
              changeCurrentPage(0)
              onPageSizeChange?.(pageSize, 0)
              onChange?.(0, pageSize)
            }}
          />
        )}
      </div>
    )
  },
)

Pagination.displayName = "Pagination"
