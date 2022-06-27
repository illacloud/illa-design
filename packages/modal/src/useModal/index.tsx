import { createRef, ReactElement } from "react"
import { ContextHolderElement } from "./contextHolder"
import { HookModal } from "./hookModal"
import { normalizeConfig } from "../confirm"
import { destroyList } from "../config"
import {
  HolderRef,
  ConfirmProps,
  modalFunctionsType,
  ModalReturnProps,
} from "../interface"
import { AlertType as ConfirmType } from "@illa-design/alert"

function useModal(): [modalFunctionsType, ReactElement] {
  const contextHolderRef = createRef<HolderRef>()
  const holderEle = <ContextHolderElement ref={contextHolderRef} />

  let modalId = 0

  function addNewModal(config: ConfirmProps): ModalReturnProps {
    modalId += 1
    const modalRef = createRef<ModalReturnProps>()

    function afterClose() {
      config.afterClose && config.afterClose()
      removeModalInstance()
    }

    const simpleModal = (
      <HookModal
        key={modalId}
        ref={modalRef}
        {...normalizeConfig(config)}
        afterClose={afterClose}
      />
    )

    contextHolderRef.current?.addInstance(simpleModal)

    function removeModalInstance() {
      contextHolderRef.current?.removeInstance(simpleModal)
    }

    function close() {
      modalRef.current!.close()
    }

    destroyList.push(close)

    return {
      close,
      update: modalRef.current?.update!,
    }
  }

  const modalFuncs: modalFunctionsType = {
    confirm: (config: ConfirmProps) => {
      return addNewModal({
        ...config,
      })
    },
  } as modalFunctionsType

  const confirmTypes: ConfirmType[] = ["info", "success", "warning", "error"]
  confirmTypes.forEach((type) => {
    modalFuncs[type] = (config: ConfirmProps) => {
      return addNewModal({
        ...config,
        isNotice: true,
        noticeType: type,
      })
    }
  })

  return [modalFuncs, holderEle]
}

export default useModal
