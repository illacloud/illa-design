import { useState, useImperativeHandle, forwardRef, ReactElement } from "react"
import { HolderRef } from "../interface"

export const ContextHolderElement = forwardRef<HolderRef>((_props, ref) => {
  const [instances, setInstances] = useState<ReactElement[]>([])

  function addInstance(ins: ReactElement) {
    setInstances((originInstances) => [...originInstances, ins])
  }

  function removeInstance(ins: ReactElement) {
    setInstances((originInstances) =>
      originInstances.filter((originIns) => ins !== originIns),
    )
  }

  useImperativeHandle(ref, () => ({
    addInstance,
    removeInstance,
  }))

  return <>{instances}</>
})

ContextHolderElement.displayName = "ContextHolderElement"
