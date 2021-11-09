/** @jsx jsx */
import { FC } from "react"
import { AvatarProps } from "./interface"
import * as React from "react"

export const NodeImgAvatar: FC<AvatarProps> = (props) => {
  return <span>
    {props.children}
  </span>
}