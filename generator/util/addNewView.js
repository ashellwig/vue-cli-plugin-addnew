const helpers = require('./helpers')

function renderFiles (api, opts) {
  const viewName = opts.viewName

  const viewTarget = `./src/views/${viewName}.vue`

  const files = {
    [viewTarget]: `../template/default/src/views/index.vue`
  }

  api.render(files, opts)
}

function addImports (api, opts) {
  const viewName = opts.viewName
  const viewTarget = `./views/${viewName}.vue`

  helpers.updateFile(api, api.entryFile, lines => {
    const lastImportIndex = lines.findIndex(line => line.match(/^import Vue/))

    lines.splice(lastImportIndex + 1, 0, `import ${viewName} from '${viewTarget}.vue'`)

    return lines
  })
}

function addPathToRouter (api, opts) {
  const viewName = opts.viewName
  const viewPath = opts.path

  const fs = require('fs')
  const routerPath = api.resolve('./src/router.js')
  opts.router = fs.existsSync(routerPath)

  if (opts.router) {
    helpers.updateFile(api, routerPath, lines => {
      const lastImportIndex = lines.findIndex(line => lines.match(/^import/))
      const lastRoute = lines.findIndex(line => line.match(/^routes: \[/))

      lines.splice(lastImportIndex + 1, 0, `
      const ${viewName}Route = {
        path: ${viewPath},
        name: ${viewName},
        component: viewName
      }`)

      lines.splice(lastRoute + 1, 0, `${viewName}Route`)
    })
  }
}

module.exports = {
  renderFiles,
  addPathToRouter,
  addImports
}
