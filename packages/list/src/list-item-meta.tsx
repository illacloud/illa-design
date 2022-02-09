/** @jsxImportSource @emotion/react */
import { forwardRef } from "react"
import { ListItemMetaProps } from "./interface"
import {
  applyItemMetaAvatar,
  applyItemMetaContainer,
  applyItemMetaTitle,
} from "./style"
import { Avatar } from "@illa-design/avatar"
import { Paragraph, Text, Typography } from "@illa-design/typography"

export const ListItemMeta = forwardRef<HTMLDivElement, ListItemMetaProps>(
  (props, ref) => {
    const { title, avatar, description, ...otherProps } = props
    return (
      <div css={applyItemMetaContainer} ref={ref} {...otherProps}>
        {avatar && (
          <Avatar
            css={applyItemMetaAvatar}
            size="medium"
            shape="square"
            src={avatar}
          />
        )}
        <Typography>
          {title && (
            <Text fontSize="14px" css={applyItemMetaTitle}>
              {title}
            </Text>
          )}
          {description && <Paragraph fontSize="14px">{description}</Paragraph>}
        </Typography>
      </div>
    )
  },
)

ListItemMeta.displayName = "ListItemMeta"
