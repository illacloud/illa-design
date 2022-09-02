import { forwardRef } from "react"
import { PageNumGroupProps } from "./interface"
import { PageNumItem } from "./page-num-item"
import { paginationContainer } from "./style"

export function getVisibleItemList(total: number, selectedIndex: number) {
  let moreArr: number[] = []
  const arr: any[] = []
  if (total > 9) {
    moreArr = []
    arr.push(0)
    if (selectedIndex !== 0) {
      arr.splice(1, 0, selectedIndex)
    }
    if (selectedIndex > 1) {
      arr.splice(1, 0, selectedIndex - 1)
    }
    if (selectedIndex > 2) {
      arr.splice(1, 0, selectedIndex - 2)
    }
    if (selectedIndex > 4) {
      arr.splice(1, 0, 1)
      moreArr.push(1)
    } else if (selectedIndex > 3) {
      arr.splice(1, 0, selectedIndex - 3)
    }
    if (selectedIndex < total - 1 - 1) {
      arr.push(selectedIndex + 1)
    }
    if (selectedIndex < total - 1 - 2) {
      arr.push(selectedIndex + 2)
    }
    if (selectedIndex < total - 1 - 2 - 2) {
      arr.push(total - 2)
      moreArr.push(total - 2)
    }
    if (selectedIndex !== total - 1) {
      arr.push(total - 1)
    }
    for (let i = 0; arr.length < 7; i++) {
      let indexInList = arr.indexOf(selectedIndex)
      moreArr.forEach((value, index) => {
        if (value < selectedIndex) {
          arr?.splice(indexInList - 2 - i, 0, selectedIndex - 3 - i)
        } else {
          arr?.splice(indexInList + 3 + i, 0, indexInList + 3 + i)
        }
      })
    }
  } else {
    for (let i = 0; i < total; i++) {
      arr.push(i)
    }
  }
  if (arr[arr.length - 1] === arr[arr.length - 2]) {
    arr[arr.length - 1] = "∞"
  }
  return [arr, moreArr]
}

export const PageNumGroup = forwardRef<HTMLSpanElement, PageNumGroupProps>(
  (props, ref) => {
    const {
      total,
      selectedIndex,
      moreIcon,
      onCurPageIndexChanged,
      wholeDisable,
      size,
    } = props

    let [showNumList, moreArr] = getVisibleItemList(total, selectedIndex)

    return (
      <span css={paginationContainer}>
        {showNumList?.map((number, index) => (
          <PageNumItem
            key={number}
            index={number}
            moreIcon={moreIcon}
            wholeDisable={wholeDisable}
            size={size}
            handleClick={(index) => {
              if (moreArr?.includes(index)) {
                if (index == 1) {
                  onCurPageIndexChanged(selectedIndex - 5)
                } else {
                  onCurPageIndexChanged(selectedIndex + 5)
                }
              } else {
                onCurPageIndexChanged(index)
              }
            }}
            isMoreIndex={moreArr?.includes(number)}
            selected={selectedIndex == number}
          />
        ))}
      </span>
    )
  },
)

PageNumGroup.displayName = "PageNumGroup"
