<template>
  <div>
    <y-button>default</y-button>
    <y-button icon="settings">icon default</y-button>
    <y-button icon="settings" icon-position="right">icon right</y-button>
    <y-button :loading="true">loading default</y-button>
    <y-button icon="settings" :loading="isLoading" @click="toggle">click loading</y-button>
  </div>
</template>
<script>
  import Button from '../../../src/button'

  export default {
    components: {
      'y-button': Button,
    },
    data() {
      return {
        isLoading: false
      }
    },
    methods: {
      toggle() {
        this.isLoading = !this.isLoading
      }
    }
  }
</script>