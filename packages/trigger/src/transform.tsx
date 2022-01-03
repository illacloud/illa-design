import { Variants } from "framer-motion"

export function getAnimation(originX: string, originY: string): Variants {
  return {
    initial: {
      scale: 0,
      opacity: 0,
      originX: originX,
      originY: originY,
    },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        opacity: { duration: 0.2, easings: "easeInOut" },
        scale: { duration: 0.2, easings: "easeInOut" },
      },
    },
    exit: {
      scale: 0,
      opacity: 0,
      transition: {
        opacity: { duration: 0.2, easings: "easeInOut" },
        scale: { duration: 0.2, easings: "easeInOut" },
      },
    },
  } as Variants
}