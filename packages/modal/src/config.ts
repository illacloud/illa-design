import type { ModalConfigType } from "./interface"

let modalConfig: ModalConfigType = {
  simple: true,
}

export const setModalConfig = (config: ModalConfigType) => {
  modalConfig = {
    ...modalConfig,
    ...config,
  }
}

export const getModalConfig = (): ModalConfigType => {
  return modalConfig
}

export const destroyList: Array<Function> = []
