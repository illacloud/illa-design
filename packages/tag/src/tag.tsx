import { forwardRef, useState } from "react"
import { TagProps } from "./interface"
import { css, SerializedStyles } from "@emotion/react"
import { CloseIcon } from "@illa-design/icon"
import { omit } from "@illa-design/system"
import {
  applyCloseIcon,
  applyTagContainerStyle,
  colors,
  leftIcon,
  tagContentStyle,
  tagFillNormal,
  tagFillPrepare,
  tagLightPrepare,
  tagOutlineNormal,
  tagOutlinePrepare,
  tagSizeLargeStyle,
  tagSizeMediumStyle,
  tagSizeSmallStyle,
} from "./style"
import { applyBoxStyle, deleteCssProps } from "@illa-design/theme"
import { Simulate } from "react-dom/test-utils"

export const Tag = forwardRef<HTMLDivElement, TagProps>((props, ref) => {
  const {
    visible,
    colorScheme = "gray",
    size = "medium",
    variant = "light",
    clickable,
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
      sizeCss = tagSizeSmallStyle
      break
    }
    case "medium": {
      sizeCss = tagSizeMediumStyle
      break
    }
    case "large": {
      sizeCss = tagSizeLargeStyle
      break
    }
  }

  const finalStyle = css`
    ${applyTagContainerStyle(clickable)};
    ${variantCss};
    ${sizeCss};
  `

  return (visible == undefined ? realVisible : visible) ? (
    <div
      css={[finalStyle, applyBoxStyle(props)]}
      ref={ref}
      {...deleteCssProps(otherProps)}
    >
      {props.icon && <span css={leftIcon}>{props.icon}</span>}
      <span css={tagContentStyle}>{props.children}</span>
      {props.closable && (
        <span
          css={applyCloseIcon(colorScheme, size, variant)}
          onClick={(e) => {
            if (props.onClose != undefined) {
              props.onClose(e)
            }
            if (visible == undefined) {
              setRealVisible(false)
            }
          }}
        >
          <CloseIcon size="8px" />
        </span>
      )}
    </div>
  ) : null
})

Tag.displayName = "Tag"
