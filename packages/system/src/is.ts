import { Dayjs } from "dayjs"
import * as _ from "lodash"

// thx arco
export function isDayjs(time: any): time is Dayjs {
  // dayjs.isDayjs 在实际应用场景，比如多个版本的 dayjs 会失效
  return (
    _.isObject(time) &&
    "$y" in time &&
    "$M" in time &&
    "$D" in time &&
    "$d" in time &&
    "$H" in time &&
    "$m" in time &&
    "$s" in time
  )
}
