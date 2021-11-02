import { CSSProperties, FC } from "react"
import { ColorScheme, TagProps } from "./interface"
import { IllaColor } from "@illa-design/theme"

export const Tag: FC<TagProps> = ((props, ref) => {

  let sty = {
    display: "inline-flex",
    alignItems: "center",
  } as CSSProperties

  sty = applyVariant(sty, props)

  sty = applySize(sty, props)

  return props.visible ?? true ? <div className={props.className} style={props.style}>
    <div ref={ref} style={sty}>
      <div>{props.children}</div>
      {props.closable ?? false ? <div></div> : null}
    </div>
  </div> : null
})

function applyVariant(sty: CSSProperties, props: TagProps): CSSProperties {
  const newSty = { ...sty }
  switch (props.variant) {
    default:
    case "outline": {
      newSty.borderRadius = "1px"
      newSty.border = `solid 1px ${switchColor(props.colorScheme)}`
      newSty.color = `${switchColor(props.colorScheme)}`
      break
    }
    case "fill": {
      newSty.backgroundColor = `${switchColor(props.colorScheme)}`
      newSty.borderRadius = "1px"
      newSty.color = `white`
      break
    }
    case "light": {
      newSty.backgroundColor = `${switchColor(props.colorScheme)}`
      newSty.borderRadius = "1px"
      newSty.color = `white`
      break
    }
  }
  return newSty
}

function applySize(sty: CSSProperties, props: TagProps): CSSProperties {
  const newSty = {
    fontSize: "12px",
    ...sty,
  }
  switch (props.size) {
    case "large": {
      newSty.padding = "5px 8px"
      break
    }
    default:
    case "middle": {
      newSty.padding = "3px 8px"
      break
    }
    case "small": {
      newSty.padding = "1px 8px"
      break
    }
  }
  return newSty
}

function switchColor(type?: ColorScheme): string {
  if (type === undefined) {
    type = "gray"
  }
  switch (type) {
    case "white": {
      return IllaColor.illa_white
    }
    case "black": {
      return IllaColor.illa_gray_01
    }
    case "gray": {
      return IllaColor.illa_gray_02
    }
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
      return type
    }
  }
}