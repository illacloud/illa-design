import { FC, useContext } from "react"
import { ChildrenNodeProps, UploadItem } from "./interface"
import {
  noAutoUploadButtonCss,
  applyImageUploadContainerCss,
  picUploaded,
  picUploadedEditMask,
  imageUploadTextCss,
} from "./style"
import { AddIcon, PenIcon, UploadIcon } from "@illa-design/icon"
import * as React from "react"
import { Button } from "@illa-design/button"
import { Image } from "@illa-design/image"
import { TriggerNode } from "./drag-uploader"
import {
  ConfigProviderContext,
  ConfigProviderProps,
  def,
} from "@illa-design/config-provider"

export const UploadInput: FC<ChildrenNodeProps> = (props) => {
  const {
    disabled,
    onClick = () => {},
    handleClickSelectedButton,
    handleClickUploadButton,
    autoUpload,
    drag,
    tip,
    onFileDragged,
    pictureUpload,
    currentUploadItem,
    accept,
  } = props

  const configProviderProps = useContext<ConfigProviderProps>(
    ConfigProviderContext,
  )

  const locale = configProviderProps?.locale?.upload ?? def.upload

  const uploadText = locale["upload"]
  const selectText = locale["selectFile"]
  const beginUpload = locale["beginUpload"]

  const imageUploader = (item?: UploadItem) => {
    return (
      <span
        onClick={() => {
          onClick()
        }}
      >
        {item ? (
          <div css={picUploaded}>
            <Image
              width={100}
              height={100}
              radius={"2px"}
              src={
                item.url
                  ? item.url
                  : item.originFile &&
                    (window.URL ? URL : webkitURL).createObjectURL(
                      item.originFile,
                    )
              }
            />
            <div css={picUploadedEditMask}>
              <PenIcon />
            </div>
          </div>
        ) : (
          <span css={applyImageUploadContainerCss(disabled)}>
            <AddIcon />
            <span css={imageUploadTextCss}>Upload</span>
          </span>
        )}
      </span>
    )
  }

  const dragNode = (
    <TriggerNode
      disabled={disabled}
      tip={tip}
      draggable
      onClick={() => {
        onClick()
      }}
      accept={accept}
      onFileDragged={(files) => {
        onFileDragged && onFileDragged(files)
      }}
    />
  )

  const autoUploadButton = (
    <span>
      <Button
        onClick={() => {
          onClick()
        }}
        disabled={disabled}
        size={"medium"}
        leftIcon={<UploadIcon />}
      >
        {uploadText}
      </Button>
    </span>
  )

  const notAutoUploadButtons = (
    <span>
      <Button
        disabled={disabled}
        onClick={() => {
          handleClickSelectedButton && handleClickSelectedButton()
        }}
        css={noAutoUploadButtonCss}
        size={"medium"}
        leftIcon={<UploadIcon />}
      >
        {selectText}
      </Button>
      <Button
        disabled={disabled}
        onClick={() => {
          handleClickUploadButton && handleClickUploadButton()
        }}
        colorScheme={"gray"}
        size={"medium"}
        leftIcon={<UploadIcon />}
      >
        {beginUpload}
      </Button>
    </span>
  )
  if (pictureUpload) {
    return imageUploader(currentUploadItem)
  } else if (drag) {
    return dragNode
  } else if (!autoUpload) {
    return notAutoUploadButtons
  }
  return autoUploadButton
}
