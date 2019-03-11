<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'YeziTabsHead',
    inject: ['eventBus'],
    mounted() {
      this.eventBus.$on('update:selected',(item, vm) => {
        console.log(vm.$el);
      })
    }
  }
</script>
<style lang="scss" scoped>
  $tab-height: 40px;
  $line-color: blue;
  .tabs-head {
    display: flex;
    height: $tab-height;
    justify-content: start;
    position: relative;
    > .line {
      position: absolute;
      bottom: 0;
      border-bottom: 1px solid $line-color;
      width: 100px;
    }
    > .actions-wrapper {
      margin-left: auto;
    }
  }
</style>