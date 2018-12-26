const <%= options.componentName %> = {
  template: `
    <btn :disabled="isDisabled"><%= options.componentName %></btn>
  `,

  name: '<%= options.componentName %>',

  data () {
    return {
      isDisabled: true
    }
  }
}

export default <%= options.componentName %>
