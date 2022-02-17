/** @jsxImportSource @emotion/react */
import * as React from "react"
import { forwardRef, ChangeEvent, useContext } from "react"
import { SelectProps } from "./interface"
import { applyMergeCss, applyRadioSize, applySelectStyle } from "./style"
import { omit, useMergeValue } from "@illa-design/system"
import { Trigger } from "@illa-design/trigger"
import { List } from "@illa-design/list"
import { SelectView } from "./select-view"
import { css } from "@emotion/react"

export const Select = forwardRef<HTMLElement, SelectProps>((props, ref) => {
  const {
    mode,
    children,
    disabled,
    value,
    defaultValue,
    onChange,
    placeholder,
    ...otherProps
  } = props

  const [currentValue, setCurrentValue] = useMergeValue(undefined, {
    value: value,
    defaultValue: defaultValue,
  })

  const onChangeValue = (event: ChangeEvent<HTMLInputElement>): void => {
    event.persist()
  }

  const renderOption = () => {
    return (
      <List
        data={children}
        render={(data, index) => {
          console.log(data, 'data')
          return <span>{data}</span>
        }}
        renderKey={(data, index) => {
          return index.toString()
        }}
        hoverable
        height={200}
      />
    )
  }
  console.log(children, "children")

  return (
    <Trigger
      trigger="click"
      content={renderOption()}
      showArrow={false}
      colorScheme="white"
      position="tl"
    >
      <SelectView />
    </Trigger>
  )
})

Select.displayName = "Select"
