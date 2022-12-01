import { Meta, Story } from "@storybook/react"
import {
  Table,
  TableData,
  TableProps,
  TBody,
  Td,
  TFoot,
  Th,
  Thead,
  Tr,
} from "../src"
import { useMemo } from "react"
import { CellContext, ColumnDef, filterFns } from "@tanstack/react-table"
import { isNumber } from "@illa-design/system"

export default {
  title: "DATA DISPLAY/Table",
  component: Table,
  argTypes: {
    data: {
      control: false,
    },
    columns: {
      control: false,
    },
  },
} as Meta

export const Basic: Story<TableProps<DemoData, string>> = (args) => {
  return (
    <Table {...args}>
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
  )
}

interface DemoData extends TableData {
  name: string
  company: string
  phone: string
  address: string
}

export const CombineHeader: Story<TableProps<DemoData, string>> = (args) => {
  const data = useMemo(
    () => [
      {
        id: 1,
        name: "Gerard Gislason",
        company: "Ameliorated explicit open system",
        phone: "(701) 882-0009 x344",
        address: "2741 Terry Glen Apt. 601",
        date: "2021-01-01",
      },
      {
        id: 2,
        name: "Anne Lockman",
        company: "Customizable explicit solution",
        phone: "689.992.6307",
        address: "191 Schimmel Cliff Apt. 474",
        date: "2021-01-02",
      },
      {
        id: 3,
        name: "Sue Hamill",
        company: "Proactive mission-critical open architecture",
        phone: "(686) 565-4880",
        address: "27002 Wilfredo Hill Suite 824",
        date: "2021-01-03",
      },
      {
        id: 4,
        name: "Rosalie Keebler",
        company: "De-engineered bi-directional hardware",
        phone: "1-379-349-3046 x439",
        address: "29436 Keebler RestSuite 320",
        date: "2021-01-03",
      },
      {
        id: 5,
        name: "Mrs. Florence Rohan I",
        company: "Customer-focused client-server budgetary management",
        phone: "1-718-234-7813 x1812",
        address: "2188 Brakus Islands Apt. 031",
        date: "2021-01-03",
      },
      {
        id: 6,
        name: "Stacey Little",
        company: "Distributed interactive monitoring",
        phone: "(700) 403-5346",
        address: "47653 Reinger Row Apt. 480",
        date: "2021-01-03",
      },
      {
        id: 7,
        name: "Kristie Zemlak",
        company: "Synchronised context-sensitive implementation",
        phone: "698-202-3176 x8337",
        address: "5700 Isac Spurs Suite 919",
        date: "2021-02-03",
      },
      {
        id: 8,
        name: "Rhonda Torphy PhD",
        company: "User-friendly responsive hardware",
        phone: "470-744-4824 x376",
        address: "9826 Vincenzo Land Apt. 616",
        date: "2022-02-03",
      },
      {
        id: 9,
        name: "Elizabeth Franecki",
        company: "Compatible upward-trending system engine",
        phone: "506-644-1590",
        address: "9316 Manuel Lodge Apt. 678",
        date: "2022-02-03",
      },
      {
        id: 10,
        name: "Tasha Rohan",
        company: "Cloned scalable website",
        phone: "983.587.1143",
        address: "0434 Jermey Street Suite 577",
        date: "2022-02-03",
      },
      {
        id: 11,
        name: "Rhonda Torphy PhD",
        company: "User-friendly responsive hardware",
        phone: "470-1744-4824 x376",
        address: "9826 Vincenzo Land Apt. 616",
        date: "2022-02-05",
      },
      {
        id: 12,
        name: "Elizabeth",
        company: "Compatible upward-trending system engine",
        phone: "506-644-1590",
        address: "9316 Manuel Lodge Apt. 678",
        date: "2022-02-03",
      },
      {
        id: 13,
        name: "Tasha",
        company: "Cloned scalable website",
        phone: "983.587.1143",
        address: "0434 Jermey Street Suite 577",
        date: "2022-02-08",
      },
    ],
    [],
  )

  const columns = useMemo(() => {
    const c: ColumnDef<DemoData>[] = [
      {
        id: "id",
        header: "id",
        accessorKey: "id", // accessor is the "key" in the data
        cell: (p: CellContext<DemoData, unknown>) => {
          const formatVal = Number(p.getValue() ?? 0)
          return isNumber(formatVal) ? `${(formatVal * 100).toFixed(2)}%` : "-"
        },
      },
      {
        id: "name",
        header: "name",
        accessorKey: "name", // accessor is the "key" in the data
      },
      {
        id: "company",
        header: "company",
        accessorKey: "company",
      },
      {
        id: "phone",
        header: "phone",
        accessorKey: "phone",
        filterFn: filterFns.equals,
      },
      {
        id: "address",
        header: "address",
        accessorKey: "address",
        enableSorting: false,
      },
      {
        id: "date",
        header: "date",
        accessorKey: "date",
      },
    ]
    return c
  }, [])
  return (
    <Table
      data={data}
      columns={columns}
      multiRowSelection
      download
      filter
      {...args}
    />
  )
}

export const NoDataTable: Story<TableProps<DemoData, string>> = (args) => {
  const columns = useMemo(() => {
    const c: ColumnDef<DemoData>[] = [
      {
        header: "Header 1",
        accessorKey: "col1", // accessor is the "key" in the data
      },
      {
        header: "Header 2",
        accessorKey: "col2",
      },
    ]
    return c
  }, [])
  return (
    <div>
      <Table data={[]} columns={[]} {...args} />
      <Table data={[]} columns={columns} {...args} />
    </div>
  )
}
