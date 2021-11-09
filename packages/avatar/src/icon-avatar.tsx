/** @jsx jsx */
import * as React from "react"
import { FC } from "react"
import { AvatarProps, Size } from "./interface"
import { applyMergeCss } from "./common-css"
import { css } from "@emotion/react"
import { BsPerson } from "react-icons/bs"

function applyIconSize(size: Size) {
  let width: number
  let height: number
  switch (size) {
    case "large": {
      width = 28
      height = 28
      break
    }
    case "medium": {
      width = 18
      height = 18
      break
    }
    case "small": {
      width = 14
      height = 14
      break
    }
  }
  return css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: ${width}px;
    height: ${height}px;
  `
}

export const IconAvatar: FC<AvatarProps> = (props) => {
  const currentColorScheme = props.colorScheme ?? "blue"
  const currentSize = props.size ?? "small"
  const currentShape = props.shape ?? "circle"
  const currentIcon = props.icon ?? <BsPerson />
  const finalProps = {
    ...props,
    colorScheme: currentColorScheme,
    size: currentSize,
    shape: currentShape,
    icon: currentIcon,
  } as AvatarProps
  return <div css={applyMergeCss(finalProps)}>
    <span css={applyIconSize(finalProps.size!!)}>
      {finalProps.icon}
    </span>
  </div>
}
