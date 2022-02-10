/** @jsxImportSource @emotion/react */
import React, { forwardRef, useMemo } from "react"
import { StatisticProps } from "./interface"
import dayjs from "dayjs"
import {
  applyStatisticContent,
  applyStatistic,
  applyStatisticTitle,
  applyStatisticPrefix,
  applyStatisticSuffix,
} from "./style"

export const Statistic = forwardRef<HTMLDivElement, StatisticProps>(
  (props, ref) => {
    const {
      title,
      value = 0,
      valueStyle,
      decimalSeparator = ".",
      format,
      groupSeparator = ",",
      loading,
      precision,
      suffix,
      prefix,
      ...restProps
    } = props
    const renderValue = useMemo(() => {
      let temp = value
      if (format) {
        temp = dayjs(value).format(format)
        return temp
      }
      if (precision) {
        temp = Number(value).toFixed(precision)
      }
      let [int, decimal] = String(temp).split(".")
      if (!isNaN(Number(int))) {
        int = int.replace(/\B(?=(\d{3})+(?!\d))/g, groupSeparator)
      }
      return decimal !== void 0 ? int + decimalSeparator + decimal : int
    }, [format, value, groupSeparator, decimalSeparator, precision])
    return (
      <div css={applyStatistic} ref={ref} {...restProps}>
        {title && <div css={applyStatisticTitle}>{title}</div>}
        <div css={applyStatisticContent} style={valueStyle}>
          {prefix && <span css={applyStatisticPrefix}>{prefix}</span>}
          <span>{renderValue}</span>
          {suffix && <span css={applyStatisticSuffix}>{suffix}</span>}
        </div>
      </div>
    )
  },
)

Statistic.displayName = "Statistic"
