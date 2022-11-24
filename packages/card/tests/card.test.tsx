import { Card, CardMeta } from "../src"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Avatar } from "@illa-design/avatar"
import { LikeIcon, MoreIcon, ShareIcon } from "@illa-design/icon"
import "@testing-library/jest-dom"
import { Link } from "@illa-design/link"

test("Card renders with different size", () => {
  render(
    <Card size="small" title="small" extra={<Link>More</Link>}>
      <p>Hello</p>
      <p>Hello</p>
      <p>Hello</p>
    </Card>,
  )
  render(<Card title="medium" />)
  expect(screen.getByText("small")).toHaveStyle({
    padding: 8,
  })
  expect(screen.getByText("medium")).toHaveStyle({
    padding: 16,
  })
})

test("Card renders with different hoverable", () => {
  render(<Card hoverable title="hoverable" />)
  userEvent.hover(screen.getByText("hoverable"))
  expect(screen.getByText("hoverable").parentNode?.parentNode).toMatchSnapshot()
})

test("Card renders with Meta", () => {
  render(
    <CardMeta
      title="CardMeta"
      description="MetaContent"
      avatar={<Avatar />}
      actionList={[
        <LikeIcon key="like" />,
        <ShareIcon key="share" />,
        <MoreIcon key="more" />,
      ]}
    ></CardMeta>,
  )
  expect(screen.getByText("CardMeta").parentNode?.parentNode).toMatchSnapshot()
  expect(screen.getByText("CardMeta").parentNode?.nextSibling).toHaveStyle({
    marginTop: 16,
  })
})

test("Card renders with Cover", () => {
  render(
    <CardMeta
      title="Cover"
      cover={
        <div
          style={{
            height: 204,
            overflow: "hidden",
          }}
        >
          <img
            style={{ width: "100%", transform: "translateY(-20px)" }}
            alt="dessert"
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
          />
        </div>
      }
    />,
  )
  expect(screen.getByText("Cover").parentNode?.nextSibling).toMatchSnapshot()
})
