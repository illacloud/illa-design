import { forwardRef, useContext } from "react"
import { Image } from "@illa-design/image"
import { EmptyIcon } from "@illa-design/icon"
import {
  ConfigProviderContext,
  ConfigProviderProps,
  def,
} from "@illa-design/config-provider"
import { applyEmptyContainerStyle, descriptionStyle } from "./style"
import { EmptyProps } from "./interface"

export const Empty = forwardRef<HTMLDivElement, EmptyProps>((props, ref) => {
  const configProviderProps = useContext<ConfigProviderProps>(
    ConfigProviderContext,
  )
  const locale = configProviderProps?.locale?.empty ?? def.empty

  const {
    icon = <EmptyIcon size="48px" />,
    imgSrc,
    paddingVertical = "40px",
    description = locale["noData"],
    ...rest
  } = props

  return (
    <div ref={ref} css={applyEmptyContainerStyle(paddingVertical)} {...rest}>
      <div>
        {imgSrc ? (
          <Image
            src={imgSrc}
            objectFit="container"
            width="48px"
            height="48px"
          />
        ) : (
          icon
        )}
      </div>
      <div css={descriptionStyle}>{description}</div>
    </div>
  )
})

Empty.displayName = "Empty"
