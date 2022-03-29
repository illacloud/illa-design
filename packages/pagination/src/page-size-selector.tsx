import { forwardRef, useContext, useState } from "react"
import { PageSizeSelectorProps } from "./interface"
import { applyPageSizeSelectorCss } from "./style"
import {
  ConfigProviderContext,
  ConfigProviderProps,
  def,
} from "@illa-design/config-provider"

export const PageSizeSelector = forwardRef<
  HTMLSpanElement,
  PageSizeSelectorProps
>((props, ref) => {
  const { onPageSizeSelected, sizeOptions, wholeDisable, size } = props

  const [compositionValue, setCompositionValue] = useState<string>("")

  const configProviderProps = useContext<ConfigProviderProps>(
    ConfigProviderContext,
  )
  const locale = configProviderProps?.locale?.pagination ?? def.pagination

  const unitText = locale["page"]

  return (
    <span>
      <select
        css={applyPageSizeSelectorCss(size, wholeDisable)}
        value={compositionValue}
        disabled={wholeDisable}
        onChange={(e) => {
          setCompositionValue(e.target.value)
          onPageSizeSelected(Number.parseInt(e.target.value))
        }}
      >
        {sizeOptions.map((value) => (
          <option key={value} value={value}>
            {value + `/${unitText}`}
          </option>
        ))}
      </select>
    </span>
  )
})
