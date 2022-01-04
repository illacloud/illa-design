/** @jsxImportSource @emotion/react */
import { FC } from "react"
import { PopoverProps } from "./interface"
import { Trigger } from "@illa-design/trigger"
import { Heading, Typography } from "@illa-design/typography"
import { CloseIcon } from "@illa-design/icon"
import { applyCloseIcon } from "./style"

export const Popover: FC<PopoverProps> = ((props) => {

  const {
    size,
    hasCloseIcon,
    title,
    content,
    ...otherProps
  } = props

  return <Trigger {...otherProps} title={title} content={
    <Typography>
      <Heading title={title} ellipsis={false} level="h4">{title}</Heading>
      {content}
      <CloseIcon css={applyCloseIcon} size="8px" />
    </Typography>
  }>
    {props.children}
  </Trigger>
})
