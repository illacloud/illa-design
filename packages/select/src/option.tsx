import { DropListItem } from "@illa-design/dropdown"
import { forwardRef } from "react"
import { OptionProps } from "./interface"

export const Option = forwardRef<HTMLDivElement, OptionProps>((props, ref) => {
  const {
    value,
    isSelectOption,
    colorScheme,
    disabled,
    children,
    selected,
    ...otherProps
  } = props

  return (
    <DropListItem
      value={value.toString()}
      isSelectOption={isSelectOption}
      colorScheme={colorScheme}
      title={children}
      selected={selected}
      disabled={disabled}
      {...otherProps}
    />
  )
})

Option.displayName = "Option"
