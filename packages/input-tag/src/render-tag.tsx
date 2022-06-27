import { forwardRef } from "react"
import { motion } from "framer-motion"
import { Tag } from "@illa-design/tag"
import { RenderTagsProps } from "./interface"
import { tagStyle } from "./style"
import { css } from "@emotion/react"

export const RenderTags = forwardRef<HTMLElement, RenderTagsProps>(
  (props, ref) => {
    const {
      style,
      className,
      value,
      size = "medium",
      disabled,
      readOnly,
      labelInValue,
      // events
      onRemove,
      valueChangeHandler,
      ...rest
    } = props

    return (
      <>
        {value?.map((item, index) => {
          const { value: itemValue, label } = item
          const closable = !readOnly && !disabled && item.closable !== false
          return (
            <motion.div
              css={css`
                display: inline-grid;
              `}
              initial="initial"
              animate={"show"}
              exit={"hidden"}
              key={index}
            >
              <Tag
                css={tagStyle}
                visible
                size={size}
                closable={closable}
                onClose={(event) => {
                  onRemove?.(item, index, event)
                  valueChangeHandler?.([
                    ...value?.slice(0, index),
                    ...value?.slice(index + 1),
                  ])
                }}
              >
                <span>
                  {typeof label === "string"
                    ? label.replace(/\s/g, "\u00A0")
                    : label}
                </span>
              </Tag>
            </motion.div>
          )
        })}
      </>
    )
  },
)

RenderTags.displayName = "RenderTags"
