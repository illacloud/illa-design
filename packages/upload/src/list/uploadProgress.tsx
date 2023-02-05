import React, { FC, KeyboardEvent, useContext } from "react"
import { STATUS, UploadProgressProps } from "../interface"
import { Progress } from "@illa-design/progress"
import {
  UploadIcon,
  SuccessIcon,
  CaretRightIcon,
  CloseIcon,
} from "@illa-design/icon"
import { isFunction } from "@illa-design/system"
import {
  ConfigProviderContext,
  ConfigProviderProps,
} from "@illa-design/config-provider"
import {
  successIconStyle,
  uploadProgressFailStyle,
  uploadProgressStatus,
  uploadProgressStyle,
} from "../style"

const UploadProgress: FC<UploadProgressProps> = (props) => {
  const { file, progressProps, progressRender, onReupload, onUpload, onAbort } =
    props
  const { locale } = useContext<ConfigProviderProps>(ConfigProviderContext)
  const { status, percent = 0 } = file
  const progressStatus =
    status === STATUS.FAIL
      ? "error"
      : status === STATUS.SUCCESS
      ? "success"
      : "normal"

  const handleKeyDown = (
    event: KeyboardEvent<HTMLSpanElement>,
    callback?: () => void,
  ) => {
    const keyCode = event.code
    if (keyCode === "Enter") {
      callback?.()
    }
  }

  const handleFileReupload = () => {
    onReupload && onReupload(file)
  }

  const handleFileUpload = () => {
    onUpload && onUpload(file)
  }

  const handleFileAbort = () => {
    onAbort && onAbort(file)
  }

  const dom = (
    <>
      {status === STATUS.FAIL && props.reuploadIcon !== null && (
        <span
          onClick={handleFileReupload}
          css={uploadProgressFailStyle}
          tabIndex={0}
          role="button"
          aria-label={locale?.upload.reupload}
          onKeyDown={(e) => handleKeyDown(e, handleFileReupload)}
        >
          {props.reuploadIcon ||
            (props.listType === "picture-card" ? (
              <UploadIcon />
            ) : (
              locale?.upload.reupload || "click to retry"
            ))}
        </span>
      )}

      {status === STATUS.SUCCESS && props.successIcon !== null && (
        <span css={successIconStyle}>
          {props.successIcon || <SuccessIcon />}
        </span>
      )}

      {status !== STATUS.SUCCESS && status !== STATUS.FAIL && (
        <div css={uploadProgressStatus}>
          <Progress
            showText={false}
            type="miniCircle"
            w="16px"
            h="16px"
            status={progressStatus}
            percent={percent}
            color="blue"
            trailColor="blackAlpha"
            {...progressProps}
          />
          {status === STATUS.INIT && props.startIcon !== null && (
            <span
              css={uploadProgressStyle}
              tabIndex={0}
              role="button"
              aria-label={locale?.upload.start}
              onClick={handleFileUpload}
              onKeyDown={(e) => handleKeyDown(e, handleFileUpload)}
            >
              {props.startIcon || <CaretRightIcon />}
            </span>
          )}

          {status === STATUS.UPLOADING && props.cancelIcon !== null && (
            <span
              css={uploadProgressStyle}
              onClick={handleFileAbort}
              tabIndex={0}
              aria-label={locale?.upload.cancel}
              onKeyDown={(e) => handleKeyDown(e, handleFileAbort)}
            >
              {props.cancelIcon || <CloseIcon />}
            </span>
          )}
        </div>
      )}
    </>
  )

  return isFunction(progressRender) ? progressRender(file, dom) : dom
}

export default UploadProgress
