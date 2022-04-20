import { Table, TBody, Td, TFoot, Th, Thead, Tr } from "../src"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { globalColor, illaPrefix } from "@illa-design/theme"

test("Table renders correctly.", () => {
  render(
    <Table data-testid="test-table">
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
    </Table>,
  )
  expect(screen.getByTestId("test-table")).toBeInTheDocument()
})

test("Table renders with borders.", () => {
  render(
    <Table data-testid="test-table" bordered borderedCell striped>
      <Thead>
        <Tr>
          <Th data-testid="test-th">First</Th>
          <Th>Second</Th>
          <Th>Third</Th>
        </Tr>
      </Thead>
      <TBody>
        <Tr>
          <Td data-testid="test-td">1</Td>
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
    </Table>,
  )
  const itemCss = {
    borderLeft: `solid 1px ${globalColor(`--${illaPrefix}-gray-08`)}`,
    borderRight: `solid 1px ${globalColor(`--${illaPrefix}-gray-08`)}`,
    borderTop: `solid 1px ${globalColor(`--${illaPrefix}-gray-08`)}`,
    borderBottom: `solid 1px ${globalColor(`--${illaPrefix}-gray-08`)}`,
  }
  expect(screen.getByTestId("test-table")).toHaveStyle({
    border: `solid 1px ${globalColor(`--${illaPrefix}-gray-08`)}`,
  })
  expect(screen.getByTestId("test-th")).toHaveStyle(itemCss)
  expect(screen.getByTestId("test-td")).toHaveStyle(itemCss)
})

test("Table renders without header.", () => {
  render(
    <Table showHeader={false}>
      <Thead data-testid="test-header">
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
    </Table>,
  )
  expect(screen.queryByTestId("test-header")).not.toBeInTheDocument()
})

test("Table renders without footer.", () => {
  render(
    <Table showFooter={false}>
      <Thead data-testid="test-header">
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
      <TFoot data-testid="test-footer">
        <Tr>
          <Td>7</Td>
          <Td>8</Td>
          <Td>9</Td>
        </Tr>
      </TFoot>
    </Table>,
  )
  expect(screen.queryByTestId("test-footer")).not.toBeInTheDocument()
})

test("Table renders with different table layout.", () => {
  render(
    <Table tableLayout="fixed" data-testid="test-table">
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
      </TBody>
    </Table>,
  )
  expect(screen.queryByTestId("test-table")).toHaveStyle({
    tableLayout: "fixed",
  })
})

test("Table renders with different size.", () => {
  render(
    <Table size="large">
      <TBody>
        <Tr>
          <Td data-testid="test-td">1</Td>
          <Td>2</Td>
          <Td>3</Td>
        </Tr>
      </TBody>
    </Table>,
  )
  expect(screen.queryByTestId("test-td")).toHaveStyle({
    padding: "9px 16px",
  })
})

test("Table renders with different align.", () => {
  render(
    <Table align="center" data-testid="test-table">
      <TBody>
        <Tr>
          <Td>1</Td>
          <Td align="end">2</Td>
          <Td>3</Td>
        </Tr>
      </TBody>
    </Table>,
  )
  expect(screen.queryByTestId("test-table")).toMatchSnapshot()
})
