import { FC, useState } from "react"
import { TreeListProps, NodeInstance } from "./interface"
import { TreeNode } from "./tree-node"
import { List } from "@illa-design/list"
import { listCss } from "./style"
import { AnimatePresence, motion } from "framer-motion"

export const TreeList: FC<TreeListProps> = (props) => {
  const {
    listData = [],
    saveNodeCache,
    checkable,
    loadingMoreKeys,
    ...rest
  } = props

  const variants = {
    initial: {
      opacity: 0,
      height: 0,
    },
    enter: {
      opacity: 1,
      height: "auto",
    },
    exit: {
      opacity: 0,
      height: 0,
    },
  }

  const [testList, setList] = useState([<div>test 01</div>, <div>test 02</div>])

  return (
    <div>
      {/*<button*/}
      {/*  onClick={() => {*/}
      {/*    testList.length === 0*/}
      {/*      ? setList([<div>test 01</div>, <div>test 02</div>])*/}
      {/*      : setList([])*/}
      {/*  }}*/}
      {/*>*/}
      {/*  click up*/}
      {/*</button>*/}
      <AnimatePresence initial={false}>
        {/*{testList?.map((item, index) => (*/}
        {/*  <motion.div*/}
        {/*    key={"test-id" + index}*/}
        {/*    variants={variants}*/}
        {/*    animate={"enter"}*/}
        {/*    initial={"initial"}*/}
        {/*    exit={"exit"}*/}
        {/*    transition={{ duration: 0.7 }}*/}
        {/*  >*/}
        {/*    {item}*/}
        {/*  </motion.div>*/}
        {/*))}*/}
        <List
          _css={listCss}
          data={listData}
          render={(data) => {
            let node: NodeInstance = (
              <TreeNode
                loadingMore={loadingMoreKeys && loadingMoreKeys.has(data.key)}
                _key={data.key}
                expanding={data?.expanding}
                {...data}
                checkable={data.checkable !== false && checkable}
                {...rest}
              />
            )
            saveNodeCache && saveNodeCache(data.key, node)
            return (
              <motion.div
                key={data.key}
                variants={variants}
                animate={"enter"}
                initial={"initial"}
                exit={"exit"}
                transition={{ duration: 0.2 }}
              >
                {node}
              </motion.div>
            )
          }}
          renderRaw={true}
          bordered={false}
          renderKey={(data, index) => {
            return data.key
          }}
        />
      </AnimatePresence>
    </div>
  )
}
