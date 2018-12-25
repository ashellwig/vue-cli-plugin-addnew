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

  const compName = opts.componentName
  const compFiletype = opts.compFiletype

  const componentTarget = compFiletype === 'js'
    ? `./src/components/${compName}.js`
    : `./src/components/${compName}.vue`

  const files = {
    [componentTarget]: `../template/default/src/components/${compFiletype}/index.js`
  }

  api.render(files, opts)
}

function addImports (api, opts) {
  const compName = opts.componentName
  const compFiletype = opts.compFiletype

  const componentTarget = compFiletype === 'js'
    ? `./src/components/${compName}.js`
    : `./src/components/${compName}.vue`

  helpers.updateFile(api, api.entryFile, lines => {
    const vueImportIndex = lines.findIndex(line => line.match(/^import Vue/))

    lines.splice(vueImportIndex + 1, 0, `import '${componentTarget}'`)

    return lines
  })
}

module.exports = {
  addImports,
  renderFiles
}
