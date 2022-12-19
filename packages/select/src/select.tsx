import { forwardRef } from "react"
import { SelectProps } from "./interface"
import { SingleSelect } from "./single-select"
import { MultipleSelect } from "./multiple-select"

export const Select = forwardRef<HTMLDivElement, SelectProps>((props, ref) => {
  if (props.multiple) {
    return <MultipleSelect {...props} />
  } else {
    return <SingleSelect {...props} />
  }
})

Select.displayName = "Select"
