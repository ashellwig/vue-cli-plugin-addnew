module.exports = (api, opts) => {
  api.registerCommand('anew:view', {
    description: 'Adds a new view to src/views and optionally to the router',
    usage: 'vue-cli-service anew:view [--add-to-router] [--view-name \'NAME\']',
    options: {
      '--add-to-router': 'Add the view to src/router.js and add a route for it',
      '--view-name': 'Name of the view to add'
    },
    details: 'For more options see https://github.com/ashellwig/vue-cli-plugin-addnew'
  }, args => {
    require('./commands/addANewView')(args, api)
  })
}
