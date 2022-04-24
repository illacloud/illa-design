const path = require("path")
const fs = require("fs")

const TARGET_BASE_PATH = path.resolve(__dirname, "../docs")
const TARGET_I18N_PATH = path.resolve(TARGET_BASE_PATH, "i18n")
const COMPONENT_BASE_PATH = path.resolve(__dirname, "../packages")

const FILE_REG = /^README\w*.md$/

const COMPONENTS_MAP_CATEGORY = {
  button: "GENERAL",
  icon: "GENERAL",
  typography: "GENERAL",
  link: "GENERAL",
  divider: "LAYOUT",
  grid: "LAYOUT",
  space: "LAYOUT",
  layout: "LAYOUT",
  tag: "DATA-DISPLAY",
  image: "DATA-DISPLAY",
  avatar: "DATA-DISPLAY",
  tooltip: "DATA-DISPLAY",
  description: "DATA-DISPLAY",
  list: "DATA-DISPLAY",
  tabs: "DATA-DISPLAY",
  table: "DATA-DISPLAY",
  popover: "DATA-DISPLAY",
  statistic: "DATA-DISPLAY",
  badge: "DATA-DISPLAY",
  card: "DATA-DISPLAY",
  tree: "DATA-DISPLAY",
  calendar: "DATA-DISPLAY",
  empty: "DATA-DISPLAY",
  comment: "DATA-DISPLAY",
  collapse: "DATA-DISPLAY",
  timeline: "DATA-DISPLAY",
  radio: "DATA-INPUT",
  input: "DATA-INPUT",
  checkbox: "DATA-INPUT",
  select: "DATA-INPUT",
  form: "DATA-INPUT",
  cascader: "DATA-INPUT",
  datepicker: "DATA-INPUT",
  timepicker: "DATA-INPUT",
  upload: "DATA-INPUT",
  switch: "DATA-INPUT",
  "input-number": "DATA-INPUT",
  "input-tag": "DATA-INPUT",
  "tree-select": "DATA-INPUT",
  slider: "DATA-INPUT",
  rate: "DATA-INPUT",
  alert: "FEEDBACK",
  drawer: "FEEDBACK",
  message: "FEEDBACK",
  modal: "FEEDBACK",
  notification: "FEEDBACK",
  popconfirm: "FEEDBACK",
  progress: "FEEDBACK",
  skeleton: "FEEDBACK",
  result: "FEEDBACK",
  spin: "FEEDBACK",
  menu: "NAVIGATION",
  pagination: "NAVIGATION",
  dropdown: "NAVIGATION",
  breadcrumb: "NAVIGATION",
  "page-header": "NAVIGATION",
  steps: "NAVIGATION",
  affix: "OTHERS",
  trigger: "OTHERS",
  "back-top": "OTHERS",
  "config-provider": "OTHERS",
  anchor: "OTHERS",
}

const EXT_COMPONENT_LIST = ["react", "system", "theme"]

function mkdirDir(dir) {
  if (fs.existsSync(dir)) {
    return true
  } else {
    if (mkdirDir(path.dirname(dir))) {
      fs.mkdirSync(dir)
      return true
    }
  }
}

function copyFile(source, target) {
  let targetDir = path.dirname(target)
  if (mkdirDir(targetDir)) {
    fs.writeFileSync(target, fs.readFileSync(source))
  }
}

function getTargetPath(basePath, language, ...others) {
  if (language) {
    return path.join(basePath, language, ...others)
  }
  return path.join(basePath, ...others)
}

function run() {
  let componentDirList = fs.readdirSync(COMPONENT_BASE_PATH)
  componentDirList.forEach((compName) => {
    if (EXT_COMPONENT_LIST.includes(compName)) return
    let compPath = path.join(COMPONENT_BASE_PATH, compName)
    let stat = fs.statSync(compPath)
    if (!stat.isDirectory()) return
    let fileList = fs.readdirSync(compPath)
    fileList.forEach((fileName) => {
      const readMePath = path.join(compPath, fileName)
      const extName = path.extname(readMePath)
      const baseName = path.basename(readMePath, extName)
      const category = COMPONENTS_MAP_CATEGORY[compName]
      if (FILE_REG.test(fileName)) {
        const language = baseName.split("_")[1]
        if (language) {
          const lowerLanguage = language.toLocaleLowerCase()
          copyFile(
            readMePath,
            getTargetPath(
              TARGET_I18N_PATH,
              lowerLanguage === "cn" ? "zh-cn" : language,
              `docusaurus-plugin-content-docs/current/COMPONENTS/${
                category ?? "OTHERS"
              }`,
              `${compName}.md`,
            ),
          )
          return
        }
        copyFile(
          readMePath,
          getTargetPath(
            TARGET_BASE_PATH,
            undefined,
            `docs/COMPONENTS/${category ?? "OTHERS"}`,
            `${compName}.md`,
          ),
        )
        copyFile(
          readMePath,
          getTargetPath(
            TARGET_I18N_PATH,
            "en",
            `docusaurus-plugin-content-docs/current/COMPONENTS/${
              category ?? "OTHERS"
            }`,
            `${compName}.md`,
          ),
        )
      }
    })
  })
}

run()
