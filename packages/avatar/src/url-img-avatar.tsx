/** @jsx jsx */
import { FC } from "react"
import { AvatarProps } from "./interface"
import * as React from "react"

export const UrlImgAvatar: FC<AvatarProps> = (props) => {
  return <div>
    {props.text}
  </div>
}