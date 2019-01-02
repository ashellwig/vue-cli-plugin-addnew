// function addANewView (api, opts) {
//   const addNewView = require('../generator/lib/addNewView')

//   addNewView.renderFiles(api, opts)

//   const fs = require('fs')
//   const routerPath = api.resolve('./src/router.js')
//   opts.router = fs.existsSync(routerPath)

//   addNewView.addImports(api, opts)
//   addNewView.addPathToRouter(api, opts)
// }

// module.exports = {
//   addANewView
// }

const renamedArgs = {
  'add-to-router': 'addViewToRouter',
  'view-name': 'viewName'
}

module.exports = function addANewView (args = {}, api) {
  const addNewView = require('../generator/lib/addNewView')
  const argsConfig = normalizeConfig(args)

  const config = Object.assign({
    action: 'addNewView'
  }, argsConfig)

  const addToRouter = argsConfig.addViewToRouter || false
  const viewName = args._ && args._.length
    ? args._
    : 'NewView'

  addNewView.renderFiles(api, {
    action: 'addNewView',
    viewName: viewName,
    addViewToRouter: addToRouter
  })

  if (addToRouter) {
    addNewView.addImports(api, config)
    addNewView.addPathToRouter(api, config)
  }
}

function normalizeConfig (args) {
  const config = {}
  for (const key in args) {
    if (renamedArgs[key]) {
      config[renamedArgs[key]] = args[key]
    } else if (key !== '_') {
      config[camelize(key)] = args[key]
    }
  }
  return config
}

function camelize (str) {
  return str.replace(/-(\w)/g, (_, c) => c ? c.toUpperCase() : '')
}
