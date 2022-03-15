/** @jsxImportSource @emotion/react */
import * as React from "react"
import { forwardRef } from "react"
import { ResultProps } from "./interface"
import { Icon, SuccessIcon, CloseIcon, WarningIcon } from "@illa-design/icon"
import { IoInformation } from "react-icons/io5"
import { wrapCss, titleCss, subTitleCss, applyIconContainer } from "./styles"

export const Result = forwardRef<HTMLDivElement, ResultProps>((props, ref) => {
  const {
    extra,
    icon,
    status = "info",
    title = "default title",
    subTitle,
    ...rest
  } = props

  let iconArr = ["success", "error", "info", "warning"]

  let defaultImg = <div>img</div>

  let defaultIcon
  switch (status) {
    case "success":
      defaultIcon = <SuccessIcon />
      break
    case "error":
      defaultIcon = <CloseIcon />
      break
    case "info":
      defaultIcon = (
        <Icon>
          <IoInformation />
        </Icon>
      )
      break
    case "warning":
      defaultIcon = <WarningIcon />
      break
  }

  return (
    <div {...rest} ref={ref} css={wrapCss}>
      {iconArr.includes(status) ? (
        <div css={applyIconContainer(status)}>{icon || defaultIcon}</div>
      ) : (
        { defaultImg }
      )}
      {title && <div css={titleCss}>{title}</div>}
      {subTitle && <div css={subTitleCss}>{subTitle}</div>}
      {extra && <div>{extra}</div>}
    </div>
  )
})

Result.displayName = "Result"
