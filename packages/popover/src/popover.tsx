import { FC, useContext, useState } from "react"
import { PopoverProps } from "./interface"
import { Trigger } from "@illa-design/trigger"
import { Heading, Typography } from "@illa-design/typography"
import {
  applyCloseButton,
  applyTitleColor,
  applyTypographyContainer,
} from "./style"
import {
  ConfigProviderContext,
  ConfigProviderProps,
  def,
} from "@illa-design/config-provider"
import { Link } from "@illa-design/link"

export const Popover: FC<PopoverProps> = (props) => {
  const {
    title,
    content,
    colorScheme = "white",
    popupVisible,
    onVisibleChange,
    trigger = "click",
    hasCloseIcon = true,
    // must be false
    closeOnClick = false,
    defaultPopupVisible,
    ...otherProps
  } = props

  const configProviderProps = useContext<ConfigProviderProps>(
    ConfigProviderContext,
  )

  const locale = configProviderProps?.locale?.popover ?? def.popover

  const [popoverVisible, setPopoverVisible] = useState(
    defaultPopupVisible ?? false,
  )

  return (
    <Trigger
      colorScheme={colorScheme}
      trigger={trigger}
      popupVisible={popupVisible != undefined ? popupVisible : popoverVisible}
      closeOnClick={closeOnClick}
      withoutPadding
      onVisibleChange={(visible) => {
        if (onVisibleChange != undefined) {
          onVisibleChange(visible)
        }
        if (popupVisible == undefined) {
          setPopoverVisible(visible)
        }
      }}
      content={
        <div css={applyTypographyContainer}>
          <Typography>
            {title && (
              <>
                <Heading
                  css={applyTitleColor(colorScheme)}
                  colorScheme={colorScheme == "white" ? "gray" : "white"}
                  title={title}
                  ellipsis={false}
                  level="h6"
                >
                  {title}
                </Heading>
                <div style={{ height: "4px" }} />
              </>
            )}
            {content}
          </Typography>
          {hasCloseIcon && (
            <Link
              colorScheme={colorScheme == "white" ? "blue" : "white"}
              css={applyCloseButton}
              onClick={() => {
                if (popupVisible == undefined) {
                  setPopoverVisible(false)
                }
                if (onVisibleChange != undefined) {
                  onVisibleChange(false)
                }
              }}
            >
              {locale["close"]}
            </Link>
          )}
        </div>
      }
      {...otherProps}
    >
      {props.children}
    </Trigger>
  )
}

Popover.displayName = "Popover"
