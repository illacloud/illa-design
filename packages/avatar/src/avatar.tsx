/** @jsxImportSource @emotion/react */
import * as React from "react"
import { forwardRef, ReactNode } from "react"
import { AvatarGroupProps, AvatarProps } from "./interface"
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

  const otherProps = omit(props, ["icon", "colorScheme", "size", "text", "shape", "src", "style"])
  const propsWithoutStyle = omit(props, ["style"])

  return <AvatarGroupContext.Consumer>
    {value => {
      let newValue: AvatarGroupProps | undefined
      if (value != undefined) {
        newValue = omit(value, ["zIndexAscend", "maxCount", "style"])
      }
      const newProps = {
        ...newValue,
        ...propsWithoutStyle,
      }

      let finalStyle = {
        ...value?.style,
        ...props?.style,
      }

      let finalNode: ReactNode
      if (props.src != undefined) {
        finalNode = <ImgAvatar  {...newProps} />
      } else if (props.text != undefined) {
        finalNode = <TextAvatar {...newProps} />
      } else {
        finalNode = <IconAvatar {...newProps} />
      }
      return <div css={applyOuterCss} style={finalStyle} ref={ref} {...otherProps}>
        {finalNode}
      </div>
    }}
  </AvatarGroupContext.Consumer>

})
