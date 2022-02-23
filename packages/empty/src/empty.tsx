/** @jsxImportSource @emotion/react */
import { forwardRef, useContext } from "react"
import { Image } from "@illa-design/image"
import { EmptyIcon } from "@illa-design/icon"
import {
  ConfigProviderContext,
  ConfigProviderProps,
  def,
} from "@illa-design/config-provider"
import { descriptionCss, emptyContainerCss, iconCss } from "./style"
import { EmptyProps } from "./interface"

export const Empty = forwardRef<HTMLDivElement, EmptyProps>((props, ref) => {
  const configProviderProps = useContext<ConfigProviderProps>(
    ConfigProviderContext,
  )
  const locale = configProviderProps?.locale?.empty ?? def.empty

  const {
    icon = <EmptyIcon css={iconCss} />,
    imgSrc,
    description = locale["noData"],
    ...rest
  } = props

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
