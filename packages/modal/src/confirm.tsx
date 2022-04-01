import React from "react"
import ReactDOM from "react-dom"
import { Modal } from "./modal"
import { ConfirmProps, ModalReturnProps } from "./interface"
import { destroyList, getModalConfig } from "./config"
import {
  ErrorIcon,
  InfoCircleIcon,
  RightIcon,
  WarningCircleIcon,
} from "@illa-design/icon"
import { applyModalConfirmTitle } from "./style"
import { iconColorMap } from "@illa-design/alert"
import {
  getConfigProviderProps,
  ConfigProvider,
} from "@illa-design/config-provider"

function ConfirmModal(props: ConfirmProps) {
  const { simple } = getModalConfig()
  return (
    <Modal simple={simple} {...props}>
      {props.content}
    </Modal>
  )
}

export const normalizeConfig = (_config: ConfirmProps): ConfirmProps => {
  if (_config.isNotice) {
    let icon = _config.icon
    if (!icon) {
      switch (_config.noticeType) {
        case "info":
          icon = <InfoCircleIcon />
          break
        case "success":
          icon = <RightIcon />
          break
        case "warning":
          icon = <WarningCircleIcon />
          break
        case "error":
          icon = <ErrorIcon />
          break
        default:
          break
      }
    }
    _config.title = (
      <span
        css={applyModalConfirmTitle(
          _config.noticeType as keyof typeof iconColorMap,
        )}
      >
        {icon}
        {_config.title}
      </span>
    )
    _config.hideCancel = true
  } else {
    _config.title = (
      <span>
        {_config.icon !== null && _config.icon}
        {_config.title}
      </span>
    )
  }
  return _config
}

export function confirm(
  config: ConfirmProps,
  renderFunc?: (props: ConfirmProps) => void,
): ModalReturnProps {
  const div = document.createElement("div")
  document.body.appendChild(div)

  const configProviderProps = getConfigProviderProps()

  function render(props: ConfirmProps) {
    ReactDOM.render(
      <ConfigProvider {...configProviderProps}>
        <ConfirmModal {...props} onCancel={onCancel} />
      </ConfigProvider>,
      div,
    )
  }

  const renderFunction = renderFunc || render

  let modalConfig: ConfirmProps = {
    ...config,
    visible: false,
  }
  modalConfig.onOk = () => {
    let ret
    const _onOk = config.onOk
    if (_onOk) {
      ret = _onOk()
    }
    if (ret && ret.then) {
      modalConfig.confirmLoading = true
      renderFunction(modalConfig)
      ret.then(
        () => {
          onCancel(true)
        },
        (e: Error) => {
          console.error(e)
          modalConfig.confirmLoading = false
          renderFunction(modalConfig)
        },
      )
    }
    if (!ret) {
      onCancel(true)
    }
  }
  modalConfig = normalizeConfig(modalConfig)

  modalConfig.visible = true
  renderFunction(modalConfig)

  function destroy() {
    const unmountEle = ReactDOM.unmountComponentAtNode(div)
    if (unmountEle && div.parentNode) {
      div.parentNode.removeChild(div)
    }
    for (let i = 0; i < destroyList.length; i++) {
      const fn = destroyList[i]
      if (fn === close) {
        destroyList.splice(i, 1)
        break
      }
    }
  }

  function onCancel(isOnOk?: boolean) {
    !isOnOk && config.onCancel && config.onCancel()
    modalConfig.visible = false
    modalConfig.afterClose = () => {
      config.afterClose && config.afterClose()
      destroy()
    }
    renderFunction(modalConfig)
  }

  function update(newConfig: ConfirmProps) {
    modalConfig = {
      ...modalConfig,
      title: config.title,
      ...newConfig,
    }

    modalConfig = normalizeConfig(modalConfig)
    renderFunction(modalConfig)
  }

  function close() {
    modalConfig.visible = false
    modalConfig.afterClose = () => {
      config.afterClose && config.afterClose()
      destroy()
    }
    renderFunction(modalConfig)
  }

  destroyList.push(close)

  return {
    close,
    update,
  }
}
