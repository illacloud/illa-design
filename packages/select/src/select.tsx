/** @jsxImportSource @emotion/react */
import * as React from "react"
import { forwardRef, ChangeEvent, useContext, useState } from "react"
import { SelectProps } from "./interface"
import { applyMergeCss, applyRadioSize, applySelectStyle } from "./style"
import { omit, useMergeValue } from "@illa-design/system"
import { Trigger } from "@illa-design/trigger"
import { List } from "@illa-design/list"
import { Empty } from "@illa-design/empty"
import { SelectView } from "./select-view"
import { css } from "@emotion/react"

export const Select = forwardRef<HTMLElement, SelectProps>((props, ref) => {
  const {
    mode,
    children,
    disabled,
    value,
    defaultValue,
    placeholder,
    // event
    onChange,
    onVisibleChange,
    ...otherProps
  } = props

  const isMultiMode = mode === "multiple" || mode === "tags"

  const [currentVisible, setCurrentVisible] = useState<boolean>()

  const [currentValue, setCurrentValue] = useMergeValue(undefined, {
    value: value,
    defaultValue: defaultValue,
  })

  const onChangeValue = (event: ChangeEvent<HTMLInputElement>): void => {
    event.persist()
  }

  const renderOption = () => {
    const elementList = children ? (
      <List
        css={css`
          min-width: 200px !important;
        `}
        size="small"
        data={children as any}
        render={(data, index) => {
          console.log(data, "data")
          return data
        }}
        renderKey={(data, index) => {
          return index.toString()
        }}
        hoverable
        height={200}
      />
    ) : null

    return <div>{elementList || <Empty />}</div>
  }
  console.log(children, "children")

  return (
    <Trigger
      trigger="click"
      content={renderOption()}
      showArrow={false}
      colorScheme="white"
      position="tl"
      disabled={disabled}
      withoutPadding
      popupVisible={currentVisible}
      onVisibleChange={(value: boolean) => {
        if (currentVisible !== value) {
          setCurrentVisible(value)
          onVisibleChange?.(value)
        }
      }}
    >
      <SelectView
        {...props}
        popupVisible={currentVisible}
        isMultiMode={isMultiMode}
      />
    </Trigger>
  )
})

Select.displayName = "Select"
