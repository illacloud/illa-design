import {
  useState,
  useContext,
  PropsWithChildren,
  isValidElement,
  cloneElement,
  useEffect,
  KeyboardEvent,
  DragEvent,
  useCallback,
} from "react"
import { Button } from "@illa-design/button"
import { UploadIcon, AddIcon } from "@illa-design/icon"
import { TriggerNodeProps } from "./interface"
import {
  ConfigProviderContext,
  ConfigProviderProps,
  def,
} from "@illa-design/config-provider"
import { getAcceptedFiles, loopDirectory } from "./utils"
import {
  dragContentContainerStyle,
  dragIconStyle,
  dragTextStyle,
  dragTipsStyle,
  getDragContainerStyle,
  getPictureCardContainerStyle,
  listTypeButtonStyle,
  pictureCardContentStyle,
  pictureCardIconStyle,
  pictureCardTextStyle,
  triggerNodeContainerStyle,
} from "./style"

const TriggerNode = (props: PropsWithChildren<TriggerNodeProps>) => {
  const configProviderProps = useContext<ConfigProviderProps>(
    ConfigProviderContext,
  )
  const locale = configProviderProps?.locale?.upload ?? def.upload
  const [isDragging, setIsDragging] = useState(false)
  const [dragEnterCount, setDragEnterCount] = useState(0)

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

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      const keyCode = event.code
      if (keyCode === "Enter") {
        onClick?.()
      }
    },
    [onClick],
  )

  const handleDragEnter = useCallback(() => {
    setDragEnterCount(dragEnterCount + 1)
  }, [dragEnterCount])

  const handleDragLeave = useCallback(
    (e: DragEvent) => {
      e.preventDefault()
      if (dragEnterCount === 0) {
        setIsDragging(false)
        onDragLeave?.(e)
      } else {
        setDragEnterCount(dragEnterCount - 1)
      }
    },
    [dragEnterCount, onDragLeave],
  )

  const handleDragOver = useCallback(
    (e: DragEvent) => {
      e.preventDefault()
      if (!isDragging) {
        setIsDragging(true)
        onDragOver?.(e)
      }
    },
    [isDragging, onDragOver],
  )

  const handleDrop = useCallback(
    (e: DragEvent) => {
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
    },
    [drag, directory, onDrop, accept, onDragFiles, multiple],
  )

  const events =
    disabled || loading
      ? {}
      : {
          onDragEnter: handleDragEnter,
          onDragLeave: handleDragLeave,
          onDragOver: handleDragOver,
          onDrop: handleDrop,
          onClick: onClick,
          onKeyDown: handleKeyDown,
        }

  if (children === null) {
    return null
  }

  return (
    <div css={triggerNodeContainerStyle} {...events}>
      {isValidElement(children) ? (
        <div>{cloneElement(children, cloneChildrenProps)}</div>
      ) : listType === "picture-card" ? (
        <div
          css={getPictureCardContainerStyle(!!disabled)}
          tabIndex={0}
          aria-label={locale.upload}
        >
          <div css={pictureCardContentStyle}>
            <span css={pictureCardIconStyle}>
              <AddIcon />
            </span>
            <div css={pictureCardTextStyle}>{text ?? locale.upload}</div>
          </div>
        </div>
      ) : drag ? (
        <div
          tabIndex={0}
          aria-label={locale.dragTip}
          css={getDragContainerStyle(!!disabled)}
        >
          <div css={dragIconStyle}>
            <AddIcon />
          </div>
          <div css={dragContentContainerStyle}>
            <div css={dragTextStyle}>{text ?? locale.dragTip}</div>
            {tip && <div css={dragTipsStyle}>{tip}</div>}
          </div>
        </div>
      ) : (
        <Button
          {...cloneChildrenProps}
          aria-label={locale.upload}
          type="button"
          size="medium"
          loading={loading}
          colorScheme={colorScheme}
          variant={variant}
          css={listTypeButtonStyle}
          leftIcon={<UploadIcon />}
        >
          {text ?? locale.upload}
        </Button>
      )}
    </div>
  )
}

export default TriggerNode
