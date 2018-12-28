const fs = require('fs')

function updateFile (api, file, callback) {
  file = api.resolve(file)
  let content = fs.existsSync(file)
    ? fs.readFileSync(file, {
      encoding: 'utf8'
    })
    : ''

  content = callback(content.split(/\r?\n/g)).join('\n')

  fs.writeFileSync(file, content, {
    encoding: 'utf8'
  })
}

function getRouterFile (api, opts) {
  const routerFile = (api.resolve('src/router.js')) ? 'src/router.js' : ''
  return routerFile
}

module.exports = {
  updateFile,
  getRouterFile
}
