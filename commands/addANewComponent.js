function addANewComponent (api, opts) {
  const addNewComponent = require('../generator/lib/addNewComponent')

  addNewComponent.renderFiles(api, opts)
  addNewComponent.addImports(api, opts)
  addNewComponent.registerNewComponents(api, opts)
}

module.exports = {
  addANewComponent
}
