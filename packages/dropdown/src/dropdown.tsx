/** @jsxImportSource @emotion/react */
import * as React from "react"
import { ElementRef, FC, ReactElement, useContext, useRef } from "react"
import { DropdownProps } from "./interface"
import { Trigger } from "@illa-design/trigger"
import { useMergeValue, omit } from "@illa-design/system"

export const Dropdown: FC<DropdownProps> = (props) => {
  const {
    children,
    droplist,
    disabled,
    position = "bl",
    trigger = "hover",
    triggerProps,
    defaultPopupVisible,
    popupVisible,
    getPopupContainer,
    onVisibleChange,
    ...otherProps
  } = props

  const triggerRef = useRef(null)
  const [currentPopupVisible, setCurrentPopupVisible] = useMergeValue(false, {
    defaultValue: props.defaultPopupVisible,
    value: props.popupVisible,
  })

  const getContent = () => {
    return React.Children.only(droplist || <span />) as React.ReactElement
  }

  const changePopupVisible = (visible: boolean) => {
    setCurrentPopupVisible(visible)
    onVisibleChange?.(visible)
    triggerProps?.onVisibleChange?.(visible)
  }

  const content = getContent()

  return (
    <Trigger
      {...(triggerProps ? omit(triggerProps, ["onVisibleChange"]) : {})}
      trigger={trigger}
      disabled={disabled}
      position={position}
      popupVisible={currentPopupVisible}
      content={
        content && content.props.isMenu
          ? React.cloneElement(content as ReactElement, {
              inDropdown: true,
              selectable: false,
              onClickMenuItem: (key: string, event: any) => {
                let clickMenuEventValue = null

                const content = getContent()
                if (content?.props?.onClickMenuItem) {
                  clickMenuEventValue = content.props.onClickMenuItem(
                    key,
                    event,
                  )
                }
                // [TODO] Set focus to avoid onblur
                // 目前的 trigger 无法focus

                if (clickMenuEventValue instanceof Promise) {
                  clickMenuEventValue?.finally(() => changePopupVisible(false))
                } else if (clickMenuEventValue !== false) {
                  changePopupVisible(false)
                }
              },
            })
          : content
      }
      onVisibleChange={(visible: boolean) => {
        if (visible !== popupVisible) {
          changePopupVisible(visible)
        }
      }}
      {...otherProps}
    >
      {React.isValidElement(children)
        ? React.cloneElement(children, {
            disabled,
          })
        : children}
    </Trigger>
  )
}

Dropdown.displayName = "Dropdown"
