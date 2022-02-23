/** @jsxImportSource @emotion/react */
import { forwardRef } from "react"
import { UploadButtonProps, UploadRefType } from "./interface"
import { uploadButtonCss } from "./styles"
import { UploadIcon } from "@illa-design/icon"
import * as React from "react"
import { Button } from "@illa-design/button"

export const TriggerNode = forwardRef<UploadRefType, UploadButtonProps>(
  (props, ref) => {
    const { disabled, autoUpload } = props
    if (autoUpload) {
      return (
        <>
          <Button
            css={uploadButtonCss}
            size={"medium"}
            leftIcon={<UploadIcon />}
          >
            Upload
          </Button>
        </>
      )
    } else {
      return (
        <>
          <Button css={uploadButtonCss} size={"medium"}>
            Select file
          </Button>
          <Button css={uploadButtonCss} size={"medium"}>
            Start Upload
          </Button>
        </>
      )
    }
  },
)
