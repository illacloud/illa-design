export function padStart(string: string, length: number, char = " "): string {
  const s = String(string)
  if (!length) {
    return s
  }
  const newString = s.length < length ? `${char}${s}` : s
  return newString.length < length
    ? padStart(newString, length, char)
    : newString
}
