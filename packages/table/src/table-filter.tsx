import { forwardRef, useState } from "react"
import { FilterIcon } from "@illa-design/icon"
import { applyBoxStyle, globalColor, illaPrefix } from "@illa-design/theme"
import { css } from "@emotion/react"
import { TableFilterProps } from "./interface"
import { Input } from "@illa-design/input"
import { Trigger } from "@illa-design/trigger"

export const TableFilter = forwardRef<SVGSVGElement, TableFilterProps<any>>(
  (props, ref) => {
    const { renderFilterContent, columnProps, ...otherProps } = props

    const [highlight, setHighlightState] = useState(false)

    return (
      <Trigger
        withoutPadding
        colorScheme="white"
        trigger="click"
        clickOutsideToClose={true}
        closeOnClick={true}
        position="top"
        content={
          <Input
            onChange={value => {
              columnProps?.setFilterValue(value)
            }}
          />
        }
        onVisibleChange={visible => {
          setHighlightState(visible)
        }}
      >
        <FilterIcon
          ref={ref}
          color={
            highlight
              ? globalColor(`--${illaPrefix}-blue-03`)
              : globalColor(`--${illaPrefix}-grayBlue-03`)
          }
          size={"16px"}
          css={css(
            css`
              font-size: 16px;
            `,
            applyBoxStyle(props),
          )}
          {...otherProps}
        />
      </Trigger>
    )
  },
)

TableFilter.displayName = "TableFilter"
