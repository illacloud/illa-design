import { forwardRef } from "react"
import { CascaderProps } from "./interface"
import { SingleCascader } from "./single-cascader"
import { MultipleCascader } from "./multiple-cascader"

export const Cascader = forwardRef<HTMLDivElement, CascaderProps>(
  (props, ref) => {
    if (props.multiple) {
      return <MultipleCascader {...props} />
    } else {
      return <SingleCascader {...props} />
    }
  },
)

Cascader.displayName = "Cascader"
