import { forwardRef } from "react"
import { PageHeaderProps } from "./interface"
import {
  backIconCss,
  headerCss,
  headerLeftCss,
  separateCss,
  subTitleCss,
  titleCss,
} from "./style"
import { Breadcrumb } from "@illa-design/breadcrumb"
import { PreIcon } from "@illa-design/icon"
import { applyBoxStyle, deleteCssProps } from "@illa-design/theme"

export const PageHeader = forwardRef<HTMLDivElement, PageHeaderProps>(
  (props, ref) => {
    const {
      title,
      subTitle,
      breadcrumb,
      backIcon,
      extra,
      onBack,
      ...otherProps
    } = props

    const backEle = backIcon === true ? <PreIcon /> : backIcon

    return (
      <div ref={ref} css={applyBoxStyle(props)} {...deleteCssProps(otherProps)}>
        {breadcrumb && <Breadcrumb {...breadcrumb} />}
        <div css={headerCss}>
          <div css={headerLeftCss}>
            {backIcon && (
              <div css={backIconCss} onClick={onBack}>
                {backEle}
              </div>
            )}
            {title && <div css={titleCss}>{title}</div>}
            {subTitle && (
              <>
                <span css={separateCss}></span>
                <div css={subTitleCss}>{subTitle}</div>
              </>
            )}
          </div>
          {extra}
        </div>
      </div>
    )
  },
)

PageHeader.displayName = "PageHeader"
