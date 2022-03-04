/** @jsxImportSource @emotion/react */
import * as React from "react"
import { forwardRef, HTMLAttributes } from "react"
import { motion } from "framer-motion"
import { Tag } from "@illa-design/tag"
import { InputTagProps, ObjectValueType } from "./interface"
import { tagStyle } from "./style"
import { css } from "@emotion/react"

export interface RenderTagsProps extends HTMLAttributes<HTMLElement> {
  size?: InputTagProps["size"]
  value: ObjectValueType[]
  readOnly?: boolean
  disabled?: boolean
  labelInValue?: boolean
  onRemove?: InputTagProps["onRemove"]
  valueChangeHandler?: (value: ObjectValueType[]) => void
}

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

    const tagCloseHandler = (itemValue: ObjectValueType, index: number) => {
      onRemove?.(itemValue, index)
      valueChangeHandler?.([
        ...value?.slice(0, index),
        ...value?.slice(index + 1),
      ])
    }

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
                onClose={() => {
                  tagCloseHandler(item, index)
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
