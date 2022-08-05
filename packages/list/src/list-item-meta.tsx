import { forwardRef } from "react"
import { ListItemMetaProps } from "./interface"
import {
  applyItemMetaAvatar,
  applyItemMetaContainer,
  applyListItemMetaTitleStyle,
  applyTypoStyle,
} from "./style"
import { Avatar } from "@illa-design/avatar"
import { Paragraph, Text, Typography } from "@illa-design/typography"
import { globalColor, illaPrefix } from "@illa-design/theme"

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
        <Typography css={applyTypoStyle}>
          {title && typeof title === "string" ? (
            <Text colorScheme="gray" bold>
              {title}
            </Text>
          ) : (
            <div css={applyListItemMetaTitleStyle}>{title}</div>
          )}
          {title && description && <div style={{ height: "4px" }} />}
          {description && (
            <Paragraph
              colorScheme={
                title == undefined
                  ? globalColor(`--${illaPrefix}-grayBlue-02`)
                  : globalColor(`--${illaPrefix}-grayBlue-04`)
              }
            >
              {description}
            </Paragraph>
          )}
        </Typography>
      </div>
    )
  },
)

ListItemMeta.displayName = "ListItemMeta"
