const helpers = require('./helpers')

function renderFiles (api, opts) {
  const pluginFilename = api.hasPlugin('typescript') ? 'addnew.ts' : 'addnew.js'
  const pluginSourceFilename = 'addnew.js'
  api.render({
    [`./src/plugins/${pluginFilename}`]: `../templates/default/src/plugins/${pluginSourceFilename}`
  }, {
    ...opts,
    typescript: api.hasPlugin('typescript')
  })

  const viewName = opts.viewName

  const viewTarget = `./src/views/${viewName}`

  const files = {
    [viewTarget]: `../template/default/src/views/${viewName}.js`
  }

  api.render(files, opts)
}

function addImports (api, opts) {
  const viewName = opts.viewName
  const viewTarget = `./src/views/${viewName}`

  helpers.updateFile(api, api.entryFile, lines => {
    const vueImportIndex = lines.findIndex(line => line.match(/^import Vue/))

    lines.splice(vueImportIndex + 1, 0, `import '${viewTarget}'`)

    return lines
  })
}

module.exports = {
  renderFiles,
  addImports
}
