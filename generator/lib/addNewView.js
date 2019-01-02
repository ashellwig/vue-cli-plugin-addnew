const helpers = require('./helpers')

function renderFiles (api, opts) {
  const viewName = opts.viewName

  const viewTarget = `./src/views/${viewName}.vue`

  const files = {
    [viewTarget]: `../templates/default/src/views/index.vue`
  }

  api.render(files, opts)
}

function addImports (api, opts) {
  const viewName = opts.viewName
  const viewTarget = `./views/${viewName}.vue`
  const routerPath = helpers.getRouterFile(api, opts)

  helpers.updateFile(api, routerPath, lines => {
    const lastImportIndex = lines.findIndex(line => line.match(/^import/))

    lines.splice(lastImportIndex + 1, 0, `import ${viewName} from '${viewTarget}'`)

    return lines
  })
}

function addPathToRouter (api, opts) {
  const viewName = opts.viewName
  const routerPath = helpers.getRouterFile(api, opts)
  const replaceRegex = `}, {\n    name: '${viewName}',\n    path: '',\n    component: ${viewName}`

  helpers.updateFile(api, routerPath, lines => {
    const lastRoute = lines.findIndex(line => line.match(/component: *.*\n*.*/))

    lines.splice(lastRoute + 1, 0, replaceRegex)

    return lines
  })
}

module.exports = {
  renderFiles,
  addPathToRouter,
  addImports
}
