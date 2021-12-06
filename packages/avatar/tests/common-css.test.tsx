import {
  applyAvatarContainer,
  applyAvatarShapeCircle,
  applyAvatarShapeSquare,
  applyAvatarSize,
  applyBgColor,
  applyMergeCss,
  applyShape,
} from "../src/style"
import { BsFacebook } from "react-icons/bs"
import { omit } from "@illa-design/system"

test("Common css renders background color", () => {
  expect(omit(applyBgColor("green"), ["name"])).toMatchSnapshot()
  expect(omit(applyBgColor("gray"), ["name"])).toMatchSnapshot()
  expect(omit(applyBgColor("#123321"), ["name"])).toMatchSnapshot()
})

test("Common css renders square shape", () => {
  expect(omit(applyAvatarShapeSquare("small"), ["name"])).toMatchSnapshot()
  expect(omit(applyAvatarShapeSquare("medium"), ["name"])).toMatchSnapshot()
  expect(omit(applyAvatarShapeSquare("large"), ["name"])).toMatchSnapshot()
})

test("Common css renders circle shape", () => {
  expect(omit(applyAvatarShapeCircle("small"), ["name"])).toMatchSnapshot()
  expect(omit(applyAvatarShapeCircle("medium"), ["name"])).toMatchSnapshot()
  expect(omit(applyAvatarShapeCircle("large"), ["name"])).toMatchSnapshot()
})

test("Common css renders container", () => {
  expect(omit(applyAvatarContainer("green"), ["name"])).toMatchSnapshot()
  expect(omit(applyAvatarContainer("gray"), ["name"])).toMatchSnapshot()
  expect(omit(applyAvatarContainer("#123321"), ["name"])).toMatchSnapshot()
})

test("Common css renders size", () => {
  expect(omit(applyAvatarSize("small"), ["name"])).toMatchSnapshot()
  expect(omit(applyAvatarSize("medium"), ["name"])).toMatchSnapshot()
  expect(omit(applyAvatarSize("large"), ["name"])).toMatchSnapshot()
})

test("Common css renders shape", () => {
  expect(applyShape("circle")).toBe("50%")
  expect(applyShape("square")).toBe("4px")
})

test("Common css renders merge", () => {
  expect(omit(applyMergeCss({
    colorScheme: "gray",
    size: "large",
    shape: "square",
    icon: <BsFacebook />,
  }), ["name"])).toMatchSnapshot()

  expect(omit(applyMergeCss({
    colorScheme: "gray",
    size: "large",
    shape: "square",
    src: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
  }), ["name"])).toMatchSnapshot()

  expect(omit(applyMergeCss({
    colorScheme: "gray",
    size: "large",
    shape: "square",
    text: "Hello World",
  }), ["name"])).toMatchSnapshot()
})
