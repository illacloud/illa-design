import { FC, useCallback, useMemo } from "react"
import { globalColor, illaPrefix } from "@illa-design/theme"
import { Button } from "@illa-design/button"
import { AddIcon, DeleteIcon } from "@illa-design/icon"
import { Select } from "@illa-design/select"
import { Input } from "@illa-design/input"
import { FiltersEditorProps } from "./interface"
import { editorButtonStyle, editorStyle, filterStyle } from "./style"
import { FilterOptions } from "./utils"
import { isString } from "@illa-design/system"

export const FiltersEditor: FC<FiltersEditorProps> = (props) => {
  const {
    columnFilters,
    columnsOption,
    onDelete,
    onAdd,
    onChange,
    onChangeFilterFn,
  } = props

  const recordList = useMemo(() => {
    return (
      <>
        {columnFilters.map((filter, index) => {
          const { id, value, filterFn } = filter
          return (
            <div css={filterStyle} key={index}>
              <Select
                w="200px"
                mg="8px 4px"
                value={id}
                options={columnsOption}
                onChange={(id) => {
                  onChange(index, { id, value, filterFn })
                }}
              />
              <Select
                w="200px"
                mg="8px 4px"
                value={filterFn as string}
                options={FilterOptions}
                onChange={(filterFn) => {
                  onChangeFilterFn(index, filter.id, filterFn)
                  onChange(index, { id, value, filterFn })
                }}
              />
              <Input
                w="200px"
                mg="8px 4px"
                value={isString(value) ? value : undefined}
                disabled={
                  (filterFn as string) === "empty" ||
                  (filterFn as string) === "notEmpty"
                }
                onChange={(value) => {
                  onChange(index, { id, value, filterFn })
                }}
              />
              <Button
                variant="text"
                colorScheme="gray"
                onClick={() => {
                  onDelete(index, filter)
                }}
                leftIcon={
                  <DeleteIcon
                    color={globalColor(`--${illaPrefix}-grayBlue-06`)}
                  />
                }
              />
            </div>
          )
        })}
      </>
    )
  }, [columnFilters])

  return (
    <div css={editorStyle}>
      {recordList}
      <span css={editorButtonStyle}>
        <Button
          pd="1px 8px"
          colorScheme="techPurple"
          size="medium"
          variant="text"
          onClick={onAdd}
          leftIcon={
            <AddIcon color={globalColor(`--${illaPrefix}-techPurple-08`)} />
          }
        >
          New
        </Button>
      </span>
    </div>
  )
}

FiltersEditor.displayName = "FiltersEditor"
