/** @jsxImportSource @emotion/react */
import { forwardRef, ReactNode } from "react"
import { UploadProps } from "./interface"

import {
  applyIconCss,
  applyImageUploadTextCss,
  imageUploadContainerCss,
  uploadContainerCss,
} from "./styles"
import * as React from "react"
import { MinusIcon } from "@illa-design/icon/src"
import { UploadElementV2 } from "./upload-element-v2"

export const ImageUpload = forwardRef<HTMLDivElement, UploadProps>(
  (props, ref) => {
    const {
      defaultFileList,
      fileList,
      listType,
      drag,
      disabled = false,
      accept,
      customRequest,
      directory,
      action,
      multiple,
      beforeUpload,
    } = props

    return (
      <UploadElementV2
        css={uploadContainerCss}
        accept={accept}
        draggable={true}
        directory={directory}
        customRequest={customRequest}
        beforeUpload={beforeUpload}
        action={action}
        disabled={disabled}
        multiple={multiple}
      >
        <span css={imageUploadContainerCss}>
          <MinusIcon css={applyIconCss(disabled)} />
          <span css={applyImageUploadTextCss(disabled)}>Upload</span>
        </span>
      </UploadElementV2>
    )
  },
)
