module.exports = (api, opts) => {
  const addNewComponent = require('./util/addNewComponent')
  const addNewView = require('./util/addNewView')

  if (opts.action === 'addNewComponent') {
    addNewComponent.renderFiles(api, opts)
  } else {
    addNewView.renderFiles(api, opts)
  }

  api.onCreateComplete(() => {
    if (opts.action === 'addNewComponent') {
      addNewComponent.addImports(api, opts)
    } else {
      addNewView.addImports(api, opts)
    }
  })
}
