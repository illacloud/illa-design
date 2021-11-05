/** @jsx jsx */
import * as React from "react"
import { forwardRef, useState } from "react"
import { ColorScheme, TagProps } from "./interface"
import { css } from "@emotion/react"
import { BsX } from "react-icons/bs"
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

const leftIcon = css`
  width: 12px;
  height: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 4px;
`

const colors: ColorScheme[] = [
  "black", "gray", "red", "orange", "yellow", "green", "blue", "cyan", "purple",
]

function tagOutlinePrepare(color: ColorScheme): SerializedStyles {
  if (color == "gray") {
    return css`
      border-radius: 1px;
      background-color: ${globalColor(`--${illaPrefix}-${color}-08`)};
      color: ${globalColor(`--${illaPrefix}-${color}-02`)};
    `
  } else {
    return css`
      border-radius: 1px;
      border: solid 1px ${globalColor(`--${illaPrefix}-${color}-01`)};
      color: ${globalColor(`--${illaPrefix}-${color}-01`)};
    `
  }
}

function tagFillPrepare(color: ColorScheme): SerializedStyles {
  return css`
    background-color: ${globalColor(`--${illaPrefix}-${color}-01`)};
    color: ${globalColor("--illa-white-01")};
    border-radius: 1px;
  `
}

function tagLightPrepare(color: ColorScheme): SerializedStyles {
  if (color == "gray") {
    return css`
      border-radius: 1px;
      background-color: ${globalColor(`--${illaPrefix}-${color}-08`)};
      color: ${globalColor(`--${illaPrefix}-${color}-02`)};
    `
  } else {
    return css`
      border-radius: 1px;
      background-color: ${globalColor(`--${illaPrefix}-${color}-06`)};
      color: ${globalColor(`--${illaPrefix}-${color}-01`)};
    `
  }
}

function tagFillNormal(color: Extract<ColorScheme, string>): SerializedStyles {
  return css`
    border-radius: 1px;
    color: var(--illa-white-w01);
    background-color: ${color};
  `
}

function tagOutlineNormal(color: Extract<ColorScheme, string>): SerializedStyles {
  return css`
    border-radius: 1px;
    color: ${color};
    border: solid 1px ${color};
  `
}

export const Tag = forwardRef<HTMLDivElement, TagProps>((props, ref) => {

  const currentVisible = props.visible ?? true
  const currentColorScheme = props.colorScheme ?? "gray"
  const currentSize = props.size ?? "small"
  const currentVariant = props.variant ?? "light"

  let variant: SerializedStyles

  // variant
  if (colors.includes(currentColorScheme)) {
    switch (currentVariant) {
      case "light": {
        variant = tagLightPrepare(currentColorScheme)
        break
      }
      case "fill": {
        variant = tagFillPrepare(currentColorScheme)
        break
      }
      case "outline": {
        variant = tagOutlinePrepare(currentColorScheme)
        break
      }
    }
  } else {
    switch (currentVariant) {
      case "light":
      case "fill": {
        variant = tagFillNormal(currentColorScheme)
        break
      }
      case "outline": {
        variant = tagOutlineNormal(currentColorScheme)
        break
      }
    }
  }

  // size
  let size: SerializedStyles
  switch (currentSize) {
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
    ${tagContainer};
    ${variant};
    ${size};
  `
  // close icon color
  let closeIconColor: string
  if (colors.includes(currentColorScheme)) {
    switch (currentVariant) {
      case "light": {
        if (currentColorScheme == "gray") {
          closeIconColor = globalColor(`--${illaPrefix}-${currentColorScheme}-02`)
        } else {
          closeIconColor = globalColor(`--${illaPrefix}-${currentColorScheme}-01`)
        }
        break
      }
      case "fill": {
        closeIconColor = globalColor("--illa-white-01")
        break
      }
      case "outline": {
        if (currentColorScheme == "gray") {
          closeIconColor = globalColor(`--${illaPrefix}-${currentColorScheme}-02`)
        } else {
          closeIconColor = globalColor(`--${illaPrefix}-${currentColorScheme}-01`)
        }
        break
      }
    }
  } else {
    closeIconColor = currentColorScheme
  }

  return currentVisible ? <div ref={ref} className={props.className} style={props.style}>
    <div css={finalStyle}>
      <span css={leftIcon}>{props.icon}</span>
      {props.children}
      {props.closable ?? false ? <BsX onClick={() => {
        if (props.onClose != undefined) {
          props.onClose()
        }
      }} color={closeIconColor} /> : null}
    </div>
  </div> : null
})