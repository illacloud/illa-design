/** @jsx jsx */
import { FC } from "react"
import { AvatarProps } from "./interface"
import * as React from "react"

export const PathImgAvatar: FC<AvatarProps> = (props) => {
  return <div>
    {props.text}
  </div>
}