import { forwardRef, Fragment, ReactNode } from "react"
import {
  DescriptionAlign,
  DescriptionColumn,
  DescriptionItem,
  DescriptionLayout,
  DescriptionProps,
  DescriptionSize,
} from "./interface"
import {
  applyBlockStyle,
  applyDescContainerStyle,
  applyInlineHorizontalStyle,
  applyInlineVerticalStyle,
  applyLabelStyle,
  applyTableStyle,
  applyTitleStyle,
  applyValueStyle,
} from "./style"
import { css } from "@emotion/react"
import useWindowSize from "react-use/lib/useWindowSize"
import { applyBoxStyle, deleteCssProps } from "@illa-design/theme"

function getTrList(
  data: DescriptionItem[],
  columnNumber: number,
): DescriptionItem[][] {
  let currentColumn = columnNumber
  let trList: DescriptionItem[][] = []
  let tdList: DescriptionItem[] = []
  for (let item of data) {
    if (currentColumn - (item.span ?? 1) >= 0) {
      currentColumn = currentColumn - (item.span ?? 1)
      tdList.push(item)
      if (currentColumn == 0) {
        trList.push([...tdList])
        tdList = []
        currentColumn = columnNumber
      }
    } else {
      tdList.push(item)
      trList.push([...tdList])
      tdList = []
    }
  }
  if (tdList.length != 0) {
    trList.push([...tdList])
  }
  return trList
}

function getColumn(column: number | DescriptionColumn, width: number): number {
  if (typeof column == "number") {
    return column
  } else {
    if (width >= 1600) {
      return column.xxl ?? 3
    } else if (width >= 1200) {
      return column.xl ?? 3
    } else if (width >= 992) {
      return column.lg ?? 3
    } else if (width >= 768) {
      return column.md ?? 3
    } else if (width >= 576) {
      return column.sm ?? 3
    } else if (width >= 0) {
      return column.xs ?? 3
    } else {
      return 3
    }
  }
}

function applyHorizontalLayout(
  finalData: DescriptionItem[][],
  align: DescriptionAlign,
  bordered: boolean,
  size: DescriptionSize,
  layout: DescriptionLayout,
  column: number,
): ReactNode[] {
  const tableContent: ReactNode[] = []
  for (let tr of finalData) {
    const tdContent: ReactNode[] = []
    for (let td of tr) {
      tdContent.push(
        <Fragment key={tr.indexOf(td)}>
          <td
            css={css`
              ${applyBlockStyle(size, bordered ?? false, column)};
              ${applyLabelStyle(bordered ?? false, layout)};
            `}
            align={align}
            colSpan={1}
            key={tr.indexOf(td) + "label"}
          >
            {td.label}
          </td>
          <td
            css={css`
              ${applyBlockStyle(size, bordered ?? false, column)};
              ${applyValueStyle()};
            `}
            colSpan={(td.span ?? 1) * 2 - 1}
            key={tr.indexOf(td) + "value"}
          >
            {td.value}
          </td>
        </Fragment>,
      )
    }
    tableContent.push(<tr key={finalData.indexOf(tr)}>{tdContent}</tr>)
  }
  return tableContent
}

function applyInlineHorizontalLayout(
  finalData: DescriptionItem[][],
  align: DescriptionAlign,
  bordered: boolean,
  size: DescriptionSize,
  layout: DescriptionLayout,
  column: number,
): ReactNode[] {
  const tableContent: ReactNode[] = []
  for (let tr of finalData) {
    const tdContent: ReactNode[] = []
    for (let td of tr) {
      tdContent.push(
        <Fragment key={tr.indexOf(td)}>
          <td
            align={align}
            css={applyBlockStyle(size, bordered ?? false, column)}
            colSpan={(td.span ?? 1) * 2}
            key={tr.indexOf(td) + "value"}
          >
            <div css={applyInlineHorizontalStyle}>
              <span css={applyLabelStyle(bordered ?? false, layout)}>
                {td.label}
              </span>
              <span css={applyValueStyle()}>{td.value}</span>
            </div>
          </td>
        </Fragment>,
      )
    }
    tableContent.push(<tr key={finalData.indexOf(tr)}>{tdContent}</tr>)
  }
  return tableContent
}

function applyInlineVerticalLayout(
  finalData: DescriptionItem[][],
  align: DescriptionAlign,
  bordered: boolean,
  size: DescriptionSize,
  layout: DescriptionLayout,
  column: number,
): ReactNode[] {
  const tableContent: ReactNode[] = []
  for (let tr of finalData) {
    const tdContent: ReactNode[] = []
    for (let td of tr) {
      tdContent.push(
        <Fragment key={tr.indexOf(td)}>
          <td
            align={align}
            css={applyBlockStyle(size, bordered ?? false, column)}
            colSpan={(td.span ?? 1) * 2}
            key={tr.indexOf(td) + "value"}
          >
            <div css={applyInlineVerticalStyle}>
              <span css={applyLabelStyle(bordered ?? false, layout)}>
                {td.label}
              </span>
              <span css={applyValueStyle()}>{td.value}</span>
            </div>
          </td>
        </Fragment>,
      )
    }
    tableContent.push(<tr key={finalData.indexOf(tr)}>{tdContent}</tr>)
  }
  return tableContent
}

function applyVerticalLayout(
  finalData: DescriptionItem[][],
  align: DescriptionAlign,
  bordered: boolean,
  size: DescriptionSize,
  layout: DescriptionLayout,
  column: number,
): ReactNode[] {
  const tableContent: ReactNode[] = []
  for (let tr of finalData) {
    const tdFirst: ReactNode[] = []
    const tdSecond: ReactNode[] = []
    for (let td of tr) {
      tdFirst.push(
        <Fragment key={tr.indexOf(td) + "first"}>
          <td
            css={css`
              ${applyBlockStyle(size, bordered ?? false, column)};
              ${applyLabelStyle(bordered ?? false, layout)};
            `}
            align={align}
            colSpan={(td.span ?? 1) * 2}
            key={tr.indexOf(td) + "label"}
          >
            {td.label}
          </td>
        </Fragment>,
      )
      tdSecond.push(
        <Fragment key={tr.indexOf(td) + "second"}>
          <td
            align={align}
            css={css`
              ${applyBlockStyle(size, bordered ?? false, column)};
              ${applyValueStyle()};
            `}
            colSpan={(td.span ?? 1) * 2}
            key={tr.indexOf(td) + "value"}
          >
            {td.value}
          </td>
        </Fragment>,
      )
    }
    tableContent.push(<tr key={finalData.indexOf(tr) + "first"}>{tdFirst}</tr>)
    tableContent.push(
      <tr key={finalData.indexOf(tr) + "second"}>{tdSecond}</tr>,
    )
  }
  return tableContent
}

export const Description = forwardRef<HTMLDivElement, DescriptionProps>(
  (props, ref) => {
    const {
      data,
      bordered,
      column = 3,
      align = "left",
      size = "medium",
      layout = "horizontal",
      title,
      tableLayout = "auto",
      ...otherProps
    } = props

    const { width } = useWindowSize()

    const finalData =
      data != undefined ? getTrList(data, getColumn(column, width)) : []

    let tableContent: ReactNode[]
    switch (layout) {
      case "horizontal":
        tableContent = applyHorizontalLayout(
          finalData,
          align,
          bordered ?? false,
          size,
          layout,
          getColumn(column, width),
        )
        break
      case "inline-horizontal":
        tableContent = applyInlineHorizontalLayout(
          finalData,
          align,
          bordered ?? false,
          size,
          layout,
          getColumn(column, width),
        )
        break
      case "vertical":
        tableContent = applyVerticalLayout(
          finalData,
          align,
          bordered ?? false,
          size,
          layout,
          getColumn(column, width),
        )
        break
      case "inline-vertical":
        tableContent = applyInlineVerticalLayout(
          finalData,
          align,
          bordered ?? false,
          size,
          layout,
          getColumn(column, width),
        )
        break
    }

    return (
      <div
        ref={ref}
        css={[applyDescContainerStyle, applyBoxStyle(props)]}
        {...deleteCssProps(otherProps)}
      >
        {title && <div css={applyTitleStyle(size)}>{title}</div>}
        {data && (
          <table css={applyTableStyle(tableLayout, bordered ?? false)}>
            <tbody>{tableContent}</tbody>
          </table>
        )}
      </div>
    )
  },
)

Description.displayName = "Description"
