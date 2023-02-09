import { FC, useContext } from "react"
import { Button } from "@illa-design/button"
import { BasicFooterProps } from "./interface"
import {
  ConfigProviderContext,
  ConfigProviderProps,
  def,
} from "@illa-design/config-provider"
import {
  footerBtnWrapperStyle,
  footerExtraWrapperStyle,
  footerNowWrapperStyle,
  footerStyle,
  placeLeftStyle,
} from "./style"

export const BasicFooterSection: FC<BasicFooterProps> = (props) => {
  const {
    showTime = false,
    disabled,
    onClickConfirmBtn,
    onSelectNow,
    showNowBtn,
    extra,
    mode,
    placeLeft,
  } = props

  const configProviderProps = useContext<ConfigProviderProps>(
    ConfigProviderContext,
  )
  const DATE_PICKER_LOCALE =
    configProviderProps?.locale?.datePicker ?? def.datePicker

  return (
    <div css={footerStyle}>
      {extra && <div css={footerExtraWrapperStyle}>{extra}</div>}
      {!showTime && showNowBtn && mode === "date" && (
        <div css={footerNowWrapperStyle}>
          <div onClick={onSelectNow}>{DATE_PICKER_LOCALE.today}</div>
        </div>
      )}
      {showTime ? (
        <div css={footerBtnWrapperStyle}>
          {placeLeft && <div css={placeLeftStyle} />}

          {mode === "date" && showNowBtn && (
            <Button
              className="btn-now"
              size="medium"
              onClick={onSelectNow}
              colorScheme="grayBlue"
            >
              {DATE_PICKER_LOCALE.nowText}
            </Button>
          )}
          {showTime && (
            <>
              <Button
                className="btn-confirm"
                size="medium"
                disabled={disabled}
                onClick={onClickConfirmBtn}
              >
                {DATE_PICKER_LOCALE.okText}
              </Button>
            </>
          )}
        </div>
      ) : null}
    </div>
  )
}
