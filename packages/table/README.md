

# Table

Table is used to show data effectively and structuredly. 

## Installation

```bash
yarn add @illa-design/table
```

## Import component

```jsx
import { Table } from "@illa-dedign/table"
```

## API

### Table Basic Properties

| Props            | Desc                                       | Type                                                         | Default  |
| ---------------- | ------------------------------------------ | ------------------------------------------------------------ | -------- |
| data             | Set data of table                          | readonly D[]                                                 | -        |
| columns          | Set columns of table                       | `ReadonlyArray<Column<D>>`                                   | -        |
| size             | Set size of table                          | "small" \| "medium" \| "large"                               | "medium" |
| tableLayout      | Set layout of table                        | "auto"  \| "fixed"                                           | "auto"   |
| border           | Whether table has border                   | boolean                                                      | -        |
| borderCell       | Whether there is a divider between columns | boolean                                                      | -        |
| striped          | Whether there is a divider between rows    | boolean                                                      | -        |
| align            | Set alignment type of content in table     | "left" \| "center" \| "right" \| "start" \| "end" \| "flex-star" \| "flex-end" | "left"   |
| showHeader       | Whether show header                        | boolean                                                      | true     |
| showFooter       | Whether show footer                        | boolean                                                      | false    |
| disableSortBy    | Whether disabled sort                      | boolean                                                      | -        |
| disableFilters   | Whether disabled filter                    | boolean                                                      | -        |
| disableRowSelect | Whether disabled row select                | boolean                                                      | -        |

### Table Events

| Props             | Desc                                       | Type                            | Default |
| ----------------- | :----------------------------------------- | ------------------------------- | ------- |
| onRowSelectChange | Callback when the selected rows is changed | `(rows: Array<Row<D>>) => void` | -       |

### TableFilter Basic Properties

| Props               | Desc                    | Type                                                     | Default |
| ------------------- | :---------------------- | -------------------------------------------------------- | ------- |
| columnProps         | Set column's properties | `UseFiltersInstanceProps<D>`                             | -       |
| renderFilterContent | Set filter's content    | `(columnProps: UseFiltersInstanceProps<D>) => ReactNode` | -       |

## Example

### Basic usage

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

### Data drive

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

