import * as React from "react"
import {
  forwardRef,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react"
import { PaginationProps } from "./interface"
import {
  applyDirectorIconStyle,
  applyJumperStyle,
  applySelectorInputStyle,
  applySimpleTextStyle,
  jumperContainerStyle,
  paginationContainer,
  selectorContainerStyle,
  totalStyle,
} from "./style"
import { isFunction, useMergeValue } from "@illa-design/system"
import {
  ConfigProviderContext,
  ConfigProviderProps,
  def,
} from "@illa-design/config-provider"
import { MoreIcon, NextIcon, PreviousIcon } from "@illa-design/icon"
import { css } from "@emotion/react"
import { Select } from "@illa-design/select"
import { applyBoxStyle, deleteCssProps } from "@illa-design/theme"

export const Pagination = forwardRef<HTMLDivElement, PaginationProps>(
  (props, ref) => {
    const {
      disabled,
      hideOnSinglePage,
      pageSizeChangeResetCurrent,
      showJumper,
      showMore,
      simple,
      disableSimplePageJump,
      sizeCanChange,
      bufferSize = 0,
      current,
      defaultCurrent,
      pageSize,
      pageSizeOptions,
      defaultPageSize,
      total = 0,
      itemRender,
      size = "medium",
      icons,
      onChange,
      onPageSizeChange,
      showTotal,
      inputBorderColorScheme,
      activeColorScheme,
      ...otherProps
    } = props

    const startAndEndBuffer = 5

    const configProviderProps = useContext<ConfigProviderProps>(
      ConfigProviderContext,
    )

    const locale = configProviderProps?.locale?.pagination ?? def.pagination

    const [finalCurrent, setFinalCurrent] = useMergeValue<number>(1, {
      defaultValue: defaultCurrent,
      value: current,
    })

    const [finalPageSize, setFinalPageSize] = useMergeValue(10, {
      defaultValue: defaultPageSize,
      value: pageSize,
    })

    const [jumperValue, setJumperValue] = useState("")
    const [simpleValue, setSimpleValue] = useState("")

    const totalPageSize = Math.ceil(total / finalPageSize)

    const changeCurrent = useCallback(
      (toCurrent: number, pageSize?: number): number => {
        let toC = toCurrent
        if (toCurrent < 1) {
          toC = 1
        } else if (toCurrent > totalPageSize) {
          toC = totalPageSize
        }
        if (total === 0) {
          toC = 0
        }
        if (current === undefined) {
          setFinalCurrent(toC)
        }
        onChange?.(toC, pageSize ?? finalPageSize)
        return toC
      },
      [current, finalPageSize, onChange, setFinalCurrent, total, totalPageSize],
    )

    const totalComponent = useMemo(() => {
      if (isFunction(showTotal)) {
        return (
          <div css={totalStyle}>
            {showTotal(total, [
              (finalCurrent - 1) * finalPageSize,
              (finalCurrent - 1) * finalPageSize + finalPageSize <= total
                ? (finalCurrent - 1) * finalPageSize + finalPageSize
                : (finalCurrent - 1) * finalPageSize + (total % finalPageSize),
            ])}
          </div>
        )
      } else {
        return (
          <>
            {showTotal && (
              <span css={totalStyle}>
                {locale.total.replace("{0}", total?.toString() ?? "")}
              </span>
            )}
          </>
        )
      }
    }, [finalCurrent, finalPageSize, locale.total, showTotal, total])

    const jumperComponent = useMemo(() => {
      return (
        <>
          {showJumper && (
            <div css={jumperContainerStyle}>
              <span css={applyJumperStyle(disabled)}>{locale.go}</span>
              <input
                css={applySelectorInputStyle(size, inputBorderColorScheme)}
                value={jumperValue}
                type="number"
                min={1}
                max={totalPageSize}
                disabled={disabled}
                onChange={(e) => {
                  setJumperValue(e.currentTarget.value)
                }}
                onBlur={(e) => {
                  if (e.currentTarget.value != "") {
                    changeCurrent(Number(e.currentTarget.value))
                    setJumperValue("")
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && e.currentTarget.value != "") {
                    changeCurrent(Number(e.currentTarget.value))
                    setJumperValue("")
                  }
                }}
              />
            </div>
          )}
        </>
      )
    }, [
      changeCurrent,
      disabled,
      inputBorderColorScheme,
      jumperValue,
      locale.go,
      showJumper,
      size,
      totalPageSize,
    ])

    const clickNodeShow = useCallback(
      (index: number) => {
        let show = false

        if (
          finalCurrent + bufferSize >= index &&
          finalCurrent - bufferSize <= index
        ) {
          show = true
        }

        if (index === 1 || index == totalPageSize) {
          show = true
        }

        if (finalCurrent < startAndEndBuffer && index < startAndEndBuffer) {
          show = true
        }

        return show
      },
      [bufferSize, finalCurrent, totalPageSize, startAndEndBuffer],
    )

    useEffect(() => {
      setSimpleValue(finalCurrent.toString())
    }, [finalCurrent])

    const selectorComponent = useMemo(() => {
      let middleComponent: ReactNode
      if (simple) {
        middleComponent = (
          <div css={selectorContainerStyle}>
            {disableSimplePageJump ? (
              <span css={applySimpleTextStyle(css``, disabled)}>
                {simpleValue}
              </span>
            ) : (
              <input
                css={applySelectorInputStyle(size)}
                type="number"
                min={1}
                max={totalPageSize}
                value={simpleValue}
                disabled={disabled}
                onChange={(e) => {
                  setSimpleValue(e.currentTarget.value)
                }}
                onBlur={(e) => {
                  if (e.currentTarget.value != "") {
                    changeCurrent(Number(e.currentTarget.value))
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && e.currentTarget.value != "") {
                    changeCurrent(Number(e.currentTarget.value))
                  }
                }}
              />
            )}
            <span
              css={applySimpleTextStyle(
                css`
                  margin-left: 8px;
                  margin-right: 8px;
                `,
                disabled,
              )}
            >
              /
            </span>
            <span css={applySimpleTextStyle(css``, disabled)}>
              {totalPageSize}
            </span>
          </div>
        )
      } else {
        const clickList: ReactNode[] = []
        for (let i = 0; i < totalPageSize; i++) {
          const index = i + 1
          const active = finalCurrent === index

          if (clickNodeShow(index)) {
            clickList.push(
              <span
                css={applyDirectorIconStyle(
                  css`
                    margin-right: ${i != totalPageSize - 1 ? "8px" : "unset"};
                  `,
                  size,
                  disabled,
                  activeColorScheme,
                  active,
                )}
                onClick={() => {
                  if (disabled) {
                    return
                  }
                  changeCurrent(index)
                }}
              >
                {i + 1}
              </span>,
            )
          } else {
            if (clickNodeShow(index - 1))
              clickList.push(
                <span
                  css={applyDirectorIconStyle(
                    css`
                      margin-right: ${i != totalPageSize - 1 ? "8px" : "unset"};
                    `,
                    size,
                    disabled,
                  )}
                  onClick={() => {
                    if (disabled) {
                      return
                    }
                    if (index < finalCurrent) {
                      changeCurrent(finalCurrent - bufferSize - 1)
                    } else if (index > finalCurrent) {
                      changeCurrent(finalCurrent + bufferSize + 1)
                    }
                  }}
                >
                  {itemRender?.(
                    finalPageSize,
                    "more",
                    icons?.more ?? <MoreIcon />,
                  ) ?? <MoreIcon />}
                </span>,
              )
          }
        }
        middleComponent = <>{clickList}</>
      }

      return (
        <div css={selectorContainerStyle}>
          <span
            css={applyDirectorIconStyle(
              css`
                margin-right: 8px;
              `,
              size,
              disabled || finalCurrent === 1 || total === 0,
            )}
            onClick={() => {
              if (disabled || finalCurrent === 1 || total === 0) {
                return
              }
              changeCurrent(finalCurrent - 1)
            }}
          >
            {itemRender?.(
              finalPageSize,
              "prev",
              icons?.prev ?? <PreviousIcon />,
            ) ?? <PreviousIcon />}
          </span>
          {middleComponent}
          {showMore && (
            <span
              css={applyDirectorIconStyle(
                css`
                  margin-left: 8px;
                `,
                size,
                disabled,
              )}
              onClick={() => {
                if (disabled) {
                  return
                }
                changeCurrent(finalCurrent + bufferSize + 1)
              }}
            >
              {itemRender?.(
                finalPageSize,
                "more",
                icons?.more ?? <MoreIcon />,
              ) ?? <MoreIcon />}
            </span>
          )}
          <span
            css={applyDirectorIconStyle(
              css`
                margin-left: 8px;
              `,
              size,
              disabled || finalCurrent === totalPageSize || total === 0,
            )}
            onClick={() => {
              if (disabled || finalCurrent === totalPageSize || total === 0) {
                return
              }
              changeCurrent(finalCurrent + 1)
            }}
          >
            {itemRender?.(
              finalPageSize,
              "next",
              icons?.next ?? <NextIcon />,
            ) ?? <NextIcon />}
          </span>
        </div>
      )
    }, [
      bufferSize,
      changeCurrent,
      clickNodeShow,
      disabled,
      finalCurrent,
      finalPageSize,
      icons?.more,
      icons?.next,
      icons?.prev,
      itemRender,
      showMore,
      simple,
      simpleValue,
      disableSimplePageJump,
      size,
      total,
      totalPageSize,
    ])

    const finalPageSizeOptions = useMemo(() => {
      if (!pageSizeOptions || pageSizeOptions.length === 0) {
        return [
          {
            label: `10/${locale.page}`,
            value: "10",
          },
          {
            label: `20/${locale.page}`,
            value: "20",
          },
          {
            label: `30/${locale.page}`,
            value: "30",
          },
          {
            label: `40/${locale.page}`,
            value: "40",
          },
          {
            label: `50/${locale.page}`,
            value: "50",
          },
        ]
      } else {
        return pageSizeOptions.map((v) => {
          return {
            label: `${v}/${locale.page}`,
            value: v.toString(),
          }
        })
      }
    }, [locale.page, pageSizeOptions])

    const pageSizeComponent = useMemo(() => {
      return (
        <>
          {!!sizeCanChange && (
            <Select
              options={finalPageSizeOptions}
              disabled={disabled}
              ml="8px"
              defaultValue={finalPageSizeOptions[0].value.toString()}
              colorScheme={inputBorderColorScheme}
              onChange={(value) => {
                if (value !== null) {
                  let v = Number(value)
                  let newCurrent = pageSizeChangeResetCurrent
                    ? totalPageSize > 0
                      ? 1
                      : 0
                    : Math.ceil((finalCurrent * finalPageSize) / v)
                  onPageSizeChange?.(v, newCurrent)
                  changeCurrent(newCurrent, v)
                  setFinalPageSize(v)
                }
              }}
            />
          )}
        </>
      )
    }, [
      changeCurrent,
      disabled,
      finalCurrent,
      finalPageSize,
      finalPageSizeOptions,
      inputBorderColorScheme,
      onPageSizeChange,
      pageSizeChangeResetCurrent,
      setFinalPageSize,
      sizeCanChange,
      totalPageSize,
    ])

    if (hideOnSinglePage) {
      if (total <= finalPageSize) {
        return <></>
      }
    }

    return (
      <div
        css={[paginationContainer, applyBoxStyle(props)]}
        ref={ref}
        {...deleteCssProps(otherProps)}
      >
        {totalComponent}
        {selectorComponent}
        {pageSizeComponent}
        {jumperComponent}
      </div>
    )
  },
)

Pagination.displayName = "Pagination"
