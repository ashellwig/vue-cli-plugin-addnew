<template>
  <v-btn disabled="isDisabled"><%= options.componentName %></v-btn>
</template>

<script>
  /* eslint-disable */
  export default {
    name: '<%= options.componentName %>',
    data() {
      return {
        isDisabled: true
      }
    }
  }
</script>
