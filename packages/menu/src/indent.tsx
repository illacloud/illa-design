import { IndentProps } from "./interface"
import { applyIndentCss } from "./style"

export const Indent = function (props: IndentProps) {
  const { level = 0, levelIndent = 28 } = props

  const indentNodes = Array.from({ length: level - 1 }, (_, idx) => {
    return <span key={idx} css={applyIndentCss(levelIndent)} />
  })

  return <>{[...indentNodes]}</>
}
