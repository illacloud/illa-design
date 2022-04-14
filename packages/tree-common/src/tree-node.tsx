import React, { forwardRef, useMemo, useRef, useState } from "react"
import { NodeProps } from "./interface"
import {
  applyIndentBlockCss,
  applyLeafIconCss,
  applyNodeContainerCss,
  applyNodeFoldSwitchIconCss,
  applyNodeTextContainerCss,
  checkboxCss,
  dragContainerCss,
  iconColorCss,
  indentContainerCss,
  loadingIconCss,
  nodeFoldSwitchCss,
  switchIconCss,
} from "./style"
import {
  CaretDownIcon,
  DragPointIcon,
  LeafIcon,
  LoadingIcon,
} from "@illa-design/icon"
import useThrottleFn from "react-use/lib/useThrottleFn"
import { Checkbox } from "@illa-design/checkbox"

export const TreeNode = forwardRef<HTMLDivElement, NodeProps>((props, ref) => {
  const {
    _key = "",
    title = "title",
    size = "medium",
    disabled,
    _isSelected,
    isLeaf,
    expanding,
    handleExpand,
    handleSelect,
    handleCheck,
    blockNode,
    _indentArr,
    _checked,
    _children,
    draggable,
    showLine,
    checkable,
    renderTitle,
    _halfChecked,
    handleLoadMore,
    loadingMore,
    loadingIcon,
    dragIcon,
    icon,
    switcherIcon,
    handleDragStart,
    handleDragEnd,
    handleDragLeave,
    handleDragOver,
    handleDrop,
    updateDragState,
  } = props

  const [drag, setDrag] = useState<
    React.DragEvent<HTMLDivElement> | undefined
  >()
  const dragRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState<boolean>(false)
  const [isDragOver, setIsDragOver] = useState<boolean>(false)

  useThrottleFn(
    (event?: React.DragEvent<HTMLDivElement>) => {
      if (isDragging || isDragOver || true) {
        let _position = 0
        if (event?.nativeEvent?.offsetY && dragRef?.current?.offsetHeight) {
          if (
            dragRef?.current?.offsetHeight - event?.nativeEvent.offsetY >
            dragRef?.current?.offsetHeight * 0.7
          ) {
            _position = 1
          } else if (
            dragRef?.current?.offsetHeight - event?.nativeEvent.offsetY <
            dragRef?.current?.offsetHeight * 0.3
          ) {
            _position = -1
          }
        }
        event && handleDragOver && handleDragOver(event, _key)
        updateDragState &&
          updateDragState({ dropNodeKey: _key, dropPosition: _position })
      }
    },
    300,
    [drag],
  )

  const _isLeaf = useMemo(() => {
    return isLeaf || (!handleLoadMore && (!_children || _children?.length == 0))
  }, [isLeaf, handleLoadMore, _children])

  const _isExpanding = useMemo(() => {
    if (_children && _children.length > 0) {
      return expanding
    }
    return handleLoadMore === undefined
  }, [expanding, handleLoadMore, _children])

  return (
    <div css={applyNodeContainerCss(size)} ref={ref}>
      <div css={indentContainerCss}>
        {_indentArr?.map((requireDivider, index) => (
          <div
            key={_key + index}
            css={applyIndentBlockCss(requireDivider && showLine)}
          />
        ))}
      </div>

      {!_isLeaf ? (
        <span
          css={nodeFoldSwitchCss}
          onClick={() => {
            if (_children?.length && _children?.length > 0) {
              handleExpand && handleExpand(_key)
            } else {
              handleLoadMore && handleLoadMore(_key)
            }
          }}
        >
          {loadingMore ? (
            <span css={loadingIconCss}>
              {loadingIcon ?? <LoadingIcon spin={true} />}
            </span>
          ) : (
            <span css={switchIconCss}>
              {switcherIcon ?? (
                <span css={applyNodeFoldSwitchIconCss(_isExpanding)}>
                  <CaretDownIcon />
                </span>
              )}
            </span>
          )}
        </span>
      ) : (
        <span css={applyLeafIconCss(showLine)}>
          <LeafIcon />
        </span>
      )}
      <div
        ref={dragRef}
        css={dragContainerCss}
        draggable={draggable}
        onDragOver={(event) => {
          setDrag(event)
          event.stopPropagation()
          event.preventDefault()
          event?.persist()
        }}
        onDragLeave={(event) => {
          event.stopPropagation()
          handleDragLeave && handleDragLeave(event, _key)
        }}
        onDragStart={(event) => {
          handleDragStart && handleDragStart(event, _key)
          setIsDragging(true)
          setIsDragOver(true)
          updateDragState &&
            updateDragState({ dragNodeKey: _key, dropPosition: 0 })
        }}
        onDragEnd={(event) => {
          event.stopPropagation()
          setIsDragging(false)
          handleDragEnd && handleDragEnd(event, _key)
        }}
        onDrop={(event) => {
          event.stopPropagation()
          setIsDragOver(false)
          handleDrop && handleDrop(event)
          updateDragState &&
            updateDragState({
              dragNodeKey: null,
              dropNodeKey: null,
              dropPosition: 0,
            })
        }}
      >
        {checkable && (
          <Checkbox
            indeterminate={!_checked && _halfChecked}
            onChange={(_, e) => {
              handleCheck && handleCheck(_key, e)
            }}
            checked={_checked ?? false}
          />
        )}
        <span
          css={applyNodeTextContainerCss(
            size,
            disabled,
            _isSelected,
            blockNode,
          )}
          onClick={(e) => {
            if (disabled) return
            handleSelect && handleSelect(_key, e)
          }}
        >
          {icon && <span>{icon}</span>}
          {renderTitle ? (
            <span>{renderTitle(props)}</span>
          ) : (
            <span>{title}</span>
          )}
          {draggable && (
            <span>
              {dragIcon ?? (
                <span css={iconColorCss}>
                  {" "}
                  <DragPointIcon />
                </span>
              )}
            </span>
              css={checkboxCss}
          )}
        </span>
      </div>
    </div>
  )
})
