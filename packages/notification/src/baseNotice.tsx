import { Component } from "react"
import { NoticeProps, BaseNoticeState } from "./interface"

function getId(noticeProps: NoticeProps) {
  if (noticeProps.id) {
    return noticeProps.id
  }
  return `illa_notice_id_${Date.now()}`
}

class BaseNotice extends Component<NoticeProps, BaseNoticeState> {
  constructor(props: NoticeProps) {
    super(props)

    this.state = {
      notices: [],
      position: "topRight",
    }
    this.remove = this.remove.bind(this)
  }

  add = (noticeProps: NoticeProps) => {
    const oldNotices = this.state.notices
    // update notice
    if (
      noticeProps.id &&
      oldNotices.findIndex((notice) => notice.id === noticeProps.id) >= 0
    ) {
      this.update(noticeProps)
      return noticeProps.id
    }
    const id: string = getId(noticeProps)
    const newNotices = oldNotices.concat({
      ...noticeProps,
      id,
    })
    this.setState({
      notices: newNotices,
      position: noticeProps.position,
    })
    return id
  }

  update = (newNotice: NoticeProps) => {
    const updatedNotices = this.state.notices.map((oldNotice) => {
      if (newNotice.id === oldNotice.id) {
        newNotice.update = true
        return newNotice
      }
      return oldNotice
    })
    this.setState(
      {
        notices: updatedNotices,
      },
      () => {
        const notices = this.state.notices.map((oldNotice) => {
          if (newNotice.id === oldNotice.id && oldNotice.update) {
            delete oldNotice.update
          }
          return oldNotice
        })
        this.setState({ notices })
      },
    )
  }

  remove(id: string) {
    const newNotices = this.state.notices.filter((notice) => {
      if (notice.id === id) {
        notice.onClose && notice.onClose()
      }
      return notice.id !== id
    })
    this.setState({
      notices: newNotices,
    })
  }

  clear = () => {
    this.setState({
      notices: [],
    })
  }
}

export default BaseNotice
