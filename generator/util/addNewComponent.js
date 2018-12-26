const helpers = require('./helpers')

function renderFiles (api, opts) {
  // const pluginFilename = api.hasPlugin('typescript') ? 'addnew.ts' : 'addnew.js'
  // const pluginSourceFilename = 'addnew.js'
  // api.render({
  //   [`./src/plugins/${pluginFilename}`]: `../templates/default/src/plugins/${pluginSourceFilename}`
  // }, {
  //   ...opts,
  //   typescript: api.hasPlugin('typescript')
  // })

  const compName = opts.componentName
  const compFiletype = opts.componentFiletype

  const componentTarget = compFiletype === 'js'
    ? `./src/components/${compName}.js`
    : `./src/components/${compName}.vue`

  const files = {
    [componentTarget]: `../templates/default/src/components/${compFiletype}/index.${compFiletype}`
  }

  api.render(files, opts)
}

function addImports (api, opts) {
  const compName = opts.componentName
  const compFiletype = opts.compFiletype

  const importLocation = compFiletype === 'js'
    ? `./components/${compName}`
    : `./components/${compName}.vue`

  helpers.updateFile(api, api.entryFile, lines => {
    const lastImportIndex = lines.findIndex(line => line.match(/^import/))

    lines.splice(lastImportIndex + 1, 0, `import ${compName} from '${importLocation}'`)

    return lines
  })
}

function registerNewComponents (api, opts) {
  const compName = opts.componentName

  helpers.updateFile(api, api.entryFile, lines => {
    const vueConfigProdTip = lines.findIndex(line => line.match(/^Vue\.config\.productionTip/))

    lines.splice(vueConfigProdTip + 1, 0, `Vue.component('${compName}', ${compName})`)

    return lines
  })
}

module.exports = {
  addImports,
  registerNewComponents,
  renderFiles
}
