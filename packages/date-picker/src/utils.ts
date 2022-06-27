export function initFormat(type: string, showTime: boolean) {
  let result
  switch (type) {
    case "day":
      result = showTime ? "YYYY-MM-DD HH:mm:ss" : "YYYY-MM-DD"
      break
    case "month":
      result = "YYYY-MM"
      break
    case "year":
      result = "YYYY"
      break
  }
  return result
}
