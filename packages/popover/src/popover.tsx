/** @jsxImportSource @emotion/react */
import { FC } from "react"
import { PopoverProps } from "./interface"
import { Trigger } from "@illa-design/trigger"
import { Heading, Typography } from "@illa-design/typography"
import { applyTitleColor, applyTypographyContainer } from "./style"

export const Popover: FC<PopoverProps> = ((props) => {

  const {
    title,
    content,
    colorScheme = "white",
    ...otherProps
  } = props

  return <Trigger {...otherProps} colorScheme={colorScheme} title={title} content={
    <Typography css={applyTypographyContainer}>
      <Heading css={applyTitleColor(colorScheme)} title={title} ellipsis={false} level="h6">{title}</Heading>
      {content}
    </Typography>
  }>
    {props.children}
  </Trigger>
})
