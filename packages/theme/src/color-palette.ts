import Color from "color"
import { globalColor, hasGlobalColor, illaPrefix } from "./global-color"
import chroma from "chroma-js"

const formats = ["hex", "rgb", "hsl"]

function getFormat(format: string) {
  if (!format || formats.indexOf(format) < 0) {
    return "hex"
  }
  return format
}

export const getColorString = (
  color: {
    [x: string]: any
  },
  format: string,
  alpha?: number,
) => {
  const innerFormat = getFormat(format)

  if (innerFormat === "hex") {
    return color[innerFormat]()
  }
  return color[innerFormat]().alpha(alpha).round().string()
}

export function colorPalette(
  originColor: string,
  i: number,
  format: "hex" | "rgb" | "hsl" = "hex",
) {
  const color = Color(originColor)

  const alpha = color.alpha()
  const h = color.hue()
  const s = color.saturationv()
  const v = color.value()

  const hueStep = 2
  const maxSaturationStep = 100
  const minSaturationStep = 9

  const maxValue = 100
  const minValue = 30

  function getNewHue(isLight: boolean, i: number) {
    let hue
    if (h >= 60 && h <= 240) {
      hue = isLight ? h - hueStep * i : h + hueStep * i
    } else {
      hue = isLight ? h + hueStep * i : h - hueStep * i
    }
    if (hue < 0) {
      hue += 360
    } else if (hue >= 360) {
      hue -= 360
    }
    return Math.round(hue)
  }

  function getNewSaturation(isLight: boolean, i: number) {
    let newSaturation

    if (isLight) {
      newSaturation =
        s <= minSaturationStep ? s : s - ((s - minSaturationStep) / 5) * i
    } else {
      newSaturation = s + ((maxSaturationStep - s) / 4) * i
    }
    return newSaturation
  }

  function getNewValue(isLight: boolean, i: number) {
    return isLight
      ? v + ((maxValue - v) / 5) * i
      : v <= minValue
      ? v
      : v - ((v - minValue) / 4) * i
  }

  const isLight = i < 6
  const index = isLight ? 6 - i : i - 6

  const retColor =
    i === 6
      ? color
      : Color({
          h: getNewHue(isLight, index),
          s: getNewSaturation(isLight, index),
          v: getNewValue(isLight, index),
        })

  return getColorString(retColor, format, alpha)
}

const transRule: Record<string, number> = {
  "n-01": 9,
  "01": 8,
  "02": 7,
  "03": 6,
  "04": 5,
  "05": 4,
  "06": 3,
  "07": 2,
  "08": 1,
}

export const getColor = (color: string, step: string) => {
  let colorStyle
  if (color === "transparent") {
    return "#00000000"
  }
  if (!hasGlobalColor(`--${illaPrefix}-${color}-${step}`)) {
    const formatStep = transRule[step]
    let formatNum = formatStep ? formatStep : 6
    try {
      colorStyle = colorPalette(color, formatNum, "hsl")
    } catch (e) {
      colorStyle = "#00000000"
    }
  } else {
    colorStyle = globalColor(`--${illaPrefix}-${color}-${step}`)
  }
  return colorStyle
}

export const getColorShadow = (color: string, step: string): string => {
  return `0 0 8px 0
        ${chroma(getColor(color, step)).alpha(0.15).hex()}`
}

export const getSpecialThemeColor = (color: string) => {
  if (color === "white") {
    return getColor("white", "01")
  } else if (
    color === "blackAlpha" ||
    color === "gray" ||
    color === "grayBlue"
  ) {
    return getColor(color, "02")
  } else {
    return getColor(color, "03")
  }
}
