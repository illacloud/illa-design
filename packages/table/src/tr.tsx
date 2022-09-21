import { forwardRef, useContext } from "react"
import { TrProps } from "./interface"
import { applyBoxStyle } from "@illa-design/theme"
import { TableContext } from "./table-context"
import { applyBgHoverStyle, applyNormalStyle } from "./style"

export const Tr = forwardRef<HTMLTableRowElement, TrProps>((props, ref) => {
  const { hoverable, ...otherProps } = props
  const context = useContext(TableContext)
  console.log({hoverable})
  return (
    <tr
      css={[
        applyNormalStyle(),
        applyBgHoverStyle(hoverable ?? context?.hoverable),
        applyBoxStyle(props),
      ]}
      ref={ref}
      {...otherProps}
    />
  )
})

Tr.displayName = "Tr"
