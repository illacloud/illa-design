/** @jsxImportSource @emotion/react */
import * as React from "react"
import { Children, forwardRef, Fragment } from "react"
import { SpaceAlign, SpaceDirection, SpaceProps, SpaceSize } from "./interface"
import { css, SerializedStyles } from "@emotion/react"
import { Divider, DividerDirection } from "@illa-design/divider"

function applyContainer(direction: SpaceDirection, align: SpaceAlign, wrap: boolean): SerializedStyles {
  let cssDirection: string
  switch (direction) {
    case "horizontal":
      cssDirection = "row"
      break
    case "vertical":
      cssDirection = "column"
      break
  }
  return css`
    display: inline-flex;
    vertical-align: middle;
    flex-direction: ${cssDirection};
    align-items: ${align};
    flex-wrap: ${wrap ? "wrap" : "nowrap"};
  `
}

function applyDividerSize(size: SpaceSize | SpaceSize[], isStart: boolean): SerializedStyles {
  let horSpace, verSpace: string

  if (typeof size == "string") {
    horSpace = getSpaceSize(size, false, isStart)
    verSpace = getSpaceSize(size, true, isStart)
  } else {
    if (size.length == 1) {
      horSpace = getSpaceSize(size[0], false, isStart)
      verSpace = getSpaceSize(size[0], true, isStart)
    } else if (size.length >= 2) {
      horSpace = getSpaceSize(size[0], false, isStart)
      verSpace = getSpaceSize(size[1], true, isStart)
    } else {
      horSpace = getSpaceSize("0px", false, isStart)
      verSpace = getSpaceSize("0px", true, isStart)
    }
  }
  return css`
    margin-left: ${horSpace};
    margin-bottom: ${verSpace};
  `
}

function getSpaceSize(size: SpaceSize, isVertical: boolean, isStart: boolean): string {
  if (isStart && !isVertical) {
    return "0px"
  } else {
    switch (size) {
      case "mini":
        return "4px"
      case "small":
        return "8px"
      case "medium":
        return "16px"
      case "large":
        return "24px"
      default:
        return size
    }
  }
}

export const Space = forwardRef<HTMLDivElement, SpaceProps>((props, ref) => {

  const {
    size = "small",
    align = "center",
    direction = "horizontal",
    divider = false,
    wrap = false,
    ...otherProps
  } = props

  let childrenArray = Children.toArray(props.children)

  return <div css={applyContainer(direction, align, wrap)} ref={ref} {...otherProps}>
    {childrenArray.map((child, index) => {
      return <Fragment key={index}>
        {index != 0 && divider ? <Divider css={applyDividerSize(size, index == 0)}
                                          direction={direction == "horizontal" ? "vertical" as DividerDirection : "horizontal" as DividerDirection} /> : null}
        <div css={applyDividerSize(size, index == 0)}>
          {child}
        </div>
      </Fragment>
    })}
  </div>

})
