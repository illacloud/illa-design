import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { Description } from "../src"

const dataList = [
  {
    label: "Name",
    value: "ILLA",
  },
  {
    label: "Mobile",
    value: "123-1234-1234",
  },
  {
    label: "Residence",
    value: "Beijing",
  },
  {
    label: "Hometown",
    value: "Beijing",
  },
  {
    label: "Date of Birth",
    value: "2020-05-15",
    span: 2,
  },
  {
    label: "Address",
    value: "Building, Road, Beijing",
    span: 3,
  },
]

test("Description renders correctly", () => {
  render(<Description data-testid="test-description" title="Title" />)
  expect(screen.getByTestId("test-description")).toBeInTheDocument()
  expect(screen.getByText("Title")).toBeInTheDocument()
})

test("Description renders with different data", () => {
  render(
    <div data-testid="test-description">
      <Description
        data={[
          {
            label: "Name",
            value: "ILLA",
          },
          {
            label: "Mobile",
            value: "123-1234-1234",
          },
          {
            label: "Residence",
            value: "Beijing",
          },
          {
            label: "Hometown",
            value: "Beijing",
          },
          {
            label: "Date of Birth",
            value: "2020-05-15",
            span: 2,
          },
          {
            label: "Address",
            value: "Building, Road, Beijing",
            span: 3,
          },
        ]}
      />
      <Description
        column={2}
        data={[
          {
            label: "Name",
            value: "ILLA",
          },
          {
            label: "Mobile",
            value: "123-1234-1234",
          },
          {
            label: "Residence",
            value: "Beijing",
          },
          {
            label: "Date of Birth",
            value: "2020-05-15",
            span: 2,
          },
          {
            label: "Address",
            value: "Building, Road, Beijing",
            span: 3,
          },
        ]}
      />
      <Description
        data={[
          {
            label: "Name",
            value: "ILLA",
          },
          {
            label: "Mobile",
            value: "123-1234-1234",
          },
          {
            label: "Residence",
            value: "Beijing",
          },
          {
            label: "Hometown",
            value: "Beijing",
          },
          {
            label: "Date of Birth",
            value: "2020-05-15",
            span: 2,
          },
          {
            label: "Address",
            value: "Building, Road, Beijing",
            span: 2,
          },
        ]}
      />
    </div>,
  )
  expect(screen.getByTestId("test-description")).toMatchSnapshot()
})

test("Description renders with horizontal layout", () => {
  render(
    <div data-testid="test-description">
      <Description align={"left"} layout="horizontal" data={dataList} />
      <Description align={"right"} layout="horizontal" data={dataList} />
    </div>,
  )
  expect(screen.getByTestId("test-description")).toMatchSnapshot()
})

test("Description renders with horizontal layout and border", () => {
  render(
    <div data-testid="test-description">
      <Description
        align={"left"}
        layout="horizontal"
        data={dataList}
        bordered
      />
      <Description
        align={"right"}
        layout="horizontal"
        data={dataList}
        bordered
      />
    </div>,
  )
  expect(screen.getByTestId("test-description")).toMatchSnapshot()
})

test("Description renders with horizontal layout and single column", () => {
  render(
    <div data-testid="test-description">
      <Description
        align={"left"}
        size={"large"}
        layout="horizontal"
        column={1}
        data={dataList}
      />
      <Description
        align={"right"}
        size={"large"}
        layout="horizontal"
        column={1}
        data={dataList}
      />
    </div>,
  )
  expect(screen.getByTestId("test-description")).toMatchSnapshot()
})

test("Description renders with inline-horizontal layout", () => {
  render(
    <div data-testid="test-description">
      <Description align={"left"} layout="inline-horizontal" data={dataList} />
      <Description align={"right"} layout="inline-horizontal" data={dataList} />
    </div>,
  )
  expect(screen.getByTestId("test-description")).toMatchSnapshot()
})

test("Description renders with inline-horizontal layout and border", () => {
  render(
    <div data-testid="test-description">
      <Description
        align={"left"}
        layout="inline-horizontal"
        data={dataList}
        bordered
      />
      <Description
        align={"right"}
        layout="inline-horizontal"
        data={dataList}
        bordered
      />
    </div>,
  )
  expect(screen.getByTestId("test-description")).toMatchSnapshot()
})

test("Description renders with inline-horizontal layout and single column", () => {
  render(
    <div data-testid="test-description">
      <Description
        align={"left"}
        layout="inline-horizontal"
        column={1}
        data={dataList}
      />
      <Description
        align={"right"}
        layout="inline-horizontal"
        column={1}
        data={dataList}
      />
    </div>,
  )
  expect(screen.getByTestId("test-description")).toMatchSnapshot()
})

test("Description renders with vertical layout", () => {
  render(
    <div data-testid="test-description">
      <Description
        align={"left"}
        layout="vertical"
        data={dataList}
        size={"small"}
      />
      <Description
        align={"right"}
        layout="vertical"
        data={dataList}
        size={"small"}
      />
    </div>,
  )
  expect(screen.getByTestId("test-description")).toMatchSnapshot()
})

test("Description renders with vertical layout and border", () => {
  render(
    <div data-testid="test-description">
      <Description align={"left"} layout="vertical" data={dataList} bordered />
      <Description align={"right"} layout="vertical" data={dataList} bordered />
    </div>,
  )
  expect(screen.getByTestId("test-description")).toMatchSnapshot()
})

test("Description renders with vertical layout and single column", () => {
  render(
    <div data-testid="test-description">
      <Description
        align={"left"}
        layout="vertical"
        column={1}
        data={dataList}
      />
      <Description
        align={"right"}
        layout="vertical"
        column={1}
        data={dataList}
      />
    </div>,
  )
  expect(screen.getByTestId("test-description")).toMatchSnapshot()
})

test("Description renders with inline-vertical layout", () => {
  render(
    <div data-testid="test-description">
      <Description
        align={"left"}
        layout="inline-vertical"
        data={dataList}
        size={"large"}
      />
      <Description
        align={"right"}
        layout="inline-vertical"
        data={dataList}
        size={"large"}
      />
    </div>,
  )
  expect(screen.getByTestId("test-description")).toMatchSnapshot()
})

test("Description renders with inline-vertical layout and border", () => {
  render(
    <div data-testid="test-description">
      <Description
        align={"left"}
        size={"small"}
        layout="inline-vertical"
        data={dataList}
        bordered
      />
      <Description
        align={"right"}
        size={"large"}
        layout="inline-vertical"
        data={dataList}
        bordered
      />
    </div>,
  )
  expect(screen.getByTestId("test-description")).toMatchSnapshot()
})

test("Description renders with inline-vertical layout and single column", () => {
  render(
    <div data-testid="test-description">
      <Description
        align={"left"}
        layout="inline-vertical"
        size={"small"}
        column={1}
        data={dataList}
      />
      <Description
        align={"right"}
        layout="inline-vertical"
        column={1}
        size={"small"}
        data={dataList}
      />
    </div>,
  )
  expect(screen.getByTestId("test-description")).toMatchSnapshot()
})

test("Description renders with different size", () => {
  render(
    <div data-testid="test-description">
      <Description size={"small"} data={dataList} title="TitleSmall" />
      <Description size={"medium"} data={dataList} title="TitleMedium" />
      <Description size={"large"} data={dataList} title="TitleLarge" />
    </div>,
  )
  expect(screen.getByTestId("test-description")).toMatchSnapshot()
})

test("Description renders with different reactive size", () => {
  render(
    <div data-testid="test-description">
      <Description size={"small"} data={dataList} title="TitleSmall" />
      <Description size={"medium"} data={dataList} title="TitleMedium" />
      <Description size={"large"} data={dataList} title="TitleLarge" />
    </div>,
  )
  expect(screen.getByTestId("test-description")).toMatchSnapshot()
})
