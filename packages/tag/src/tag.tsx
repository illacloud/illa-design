/** @jsx jsx */
import * as React from "react"
import { forwardRef, useState } from "react"
import { ColorScheme, TagProps } from "./interface"
import { css } from "@emotion/react"
import { SerializedStyles } from "@emotion/serialize"
import { globalColor, illaPrefix } from "@illa-design/theme"

// style
const tagContainer = css`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
`

const tagSizeLarge = css`
  font-size: 12px;
  padding: 5px 8px;
`

const tagSizeMiddle = css`
  font-size: 12px;
  padding: 3px 8px;
`

const tagSizeSmall = css`
  font-size: 12px;
  padding: 1px 8px;
`

const colors: ColorScheme[] = [
  "black", "gray", "red", "orange", "yellow", "green", "blue", "cyan", "purple",
]

function tagOutlinePrepare(color?: ColorScheme): SerializedStyles {
  if (color == undefined || color == "gray") {
    return css`
      border-radius: 1px;
      background-color: var(--${illaPrefix}-${color ?? "gray"}-08);
      color: varvar(--${illaPrefix}-${color ?? "gray"}-02);
    `
  } else {
    return css`
      border-radius: 1px;
      border: solid 1px var(--${illaPrefix}-${color}-01);
      color: var(--${illaPrefix}-${color}-01);
    `
  }
}

function tagFillPrepare(color?: ColorScheme): SerializedStyles {
  return css`
    background-color: var(--${illaPrefix}-${color ?? "gray"}-01);
    color: var(--illa-white-01);
    border-radius: 1px;
  `
}

function tagLightPrepare(color?: ColorScheme): SerializedStyles {
  if (color == undefined || color == "gray") {
    return css`
      border-radius: 1px;
      background-color: var(--${illaPrefix}-${color ?? "gray"}-08);
      color: var(--${illaPrefix}-${color ?? "gray"}-02);
    `
  } else {
    return css`
      border-radius: 1px;
      background-color: var(--${illaPrefix}-${color}-06);
      color: var(--${illaPrefix}-${color}-01);
    `
  }
}

function tagFillNormal(color: ColorScheme): SerializedStyles {
  return css`
    border-radius: 1px;
    color: var(--illa-white-w01);
    background-color: ${color};
  `
}

function tagOutlineNormal(color: ColorScheme): SerializedStyles {
  return css`
    border-radius: 1px;
    color: ${color};
    border: solid 1px ${color};
  `
}

export const Tag = forwardRef<HTMLDivElement, TagProps>((props, ref) => {
  const [visible, setVisible] = useState(props.visible ?? true)
  let variant: SerializedStyles
  if (props.colorScheme == undefined || colors.includes(props.colorScheme)) {
    switch (props.variant ?? "light") {
      case "light": {
        variant = tagLightPrepare(props.colorScheme)
        break
      }
      case "fill": {
        variant = tagFillPrepare(props.colorScheme)
        break
      }
      case "outline": {
        variant = tagOutlinePrepare(props.colorScheme)
        break
      }
    }
  } else {
    switch (props.variant ?? "light") {
      case "light":
      case "fill": {
        variant = tagFillNormal(props.colorScheme)
        break
      }
      case "outline": {
        variant = tagOutlineNormal(props.colorScheme)
        break
      }
    }
  }

  console.log(`${variant.styles}`)

  let size: SerializedStyles
  switch (props.size ?? "small") {
    case "small": {
      size = tagSizeSmall
      break
    }
    case "middle": {
      size = tagSizeMiddle
      break
    }
    case "large": {
      size = tagSizeLarge
      break
    }
  }

  const finalStyle = css`
    ${globalColor};
    ${tagContainer};
    ${variant};
    ${size};
  `

  return visible ? <div ref={ref} className={props.className} style={props.style}>
    <div css={finalStyle}>
      <div>{props.children}</div>
      {props.closable ?? false ? <div onClick={() => {
        if (props.onClose == undefined) {
          setVisible(false)
        } else {
          props.onClose()
        }
      }} /> : null}
    </div>
  </div> : null
})