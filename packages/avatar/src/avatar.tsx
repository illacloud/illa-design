/** @jsx jsx */
import * as React from "react"
import { forwardRef, ReactNode } from "react"
import { AvatarProps } from "./interface"
import { IconAvatar } from "./icon-avatar"
import { TextAvatar } from "./text-avatar"
import { ImgAvatar } from "./img-avatar"
import { omit } from "@illa-design/system"

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>((props, ref) => {

  const otherProps = omit(props, ["icon", "colorScheme", "size", "text", "shape", "src"])

  let finalNode: ReactNode
  if (props.src != undefined) {
    finalNode = <ImgAvatar {...props} />
  } else if (props.text != undefined) {
    finalNode = <TextAvatar {...props} />
  } else {
    finalNode = <IconAvatar {...props} />
  }

  return <div ref={ref} {...otherProps}>
    {finalNode}
  </div>
})
