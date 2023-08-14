export function AppSettings() {
  const env = process.env.NODE_ENV

  const appSettings = {}

  if (env === 'production') {
    appSettings.apiBasePath = 'http://localhost:8080'
  } else {
    const ignore = require('../ignore.json')
    appSettings.apiBasePath = ignore.apiBasePath
  }

  return appSettings
}
