import { css, SerializedStyles } from "@emotion/react"
import { BoxProps } from "./interface"
import { omit } from "@illa-design/system"

export function applyBoxStyle(props: BoxProps): SerializedStyles {
  return css`
    width: ${props.w};
    opacity: ${props.opacity};
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
    border-top: ${props.bt};
    border-bottom: ${props.bb};
    border-left: ${props.bl};
    border-right: ${props.br};
    border-radius: ${props.bdRadius};
    border: ${props.bd};
    background-color: ${props.bgColor};
    border-color: ${props.bdColor};
    color: ${props.c};
    position: ${props.pos};
    top: ${props.t};
    left: ${props.l};
    bottom: ${props.b};
    right: ${props.r};
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
    order: ${props.order};
    font-size: ${props.fs};
    font-family: ${props.ff};
    font-weight: ${props.fw};
    ${props._css};
  `
}
