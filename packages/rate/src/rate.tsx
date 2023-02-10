import { forwardRef, Fragment, useCallback, useMemo, useState } from "react"
import { divide, times } from "number-precision"
import { RateProps } from "./interface"
import { LikeFillIcon, StarFillIcon } from "@illa-design/icon"
import { Trigger } from "@illa-design/trigger"
import {
  applyRate,
  applyRateCharacter,
  applyRateCharacterLeft,
  applyRateCharacterRight,
  applyRateInner,
} from "./style"
import { applyBoxStyle, deleteCssProps } from "@illa-design/theme"

export const Rate = forwardRef<HTMLDivElement, RateProps>((props, ref) => {
  const {
    defaultValue,
    character = <StarFillIcon />,
    count = 5,
    value: stars,
    tooltips,
    allowHalf,
    allowClear,
    disabled,
    readonly,
    heart,
    onChange,
    onHoverChange,
    ...restProps
  } = props

  const [value, setValue] = useState<number>(defaultValue || stars || 0)
  const [hoverIndex, setHoverIndex] = useState<number>(0)
  const [animation, setAnimation] = useState<boolean>()

  const mergedValue = stars !== void 0 ? stars : value

  const resetHoverIndex = useCallback(() => {
    if (hoverIndex) {
      setHoverIndex(0)
      onHoverChange && onHoverChange(0)
    }
  }, [hoverIndex, onHoverChange])

  const onMouseEnter = useCallback(
    (index: number, isHalf: boolean) => {
      const newHoverIndex = isHalf && allowHalf ? index + 0.5 : index + 1
      if (newHoverIndex !== hoverIndex) {
        setHoverIndex(newHoverIndex)
        onHoverChange && onHoverChange(newHoverIndex)
      }
    },
    [allowHalf, hoverIndex, onHoverChange],
  )

  const onClick = useCallback(
    (index: number, isHalf: boolean) => {
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
    },
    [allowClear, allowHalf, mergedValue, onChange, resetHoverIndex],
  )

  const userCharacter = useCallback(
    (index: number) => {
      let usedCharacter =
        typeof character === "function" ? character(index) : character
      if (heart) {
        usedCharacter = <LikeFillIcon />
      }
      return usedCharacter
    },
    [character, heart],
  )

  const renderCharacter = useCallback(
    (index: number) => {
      const fixedValue = allowHalf
        ? times(+divide(mergedValue || 0, 0.5).toFixed(0), 0.5)
        : Math.round(mergedValue)
      const userIndex = hoverIndex || fixedValue
      const leftProps =
        readonly || disabled
          ? {}
          : {
              onMouseEnter: () => {
                onMouseEnter(index, true)
              },
              onClick: () => {
                onClick(index, true)
              },
            }
      const rightProps =
        readonly || disabled
          ? {}
          : {
              onMouseEnter: () => {
                onMouseEnter(index, false)
              },
              onClick: () => {
                onClick(index, false)
              },
            }
      const tooltip = tooltips && tooltips[index]
      const CharacterWrapper = tooltip ? Trigger : Fragment
      const tooltipProps = tooltip ? { content: tooltip } : {}

      return (
        <CharacterWrapper key={index} {...tooltipProps}>
          <div
            css={applyRateCharacter(
              disabled ?? false,
              readonly ?? false,
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
                allowHalf && index + 0.5 === userIndex,
                !heart,
              )}
              {...leftProps}
            >
              {userCharacter(index)}
            </div>
            <div
              css={applyRateCharacterRight(index + 1 <= userIndex, !heart)}
              {...rightProps}
            >
              {userCharacter(index)}
            </div>
          </div>
        </CharacterWrapper>
      )
    },
    [
      allowHalf,
      animation,
      disabled,
      heart,
      hoverIndex,
      mergedValue,
      onClick,
      onMouseEnter,
      readonly,
      tooltips,
      userCharacter,
    ],
  )

  const starList = useMemo(() => {
    const list = []
    for (let i = 0; i < count; i++) {
      list.push(renderCharacter(i))
    }
    return list
  }, [count, renderCharacter])

  return (
    <div
      ref={ref}
      css={[applyRate(disabled ?? false), applyBoxStyle(props)]}
      {...deleteCssProps(restProps)}
      onMouseLeave={resetHoverIndex}
    >
      <div css={applyRateInner}>{starList}</div>
    </div>
  )
})

Rate.displayName = "Rate"
