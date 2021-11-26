/** @jsxImportSource @emotion/react */
import * as React from "react"
import { forwardRef } from "react"
import { AvatarProps } from "./interface"
import { IconAvatar } from "./icon-avatar"
import { TextAvatar } from "./text-avatar"
import { ImgAvatar } from "./img-avatar"
import { omit } from "@illa-design/system"
import { AvatarGroupContext } from "./avatar-group"
import { css } from "@emotion/react"

const applyOuterCss = css`
  vertical-align: middle;
  display: inline-flex;
`

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>((props, ref) => {

  const otherProps = omit(props, ["icon", "colorScheme", "size", "text", "shape", "src"])

  return <div css={applyOuterCss} ref={ref} {...otherProps}>
    <AvatarGroupContext.Consumer>
      {value => {
        let newValue = value
        if (value != undefined) {
          newValue = omit(value, ["zIndexAscend", "maxCount"])
        }
        const newProps = {
          ...newValue,
          ...props,
        }
        if (props.src != undefined) {
          return <ImgAvatar  {...newProps} />
        } else if (props.text != undefined) {
          return <TextAvatar {...newProps} />
        } else {
          return <IconAvatar {...newProps} />
        }
      }}
    </AvatarGroupContext.Consumer>
  </div>
})
