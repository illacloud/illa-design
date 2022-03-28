import { globalColor, illaPrefix } from "@illa-design/theme"
export * from "./style/steps"
export * from "./style/icon"
export * from "./style/content"
export * from "./style/description"
export * from "./style/title"
export * from "./style/wrapper"
export * from "./style/connector-node"

export const statusColor = {
  finish: {
    color: globalColor(`--${illaPrefix}-blue-03`),
    backgroundColor: globalColor(`--${illaPrefix}-blue-07`),
  },
  wait: {
    color: globalColor(`--${illaPrefix}-gray-04`),
    backgroundColor: globalColor(`--${illaPrefix}-gray-08`),
  },
  process: {
    color: globalColor(`--${illaPrefix}-white-01`),
    backgroundColor: globalColor(`--${illaPrefix}-blue-03`),
  },
  error: {
    color: globalColor(`--${illaPrefix}-red-03`),
    backgroundColor: globalColor(`--${illaPrefix}-red-07`),
  },
}
