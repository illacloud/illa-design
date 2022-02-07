/** @jsxImportSource @emotion/react */
import { forwardRef } from "react"
import { ListProps } from "."

export const List = forwardRef<HTMLDivElement, ListProps>((props, ref) => {
  const { ...otherProps } = props
  return (
    <div ref={ref} {...otherProps}>
      {props.children}
    </div>
  )
})

List.displayName = "List"
