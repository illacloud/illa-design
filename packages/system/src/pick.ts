// pick item from object
export default function pick<T extends object, K extends keyof T>(
  obj: T,
  keys: Array<K | string>,
): Pick<T, K> {
  const clone = {} as Pick<T, K>
  keys.forEach((key) => {
    const k = key as K
    if ((key as K) in obj) {
      clone[k] = obj[k]
    }
  })
  return clone
}

export function pickDataAttributes(
  obj: Record<string, unknown>,
): Record<string, unknown> {
  const clone = {} as Record<string, unknown>

  obj &&
    Object.keys(obj).forEach((key) => {
      const k = String(key)
      if (k.indexOf("data-") === 0) {
        clone[k] = obj[k]
      }
      if (k.indexOf("aria-") === 0) {
        clone[k] = obj[k]
      }
    })

  return clone
}
