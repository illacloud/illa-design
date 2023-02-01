import React, {
  useContext,
  ReactNode,
  useState,
  useMemo,
  Fragment,
} from "react"
// import { CSSTransition, TransitionGroup } from "react-transition-group"
import PictureItem from "./pictureItem"
import TextItem from "./textItem"
import {
  ConfigProviderContext,
  ConfigProviderProps,
} from "@illa-design/config-provider"
import { STATUS, UploadListProps } from "../interface"
import { isFunction } from "@illa-design/system"
import {
  getUploadListContainerStyle,
  listItemStyle,
  uploadListItemStyle,
} from "../style"

const UploadList = (props: UploadListProps) => {
  const { locale } = useContext<ConfigProviderProps>(ConfigProviderContext)
  const {
    listType,
    fileList = [],
    renderUploadList,
    renderUploadItem,
    ...rest
  } = props
  // hide image preview when previewCurrent = -1
  // const [previewCurrent, setPreviewCurrent] = useState(-1)
  // const [previewOpen, setPreviewOpen] = useState(false)
  // const [previewImage, setPreviewImage] = useState("")
  // const [previewTitle, setPreviewTitle] = useState("")

  // const srcList = useMemo(() => {
  //   return fileList
  //     .map((file) => {
  //       let url = file.url
  //
  //       if (
  //         file.url === undefined &&
  //         [STATUS.init, STATUS.success].indexOf(file.status) > -1
  //       ) {
  //         url =
  //           file.originFile &&
  //           isFunction(URL.createObjectURL) &&
  //           URL.createObjectURL(file.originFile)
  //       }
  //
  //       return url
  //     })
  //     .filter(Boolean)
  // }, [fileList])

  // const handleCancel = () => setPreviewOpen(false)

  if (isFunction(renderUploadList)) {
    return (
      <div css={getUploadListContainerStyle(listType)}>
        {renderUploadList(fileList, rest)}
      </div>
    )
  }

  // const updatePreviewCurrent = (current: number) => {
  //   if (props.imagePreview) {
  //     setPreviewCurrent(current)
  //   }
  // }

  const fileListNodes = fileList?.map((file, index) => {
    let originNode: ReactNode =
      listType === "picture-card" ? (
        <div css={listItemStyle}>
          <PictureItem
            {...props}
            onPreview={(file) => {
              // updatePreviewCurrent(index)
              props.onPreview && props.onPreview?.(file)
            }}
            file={file}
            locale={locale}
          />
        </div>
      ) : (
        <TextItem {...props} file={file} locale={locale} />
      )
    if (isFunction(renderUploadItem)) {
      originNode = renderUploadItem(originNode, file, fileList)
    }

    return listType === "picture-card" ? (
      // <CSSTransition
      //   key={file.uid}
      //   timeout={{ enter: 200, exit: 400 }}
      //   classNames={`${prefixCls}-slide-inline`}
      //   onEntered={(e) => {
      //     e.style.width = ""
      //   }}
      //   onExit={(e) => {
      //     e.style.width = `${e.scrollWidth}px`
      //   }}
      //   onExiting={(e) => {
      //     e.style.width = 0
      //   }}
      //   onExited={(e) => {
      //     e.style.width = 0
      //   }}
      // >
      <Fragment key={index}>{originNode}</Fragment>
    ) : (
      // </CSSTransition>
      // <CSSTransition
      //   key={file.uid}
      //   timeout={{ enter: 200, exit: 400 }}
      //   classNames={`${prefixCls}-slide-up`}
      //   onExit={(e) => {
      //     e.style.height = `${e.scrollHeight}px`
      //   }}
      //   onExiting={(e) => {
      //     e.style.height = 0
      //   }}
      //   onExited={(e) => {
      //     e.style.height = 0
      //   }}
      // >
      <div key={index} css={uploadListItemStyle}>
        {originNode}
      </div>
      // </CSSTransition>
    )
  })
  return (
    <div css={getUploadListContainerStyle(listType)}>
      {/*<TransitionGroup>*/}
      {fileListNodes}
      {/*</TransitionGroup>*/}

      {/*{listType === "picture-card" && props.imagePreview && (*/}
      {/*  <Modal*/}
      {/*    visible={previewOpen}*/}
      {/*    title={previewTitle}*/}
      {/*    footer={false}*/}
      {/*    onCancel={handleCancel}*/}
      {/*  >*/}
      {/*    <img alt="example" style={{ width: "100%" }} src={previewImage} />*/}
      {/*  </Modal>*/}
      {/*)}*/}
    </div>
  )
}

UploadList.displayName = "UploadList"

export default UploadList
