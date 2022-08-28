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

const globalColorNormal: Map<string, string> = new Map([
  ["--illa-white-01", "#ffffffff"],
  ["--illa-white-02", "#ffffffe5"],
  ["--illa-white-03", "#ffffffbf"],
  ["--illa-white-04", "#ffffff7f"],
  ["--illa-white-05", "#ffffff4c"],
  ["--illa-white-06", "#ffffff32"],
  ["--illa-white-07", "#ffffff1e"],
  ["--illa-white-08", "#ffffff13"],
  ["--illa-white-09", "#ffffff09"],

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

  ["--illa-techPurple-n-01", "#5343d0ff"],
  ["--illa-techPurple-01", "#654aecff"],
  ["--illa-techPurple-02", "#775ff2ff"],
  ["--illa-techPurple-03", "#a087f4ff"],
  ["--illa-techPurple-04", "#bca6f7ff"],
  ["--illa-techPurple-05", "#d6c7fbff"],
  ["--illa-techPurple-06", "#eadeffff"],
  ["--illa-techPurple-07", "#f8f5ffff"],

  ["--illa-techPink-n-01", "#c24499ff"],
  ["--illa-techPink-01", "#ff58beff"],
  ["--illa-techPink-02", "#ff75c5ff"],
  ["--illa-techPink-03", "#ff92ceff"],
  ["--illa-techPink-04", "#ffaed8ff"],
  ["--illa-techPink-05", "#ffcbe4ff"],
  ["--illa-techPink-06", "#ffe8f2ff"],
  ["--illa-techPink-07", "#fff5f9ff"],

  ["--illa-blackAlpha-01", "#000000e0"],
  ["--illa-blackAlpha-02", "#000000a3"],
  ["--illa-blackAlpha-03", "#00000065"],
  ["--illa-blackAlpha-04", "#0000003c"],
  ["--illa-blackAlpha-05", "#00000028"],
  ["--illa-blackAlpha-06", "#0000001e"],
  ["--illa-blackAlpha-07", "#00000013"],
  ["--illa-blackAlpha-08", "#00000009"],

  ["--illa-blue-n-01", "#083bc7ff"],
  ["--illa-blue-01", "#134ae0ff"],
  ["--illa-blue-02", "#175cebff"],
  ["--illa-blue-03", "#1e6fffff"],
  ["--illa-blue-04", "#5c99ffff"],
  ["--illa-blue-05", "#99beffff"],
  ["--illa-blue-06", "#c2d8ffff"],
  ["--illa-blue-07", "#edf4ffff"],

  ["--illa-purple-n-01", "#6f2fc4ff"],
  ["--illa-purple-01", "#833fdfff"],
  ["--illa-purple-02", "#8e4be0ff"],
  ["--illa-purple-03", "#a55bf5ff"],
  ["--illa-purple-04", "#c87ffaff"],
  ["--illa-purple-05", "#dfb2fcff"],
  ["--illa-purple-06", "#f0d6feff"],
  ["--illa-purple-07", "#fbf2feff"],

  ["--illa-red-n-01", "#c21f1fff"],
  ["--illa-red-01", "#e02424ff"],
  ["--illa-red-02", "#eb3639ff"],
  ["--illa-red-03", "#ff4747ff"],
  ["--illa-red-04", "#ff7272ff"],
  ["--illa-red-05", "#ffa3a3ff"],
  ["--illa-red-06", "#fcccccff"],
  ["--illa-red-07", "#feeeeeff"],

  ["--illa-green-n-01", "#006134ff"],
  ["--illa-green-01", "#007a41ff"],
  ["--illa-green-02", "#118f58ff"],
  ["--illa-green-03", "#00aa5bff"],
  ["--illa-green-04", "#00d689ff"],
  ["--illa-green-05", "#66dfb0ff"],
  ["--illa-green-06", "#d9ffeaff"],
  ["--illa-green-07", "#ecfbf5ff"],

  ["--illa-yellow-n-01", "#c76b00ff"],
  ["--illa-yellow-01", "#e07800ff"],
  ["--illa-yellow-02", "#eb9000ff"],
  ["--illa-yellow-03", "#ffab00ff"],
  ["--illa-yellow-04", "#ffcd00ff"],
  ["--illa-yellow-05", "#ffe266ff"],
  ["--illa-yellow-06", "#fff2a3ff"],
  ["--illa-yellow-07", "#fffcebff"],

  ["--illa-orange-n-01", "#c72c15ff"],
  ["--illa-orange-01", "#e03118ff"],
  ["--illa-orange-02", "#eb4825ff"],
  ["--illa-orange-03", "#ff5e2fff"],
  ["--illa-orange-04", "#ff8246ff"],
  ["--illa-orange-05", "#ffb490ff"],
  ["--illa-orange-06", "#ffd7bfff"],
  ["--illa-orange-07", "#fff5f0ff"],

  ["--illa-cyan-n-01", "#058bb2ff"],
  ["--illa-cyan-01", "#069fccff"],
  ["--illa-cyan-02", "#08a7ccff"],
  ["--illa-cyan-03", "#0cc1e2ff"],
  ["--illa-cyan-04", "#12ddf2ff"],
  ["--illa-cyan-05", "#71ebf7ff"],
  ["--illa-cyan-06", "#d1fcffff"],
  ["--illa-cyan-07", "#effdfeff"],

  ["--illa-brand-01", "#654aecff"],
  ["--illa-brand-02", "#ff58beff"],
])
