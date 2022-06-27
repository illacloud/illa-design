import { act, render, screen, waitFor } from "@testing-library/react"
import { Text, Typography } from "../src"
import { globalColor, illaPrefix } from "@illa-design/theme"
import "@testing-library/jest-dom"

test("Text renders with different level", () => {
  render(
    <Typography>
      <Text data-testid="test-text" fontSize="20px">
        Text
      </Text>
    </Typography>,
  )
  expect(screen.getByTestId("test-text")).toHaveStyle({
    fontSize: "20px",
  })
})

test("Text renders with different color schemes", () => {
  render(
    <Typography>
      <Text colorScheme="blackAlpha">BlackAlpha</Text>
      <Text colorScheme="#123456">CustomColor</Text>
    </Typography>,
  )
  expect(screen.getByText("BlackAlpha")).toHaveStyle({
    color: `${globalColor(`--${illaPrefix}-blackAlpha-02`)}`,
  })
  expect(screen.getByText("CustomColor")).toHaveStyle({
    color: "#123456",
  })
})

test("Text renders with copy icon", async () => {
  render(
    <Typography>
      <Text data-testid="test-text" fontSize="20px" copyable={true}>
        Text
      </Text>
    </Typography>,
  )
  await waitFor(() => {
    expect(screen.getByTitle("CopyIcon")).toBeInTheDocument()
  })
})
