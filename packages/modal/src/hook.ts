import { v4 } from "uuid"
import { ModalShowProps } from "./interface"
import { ModalHandler, modalStore } from "./modal-store"

const showImpl = (modal: ModalShowProps) => {
  if (!modal.id) {
    modal.id = v4()
  }
  if (!modal.visible) {
    modal.visible = true
  }
  modalStore.add(modal)
  return modal.id
}

const findModal = (id: string) => {
  return modalStore.getModals().find((value) => {
    return value.id === id
  })
}

const handler = {
  info: (modal: ModalShowProps) => {
    modal.type = "info"
    return showImpl(modal)
  },
  error: (modal: ModalShowProps) => {
    modal.type = "error"
    return showImpl(modal)
  },
  success: (modal: ModalShowProps) => {
    modal.type = "success"
    return showImpl(modal)
  },
  warning: (modal: ModalShowProps) => {
    modal.type = "warning"
    return showImpl(modal)
  },
  getModalById: findModal,
  update: (id: string, modal: ModalShowProps) => {
    modalStore.update(id, {
      ...findModal(id),
      ...modal,
    })
  },
  close: (id: string) => {
    const modal = findModal(id)
    modalStore.update(id, {
      ...modal,
      visible: false,
      afterClose: () => {
        modal?.afterClose?.()
        modalStore.remove(id)
      },
    })
  },
  show: showImpl,
} as ModalHandler

export function useModal(): ModalHandler {
  return handler
}

export const createModal = useModal
