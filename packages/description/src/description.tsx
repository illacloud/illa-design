/** @jsxImportSource @emotion/react */
import { forwardRef } from "react"
import { DescriptionProps } from "./interface"

export const Description = forwardRef<HTMLDivElement, DescriptionProps>(
  (props, ref) => {
    const { ...otherProps } = props
    return <div {...otherProps}>{props.children}</div>
  },
)

Description.displayName = "Description"
