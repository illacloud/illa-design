/** @jsx jsx */
import * as React from "react"
import { forwardRef, ReactNode } from "react"
import { AvatarProps } from "./interface"
import { IconAvatar } from "./icon-avatar"
import { TextAvatar } from "./text-avatar"
import { PathImgAvatar } from "./path-img-avatar"
import { NodeImgAvatar } from "./node-img-avatar"

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>((props, ref) => {

  let finalNode: ReactNode
  if (props.src != undefined) {
    if (typeof props.src === "string") {
      finalNode = <PathImgAvatar {...props} />
    } else {
      finalNode = <NodeImgAvatar {...props} />
    }
  } else if (props.text != undefined) {
    finalNode = <TextAvatar {...props} />
  } else {
    finalNode = <IconAvatar {...props} />
  }

  return <div ref={ref} style={props.style} className={props.className}>
    {finalNode}
  </div>
})
