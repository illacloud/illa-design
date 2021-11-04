import { CSSProperties, forwardRef, useState } from "react"
import { ColorScheme, TagProps } from "./interface"
import "../style/tag.module.scss"

const colors: ColorScheme[] = [
  "white", "blackAlpha", "black", "gray", "red", "orange", "yellow", "green", "teal", "blue", "cyan", "purple",
]

export const Tag = forwardRef<HTMLDivElement, TagProps>((props, ref) => {
  const [visible, setVisible] = useState(props.visible ?? true)
  let variant: string
  if (colors.includes(props.colorScheme ?? "gray")) {
    variant = `tag-${props.variant ?? "light"}-${props.colorScheme ?? "gray"}`
  } else {
    let customSty = {} as CSSProperties
    switch (props.variant) {
      case "light":
      case "fill": {
        customSty.borderRadius = "1px"
        customSty.color = `var(--illa-white-w01)`
        customSty.backgroundColor = props.colorScheme
        break
      }
      case "outline": {
        customSty.borderRadius = "1px"
        customSty.border = `solid 1px ${props.colorScheme}`
        customSty.color = props.colorScheme
        break
      }
    }
    variant = `tag-${props.variant ?? "light"}-normal`
  }
  const size = `tag-size-${props.size ?? "small"}`

  return visible ? <div ref={ref} className={props.className} style={props.style}>
    <div className={[variant, size, "tag-container"].join(" ")}>
      <div>{props.children}</div>
      {props.closable ?? false ? <div onClick={() => {
        if (props.onClose == undefined) {
          setVisible(false)
        } else {
          props.onClose()
        }
      }} /> : null}
    </div>
  </div> : null
})