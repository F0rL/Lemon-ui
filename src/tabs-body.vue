<template>
  <div class="tabs-body">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'YeziTabsBody',
    inject: ['eventBus'],
  }
</script>
<style>

</style>