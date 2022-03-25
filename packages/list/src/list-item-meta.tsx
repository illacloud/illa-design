import { forwardRef } from "react"
import { ListItemMetaProps } from "./interface"
import {
  applyItemMetaAvatar,
  applyItemMetaContainer,
  applyItemMetaTitle,
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
          {title && (
            <Text fontSize="14px" colorScheme="gray" bold>
              {title}
            </Text>
          )}
          {title && description && <div style={{ height: "4px" }} />}
          {description && (
            <Paragraph
              colorScheme={
                title == undefined
                  ? globalColor(`--${illaPrefix}-gray-02`)
                  : globalColor(`--${illaPrefix}-gray-04`)
              }
              fontSize="14px"
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
