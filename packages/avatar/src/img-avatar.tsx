import { FC } from "react"
import { AvatarProps } from "./interface"
import { applyAvatarSize, applyShape } from "./style"
import { Image } from "@illa-design/image"

export const ImgAvatar: FC<AvatarProps> = (props) => {
  const { size = "small", shape = "circle" } = props

  const [width, height] = applyAvatarSize(size)
  return (
    <Image
      src={props.src}
      width={width}
      height={height}
      radius={applyShape(shape)}
    />
  )
}
