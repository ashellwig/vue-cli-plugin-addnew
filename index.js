module.exports = (api, opts) => {
  api.registerCommand('anew:comp', {
    description: 'Create and globally register a new component',
    usage: 'vue-cli-service anew:comp'
  }, args => {
    require('./generator/lib').addANewComponent(api, opts)
  })
}
