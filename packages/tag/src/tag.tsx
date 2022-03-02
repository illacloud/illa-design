/** @jsxImportSource @emotion/react */
import * as React from "react"
import { forwardRef, useState } from "react"
import { TagProps } from "./interface"
import { css } from "@emotion/react"
import { CloseIcon } from "@illa-design/icon"
import { SerializedStyles } from "@emotion/serialize"
import { omit } from "@illa-design/system"
import {
  applyTagSizeLarge,
  applyTagSizeMedium,
  applyTagSizeSmall,
  closeIcon,
  colors,
  leftIcon,
  tagContainer,
  tagFillNormal,
  tagFillPrepare,
  tagLightPrepare,
  tagOutlineNormal,
  tagOutlinePrepare,
} from "./style"

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
      <span
        css={css`
          font-size: 14px;
          line-height: 22px;
        `}
      >
        {props.children}
      </span>
      {props.closable && (
        <CloseIcon
          size="7px"
          css={closeIcon}
          onClick={() => {
            if (props.onClose != undefined) {
              props.onClose()
            }
            if (visible == undefined) {
              setRealVisible(false)
            }
          }}
        />
      )}
    </div>
  ) : null
})

Tag.displayName = "Tag"
