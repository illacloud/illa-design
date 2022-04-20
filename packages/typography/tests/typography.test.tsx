import { render } from "@testing-library/react"
import "@testing-library/jest-dom"
import { Heading, Paragraph, Text, Typography } from "../src"

test("Heading renders with different level", () => {
  const { getByTestId } = render(
    <Typography data-testid="test-typography">
      <Heading>Design system</Heading>
      <Paragraph>
        A design is a plan or specification for the construction of an object or
        system or for the implementation of an activity or process, or the
        result of that plan or specification in the form of a prototype, product
        or process. The verb to design expresses the process of developing a
        design.
      </Paragraph>
      <Paragraph>
        In some cases, the direct construction of an object without an explicit
        prior plan (such as in craft work, some engineering, coding, and graphic
        design) may also be considered{" "}
        <Text bold>to be a design activity.</Text>
      </Paragraph>
      <Heading level="h2">ILLA Design</Heading>
      <Paragraph>
        The ILLA Design component library defines a set of default particle
        variables, and a custom theme is to <Text mark>customize</Text> and{" "}
        <Text underline>overwrite</Text> this variable list.
      </Paragraph>
      <Paragraph>
        A design is a plan or specification for the construction of an object or
        system or for the implementation of an activity or process, or the
        result of that plan or specification in the form of a{" "}
        <Text code>prototype</Text>, <Text code>product</Text> or{" "}
        <Text code>process</Text>. The verb to design expresses the process of
        developing a design.
      </Paragraph>
      <Paragraph mark underline deleted>
        A design is a plan or specification for the construction of an object or
        system or for the implementation of an activity or process.
      </Paragraph>
      <Paragraph>
        <ul>
          <li>
            Architectural blueprints
            <ul>
              <li>Architectural blueprints</li>
            </ul>
          </li>
          <li>Engineering drawings</li>
          <li>Business processes</li>
        </ul>
      </Paragraph>
      <Paragraph>
        <ol>
          <li>Architectural blueprints</li>
          <li>Engineering drawings</li>
          <li>Business processes</li>
        </ol>
      </Paragraph>
    </Typography>,
  )
  expect(getByTestId("test-typography")).toBeInTheDocument()
})
