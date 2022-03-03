/** @jsxImportSource @emotion/react */
import * as React from "react"
import {
  forwardRef,
  ElementRef,
  useState,
  useMemo,
  useRef,
  HTMLAttributes,
} from "react"
import { motion } from "framer-motion"
import { Tag } from "@illa-design/tag"
import { InputTagProps } from "./interface"
import { applyInputContainer, applySuffixCls } from "./style"
import { formatValue, ObjectValueType } from "./utils"
import { css } from "@emotion/react"

export interface RenderTagsProps<T> extends HTMLAttributes<HTMLElement> {
  size?: InputTagProps["size"]
  value: ObjectValueType[]
  readOnly?: boolean
  disabled?: boolean
  labelInValue?: boolean
  onRemove?: InputTagProps["onRemove"]
  valueChangeHandler?: (value: ObjectValueType[]) => void
}

export const RenderTags = forwardRef<HTMLElement, RenderTagsProps<any>>(
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
                css={css`
                  box-sizing: border-box;
                  overflow: hidden;
                  white-space: nowrap;
                  text-overflow: ellipsis;
                `}
                visible
                size={size}
                closable={closable}
                onClose={() => {
                  tagCloseHandler(item, index)
                }}
              >
                <span
                  css={css`
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                  `}
                >
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
