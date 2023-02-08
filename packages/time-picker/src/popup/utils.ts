import { getColumnsFromFormat } from "../utils"

export const isUse12Hours = (format: string, use12Hours?: boolean) => {
  return use12Hours || getColumnsFromFormat(format).use12Hours
}

export const getHoursShowList = (step: number = 1, use12Hours?: boolean) => {
  const list: number[] = []
  for (let i = 0; i < (use12Hours ? 12 : 24); i += step) {
    list.push(i)
  }
  if (use12Hours) {
    list[0] = 12
  }
  return list
}

export const getMinutesShowList = (step: number = 1) => {
  const list: number[] = []
  for (let i = 0; i < 60; i += step) {
    list.push(i)
  }
  return list
}

export const getSecondsShowList = (step: number = 1) => {
  const list: number[] = []
  for (let i = 0; i < 60; i += step) {
    list.push(i)
  }
  return list
}
