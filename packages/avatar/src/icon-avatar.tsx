import { FC } from "react"
import { AvatarProps } from "./interface"
import { applyIconSize, applyMergeCss } from "./style"
import { PeopleIcon } from "@illa-design/icon"

export const IconAvatar: FC<AvatarProps> = (props) => {
  const currentColorScheme = props.colorScheme ?? "blue"
  const currentSize = props.size ?? "small"
  const currentShape = props.shape ?? "circle"

  let iconSize: string
  switch (currentSize) {
    default:
    case "large": {
      iconSize = "28px"
      break
    }
    case "medium": {
      iconSize = "18px"
      break
    }
    case "small": {
      iconSize = "14px"
      break
    }
  }

  const currentIcon = props.icon ?? <PeopleIcon size={iconSize} />
  const finalProps = {
    ...props,
    colorScheme: currentColorScheme,
    size: currentSize,
    shape: currentShape,
    icon: currentIcon,
  } as AvatarProps
  return (
    <div css={applyMergeCss(finalProps)}>
      <div css={applyIconSize(finalProps.size!!)}>{finalProps.icon}</div>
    </div>
  )
}
