const <%= options.componentName %> = {
  template: `
    <button :disabled="isDisabled"><%= options.componentName %></button>
  `,

  name: '<%= options.componentName %>',

  data () {
    return {
      isDisabled: true
    }
  }
}

export default <%= options.componentName %>
