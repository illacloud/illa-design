export const illaPrefix = "illa"

export function globalColor(key: string): string {
  if (key == "transparent") {
    return "transparent"
  }
  return globalColorNormal.get(key) ?? ""
}

export function hasGlobalColor(key: string): boolean {
  return globalColorNormal.has(key)
}

const nineStepColor = ["white", "gray", "grayBlue", "blackAlpha"]

export const hasNineStepColor = (color: string): boolean => {
  return nineStepColor.includes(color)
}

const globalColorNormal: Map<string, string> = new Map([
  ["--illa-white-01", "#ffffffff"],
  ["--illa-white-02", "#ffffffe6"],
  ["--illa-white-03", "#ffffffc0"],
  ["--illa-white-04", "#ffffff80"],
  ["--illa-white-05", "#ffffff4c"],
  ["--illa-white-06", "#fff3"],
  ["--illa-white-07", "#ffffff28"],
  ["--illa-white-08", "#ffffff1e"],
  ["--illa-white-09", "#ffffff19"],

  ["--illa-gray-01", "#000000ff"],
  ["--illa-gray-02", "#1f1f1fff"],
  ["--illa-gray-03", "#5c5c5cff"],
  ["--illa-gray-04", "#999999ff"],
  ["--illa-gray-05", "#c2c2c2ff"],
  ["--illa-gray-06", "#d6d6d6ff"],
  ["--illa-gray-07", "#e0e0e0ff"],
  ["--illa-gray-08", "#ebebebff"],
  ["--illa-gray-09", "#f5f5f5ff"],

  ["--illa-grayBlue-01", "#0b0c0fff"],
  ["--illa-grayBlue-02", "#1d2129ff"],
  ["--illa-grayBlue-03", "#787e85ff"],
  ["--illa-grayBlue-04", "#a9aeb8ff"],
  ["--illa-grayBlue-05", "#bbc0c9ff"],
  ["--illa-grayBlue-06", "#c9cdd4ff"],
  ["--illa-grayBlue-07", "#dadee5ff"],
  ["--illa-grayBlue-08", "#e5e6ebff"],
  ["--illa-grayBlue-09", "#f2f3f5ff"],

  ["--illa-techPurple-n-01", "#100974"],
  ["--illa-techPurple-01", "#26189c"],
  ["--illa-techPurple-02", "#422ec4"],
  ["--illa-techPurple-03", "#654aec"],
  ["--illa-techPurple-04", "#8368f0"],
  ["--illa-techPurple-05", "#a087f4"],
  ["--illa-techPurple-06", "#bca6f7"],
  ["--illa-techPurple-07", "#d6c7fb"],
  ["--illa-techPurple-08", "#f0e8ff"],

  ["--illa-techPink-n-01", "#790a5a"],
  ["--illa-techPink-01", "#a61d7a"],
  ["--illa-techPink-02", "#d2369c"],
  ["--illa-techPink-03", "#ff58be"],
  ["--illa-techPink-04", "#ff75c5"],
  ["--illa-techPink-05", "#ff92ce"],
  ["--illa-techPink-06", "#ffaed8"],
  ["--illa-techPink-07", "#ffcbe4"],
  ["--illa-techPink-08", "#ffe8f2"],

  ["--illa-blackAlpha-01", "#000000e0"],
  ["--illa-blackAlpha-02", "#000000e6"],
  ["--illa-blackAlpha-03", "#000000bf"],
  ["--illa-blackAlpha-04", "#00000080"],
  ["--illa-blackAlpha-05", "#0000004d"],
  ["--illa-blackAlpha-06", "#00000033"],
  ["--illa-blackAlpha-07", "#00000029"],
  ["--illa-blackAlpha-08", "#00000014"],
  ["--illa-blackAlpha-09", "#0000000a"],

  ["--illa-blue-n-01", "#042379"],
  ["--illa-blue-01", "#0a39a6"],
  ["--illa-blue-02", "#1353d2"],
  ["--illa-blue-03", "#1e6fff"],
  ["--illa-blue-04", "#4690ff"],
  ["--illa-blue-05", "#6aa1ff"],
  ["--illa-blue-06", "#94bfff"],
  ["--illa-blue-07", "#bedaff"],
  ["--illa-blue-08", "#e8f4ff"],

  ["--illa-purple-n-01", "#2a0874"],
  ["--illa-purple-01", "#44159b"],
  ["--illa-purple-02", "#6227c3"],
  ["--illa-purple-03", "#863eea"],
  ["--illa-purple-04", "#9f5eee"],
  ["--illa-purple-05", "#b77ff2"],
  ["--illa-purple-06", "#cda1f7"],
  ["--illa-purple-07", "#e2c4fb"],
  ["--illa-purple-08", "#f5e8ff"],

  ["--illa-red-n-01", "#770813"],
  ["--illa-red-01", "#a1151e"],
  ["--illa-red-02", "#cb272d"],
  ["--illa-red-03", "#f53f3f"],
  ["--illa-red-04", "#f76560"],
  ["--illa-red-05", "#f98981"],
  ["--illa-red-06", "#fbaca3"],
  ["--illa-red-07", "#fdcdc5"],
  ["--illa-red-08", "#ffece8"],

  ["--illa-green-n-01", "#02672d"],
  ["--illa-green-01", "#048136"],
  ["--illa-green-02", "#079c3e"],
  ["--illa-green-03", "#0bb645"],
  ["--illa-green-04", "#2dc55b"],
  ["--illa-green-05", "#55d376"],
  ["--illa-green-06", "#81e297"],
  ["--illa-green-07", "#b2f0be"],
  ["--illa-green-08", "#e8ffec"],

  ["--illa-yellow-n-01", "#795d00"],
  ["--illa-yellow-01", "#a68501"],
  ["--illa-yellow-02", "#d2b002"],
  ["--illa-yellow-03", "#f8b804"],
  ["--illa-yellow-04", "#ffea32"],
  ["--illa-yellow-05", "#fff45f"],
  ["--illa-yellow-06", "#fffb8d"],
  ["--illa-yellow-07", "#ffffba"],
  ["--illa-yellow-08", "#fdffd6"],

  ["--illa-orange-n-01", "#792e00"],
  ["--illa-orange-01", "#a64500"],
  ["--illa-orange-02", "#d25f00"],
  ["--illa-orange-03", "#ff7d00"],
  ["--illa-orange-04", "#ff9a2e"],
  ["--illa-orange-05", "#ffb65d"],
  ["--illa-orange-06", "#ffcf8b"],
  ["--illa-orange-07", "#ffe4ba"],
  ["--illa-orange-08", "#fff7e8"],

  ["--illa-cyan-n-01", "#045677"],
  ["--illa-cyan-01", "#0c7ca1"],
  ["--illa-cyan-02", "#16a4cc"],
  ["--illa-cyan-03", "#24d1f6"],
  ["--illa-cyan-04", "#4adef8"],
  ["--illa-cyan-05", "#71eafa"],
  ["--illa-cyan-06", "#98f3fb"],
  ["--illa-cyan-07", "#c0fafd"],
  ["--illa-cyan-08", "#e8ffff"],

  ["--illa-brand-01", "#654aecff"],
  ["--illa-brand-02", "#ff58beff"],
])
