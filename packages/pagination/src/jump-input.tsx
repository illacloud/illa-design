import { FC, useContext, useState } from "react"
import { JumperInputProps } from "./interface"
import {
  applyJumperInputCss,
  jumperTitleCss,
  paginationContainer,
} from "./style"
import { Input } from "@illa-design/input"
import {
  ConfigProviderContext,
  ConfigProviderProps,
  def,
} from "@illa-design/config-provider"

export const JumperInput: FC<JumperInputProps> = (props) => {
  const { onEnterPress, wholeDisable, size } = props
  const [compositionValue, setCompositionValue] = useState<string>("")
  const configProviderProps = useContext<ConfigProviderProps>(
    ConfigProviderContext,
  )
  const locale = configProviderProps?.locale?.pagination ?? def.pagination
  const goToText = locale["go"]

  return (
    <span css={paginationContainer}>
      <span css={jumperTitleCss}>{goToText}</span>
      <span css={applyJumperInputCss(size, wholeDisable)}>
        <Input
          value={compositionValue}
          size={size}
          textCenterHorizontal={true}
          disabled={wholeDisable}
          onChange={(val) => {
            const value = val?.replace(/[^\d]/, "")
            setCompositionValue(value)
          }}
          onPressEnter={() => {
            onEnterPress(Number.parseInt(compositionValue))
          }}
          requirePadding={false}
          variant={"fill"}
        />
      </span>
    </span>
  )
}
