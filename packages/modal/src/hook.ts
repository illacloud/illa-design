import { v4 } from "uuid"
import { ModalProps } from "./interface"
import { ModalHandler, modalStore } from "./modal-store"

const showImpl = (modal: ModalProps) => {
  if (!modal.id) {
    modal.id = v4()
  }
  if (!modal.visible) {
    modal.visible = true
  }
  modalStore.add(modal)
  return modal.id
}

const handler = {
  info: (modal: ModalProps) => {
    modal.type = "info"
    return showImpl(modal)
  },
  error: (modal: ModalProps) => {
    modal.type = "error"
    return showImpl(modal)
  },
  success: (modal: ModalProps) => {
    modal.type = "success"
    return showImpl(modal)
  },
  warning: (modal: ModalProps) => {
    modal.type = "warning"
    return showImpl(modal)
  },
  update: (id: string, modal: ModalProps) => {
    modalStore.update(id, modal)
  },
  show: showImpl,
} as ModalHandler

export function useModal(): ModalHandler {
  return handler
}

export const createModal = useModal
