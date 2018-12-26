module.exports = (api, opts) => {
  const addNewComponent = require('./util/addNewComponent')
  const addNewView = require('./util/addNewView')

  if (opts.action === 'addNewComponent') {
    addNewComponent.renderFiles(api, opts)
  } else {
    addNewView.renderFiles(api, opts)
  }

  const fs = require('fs')
  const routerPath = api.resolve('./src/router.js')
  opts.router = fs.existsSync(routerPath)

  api.onCreateComplete(() => {
    if (opts.action === 'addNewComponent') {
      addNewComponent.addImports(api, opts)
      addNewComponent.registerNewComponents(api, opts)
    } else {
      addNewView.addImports(api, opts)
      if (opts.router) {
        addNewView.addPathToRouter(api, opts)
      }
    }
  })
}
