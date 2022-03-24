import { FC, MutableRefObject, useEffect, useRef } from "react"
import { AvatarProps } from "./interface"
import { applyMergeCss } from "./style"

function adjustFontScale(
  textRef: MutableRefObject<HTMLSpanElement | null>,
  avatarRef: MutableRefObject<HTMLDivElement | null>,
) {
  if (textRef.current != null && avatarRef.current != null) {
    const textWidth = textRef.current!!.clientWidth
    const size = avatarRef.current!!.offsetWidth
    const scale = size / (textWidth + 8)
    if (size && scale < 1) {
      textRef.current!!.style.transform = `scale(${scale})`
    } else {
      textRef.current!!.style.transform = `scale(1)`
    }
  }
}

export const TextAvatar: FC<AvatarProps> = (props) => {
  const currentColorScheme = props.colorScheme ?? "blue"
  const currentSize = props.size ?? "small"
  const currentShape = props.shape ?? "circle"
  const finalProps = {
    ...props,
    colorScheme: currentColorScheme,
    size: currentSize,
    shape: currentShape,
  } as AvatarProps

  const textRef = useRef<HTMLSpanElement | null>(null)
  const avatarRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    adjustFontScale(textRef, avatarRef)
  }, [finalProps.text, finalProps.size])

  return (
    <div ref={avatarRef} css={applyMergeCss(finalProps)}>
      <span ref={textRef}>{props.text}</span>
    </div>
  )
}
