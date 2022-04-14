import { forwardRef } from "react"
import { PageHeaderProps } from "./interface"
import {
  headerCss,
  headerLeftCss,
  backIconCss,
  titleCss,
  separateCss,
  subTitleCss,
  extraCss,
} from "./style"
import { Breadcrumb } from "../../breadcrumb"
import { PreIcon } from "@illa-design/icon"

export const PageHeader = forwardRef<HTMLDivElement, PageHeaderProps>(
  (props, ref) => {
    const {
      _css,
      title,
      subTitle,
      breadcrumb,
      backIcon,
      extra,
      onBack,
      ...restprops
    } = props

    const backEle = backIcon === true ? <PreIcon /> : backIcon

    return (
      <div ref={ref} {...restprops} css={_css}>
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
          {extra && <div css={extraCss}>{extra}</div>}
        </div>
      </div>
    )
  },
)

PageHeader.displayName = "PageHeader"
