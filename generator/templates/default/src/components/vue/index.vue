<template>
  <v-btn disabled="isDisabled"><%= options.componentName %></v-btn>
</template>

<script>
export default {
  <%_ if (options.componentName) { _%>
  name: <%= options.componentName %>,
  <%_ } _%>
  data () {
    return {
      isDisabled: true
    }
  }
}
</script>
