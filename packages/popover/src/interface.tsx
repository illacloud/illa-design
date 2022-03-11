import { TriggerProps } from "@illa-design/trigger"

export interface PopoverProps extends Omit<TriggerProps, "withoutPadding"> {
  title?: string
  hasCloseIcon?: boolean
}
