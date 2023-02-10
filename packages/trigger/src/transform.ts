import { Variants } from "framer-motion"

export function getAnimation(
  originX: string,
  originY: string,
  showArrow: boolean,
  isHorizontal: boolean,
): Variants {
  let initialScaleX
  let initialScaleY

  if (showArrow) {
    initialScaleX = 0
    initialScaleY = 0
  } else {
    if (isHorizontal) {
      initialScaleX = 0.9
      initialScaleY = 1
    } else {
      initialScaleX = 1
      initialScaleY = 0.9
    }
  }

  return {
    initial: {
      scaleY: initialScaleY,
      scaleX: initialScaleX,
      opacity: 0,
      originX,
      originY,
    },
    animate: {
      scaleX: 1,
      scaleY: 1,
      opacity: 1,
      transition: {
        opacity: { duration: 0.15, ease: "easeInOut" },
        scaleX: { duration: 0.15, ease: "easeInOut" },
        scaleY: { duration: 0.15, ease: "easeInOut" },
      },
    },
    exit: {
      scaleY: initialScaleY,
      scaleX: initialScaleX,
      opacity: 0,
      transition: {
        duration: 0.2,
        opacity: { duration: 0.15, ease: "easeInOut" },
        scaleX: { duration: 0.15, ease: "easeInOut" },
        scaleY: { duration: 0.15, ease: "easeInOut" },
      },
    },
  } as Variants
}
