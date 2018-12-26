<template>
  <buttton :disabled="isDisabled"><%= options.componentName %></button>
</template>

<script>
export default {
  name: '<%= options.componentName %>',
  data() {
    return {
      isDisabled: true
    }
  }
}
</script>
