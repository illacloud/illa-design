const path = require('path');
const fs = require("fs");

const TARGET_BASE_PATH = path.resolve(__dirname, '../docs');
const TARGET_I18N_PATH = path.resolve(TARGET_BASE_PATH, 'i18n');
const COMPONENT_BASE_PATH = path.resolve(__dirname, '../packages');

const FILE_REG = /^README\w*.md$/;

function copyFile(source, target) {
  let targetDir = path.dirname(target);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir);
  }
  fs.writeFileSync(target, fs.readFileSync(source));
}

function getTargetPath(basePath, language, ...others) {
  if (language) {
    return path.join(basePath, language, ...others);
  }
  return path.join(basePath, ...others);
}

function run() {
  let componentDirList = fs.readdirSync(COMPONENT_BASE_PATH);
  componentDirList.forEach((compName) => {
    let compPath = path.join(COMPONENT_BASE_PATH, compName);
    let stat = fs.statSync(compPath);
    if (!stat.isDirectory()) return;
    let fileList = fs.readdirSync(compPath);
    fileList.forEach((fileName) => {
      const readMePath = path.join(compPath, fileName);
      const extName = path.extname(readMePath);
      const baseName = path.basename(readMePath, extName);
      if (FILE_REG.test(fileName)) {
        const language = baseName.split("_")[1];
        if (language) {
          const lowerCaseLanguage = language.toLowerCase();
          copyFile(readMePath, getTargetPath(TARGET_I18N_PATH, lowerCaseLanguage === "cn" ? "zh-cn" : lowerCaseLanguage, "docusaurus-plugin-content-docs/current", `${compName}.md`));
          return;
        }
        copyFile(readMePath, getTargetPath(TARGET_BASE_PATH, undefined, "docs", `${compName}.md`));
        copyFile(readMePath, getTargetPath(TARGET_I18N_PATH, "en", "docusaurus-plugin-content-docs/current", `${compName}.md`));
      }
    })
  });
}


run();
