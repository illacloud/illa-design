import { forwardRef, useMemo } from "react"
import { StatisticProps } from "./interface"
import { Skeleton } from "@illa-design/skeleton"
import { dayjs } from "@illa-design/system"

import {
  applyStatistic,
  applyStatisticContent,
  applyStatisticDecorator,
  applyStatisticTitle,
  applyStatisticValue,
} from "./style"
import { isObject } from "@illa-design/system"

export const Statistic = forwardRef<HTMLDivElement, StatisticProps>(
  (props, ref) => {
    const {
      title,
      value = 0,
      decimalSeparator = ".",
      format,
      groupSeparator = ",",
      loading,
      precision,
      suffix,
      prefix,
      ...restProps
    } = props
    const renderValue = useMemo<string | number | dayjs.Dayjs>(() => {
      if (format) {
        return dayjs(value).format(format)
      }
      let temp: number | string = Number(value)
      if (!isFinite(temp)) {
        return value
      }
      if (precision !== void 0) {
        temp = temp.toFixed(precision)
      }
      let [int, decimal] = String(temp).split(".")
      int = int.replace(/\B(?=(\d{3})+(?!\d))/g, groupSeparator)
      return decimal !== void 0 ? int + decimalSeparator + decimal : int
    }, [format, value, groupSeparator, decimalSeparator, precision])
    return (
      <div css={applyStatistic} ref={ref} {...restProps}>
        {title && <div css={applyStatisticTitle}>{title}</div>}
        <div css={applyStatisticContent}>
          <Skeleton
            animation
            visible={!!loading}
            text={{ rows: 1, width: "100%" }}
          >
            {prefix && (
              <span css={applyStatisticDecorator(true, !isObject(prefix))}>
                {prefix}
              </span>
            )}
            <span css={applyStatisticValue}>{renderValue.toString()}</span>
            {suffix && (
              <span css={applyStatisticDecorator(false, !isObject(suffix))}>
                {suffix}
              </span>
            )}
          </Skeleton>
        </div>
      </div>
    )
  },
)

Statistic.displayName = "Statistic"
