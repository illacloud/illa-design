export function isFileAccept(file?: File, accept?: string) {
  if (file && accept) {
    const acceptArr = accept.split(",")
    const fileName = file.name
    const fileType = file.type
    const baseType = fileType.replace(/\/.*$/, "")

    return acceptArr.some((type) => {
      const validType = type.trim()
      if (/^\*(\/\*)?$/.test(type)) {
        return true
      }

      if (validType.charAt(0) === ".") {
        const lowerFileName = fileName.toLowerCase()
        const lowerType = validType.toLowerCase()

        let affixList = [lowerType]
        if (lowerType === ".jpg" || lowerType === ".jpeg") {
          affixList = [".jpg", ".jpeg"]
        }
        return affixList.some((affix) => lowerFileName.endsWith(affix))
      }

      if (/\/\*$/.test(validType)) {
        return baseType === validType.replace(/\/.*$/, "")
      }

      return fileType === validType
    })
  }
  return true
}
