import { forwardRef, useState } from "react"
import { TableFilterProps } from "./interface"
import { Popover } from "@illa-design/popover"
import { FilterIcon } from "@illa-design/icon"
import { globalColor, illaPrefix } from "@illa-design/theme"
import { css } from "@emotion/react"

export const TableFilter = forwardRef<SVGSVGElement, TableFilterProps<any>>(
  (props, ref) => {
    const { renderFilterContent, _css, columnProps, ...otherProps } = props

    const [highlight, setHighlightState] = useState(false)

    return (
      <Popover
        hasCloseIcon={false}
        trigger="click"
        clickOutsideToClose={true}
        closeOnClick={true}
        content={renderFilterContent && renderFilterContent(columnProps)}
        onVisibleChange={(visible) => {
          setHighlightState(visible)
        }}
      >
        <FilterIcon
          ref={ref}
          color={
            highlight
              ? globalColor(`--${illaPrefix}-blue-03`)
              : globalColor(`--${illaPrefix}-gray-03`)
          }
          size={"16px"}
          css={css(
            css`
              font-size: 16px;
            `,
            _css,
          )}
          {...otherProps}
        />
      </Popover>
    )
  },
)

TableFilter.displayName = "TableFilter"
