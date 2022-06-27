export const isAcceptFile = (file: File, accept?: string): boolean => {
  if (accept && file) {
    let accepts: string[]

    accepts = accept
      .split(",")
      .map((x) => x.trim())
      .filter((x) => x)

    const fileExtension =
      file.name.indexOf(".") > -1 ? file.name.split(".").pop() : ""
    return accepts.some((type) => {
      const text = type && type.toLowerCase()
      const fileType = (file.type || "").toLowerCase()
      if (text === fileType) {
        return true
      }
      if (/\/\*/.test(text)) {
        return fileType.replace(/\/.*$/, "") === text.replace(/\/.*$/, "")
      }
      if (/\..*/.test(text)) {
        return text === `.${fileExtension && fileExtension.toLowerCase()}`
      }
    })
  }
  return !!file
}
