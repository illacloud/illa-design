import { FC, useMemo } from "react"
import { globalColor, illaPrefix } from "@illa-design/theme"
import { Button } from "@illa-design/button"
import { AddIcon, DeleteIcon } from "@illa-design/icon"
import { Select } from "@illa-design/select"
import { Input } from "@illa-design/input"
import { FiltersEditorProps } from "./interface"
import {
  editorStyle,
  filterStyle,
} from "./style"
import { FilterOptions } from "./utils"


export const FiltersEditor: FC<FiltersEditorProps> = (props) => {
  const { columnFilters, columnsOption, onDelete, onAdd, onChange, onChangeFilterFn } = props

  const recordList = useMemo(() => {
    return (
      <>
        {columnFilters.map((filter, index) => {
          return (
            <div css={filterStyle} key={index}>
              <Select w="200px" value={filter.id} options={columnsOption} onChange={(id) => {
                onChange(index, id, filter.value)
              }} />
              <Select w="200px" options={FilterOptions} onChange={
                (filterFn) => {
                  onChangeFilterFn(index, filter.id, filterFn)
                  onChange(index, filter.id, filter.value)
                }
              } />
              <Input w="200px" value={filter.value} onChange={(value) => {
                onChange(index, filter.id, value)
              }} />
              <Button
                variant="text"
                colorScheme="gray"
                onClick={() => {
                  onDelete(index, filter)
                }}
                leftIcon={
                  <DeleteIcon
                    color={globalColor(`--${illaPrefix}-grayBlue-08`)}
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
      <span>
          <Button
            mb="8px"
            pd="1px 8px"
            colorScheme="techPurple"
            size="medium"
            variant="text"
            onClick={() => {
              onAdd()
            }}
            leftIcon={
              <AddIcon color={globalColor(`--${illaPrefix}-techPurple-08`)} />
            }
          >
            new
          </Button>
        </span>
    </div>
  )
}

FiltersEditor.displayName = "FiltersEditor"
