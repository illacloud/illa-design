import { TableData } from "./table-data"
import { TableContextProps, TableProps } from "./interface"
import { ReactElement } from "react"
import {
  applyBorderedStyle,
  applyContainerStyle,
  applyTableStyle,
} from "./style"
import { applyBoxStyle, deleteCssProps } from "@illa-design/theme"
import { Spin } from "@illa-design/spin"
import { TableContext } from "./table-context"

export function RenderDirectTable<D extends TableData, TValue>(
  props: TableProps<D, TValue>,
): ReactElement {
  const {
    size = "medium",
    tableLayout = "auto",
    columns,
    data,
    bordered,
    borderedCell,
    striped,
    children,
    disableSortBy,
    pinedHeader,
    hoverable,
    align = "left",
    showFooter = true,
    showHeader = true,
    loading = false,
    ...otherProps
  } = props

  const contextProps = {
    align,
    borderedCell,
    striped,
    size,
    showHeader,
    hoverable,
    showFooter,
  } as TableContextProps

  return (
    <div
      css={[
        applyContainerStyle(),
        applyBoxStyle(props),
        applyBorderedStyle(bordered),
      ]}
    >
      <Spin loading={loading}>
        <TableContext.Provider value={contextProps}>
          <table
            css={applyTableStyle(tableLayout)}
            {...deleteCssProps(otherProps)}
          >
            {children}
          </table>
        </TableContext.Provider>
      </Spin>
    </div>
  )
}
