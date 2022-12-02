import { forwardRef, useMemo, useState, useRef } from "react"
import { StatisticProps } from "./interface"
import { Skeleton } from "@illa-design/skeleton"
import dayjs, { Dayjs } from "dayjs"
import {
  statisticStyle,
  applyStatisticContentStyle,
  applyStatisticDecoratorStyle,
  statisticTitleStyle,
  statisticValueStyle,
  statisticExtraStyle,
} from "./style"
import { isObject } from "@illa-design/system"
import { applyBoxStyle, deleteCssProps } from "@illa-design/theme"

export const Statistic = forwardRef<HTMLDivElement, StatisticProps>(
  (props, ref) => {
    const {
      title,
      style,
      mode = "default",
      value = 0,
      styleValue,
      decimalSeparator = ".",
      format,
      groupSeparator = ",",
      loading,
      precision,
      suffix,
      prefix,
      extra,
      ...restProps
    } = props

    const renderValue = useMemo<string | number | Dayjs>(() => {
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
      <div
        css={[statisticStyle, applyBoxStyle(props)]}
        style={style}
        ref={ref}
        {...deleteCssProps(restProps)}
      >
        {title && <div css={statisticTitleStyle}>{title}</div>}
        <div css={applyStatisticContentStyle(mode)}>
          <Skeleton
            animation
            visible={!!loading}
            text={{ rows: 1, width: "100%" }}
          >
            <div style={styleValue}>
              {prefix && (
                <span
                  css={applyStatisticDecoratorStyle(true, !isObject(prefix))}
                >
                  {prefix}
                </span>
              )}
              <span css={statisticValueStyle}>{renderValue.toString()}</span>
              {suffix && (
                <span
                  css={applyStatisticDecoratorStyle(false, !isObject(suffix))}
                >
                  {suffix}
                </span>
              )}
            </div>
          </Skeleton>
          {extra && <div css={statisticExtraStyle}>{extra}</div>}
        </div>
      </div>
    )
  },
)

Statistic.displayName = "Statistic"
