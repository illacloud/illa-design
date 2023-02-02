import React, {
  useState,
  useContext,
  PropsWithChildren,
  isValidElement,
  cloneElement,
  useEffect,
  KeyboardEvent,
} from "react"
import { Button } from "@illa-design/button"
import { UploadIcon, PlusIcon } from "@illa-design/icon"
import { TriggerProps } from "./interface"
import {
  ConfigProviderContext,
  ConfigProviderProps,
} from "@illa-design/config-provider"
import { getFiles, loopDirectory } from "./utils"
import {
  dragContentContainerStyle,
  dragIconStyle,
  dragTextStyle,
  dragTipsStyle,
  getDragContainerStyle,
  getPictureCardContainerStyle,
  getTriggerNodeContainerStyle,
  listTypeButtonStyle,
  pictureCardContentStyle,
  pictureCardIconStyle,
  pictureCardTextStyle,
} from "./style"

const TriggerNode = (props: PropsWithChildren<TriggerProps>) => {
  const { locale } = useContext<ConfigProviderProps>(ConfigProviderContext)
  const [isDragging, setIsDragging] = useState(false)
  const [dragEnterCount, setDragEnterCount] = useState(0) // the number of times ondragenter was triggered

  const {
    tip,
    children,
    disabled,
    drag,
    listType,
    accept,
    directory,
    multiple,
    onClick,
    onDrop,
    onDragFiles,
    onDragLeave,
    onDragOver,
  } = props

  const cloneProps = {
    disabled,
  }

  useEffect(() => {
    setDragEnterCount(0)
  }, [isDragging])

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const keyCode = event.code
    if (keyCode === "Enter") {
      onClick?.()
    }
  }

  if (children === null) {
    return null
  }

  const handleDragEnter = () => {
    setDragEnterCount(dragEnterCount + 1)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    /**  When dragging into a child element, it will trigger the dragleave and dragenter of the parent node.
     * Record the number of triggers of dragenter, and subtract 1 each time dragleave.
     * When dragEnterCount is equal to 0,  it means that the mouse has left the current node, then the drag state is cancelled.
     */
    if (dragEnterCount === 0) {
      setIsDragging(false)
      onDragLeave?.(e)
    } else {
      setDragEnterCount(dragEnterCount - 1)
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    if (!isDragging) {
      setIsDragging(true)
      onDragOver?.(e)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    if (!drag) {
      return
    }
    setIsDragging(false)
    if (directory) {
      loopDirectory(
        Array.prototype.slice.call(e.dataTransfer.items),
        (files: File[]) => {
          onDragFiles && onDragFiles(files)
        },
        accept,
      )
    } else {
      const files = getFiles(e.dataTransfer.files, accept)
      onDragFiles &&
        onDragFiles((multiple ? files : files?.slice(0, 1) || []) as File[])
    }
    onDrop && onDrop(e)
  }

  const events = disabled
    ? {}
    : {
        onDragEnter: handleDragEnter,
        onDragLeave: handleDragLeave,
        onDragOver: handleDragOver,
        onDrop: handleDrop,
        onClick: onClick,
        onKeyDown: handleKeyDown,
      }

  return (
    <div css={getTriggerNodeContainerStyle(drag)} {...events}>
      {isValidElement(children) ? (
        <div>{cloneElement(children, cloneProps)}</div>
      ) : listType === "picture-card" ? (
        <div
          css={getPictureCardContainerStyle(!!disabled)}
          tabIndex={0}
          aria-label={locale?.upload.upload}
        >
          <div css={pictureCardContentStyle}>
            <PlusIcon css={pictureCardIconStyle} />
            <div css={pictureCardTextStyle}>{locale?.upload.upload}</div>
          </div>
        </div>
      ) : drag ? (
        <div
          tabIndex={0}
          aria-label={locale?.upload.dragTip}
          css={getDragContainerStyle(!!disabled)}
        >
          <div css={dragIconStyle}>
            <PlusIcon />
          </div>
          <div css={dragContentContainerStyle}>
            <div css={dragTextStyle}>{locale?.upload.dragTip}</div>
            {tip && <div css={dragTipsStyle}>{tip}</div>}
          </div>
        </div>
      ) : (
        <Button
          {...cloneProps}
          aria-label={locale?.upload.upload}
          type="button"
          size="medium"
          css={listTypeButtonStyle}
          leftIcon={<UploadIcon />}
        >
          {locale?.upload.upload}
        </Button>
      )}
    </div>
  )
}

export default TriggerNode
