const <%= options.componentName %> = {
  template: `
    <template>
      <v-btn :disabled="isDisabled"><%= options.componentName %></v-btn>
    </template>
  `,

  name: '<%= options.componentName %>',

  data () {
    return {
      isDisabled: true
    }
  }
}

export default <%= options.componentName %>
