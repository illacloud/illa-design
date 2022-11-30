import { v4 } from "uuid"
import { ModalProps, ModalShowProps } from "./interface"

export interface ModalHandler {
  info: (message: ModalShowProps) => string
  error: (message: ModalShowProps) => string
  success: (message: ModalShowProps) => string
  warning: (message: ModalShowProps) => string
  show: (message: ModalShowProps) => string
  update: (modalId: string, modal: ModalShowProps) => void
  close: (modalId: string) => void
  getModalById: (modalId: string) => ModalProps | undefined
}

export interface SubListener {
  listenerId: string
  onStoreChange: () => void
}

export interface ModalStoreHandler {
  getModals: () => ModalShowProps[]
  setModals: (modals: ModalShowProps[]) => void
  subscribe: (onStoreChange: () => void) => SubListener
  unSubscribe: (listenerId: string) => void
  add: (modal: ModalShowProps) => void
  remove: (modalId: string) => void
  update: (modalId: string, modal: ModalShowProps) => void
}

export interface ModalStore {
  listener: SubListener[]
  modals: ModalShowProps[]
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
    setModals: (modals: ModalShowProps[]) => {
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
        store.listener.forEach((listener) => {
          listener.onStoreChange()
        })
      }
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
