

# 表格 Table

表格是用行列的形式，结构化展示信息的组件；方便用户查看、分析数据

## 安装

```bash
yarn add @illa-design/table
```

## 引用组件

```jsx
import { Table } from "@illa-dedign/table"
```

## 组件接口(API)

### Table 基础属性

| 参数名           | 描述                   | 类型                                                         | 默认值   |
| ---------------- | ---------------------- | ------------------------------------------------------------ | -------- |
| data             | 表格数据               | object[]                                                     | -        |
| columns          | 表格列的配置描述       | Column[]                                                     | -        |
| size             | 表格尺寸               | "small" \| "medium" \| "large"                               | "medium" |
| tableLayout      | 设置表格布局           | "auto"  \| "fixed"                                           | "auto"   |
| border           | 设置是否有外边框       | boolean                                                      | -        |
| borderCell       | 设置是否有列分割线     | boolean                                                      | -        |
| striped          | 设置是否有行分割线     | boolean                                                      | -        |
| align            | 设置单元格内容对齐方式 | "left" \| "center" \| "right" \| "start" \| "end" \| "flex-star" \| "flex-end" | "left"   |
| showHeader       | 是否展示表头           | boolean                                                      | true     |
| showFooter       | 是否展示表尾           | boolean                                                      | false    |
| disableSortBy    | 设置是否禁用排序功能   | boolean                                                      | -        |
| disableFilters   | 设置是否禁用过滤功能   | boolean                                                      | -        |
| disableRowSelect | 设置是否禁用行选择功能 | boolean                                                      | -        |

### Table 事件

| 参数名            | 描述                       | 类型                            | 默认值 |
| ----------------- | :------------------------- | ------------------------------- | ------ |
| onRowSelectChange | 当选择的行变化时的回调函数 | `(rows: Array<Row<D>>) => void` | -      |

### TableFilter 基础属性

| 参数名              | 描述                     | 类型                                                     | 默认值 |
| ------------------- | :----------------------- | -------------------------------------------------------- | ------ |
| columnProps         | 设置当前页面下的路由地址 | `UseFiltersInstanceProps<D>`                             | -      |
| renderFilterContent | 设置过滤器的内容         | `(columnProps: UseFiltersInstanceProps<D>) => ReactNode` | -      |

### 使用方法

### 基础用法

```jsx
<Table>
  <Thead>
    <Tr>
      <Th>First</Th>
      <Th>Second</Th>
      <Th>Third</Th>
    </Tr>
  </Thead>
  <TBody>
    <Tr>
      <Td>1</Td>
      <Td>2</Td>
      <Td>3</Td>
    </Tr>
    <Tr>
      <Td>4</Td>
      <Td>5</Td>
      <Td>6</Td>
    </Tr>
  </TBody>
  <TFoot>
    <Tr>
      <Td>7</Td>
      <Td>8</Td>
      <Td>9</Td>
    </Tr>
  </TFoot>
</Table>
```

### 数据驱动

```jsx
const data = useMemo(
  () => [
    {
      col1: "Hello",
      col2: "World",
    } as DemoData,
    {
      col1: "react-table",
      col2: "rocks",
      disableRowSelect: true,
    } as DemoData,
    {
      col1: "whatever",
      col2: "you want",
    } as DemoData,
  ],
  [],
)

const columns = useMemo(
  () => [
    {
      Header: "Column 1",
      Footer: "Footer 1",
      accessor: "col1", // accessor is the "key" in the data
      Filter: (columnProps: UseFiltersInstanceProps<DemoData>) => {
        const [currentInput, setCurrentInput] = useState<string>("")
        return (
          <TableFilter
            _css={css`
              margin-left: 4px;
            `}
            renderFilterContent={(
              columnProps?: UseFiltersInstanceProps<DemoData>,
            ) => {
              return (
                <Input
                  value={currentInput}
                  onChange={(value) => {
                    setCurrentInput(value)
                    columnProps?.setFilter("col1", value)
                  }}
                />
              )
            }}
            columnProps={columnProps}
          />
        )
      },
      filter: "includes", // equals, between
    },
    {
      Header: "Column 2",
      Footer: "Footer 2",
      accessor: "col2",
      Filter: (columnProps: UseFiltersInstanceProps<DemoData>) => {
        const [currentInput, setCurrentInput] = useState<string>("")
        return (
          <TableFilter
            _css={css`
              margin-left: 4px;
            `}
            renderFilterContent={(
              columnProps?: UseFiltersInstanceProps<DemoData>,
            ) => {
              return (
                <Input
                  value={currentInput}
                  onChange={(value) => {
                    setCurrentInput(value)
                      columnProps?.setFilter("col2", value)
                  }}
                />
              )
            }}
            columnProps={columnProps}
          />
        )
      },
      filter: (
        rows: Array<Row>,
        columnIds: Array<String>, //
        filterValue: string,
      ) => {
        if (filterValue == "") {
          return rows
        }
        return rows.filter((value) => {
          return (
            (value.cells.find((value) => {
              return columnIds.includes(value.column.id)
            })?.value as string) ?? ""
          ).includes(filterValue)
        })
      },
      },
  ],
  [],
)
return <Table data={data} columns={columns} {...args} />
```

