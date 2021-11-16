/** @jsx jsx */
import { FC } from "react"
import { AvatarProps, Shape } from "./interface"
import * as React from "react"
import { applyAvatarSize, applyShape } from "./common-css"
import { Image } from "@illa-design/image"

export const ImgAvatar: FC<AvatarProps> = (props) => {
  const {
    size = "small",
    shape = "circle",
  } = props

  const [width, height, _] = applyAvatarSize(size)
  return <Image src={props.src} width={width} height={height} radius={applyShape(shape)} />
}