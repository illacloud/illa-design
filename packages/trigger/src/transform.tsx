import { Variants } from "framer-motion"

export function getAnimation(originX: string, originY: string, closeDelay: number, openDelay: number): Variants {
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
        opacity: { delay: openDelay / 1000, duration: 0.2, easings: "easeInOut" },
        scale: { delay: openDelay / 1000, duration: 0.2, easings: "easeInOut" },
      },
    },
    exit: {
      scale: 0,
      opacity: 0,
      transition: {
        delay: 3,
        opacity: { delay: closeDelay / 1000, duration: 0.2, easings: "easeInOut" },
        scale: { delay: closeDelay / 1000, duration: 0.2, easings: "easeInOut" },
      },
    },
  }
}