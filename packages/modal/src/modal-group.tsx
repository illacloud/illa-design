import { FC, useEffect, useMemo, useState } from "react"
import { modalStore } from "./modal-store"
import { ModalProps } from "./interface"
import { Modal } from "./modal"

export const ModalGroup: FC = () => {
  const [modalList, setModalList] = useState<ModalProps[]>([])

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
          key={modal.id}
          onCancel={() => {
            if (modal.id) {
              modalStore.update(modal.id, {
                ...modal,
                visible: false,
              })
            }
          }}
          onOk={() => {
            if (modal.id) {
              modalStore.update(modal.id, {
                ...modal,
                visible: false,
              })
            }
          }}
          afterClose={() => {
            if (modal.id) {
              modalStore.remove(modal.id)
            }
          }}
          {...modal}
        />
      )
    })
  }, [modalList])

  return <>{modals}</>
}
