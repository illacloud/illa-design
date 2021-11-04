import { FC } from "react"
import { IconProps } from "./interface"

export const Icon: FC<IconProps> = ((props, ref) => {
  return <div ref={ref}></div>
})