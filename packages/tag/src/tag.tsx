import { CSSProperties, FC } from "react"
import { ColorScheme, TagProps } from "./interface"
import "../style/tag.module.scss"

export const Tag: FC<TagProps> = ((props) => {

  const sty = {
    backgroundColor: switchColor(props.colorScheme),
  } as CSSProperties

  return props.visible ?? true ? <div className={props.className} style={props.style}>
    <div className={`tag-text-${props.size}`} style={sty}>
      <div>{props.children}</div>
      {props.closable ?? false ? <div>

      </div> : null}
    </div>
  </div> : null
})

function switchColor(type?: ColorScheme): string {
  let finallyColor: ColorScheme
  if (type === undefined) {
    type = "gray"
  }
  switch (type) {
    case "white":
    case "black":
    case "gray":
    case "red":
    case "orange":
    case "yellow":
    case "green":
    case "teal":
    case "blue":
    case "cyan":
    case "purple":
    case "pink":
    default: {
      finallyColor = type
      break
    }
  }
  return finallyColor
}