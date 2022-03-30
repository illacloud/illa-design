import { globalColor, illaPrefix } from "@illa-design/theme"
import { StepType, LabelPlacement, StepStatus } from "./interface"
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
    dotColor: globalColor(`--${illaPrefix}-blue-03`),
  },
  wait: {
    color: globalColor(`--${illaPrefix}-gray-04`),
    backgroundColor: globalColor(`--${illaPrefix}-gray-08`),
    dotColor: globalColor(`--${illaPrefix}-gray-04`),
  },
  process: {
    color: globalColor(`--${illaPrefix}-white-01`),
    backgroundColor: globalColor(`--${illaPrefix}-blue-03`),
    dotColor: globalColor(`--${illaPrefix}-blue-03`),
  },
  error: {
    color: globalColor(`--${illaPrefix}-red-03`),
    backgroundColor: globalColor(`--${illaPrefix}-red-07`),
    dotColor: globalColor(`--${illaPrefix}-red-03`),
  },
}

export function isVerticalLabel({
  type,
  direction,
  labelPlacement,
}: {
  type: StepType
  direction: LabelPlacement
  labelPlacement: LabelPlacement
}) {
  if (labelPlacement === "vertical") {
    return true
  }
  // if type === dot, contents should be vertical
  if (type === "dot" && direction === "horizontal") {
    return true
  }

  return false
}

export function getConnectorColor({
  nextStepError,
  status,
}: {
  nextStepError: boolean
  status: StepStatus
}) {
  const defaultColor = globalColor(`--${illaPrefix}-gray-08`)
  let color = defaultColor

  if (nextStepError) {
    color = statusColor.error.color
  } else if (status === "finish") {
    color = statusColor.finish.color
  }

  return color
}
