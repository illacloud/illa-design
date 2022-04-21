import { forwardRef, MouseEventHandler, useState } from "react"
import { TagProps } from "./interface"
import { css } from "@emotion/react"
import { CloseIcon } from "@illa-design/icon"
import { SerializedStyles } from "@emotion/serialize"
import { omit } from "@illa-design/system"
import {
  applyCloseIcon,
  applyTagSizeLarge,
  applyTagSizeMedium,
  applyTagSizeSmall,
  closeIcon,
  colors,
  leftIcon,
  tagContainer,
  tagContentStyle,
  tagFillNormal,
  tagFillPrepare,
  tagLightPrepare,
  tagOutlineNormal,
  tagOutlinePrepare,
} from "./style"
import * as events from "events"

export const Tag = forwardRef<HTMLDivElement, TagProps>((props, ref) => {
  const {
    visible,
    colorScheme = "gray",
    size = "small",
    variant = "light",
    closable,
    ...rest
  } = props

  const otherProps = omit(rest, ["onClose", "icon"])

  let variantCss: SerializedStyles

  const [realVisible, setRealVisible] = useState(true)

  // variant
  if (colors.includes(colorScheme)) {
    switch (variant) {
      case "light": {
        variantCss = tagLightPrepare(colorScheme)
        break
      }
      case "fill": {
        variantCss = tagFillPrepare(colorScheme)
        break
      }
      case "outline": {
        variantCss = tagOutlinePrepare(colorScheme)
        break
      }
    }
  } else {
    switch (variant) {
      case "light":
      case "fill": {
        variantCss = tagFillNormal(colorScheme)
        break
      }
      case "outline": {
        variantCss = tagOutlineNormal(colorScheme)
        break
      }
    }
  }

  // size
  let sizeCss: SerializedStyles
  switch (size) {
    case "small": {
      sizeCss = applyTagSizeSmall(variant)
      break
    }
    case "medium": {
      sizeCss = applyTagSizeMedium(variant)
      break
    }
    case "large": {
      sizeCss = applyTagSizeLarge(variant)
      break
    }
  }

  const finalStyle = css`
    ${tagContainer};
    ${variantCss};
    ${sizeCss};
  `

  return (visible == undefined ? realVisible : visible) ? (
    <div css={finalStyle} ref={ref} {...otherProps}>
      {props.icon && <span css={leftIcon}>{props.icon}</span>}
      <span css={tagContentStyle}>{props.children}</span>
      {props.closable && (
        <span css={applyCloseIcon(colorScheme, size, variant)}>
          <CloseIcon
            size="8px"
            onClick={(e) => {
              if (props.onClose != undefined) {
                props.onClose(e)
              }
              if (visible == undefined) {
                setRealVisible(false)
              }
            }}
          />
        </span>
      )}
    </div>
  ) : null
})

Tag.displayName = "Tag"
