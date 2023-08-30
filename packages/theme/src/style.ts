import { css, SerializedStyles } from "@emotion/react"
import { BoxProps } from "./interface"
import { omit } from "@illa-design/system"

export function applyBoxStyle(props: BoxProps): SerializedStyles {
  return css`
    //SizeStyledProps
    width: ${props.w};
    min-width: ${props.minW};
    max-width: ${props.maxW};
    height: ${props.h};
    min-height: ${props.minH};
    max-height: ${props.maxH};
    padding-top: ${props.pt};
    padding-bottom: ${props.pb};
    padding-left: ${props.pl};
    padding-right: ${props.pr};
    padding: ${props.pd};
    margin-left: ${props.ml};
    margin-right: ${props.mr};
    margin-top: ${props.mt};
    margin-bottom: ${props.mb};
    margin: ${props.mg};
    //ShapeStyledProps
    border-top: ${props.bt};
    border-bottom: ${props.bb};
    border-left: ${props.bl};
    border-right: ${props.br};
    border-radius: ${props.bdRadius};
    border: ${props.bd};
    //ColorStyledProps
    background: ${props.bg};
    background-color: ${props.bgColor};
    border-color: ${props.bdColor};
    color: ${props.c};
    opacity: ${props.opac};
    //PositionStyledProps
    position: ${props.pos};
    top: ${props.posT};
    left: ${props.posL};
    bottom: ${props.posB};
    right: ${props.posR};
    z-index: ${props.z};
    overflow: ${props.ov};
    overflow-x: ${props.ovX};
    overflow-y: ${props.ovY};
    // FlexStyledProps
    display: ${props.disp};
    align-items: ${props.alignItems};
    align-content: ${props.alignContent};
    justify-content: ${props.justifyContent};
    justify-items: ${props.justifyItems};
    flex-wrap: ${props.flexWrap};
    flex-direction: ${props.flexDirection};
    flex: ${props.flex};
    flex-grow: ${props.flexGrow};
    flex-shrink: ${props.flexShrink};
    flex-basis: ${props.flexBasis};
    justify-self: ${props.justifySelf};
    align-self: ${props.alignSelf};
    order: ${props.o};
    //FontStyledProps
    font-size: ${props.fs};
    font-family: ${props.ff};
    font-weight: ${props.fw};
    visibility: ${props.v};
    // UserProps
    cursor: ${props.cur};
    ${props._css};
    // DisplayStyledProps
    left: ${props.l};
    top: ${props.t};
    right: ${props.r};
    bottom: ${props.b};
  `
}

export function deleteCssProps(obj: object): object {
  return omit(obj, [
    //SizeStyledProps
    "w",
    "minW",
    "maxW",
    "h",
    "minH",
    "maxH",
    "pt",
    "pb",
    "pl",
    "pr",
    "pd",
    "ml",
    "mr",
    "mt",
    "mb",
    "mg",
    //ShapeStyledProps
    "bt",
    "bb",
    "bl",
    "br",
    "bdRadius",
    "bd",
    //ColorStyledProps
    "bg",
    "bgColor",
    "bdColor",
    "c",
    "opac",
    //PositionStyledProps
    "pos",
    "posT",
    "posL",
    "posB",
    "posR",
    "z",
    "ov",
    "ovX",
    "ovY",
    "v",
    // FlexStyledProps
    "disp",
    "alignItems",
    "alignContent",
    "justifyContent",
    "justifyItems",
    "flexWrap",
    "flexDirection",
    "flex",
    "flexGrow",
    "flexShrink",
    "flexBasis",
    "justifySelf",
    "alignSelf",
    "o",
    //FontStyledProps
    "fs",
    "ff",
    "fw",
    //UserProps
    "cur",
    "_css",
    //DisplayStyledProps
    "l",
    "t",
    "r",
    "b",
  ])
}
