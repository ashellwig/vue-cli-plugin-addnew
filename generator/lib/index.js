function addANewComponent (api, opts) {
  const addNewComponent = require('./util/addNewComponent')

  addNewComponent.renderFiles(api, opts)
  addNewComponent.addImports(api, opts)
  addNewComponent.registerNewComponents(api, opts)
}

function addANewView (api, opts) {
  const addNewView = require('./util/addNewView')

  addNewView.renderFiles(api, opts)

  const fs = require('fs')
  const routerPath = api.resolve('./src/router.js')
  opts.router = fs.existsSync(routerPath)

  addNewView.addImports(api, opts)
  addNewView.addPathToRouter(api, opts)
}

module.exports = {
  addANewComponent,
  addANewView
}
