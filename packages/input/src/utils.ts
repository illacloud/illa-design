//
export function formatForRule(value: string, maxLength?: number) {
  const str = typeof value !== "string" ? String(value) : value || ""
  if (maxLength) {
    return str.slice(0, maxLength)
  }
  return str
}
