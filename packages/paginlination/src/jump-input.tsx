/** @jsxImportSource @emotion/react */
import { forwardRef, useContext, useState } from "react"
import { JumperInputProps } from "./interface"
import { applyJumperInputCss, paginationContainer, totalTextCss } from "./style"
import { Input } from "@illa-design/input"
import {
  ConfigProviderContext,
  ConfigProviderProps,
  def,
} from "@illa-design/config-provider"

export const JumperInput = forwardRef<HTMLSpanElement, JumperInputProps>(
  (props, ref) => {
    const { onEnterPress, wholeDisable, size } = props

    const [compositionValue, setCompositionValue] = useState<string>("")

    const configProviderProps = useContext<ConfigProviderProps>(
      ConfigProviderContext,
    )
    const locale = configProviderProps?.locale?.pagination ?? def.pagination

    const goToText = locale["go"]

    return (
      <span css={paginationContainer}>
        <span css={totalTextCss}>{goToText}</span>
        <Input
          css={applyJumperInputCss(wholeDisable, size)}
          value={compositionValue}
          size={size}
          disabled={wholeDisable}
          onChange={(event) => {
            const value = event.target.value.replace(/[^\d]/, "")
            setCompositionValue(value)
          }}
          onPressEnter={() => {
            onEnterPress(Number.parseInt(compositionValue))
          }}
          requirePadding={false}
          variant={"fill"}
        />
      </span>
    )
  },
)
