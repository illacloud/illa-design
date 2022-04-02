// https://github.com/LiikeJS/Liike/blob/master/src/ease.js
interface EasingByPower {
  (power: number): Easing
}

interface Easing {
  (t: number): number
}

interface EasingMethod {
  [index: string]: Easing
}

const easeInBy: EasingByPower = (power) => (t) => Math.pow(t, power)
const easeOutBy: EasingByPower = (power) => (t) =>
  1 - Math.abs(Math.pow(t - 1, power))
const easeInOutBy: EasingByPower = (power) => (t) =>
  t < 0.5 ? easeInBy(power)(t * 2) / 2 : easeOutBy(power)(t * 2 - 1) / 2 + 0.5

const linear: Easing = (t) => t
const quadIn = easeInBy(2)
const quadOut = easeOutBy(2)
const quadInOut = easeInOutBy(2)
const cubicIn = easeInBy(3)
const cubicOut = easeOutBy(3)
const cubicInOut = easeInOutBy(3)
const quartIn = easeInBy(4)
const quartOut = easeOutBy(4)
const quartInOut = easeInOutBy(4)
const quintIn = easeInBy(5)
const quintOut = easeOutBy(5)
const quintInOut = easeInOutBy(5)
const sineIn: Easing = (t) => 1 + Math.sin((Math.PI / 2) * t - Math.PI / 2)
const sineOut: Easing = (t) => Math.sin((Math.PI / 2) * t)
const sineInOut: Easing = (t) => (1 + Math.sin(Math.PI * t - Math.PI / 2)) / 2
const bounceOut: Easing = (t) => {
  const s = 7.5625
  const p = 2.75

  if (t < 1 / p) {
    return s * t * t
  }
  if (t < 2 / p) {
    t -= 1.5 / p
    return s * t * t + 0.75
  }
  if (t < 2.5 / p) {
    t -= 2.25 / p
    return s * t * t + 0.9375
  }
  t -= 2.625 / p
  return s * t * t + 0.984375
}
const bounceIn: Easing = (t) => 1 - bounceOut(1 - t)
const bounceInOut: Easing = (t) =>
  t < 0.5 ? bounceIn(t * 2) * 0.5 : bounceOut(t * 2 - 1) * 0.5 + 0.5

export const easingMethod: EasingMethod = {
  linear,

  quadIn,
  quadOut,
  quadInOut,

  cubicIn,
  cubicOut,
  cubicInOut,

  quartIn,
  quartOut,
  quartInOut,

  quintIn,
  quintOut,
  quintInOut,

  sineIn,
  sineOut,
  sineInOut,

  bounceIn,
  bounceOut,
  bounceInOut,
}
