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
import { TriggerNodeProps } from "./interface"
import {
  ConfigProviderContext,
  ConfigProviderProps,
} from "@illa-design/config-provider"
import { getAcceptedFiles, loopDirectory } from "./utils"
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

const TriggerNode = (props: PropsWithChildren<TriggerNodeProps>) => {
  const { locale } = useContext<ConfigProviderProps>(ConfigProviderContext)
  const [isDragging, setIsDragging] = useState(false)
  const [dragEnterCount, setDragEnterCount] = useState(0) // the number of times ondragenter was triggered

  const {
    tip,
    text,
    colorScheme,
    variant,
    loading,
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

  const cloneChildrenProps = {
    disabled,
  }

  useEffect(() => {
    setDragEnterCount(0)
  }, [isDragging])

  if (children === null) {
    return null
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const keyCode = event.code
    if (keyCode === "Enter") {
      onClick?.()
    }
  }

  const handleDragEnter = () => {
    setDragEnterCount(dragEnterCount + 1)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
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
          onDragFiles?.(files)
        },
        accept,
      )
    } else {
      const files = getAcceptedFiles(e.dataTransfer.files, accept)
      onDragFiles?.((multiple ? files : files?.slice(0, 1) || []) as File[])
    }
    onDrop?.(e)
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
        <div>{cloneElement(children, cloneChildrenProps)}</div>
      ) : listType === "picture-card" ? (
        <div
          css={getPictureCardContainerStyle(!!disabled)}
          tabIndex={0}
          aria-label={locale?.upload.upload}
        >
          <div css={pictureCardContentStyle}>
            <PlusIcon css={pictureCardIconStyle} />
            <div css={pictureCardTextStyle}>
              {text ?? locale?.upload.upload}
            </div>
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
            <div css={dragTextStyle}>{text ?? locale?.upload.dragTip}</div>
            {tip && <div css={dragTipsStyle}>{tip}</div>}
          </div>
        </div>
      ) : (
        <Button
          {...cloneChildrenProps}
          aria-label={locale?.upload.upload}
          type="button"
          size="medium"
          loading={loading}
          colorScheme={colorScheme}
          variant={variant}
          css={listTypeButtonStyle}
          leftIcon={<UploadIcon />}
        >
          {text ?? locale?.upload.upload}
        </Button>
      )}
    </div>
  )
}

export default TriggerNode
