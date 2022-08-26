import {
  FC,
  ReactElement,
  Children,
  isValidElement,
  cloneElement,
  SyntheticEvent,
  ReactNode,
} from "react"
import { DropdownProps } from "./interface"
import { Trigger } from "@illa-design/trigger"
import { useMergeValue, omit } from "@illa-design/system"
import { css } from "@emotion/react"

const getContent = (dropList: ReactNode) => {
  return Children.only(dropList || <span />) as ReactElement
}

export const Dropdown: FC<DropdownProps> = (props) => {
  const {
    children,
    dropList,
    disabled,
    position = "bottom-start",
    trigger = "hover",
    triggerProps,
    defaultPopupVisible,
    popupVisible,
    getPopupContainer,
    onVisibleChange,
    ...otherProps
  } = props

  const content = getContent(dropList)

  const triggerDefaultProps = {
    colorScheme: "white",
    withoutPadding: true,
    clickOutsideToClose: true,
    closeOnInnerClick: true,
    ...triggerProps,
  }

  const [currentPopupVisible, setCurrentPopupVisible] = useMergeValue(false, {
    defaultValue: props.defaultPopupVisible,
    value: props.popupVisible,
  })

  const changePopupVisible = (visible: boolean) => {
    setCurrentPopupVisible(visible)
    onVisibleChange?.(visible)
    triggerDefaultProps?.onVisibleChange?.(visible)
  }

  const onClickMenuItem = (key: string, event: SyntheticEvent) => {
    let clickMenuEventValue = null

    const content = getContent(dropList)
    if (content?.props?.onClickMenuItem) {
      clickMenuEventValue = content.props?.onClickMenuItem(key, event)
    }
    if (content?.props?.onClickItem) {
      clickMenuEventValue = content.props?.onClickItem(key, event)
    }

    if (clickMenuEventValue instanceof Promise) {
      clickMenuEventValue?.finally(() => changePopupVisible(false))
    } else if (clickMenuEventValue !== false) {
      changePopupVisible(false)
    }
  }

  return (
    <Trigger
      trigger={trigger}
      disabled={disabled}
      position={position}
      showArrow={false}
      alignPoint={trigger === "contextmenu"}
      popupVisible={currentPopupVisible}
      _css={css`
        border-radius: 8px;
      `}
      content={
        content?.props?.isMenu
          ? cloneElement(content as ReactElement, {
              inDropdown: true,
              selectable: false,
              onClickMenuItem,
            })
          : content?.props?.isDropList
          ? cloneElement(content as ReactElement, {
              onClickItem: onClickMenuItem,
            })
          : content
      }
      onVisibleChange={(visible: boolean) => {
        if (visible !== popupVisible) {
          changePopupVisible(visible)
        }
      }}
      {...(triggerDefaultProps
        ? omit(triggerDefaultProps, ["onVisibleChange"])
        : {})}
      {...otherProps}
    >
      {isValidElement(children)
        ? cloneElement(children, {
            disabled,
          })
        : children}
    </Trigger>
  )
}

Dropdown.displayName = "Dropdown"
