import { def, Locale } from "@illa-design/config-provider"

export function getMonthString(
  month: number,
  locale: Record<string, string>,
): string {
  switch (month) {
    case 0:
      return locale["January"]
    case 1:
      return locale["February"]
    case 2:
      return locale["March"]
    case 3:
      return locale["April"]
    case 4:
      return locale["May"]
    case 5:
      return locale["June"]
    case 6:
      return locale["July"]
    case 7:
      return locale["August"]
    case 8:
      return locale["September"]
    case 9:
      return locale["October"]
    case 10:
      return locale["November"]
    case 11:
      return locale["December"]
    default:
      return ""
  }
}
