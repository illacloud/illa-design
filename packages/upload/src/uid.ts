const now = +new Date()
let index = 0

export default function getUID() {
  return `${String(now)}-${++index}`
}
