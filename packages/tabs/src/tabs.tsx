/** @jsxImportSource @emotion/react */
import React, { forwardRef, ReactElement } from "react"
import { TabsProps } from "./interface"

export function isObject(obj: any): obj is { [key: string]: any } {
  return Object.prototype.toString.call(obj) === "[object Object]"
}

export const Tabs = forwardRef<HTMLDivElement, TabsProps>((props, ref) => {
  const { placeholder } = props
  return <div placeholder={placeholder}>Tabs</div>
})
