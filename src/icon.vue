<template>
  <svg class="g-icon">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>
<script>
  import './svg'
  export default {
    name: 'YeziIcon',
    props: ['name']
  }
</script>
<style lang="scss" scoped>
  .g-icon {
    width: 1.1em;
    height: 1.1em;
    /*vertical-align: -0.15em;*/
    /*fill: currentColor;*/
    /*overflow: hidden;*/
  }
</style>