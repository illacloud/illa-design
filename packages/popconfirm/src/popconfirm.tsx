import { FC, useContext, useState } from "react"
import { PopconfirmProps } from "./interface"
import { Trigger } from "@illa-design/trigger"
import { Typography } from "@illa-design/typography"
import {
  applyButtonGroupStyle,
  applyHeaderStyle,
  applyTypographyContainer,
} from "./style"
import { Space } from "@illa-design/space"
import { Button } from "@illa-design/button"
import {
  ConfigProviderContext,
  ConfigProviderProps,
  def,
} from "@illa-design/config-provider"
import { InfoCircleIcon } from "@illa-design/icon"
import { globalColor, illaPrefix } from "@illa-design/theme"

export const PopConfirm: FC<PopconfirmProps> = (props) => {
  const {
    title,
    cancelText,
    okText,
    okColorScheme = "blue",
    okButtonProps,
    cancelButtonProps,
    cancelColorScheme = "gray",
    onOk,
    onCancel,
    defaultPopupVisible,
    icon = <InfoCircleIcon color={globalColor(`--${illaPrefix}-blue-03`)} />,
    colorScheme = "white",
    trigger = "click",
    // must be false
    closeOnClick = false,
    popupVisible,
    onVisibleChange,
    ...otherProps
  } = props

  const [confirmVisibleState, setConfirmVisibleState] = useState(
    defaultPopupVisible ?? false,
  )

  const configProviderProps = useContext<ConfigProviderProps>(
    ConfigProviderContext,
  )

  const locale = configProviderProps?.locale?.popConfirm ?? def.popConfirm

  return (
    <Trigger
      onVisibleChange={(visible) => {
        if (onVisibleChange != undefined) {
          onVisibleChange(visible)
        }
        if (popupVisible == undefined) {
          setConfirmVisibleState(visible)
        }
      }}
      colorScheme={colorScheme}
      popupVisible={
        popupVisible != undefined ? popupVisible : confirmVisibleState
      }
      trigger={trigger}
      closeOnClick={closeOnClick}
      withoutPadding
      content={
        <div css={applyTypographyContainer}>
          <Typography>
            {title && (
              <Space size="8px">
                {icon}
                <div css={applyHeaderStyle(colorScheme)}>{title}</div>
              </Space>
            )}
            <div style={{ height: "16px" }} />
          </Typography>
          <Space css={applyButtonGroupStyle} size="16px" direction="horizontal">
            <Button
              colorScheme={cancelColorScheme}
              onClick={() => {
                if (onCancel != undefined) {
                  onCancel()
                }
                if (popupVisible == undefined) {
                  setConfirmVisibleState(false)
                }
                onVisibleChange && onVisibleChange(false)
              }}
              {...cancelButtonProps}
            >
              {cancelText ?? locale["cancel"]}
            </Button>
            <Button
              colorScheme={okColorScheme}
              onClick={() => {
                if (onOk != undefined) {
                  onOk()
                }
                if (popupVisible == undefined) {
                  setConfirmVisibleState(false)
                }
                onVisibleChange && onVisibleChange(false)
              }}
              {...okButtonProps}
            >
              {okText ?? locale["confirm"]}
            </Button>
          </Space>
        </div>
      }
      {...otherProps}
    >
      {props.children}
    </Trigger>
  )
}

PopConfirm.displayName = "PopConfirm"
