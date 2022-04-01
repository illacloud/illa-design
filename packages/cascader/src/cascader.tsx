import {
  forwardRef,
  useRef,
  useState,
} from "react"
import { Trigger } from "@illa-design/trigger"
import { SelectView } from "@illa-design/select"
import {
  CascaderProps,
} from "./interface"

export const Cascader = forwardRef<HTMLElement, CascaderProps>((props, ref) => {
  const {
    size = "medium",
    children,
    disabled,
    value,
    defaultValue,
    options,
    showSearch,
    multiple,
    allowCreate,
    // event
    onChange,
    onSearch,
    onFocus,
    onBlur,
    onClear,
    onVisibleChange,
  } = props

  const [currentVisible, setCurrentVisible] = useState<boolean>()


  const handleVisibleChange = (value: boolean) => {
    if (currentVisible !== value) {
      setCurrentVisible(value)
      onVisibleChange?.(value)
    }
  }

  // SelectView event handle
  const selectViewEventHandlers = {
    onFocus,
  }

  return (
    <Trigger
      trigger="click"
      content={
        <div>cascader</div>
      }
      showArrow={false}
      colorScheme="white"
      position="bl"
      disabled={disabled}
      withoutPadding
      closeOnClick
      clickOutsideToClose
      autoAlignPopupWidth
      popupVisible={currentVisible}
      onVisibleChange={handleVisibleChange}
    >
      <SelectView
        {...props}
        {...selectViewEventHandlers}
        popupVisible={currentVisible}
        multiple={multiple}
      />
    </Trigger>
  )
})

Cascader.displayName = "Cascader"
