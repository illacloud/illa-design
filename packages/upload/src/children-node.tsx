/** @jsxImportSource @emotion/react */
import { forwardRef } from "react"
import { ChildrenNodeProps, UploadItem, UploadRefType } from "./interface"
import {
  applyIconCss,
  applyImageUploadTextCss,
  imageSizeCss,
  noAutoUploadButtonCss,
  applyImageUploadContainerCss,
} from "./styles"
import { Image } from "@illa-design/image"
import { MinusIcon, UploadIcon } from "@illa-design/icon"
import * as React from "react"
import { Button } from "@illa-design/button"
import { TriggerNode } from "./drag-uploader"

export const ChildrenNode = forwardRef<UploadRefType, ChildrenNodeProps>(
  (props, ref) => {
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
    } = props

    const imageUploader = (item?: UploadItem) => {
      return (
        <span
          onClick={() => {
            onClick()
          }}
          css={applyImageUploadContainerCss(disabled)}
        >
          {item ? (
            <Image
              css={imageSizeCss}
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
          ) : (
            <>
              {" "}
              <MinusIcon css={applyIconCss(disabled)} />
              <span css={applyImageUploadTextCss(disabled)}>Upload</span>
            </>
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
          Upload
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
          Select file
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
          Start upload
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
  },
)
