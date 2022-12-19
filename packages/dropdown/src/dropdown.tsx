import { FC } from "react"
import { DropdownProps } from "./interface"
import { Trigger } from "@illa-design/trigger"
import { useMergeValue } from "@illa-design/system"

export const Dropdown: FC<DropdownProps> = (props) => {
  const {
    children,
    colorScheme,
    dropList,
    disabled,
    position = "bottom-start",
    triggerProps,
    trigger = "click",
    defaultPopupVisible,
    autoAlignPopupWidth,
    popupVisible,
    onVisibleChange,
    ...otherProps
  } = props

  const [currentPopupVisible, setCurrentPopupVisible] = useMergeValue(false, {
    defaultValue: defaultPopupVisible,
    value: popupVisible,
  })

  const changePopupVisible = (visible: boolean) => {
    if (popupVisible === undefined) {
      setCurrentPopupVisible(visible)
    }
    onVisibleChange?.(visible)
  }

  return (
    <Trigger
      trigger={trigger}
      colorScheme={colorScheme}
      disabled={disabled}
      autoAlignPopupWidth={autoAlignPopupWidth}
      withoutPadding={true}
      clickOutsideToClose={true}
      closeOnInnerClick={true}
      position={position}
      showArrow={false}
      alignPoint={trigger === "contextmenu"}
      popupVisible={currentPopupVisible}
      content={dropList}
      onVisibleChange={(visible: boolean) => {
        changePopupVisible(visible)
      }}
      {...triggerProps}
      {...otherProps}
    >
      {children}
    </Trigger>
  )
}

Dropdown.displayName = "Dropdown"
