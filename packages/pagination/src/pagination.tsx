import * as React from "react"
import { forwardRef, useContext } from "react"
import { PaginationProps } from "./interface"
import {
  jumperContainerStyle,
  paginationContainer,
  totalTextStyle,
} from "./style"
import {
  ConfigProviderContext,
  ConfigProviderProps,
  def,
} from "@illa-design/config-provider"
import { useMergeValue } from "@illa-design/system"
import { Input } from "@illa-design/input"

export const Pagination = forwardRef<HTMLDivElement, PaginationProps>(
  (props, ref) => {
    const {
      disabled,
      hideOnSinglePage,
      pageSizeChangeResetCurrent,
      showJumper,
      showMore,
      simple,
      sizeCanChange,
      bufferSize,
      current,
      defaultCurrent,
      pageSize,
      defaultPageSize,
      total = 0,
      itemRender,
      size,
      icons,
      selectProps,
      sizeOptions,
      onChange,
      onPageSizeChange,
      showTotal,
      // ...otherProps
    } = props

    const configProviderProps = useContext<ConfigProviderProps>(
      ConfigProviderContext,
    )

    const locale = configProviderProps?.locale?.pagination ?? def.pagination

    const [finalCurrent, setFinalCurrent] = useMergeValue({
      defaultValue: defaultCurrent,
      value: current,
    })

    const [finalPageSize, setFinalPageSize] = useMergeValue({
      defaultValue: defaultPageSize,
      value: pageSize,
    })

    return (
      <div css={paginationContainer}>
        {showTotal && (
          <span css={totalTextStyle}>
            {locale.total.replace("{0}", total.toString())}
          </span>
        )}
        {showJumper && (
          <div css={jumperContainerStyle}>
            <span css={totalTextStyle}>{locale.go}</span>
            <Input variant="fill" w="32px" h="32px" ml="16px" />
          </div>
        )}
      </div>
    )
  },
)

Pagination.displayName = "Pagination"
