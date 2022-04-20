import React, { useMemo } from "react"
import {
  SandpackPredefinedTemplate,
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
} from "@codesandbox/sandpack-react"
import "@codesandbox/sandpack-react/dist/index.css"
import { useColorMode } from "@docusaurus/theme-common"

interface IProps {
  template: SandpackPredefinedTemplate
  code: string
  packages: Record<string, string>
  importStatement: string
}

const defaultCode = `<div>Hello,illa-design</div>`

const SandpackPro: React.FC<IProps> = (props) => {
  const {
    code = defaultCode,
    template = "react",
    packages,
    importStatement = "",
  } = props

  const { isDarkTheme } = useColorMode()

  const codeWrapper = useMemo(() => {
    return `${importStatement}

export default function App() {
  return (${code}
  )
}`
  }, [importStatement, code])

  return (
    <SandpackProvider
      template={template}
      customSetup={{
        dependencies: packages,
        files: {
          "/App.tsx": codeWrapper,
        },
      }}
    >
      <SandpackLayout
        style={{ display: "block" }}
        theme={isDarkTheme ? "dark" : "light"}
      >
        <SandpackPreview />
        <SandpackCodeEditor
          showTabs
          showLineNumbers
          showInlineErrors
          closableTabs
        />
      </SandpackLayout>
    </SandpackProvider>
  )
}

export default SandpackPro
