import { FC, useContext } from "react"
import { STATUS, UploadProgressProps } from "../interface"
import { Progress } from "@illa-design/progress"
import { UploadIcon, SuccessIcon, VideoPlayIcon } from "@illa-design/icon"
import { isFunction } from "@illa-design/system"
import {
  ConfigProviderContext,
  ConfigProviderProps,
  def,
} from "@illa-design/config-provider"
import {
  successIconStyle,
  uploadProgressFailStyle,
  uploadProgressStatus,
  uploadProgressStyle,
} from "../style"
import { handleKeyDown } from "../utils"
import { globalColor, illaPrefix } from "@illa-design/theme"

const UploadProgress: FC<UploadProgressProps> = (props) => {
  const { file, progressProps, progressRender, onReupload, onUpload } = props
  const configProviderProps = useContext<ConfigProviderProps>(
    ConfigProviderContext,
  )
  const locale = configProviderProps?.locale?.upload ?? def.upload
  const { status, percent = 0 } = file
  const progressStatus =
    status === STATUS.FAIL
      ? "error"
      : status === STATUS.SUCCESS
      ? "success"
      : "normal"

  const handleFileReupload = () => {
    onReupload && onReupload(file)
  }

  const handleFileUpload = () => {
    onUpload && onUpload(file)
  }

  const startIcon = status === STATUS.INIT && props.startIcon !== null && (
    <span
      css={uploadProgressStyle}
      tabIndex={0}
      role="button"
      aria-label={locale.start}
      onClick={handleFileUpload}
      onKeyDown={(e) => handleKeyDown(e, handleFileUpload)}
    >
      {props.startIcon || <VideoPlayIcon />}
    </span>
  )

  const dom = (
    <>
      {status === STATUS.FAIL && props.reuploadIcon !== null && (
        <span
          onClick={handleFileReupload}
          css={uploadProgressFailStyle}
          tabIndex={0}
          role="button"
          aria-label={locale.retry}
          onKeyDown={(e) => handleKeyDown(e, handleFileReupload)}
        >
          {props.reuploadIcon ||
            (props.listType === "picture-card" ? <UploadIcon /> : locale.retry)}
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
            color={globalColor(`--${illaPrefix}-blue-03`)}
            trailColor={globalColor(`--${illaPrefix}-blue-06`)}
            {...progressProps}
          />
          {startIcon}
        </div>
      )}
    </>
  )

  return isFunction(progressRender) ? progressRender(file, dom) : dom
}

export default UploadProgress
