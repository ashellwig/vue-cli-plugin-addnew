<template>
  <btn disabled="isDisabled"><%= options.componentName %></btn>
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
