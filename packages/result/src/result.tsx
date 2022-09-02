import { forwardRef } from "react"
import { ResultProps } from "./interface"
import {
  CloseIcon,
  InfoIcon,
  Result403Icon,
  Result404Icon,
  Result500Icon,
  SuccessIcon,
  WarningIcon,
} from "@illa-design/icon"
import {
  applyIconContainer,
  applyWrapStyle,
  extraContainerStyle,
  subTitleCss,
  titleCss,
} from "./style"
import { applyBoxStyle, deleteCssProps } from "@illa-design/theme"

export const Result = forwardRef<HTMLDivElement, ResultProps>((props, ref) => {
  const {
    extra,
    icon,
    status = "info",
    title = "default title",
    subTitle,
    paddingVertical = "40px",
    ...rest
  } = props

  let defaultIcon
  switch (status) {
    case "success":
      defaultIcon = <SuccessIcon />
      break
    case "error":
      defaultIcon = <CloseIcon />
      break
    case "info":
      defaultIcon = <InfoIcon />
      break
    case "warning":
      defaultIcon = <WarningIcon />
      break
    case "403":
      defaultIcon = <Result403Icon />
      break
    case "404":
      defaultIcon = <Result404Icon />
      break
    case "500":
      defaultIcon = <Result500Icon />
      break
  }

  return (
    <div
      ref={ref}
      css={[applyWrapStyle(paddingVertical), applyBoxStyle(props)]}
      {...deleteCssProps(rest)}
    >
      <div css={applyIconContainer(status)}>{icon || defaultIcon}</div>
      {title && <div css={titleCss}>{title}</div>}
      {subTitle && <div css={subTitleCss}>{subTitle}</div>}
      {extra && <div css={extraContainerStyle}>{extra}</div>}
    </div>
  )
})

Result.displayName = "Result"
