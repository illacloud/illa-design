/** @jsxImportSource @emotion/react */
import { forwardRef } from "react"
import { EmptyProps } from "./interface"
import { omit } from "@illa-design/system"
import {descriptionCss, emptyContainerCss, iconCss} from "./style"
import { Image } from "@illa-design/image"
import { EmptyIcon } from "@illa-design/icon"

export const Empty = forwardRef<HTMLDivElement, EmptyProps>((props, ref) => {
  const {
    icon = (<EmptyIcon css={iconCss} />),
    imgSrc,
    description = "暂无数据",
    ...rest
  } = props

  const otherProps = omit(rest, ["size"])

  return (
    <div ref={ref} css={emptyContainerCss} {...rest}>
      <div>
        {imgSrc ? (
          <Image
            src={imgSrc}
            objectFit="container"
            width="64px"
            height="64px"
          />
        ) : (
          <span>{icon}</span>
        )}
      </div>
      <div css={descriptionCss}>{description}</div>
    </div>
  )
})

Empty.displayName = "Empty"
