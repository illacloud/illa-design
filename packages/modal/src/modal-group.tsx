import { FC, useEffect, useMemo, useState } from "react"
import { modalStore } from "./modal-store"
import { ModalShowProps } from "./interface"
import { Modal } from "./modal"
import { omit } from "@illa-design/system"

export const ModalGroup: FC = () => {
  const [modalList, setModalList] = useState<ModalShowProps[]>([])

  useEffect(() => {
    const listener = modalStore.subscribe(() => {
      setModalList([...modalStore.getModals()])
    })
    return () => {
      modalStore.unSubscribe(listener.listenerId)
    }
  }, [])

  const modals = useMemo(() => {
    return modalList.map((modal) => {
      return (
        <Modal
          {...omit(modal, ["blockOkHide", "blockCancelHide"])}
          key={modal.id}
          onCancel={() => {
            modal.onCancel?.()
            if (modal.blockCancelHide != true) {
              if (modal.id) {
                modalStore.update(modal.id, {
                  ...modal,
                  visible: false,
                })
              }
            }
          }}
          onOk={() => {
            modal.onOk?.()
            if (modal.blockOkHide != true) {
              if (modal.id) {
                modalStore.update(modal.id, {
                  ...modal,
                  visible: false,
                })
              }
            }
          }}
          afterClose={() => {
            modal.afterClose?.()
            if (modal.id) {
              modalStore.remove(modal.id)
            }
          }}
        />
      )
    })
  }, [modalList])

  return <>{modals}</>
}
