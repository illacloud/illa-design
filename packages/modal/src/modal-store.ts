import { v4 } from "uuid"
import { ModalProps } from "./interface"

export interface ModalHandler {
  info: (message: ModalProps) => string
  error: (message: ModalProps) => string
  success: (message: ModalProps) => string
  warning: (message: ModalProps) => string
  show: (message: ModalProps) => string
  update: (modalId: string, modal: ModalProps) => void
}

export interface SubListener {
  listenerId: string
  onStoreChange: () => void
}

export interface ModalStoreHandler {
  getModals: () => ModalProps[]
  setModals: (modals: ModalProps[]) => void
  subscribe: (onStoreChange: () => void) => SubListener
  unSubscribe: (listenerId: string) => void
  add: (modal: ModalProps) => void
  remove: (modalId: string) => void
  update: (modalId: string, modal: ModalProps) => void
}

export interface ModalStore {
  listener: SubListener[]
  modals: ModalProps[]
}

const store = {
  listener: [],
  modals: [],
} as ModalStore

function createModalStore(): ModalStoreHandler {
  return {
    getModals: () => {
      return store.modals
    },
    setModals: (modals: ModalProps[]) => {
      store.modals = modals
      store.listener.forEach((listener) => {
        listener.onStoreChange()
      })
    },
    subscribe: (change) => {
      const listener = {
        listenerId: v4(),
        onStoreChange: change,
      } as SubListener
      store.listener.push(listener)
      listener.onStoreChange()
      return listener
    },
    unSubscribe: (listenerId) => {
      store.listener.splice(
        store.listener.findIndex(
          (listener) => listener.listenerId === listenerId,
        ),
        1,
      )
    },
    update: (modalId, modal) => {
      const index = store.modals.findIndex((modal) => modal.id === modalId)
      if (index != -1) {
        store.modals[index] = modal
      }
      store.listener.forEach((listener) => {
        listener.onStoreChange()
      })
    },
    add: (modal) => {
      store.modals.push(modal)
      store.listener.forEach((listener) => {
        listener.onStoreChange()
      })
    },
    remove: (modalId) => {
      const index = store.modals.findIndex((modal) => modal.id === modalId)
      if (index != -1) {
        store.modals.splice(index, 1)
        store.listener.forEach((listener) => {
          listener.onStoreChange()
        })
      }
    },
  } as ModalStoreHandler
}

export const modalStore = createModalStore()
