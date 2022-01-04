import { TriggerProps } from "@illa-design/trigger"

type PopoverSize = "small" | "medium" | "large"

export interface PopoverProps extends TriggerProps {
  size?: PopoverSize
  hasCloseIcon?: boolean
  title?: string
}
