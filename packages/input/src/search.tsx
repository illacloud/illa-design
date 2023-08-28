import { forwardRef, useRef } from "react"
import { SearchProps } from "./interface"
import { Input } from "./input"
import { LoadingIcon, SearchIcon } from "@illa-design/icon"
import { searchIconContainer } from "./style"

export const Search = forwardRef<HTMLInputElement, SearchProps>(
  (props, ref) => {
    const {
      loading,
      searchButton = <SearchIcon />,
      onSearch,
      ...otherProps
    } = props

    const inputRef = useRef<HTMLInputElement>(null)

    return (
      <Input
        ref={ref}
        inputRef={inputRef}
        prefix={
          <span
            css={searchIconContainer}
            onClick={(e) => {
              onSearch?.(inputRef?.current?.value ?? "")
            }}
          >
            {loading ? <LoadingIcon spin={true} /> : searchButton}
          </span>
        }
        onPressEnter={(e) => {
          onSearch?.(inputRef?.current?.value ?? "")
        }}
        {...otherProps}
      />
    )
  },
)

Search.displayName = "Search"
