/** @jsxImportSource @emotion/react */
import React, { forwardRef, useState } from "react"
import NP from "number-precision"
import { RateProps } from "./interface"
import { StarIcon, HeartIcon } from "@illa-design/icon"
import { Tooltip } from "@illa-design/tooltip"
import {
  applyRateInner,
  applyRate,
  applyRateCharacter,
  applyRateCharacterLeft,
  applyRateCharacterRight,
} from "./style"

export const Rate = forwardRef<HTMLDivElement, RateProps>((props, ref) => {
  const {
    defaultValue,
    character = <StarIcon />,
    count = 5,
    value: stars,
    tooltips,
    allowHalf,
    allowClear,
    disabled = false,
    readonly = false,
    heart,
    onChange,
    onHoverChange,
    ...restProps
  } = props

  const [value, setValue] = useState<number>(defaultValue || stars || 0)
  const [hoverIndex, setHoverIndex] = useState<number>(0)
  const [animation, setAnimation] = useState<boolean>()

  const mergedValue = stars !== void 0 ? stars : value

  const resetHoverIndex = () => {
    if (hoverIndex) {
      setHoverIndex(0)
      onHoverChange && onHoverChange(0)
    }
  }

  const onMouseEnter = (index: number, isHalf: boolean) => {
    const newHoverIndex = isHalf && allowHalf ? index + 0.5 : index + 1
    if (newHoverIndex !== hoverIndex) {
      setHoverIndex(newHoverIndex)
      onHoverChange && onHoverChange(newHoverIndex)
    }
  }

  const onClick = (index: number, isHalf: boolean) => {
    const newValue = isHalf && allowHalf ? index + 0.5 : index + 1
    setAnimation(true)
    if (newValue !== mergedValue) {
      setValue(newValue)
      onChange && onChange(newValue)
    } else if (allowClear) {
      setValue(0)
      onChange && onChange(0)
      resetHoverIndex()
    }
  }

  const renderCharacter = (index: number) => {
    const fixedValue = allowHalf
      ? NP.times(+NP.divide(mergedValue || 0, 0.5).toFixed(0), 0.5)
      : Math.round(mergedValue)
    const _usedIndex = hoverIndex || fixedValue
    let _usedCharacter =
      typeof character === "function" ? character(index) : character

    if (heart) {
      _usedCharacter = <HeartIcon />
    }
    const leftProps =
      readonly || disabled
        ? {}
        : {
            onMouseEnter: onMouseEnter.bind(this, index, true),
            onClick: onClick.bind(this, index, true),
          }
    const rightProps =
      readonly || disabled
        ? {}
        : {
            onMouseEnter: onMouseEnter.bind(this, index, false),
            onClick: onClick.bind(this, index, false),
          }
    const tooltip = tooltips && tooltips[index]
    const CharacterWrapper = tooltip ? Tooltip : React.Fragment
    const tooltipProps = tooltip ? { content: tooltip } : {}

    return (
      <CharacterWrapper key={index} {...tooltipProps}>
        <div
          css={applyRateCharacter(
            disabled,
            readonly,
            animation && index + 1 < mergedValue,
          )}
          style={animation ? { animationDelay: `${50 * index}ms` } : {}}
          onAnimationEnd={() => {
            if (animation && index + 1 >= mergedValue - 1) {
              setAnimation(false)
            }
          }}
        >
          <div
            css={applyRateCharacterLeft(
              allowHalf && index + 0.5 === _usedIndex,
              !heart,
            )}
            {...leftProps}
          >
            {_usedCharacter}
          </div>
          <div
            css={applyRateCharacterRight(index + 1 <= _usedIndex, !heart)}
            {...rightProps}
          >
            {_usedCharacter}
          </div>
        </div>
      </CharacterWrapper>
    )
  }

  return (
    <div
      ref={ref}
      css={applyRate(disabled)}
      {...restProps}
      onMouseLeave={resetHoverIndex}
    >
      <div css={applyRateInner}>
        {Array.apply(null, Array(count)).map((_, index) =>
          renderCharacter(index),
        )}
      </div>
    </div>
  )
})

Rate.displayName = "Rate"
