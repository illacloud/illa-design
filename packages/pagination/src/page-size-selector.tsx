import { FC, useContext, useState } from "react"
import { PageSizeSelectorProps } from "./interface"
import { applyPageSizeSelectorCss } from "./style"
import {
  ConfigProviderContext,
  ConfigProviderProps,
  def,
} from "@illa-design/config-provider"
import { Select, Option } from "@illa-design/select"

export const PageSizeSelector: FC<PageSizeSelectorProps> = (props) => {
  const { onPageSizeSelected, sizeOptions, wholeDisable, size } = props
  const [compositionValue, setCompositionValue] = useState<number>(
    sizeOptions[0],
  )
  const configProviderProps = useContext<ConfigProviderProps>(
    ConfigProviderContext,
  )
  const locale = configProviderProps?.locale?.pagination ?? def.pagination
  const unitText = locale["page"]

  return (
    <span>
      <Select
        css={applyPageSizeSelectorCss(size, wholeDisable)}
        value={compositionValue}
        disabled={wholeDisable}
        size={size}
        onChange={(value) => {
          setCompositionValue(value)
          onPageSizeSelected(value)
        }}
      >
        {sizeOptions.map((value) => (
          <Option key={value} value={value}>
            {value + `/${unitText}`}
          </Option>
        ))}
      </Select>
    </span>
  )
}
