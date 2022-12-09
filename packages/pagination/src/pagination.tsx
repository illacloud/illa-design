import * as React from "react"
import { forwardRef, ReactNode, useCallback, useContext, useMemo } from "react"
import { PaginationProps } from "./interface"
import {
  applyDirectorIconStyle,
  applyJumperStyle,
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
import { InputNumber } from "@illa-design/input-number"
import { MoreIcon, NextIcon, PreIcon } from "@illa-design/icon"
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
      sizeCanChange,
      bufferSize = 0,
      current,
      defaultCurrent,
      pageSize,
      defaultPageSize,
      total = 0,
      itemRender,
      size = "medium",
      icons,
      selectProps,
      onChange,
      onPageSizeChange,
      showTotal,
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

    const totalPageSize = Math.ceil(total / finalPageSize)

    const changeCurrent = useCallback(
      (toCurrent: number) => {
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
        onChange?.(toC, finalPageSize)
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
              <InputNumber
                w="32px"
                h="32px"
                ml="16px"
                disabled={disabled}
                size={size}
              />
            </div>
          )}
        </>
      )
    }, [disabled, locale.go, showJumper, size])

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

    const selectorComponent = useMemo(() => {
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
              icons?.prev ?? <PreIcon />,
            ) ?? <PreIcon />}
          </span>
          {clickList}
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
      size,
      total,
      totalPageSize,
    ])

    const pageSizeComponent = useMemo(() => {
      return (
        <>
          {sizeCanChange && (
            <Select
              disabled={disabled}
              ml="8px"
              defaultValue={finalPageSize + "/" + locale.page}
              options={[
                {
                  label: `10/${locale.page}`,
                  value: 10,
                },
                {
                  label: `20/${locale.page}`,
                  value: 20,
                },
                {
                  label: `30/${locale.page}`,
                  value: 30,
                },
                {
                  label: `40/${locale.page}`,
                  value: 40,
                },
                {
                  label: `50/${locale.page}`,
                  value: 50,
                },
              ]}
              onChange={(value) => {
                let newCurrent = pageSizeChangeResetCurrent
                  ? totalPageSize > 0
                    ? 1
                    : 0
                  : Math.ceil((finalCurrent * finalPageSize) / value)
                onPageSizeChange?.(value, newCurrent)
                changeCurrent(newCurrent)
                if (pageSize === undefined) {
                  setFinalPageSize(value)
                }
              }}
              {...selectProps}
            />
          )}
        </>
      )
    }, [
      changeCurrent,
      finalCurrent,
      finalPageSize,
      locale.page,
      onPageSizeChange,
      pageSize,
      pageSizeChangeResetCurrent,
      selectProps,
      setFinalPageSize,
      sizeCanChange,
      totalPageSize,
    ])

    return useMemo(() => {
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
    }, [
      finalPageSize,
      hideOnSinglePage,
      jumperComponent,
      otherProps,
      pageSizeComponent,
      props,
      ref,
      selectorComponent,
      total,
      totalComponent,
    ])
  },
)

Pagination.displayName = "Pagination"
