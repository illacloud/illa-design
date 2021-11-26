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

function applyDividerSize(size: SpaceSize, direction: SpaceDirection, isStart: boolean): SerializedStyles {
  let cssSize: string
  if (isStart) {
    cssSize = "0px"
  } else {
    switch (size) {
      case "mini":
        cssSize = "4px"
        break
      case "small":
        cssSize = "8px"
        break
      case "medium":
        cssSize = "16px"
        break
      case "large":
        cssSize = "24px"
        break
      default:
        cssSize = size
        break
    }
  }
  switch (direction) {
    case "vertical":
      return css`
        margin-top: ${cssSize};
      `
    case "horizontal":
      return css`
        margin-left: ${cssSize};
      `
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
        {index != 0 && divider ? <Divider css={applyDividerSize(size, direction, index == 0)}
                                          direction={direction == "horizontal" ? "vertical" as DividerDirection : "horizontal" as DividerDirection} /> : null}
        <div css={applyDividerSize(size, direction, index == 0)}>
          {child}
        </div>
      </Fragment>
    })}
  </div>

})
