/** @jsxImportSource @emotion/react */
import React, { forwardRef, useEffect, useRef, useState } from "react"
import { CountDownProps } from "./interface"
import * as dayjs from "dayjs"
import { getDateString, getDayjsValue } from "./util"

import {
  applyStatisticContent,
  applyStatistic,
  applyStatisticTitle,
} from "./style"

export const Countdown = forwardRef<HTMLDivElement, CountDownProps>(
  (props, ref) => {
    const {
      title,
      value = 0,
      valueStyle,
      format = "HH:mm:ss",
      onFinish,
      onChange,
      now = dayjs(),
      start = true,
      ...restProps
    } = props

    const _now = getDayjsValue(now, format) as dayjs.Dayjs
    const deadline = (getDayjsValue(value, format) as dayjs.Dayjs) || dayjs()
    const [valueShow, setValueShow] = useState(
      Math.max(deadline.diff(_now, "millisecond"), 0),
    )
    const timerRef = useRef<NodeJS.Timer | NodeJS.Timeout | null>(null)
    const stopTimer = () => {
      clearInterval(timerRef.current as NodeJS.Timeout)
      timerRef.current = null
    }

    const startTimer = () => {
      timerRef.current = setInterval(() => {
        const _value = deadline.diff(dayjs(), "millisecond")
        const valueShow = Math.max(_value, 0)
        onChange && onChange(valueShow)
        if (_value <= 0) {
          stopTimer()
          onFinish && onFinish()
        }
        setValueShow(valueShow)
      }, 1000 / 30)
    }

    useEffect(() => {
      if (!timerRef.current && start) {
        if (deadline.valueOf() >= Date.now()) {
          startTimer()
        }
      }
      return () => {
        stopTimer()
      }
    }, [start])
    return (
      <div ref={ref} {...restProps} css={applyStatistic}>
        {title && <div css={applyStatisticTitle}>{title}</div>}
        <div css={applyStatisticContent} style={valueStyle}>
          {getDateString(valueShow, format)}
        </div>
      </div>
    )
  },
)

Countdown.displayName = "Countdown"
