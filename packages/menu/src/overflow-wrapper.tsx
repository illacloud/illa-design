import { useState, useContext, useEffect, useRef } from "react"
import { SubMenu } from "./sub-menu"
import { MenuContext } from "./menu-context"

export const OverflowWrapper = (props) => {
  const { children } = props
  const wrapperRef = useRef<HTMLDivElement>(null)

  const renderOverflowSubMenu = (childen, isPlaceholder: boolean) => {
    return (
      <SubMenu
        title={<span>...</span>}
        key={"overflow-sub-menu"}
        {...props}
        children={children}
      />
    )
  }

  return <div ref={wrapperRef}></div>
}
