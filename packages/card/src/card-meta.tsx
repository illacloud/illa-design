import { forwardRef } from "react"
import { CardMetaProps } from "./interface"
import {
  actionContainer,
  applyCardMetaBody,
  applyCardMetaDescription,
  applyCardMetaFooter,
  applyCardMetaTitle,
  applyCardMetaUserContainer,
  applyMetaContainer,
  avatarLayout,
  nicknameStyle,
} from "./style"
import { applyBoxStyle, deleteCssProps } from "@illa-design/theme"
import { Space } from "@illa-design/space"

export const CardMeta = forwardRef<HTMLDivElement, CardMetaProps>(
  (props, ref) => {
    const {
      title,
      size = "medium",
      description,
      actionList,
      avatar,
      nickname,
      cover,
      bordered = true,
      hoverable,
      ...restProps
    } = props

    return (
      <div
        ref={ref}
        css={[applyMetaContainer(hoverable), applyBoxStyle(props)]}
        {...deleteCssProps(restProps)}
      >
        {cover}
        <div css={[applyCardMetaBody(size, bordered, cover)]}>
          {title || description ? (
            <>
              {title && <div css={applyCardMetaTitle}>{title}</div>}
              {description && (
                <div css={applyCardMetaDescription}>{description}</div>
              )}
            </>
          ) : null}
          <div css={applyCardMetaFooter}>
            <div css={applyCardMetaUserContainer}>
              {avatar && <div css={avatarLayout}>{avatar}</div>}
              {nickname && <span css={nicknameStyle}>{nickname}</span>}
            </div>
            <div css={actionContainer}>
              <Space size="24px">{actionList}</Space>
            </div>
          </div>
        </div>
      </div>
    )
  },
)

CardMeta.displayName = "CardMeta"
