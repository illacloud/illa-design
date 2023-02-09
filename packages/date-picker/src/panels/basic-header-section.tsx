import { FC } from "react"
import { BasicHeaderSectionProps, HeaderLabelProps } from "./interface"
import {
  operationIconStyle,
  basicHeaderStyle,
  iconGroupStyle,
  headerWrapperStyle,
  headerLabelStyle,
} from "./style"

const HeaderLabel: FC<HeaderLabelProps> = (props) => {
  const { title, mode, value, onChangePanel } = props
  if (title) {
    return <>{title}</>
  }

  switch (mode) {
    case "month":
    case "quarter":
      return (
        <span css={headerLabelStyle} onClick={() => onChangePanel?.("year")}>
          {value?.format("YYYY")}
        </span>
      )
    case "date":
    case "week":
      return (
        <>
          <span css={headerLabelStyle} onClick={() => onChangePanel?.("year")}>
            {value?.format("YYYY")}
          </span>
          -
          <span css={headerLabelStyle} onClick={() => onChangePanel?.("month")}>
            {value?.format("MM")}
          </span>
        </>
      )
  }
  return null
}

export const BasicHeaderSection: FC<BasicHeaderSectionProps> = (props) => {
  const {
    title,
    onPrev,
    onNext,
    onSuperPrev,
    onSuperNext,
    mode,
    value,
    onChangePanel,
    superNextIcon,
    superPrevIcon,
    nextIcon,
    prevIcon,
  } = props

  const showPrevIcon = typeof onPrev === "function"
  const showSuperPrevIcon = typeof onSuperPrev === "function"
  const showNextIcon = typeof onNext === "function"
  const showSuperNextIcon = typeof onSuperNext === "function"

  return (
    <div css={basicHeaderStyle}>
      <div css={iconGroupStyle}>
        {superPrevIcon && showSuperPrevIcon && (
          <div css={operationIconStyle} onClick={onSuperPrev}>
            {superPrevIcon}
          </div>
        )}
        {prevIcon && showPrevIcon && (
          <div css={operationIconStyle} onClick={onPrev}>
            {prevIcon}
          </div>
        )}
      </div>

      <div css={headerWrapperStyle}>
        <HeaderLabel
          value={value}
          mode={mode}
          title={title}
          onChangePanel={onChangePanel}
        />
      </div>
      <div css={iconGroupStyle}>
        {nextIcon && showNextIcon && (
          <div css={operationIconStyle} onClick={onNext}>
            {nextIcon}
          </div>
        )}
        {superNextIcon && showSuperNextIcon && (
          <div css={operationIconStyle} onClick={onSuperNext}>
            {superNextIcon}
          </div>
        )}
      </div>
    </div>
  )
}
