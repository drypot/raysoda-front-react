
export interface Config  {
  appName: string
  appNamel: string
  appDesc: string

  mainUrl: string
  uploadUrl: string
}

// @ts-ignore
export const config: Config = _config

export function pageTitle(title: string = '') {
  return title.length ? `${title} - ${config.appName}` : config.appName
}
