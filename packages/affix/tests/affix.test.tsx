import { Affix } from "../src"
import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import "@testing-library/jest-dom"

/* class Test extends React.components {
 *
 * }
 *  */
test("Affix should render children", () => {
  render(
    <Affix>
      <span>Hello</span>
    </Affix>,
  )

  expect(screen.getByText("Hello")).toBeInTheDocument()
})
/*
 * test("Affix should fix 100px to top", async () => {
 *   render(
 *     <Affix offsetTop={100}>
 *       <span>Hello</span>
 *     </Affix>
 *   )
 *   await waitFor(() => { }, { timeout: 800 });
 *
 *   fireEvent.scroll(window)
 *
 *   expect(screen.getByText("Hello").parentElement).toHaveStyle({ position: "fixed", top: "100px" });
 * }) */

/* test("Affix should fix 100px to bottom", () => {
 *   render(
 *     <>
 *       <div style={{ height: 2000 }}></div>
 *       <Affix offsetBottom={100}>
 *         Hello
 *       </Affix>
 *     </>
 *   )
 *
 *   expect(screen.getByText("Hello").parentElement).toHaveStyle({ position: "fixed", bottom: "100px" });
 * }) */
