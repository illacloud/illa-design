import React, { useState, useImperativeHandle, forwardRef } from "react"
import { Modal } from "../modal"
import { ConfirmProps } from "../interface"

export const HookModal = forwardRef<unknown, ConfirmProps>((props, ref) => {
  const [visible, setVisible] = useState(true)
  const [config, setConfig] = useState<ConfirmProps>(props)

  useImperativeHandle(ref, () => ({
    update: setConfig,
    close: () => {
      setVisible(false)
    },
  }))

  function onOk() {
    const ret = config.onOk && config.onOk()
    if (ret && ret.then) {
      setConfig({
        ...config,
        confirmLoading: true,
      })
      ret.then(
        () => {
          setVisible(false)
        },
        (e: Error) => {
          console.error(e)
          setConfig({
            ...config,
            confirmLoading: false,
          })
        },
      )
    }
    if (!ret) {
      setVisible(false)
    }
  }

  function onCancel() {
    config.onCancel && config.onCancel()
    setVisible(false)
  }

  return (
    <Modal {...config} simple visible={visible} onOk={onOk} onCancel={onCancel}>
      {config.content}
    </Modal>
  )
})
