import { forwardRef } from "react"
import { SelectProps } from "./interface"
import { SingleSelect } from "./single-select"
import { MultipleSelect } from "./multiple-select"

export const Select = forwardRef<HTMLDivElement, SelectProps>((props, ref) => {
  if (props.multiple) {
    return <MultipleSelect ref={ref} {...props} />
  } else {
    return <SingleSelect ref={ref} {...props} />
  }
})

Select.displayName = "Select"
