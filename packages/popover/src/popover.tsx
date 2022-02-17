/** @jsxImportSource @emotion/react */
import { FC } from "react"
import { PopoverProps } from "./interface"
import { Trigger } from "@illa-design/trigger"
import { Heading, Typography } from "@illa-design/typography"
import { applyTitleColor, applyTypographyContainer } from "./style"

export const Popover: FC<PopoverProps> = (props) => {
  const {
    title,
    content,
    colorScheme = "white",
    trigger = "click",
    hasCloseIcon = true,
    closeOnClick = false,
    ...otherProps
  } = props

  return (
    <Trigger
      {...otherProps}
      colorScheme={colorScheme}
      trigger={trigger}
      hasCloseIcon={hasCloseIcon}
      content={
        <div css={applyTypographyContainer}>
          <Typography>
            {title && (
              <Heading
                css={applyTitleColor(colorScheme)}
                colorScheme={colorScheme == "white" ? "gray" : "white"}
                title={title}
                ellipsis={false}
                level="h6"
              >
                {title}
              </Heading>
            )}
            {content}
          </Typography>
        </div>
      }
    >
      {props.children}
    </Trigger>
  )
}

Popover.displayName = "Popover"
