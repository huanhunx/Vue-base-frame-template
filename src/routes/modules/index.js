const files = require.context('.', true, /(?<!\.false)\/index.js$/)

let configRouters = []

files.keys().forEach(item => {
  if (item === './index.js') return
  configRouters = configRouters.concat(files(item).default)
})
export default configRouters
