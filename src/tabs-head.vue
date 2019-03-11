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
        //getBoundingClientRect()获取的是元素相对视窗的位置，line的left是相对位置，要做处理
        let {width, height, top, left} = vm.$el.getBoundingClientRect()
        let lineLeft = left - this.$el.getBoundingClientRect().left
        this.$refs.line.style.width = `${width}px`
        this.$refs.line.style.left = `${lineLeft}px`
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
      transition: all .4s;
    }
    > .actions-wrapper {
      margin-left: auto;
    }
  }
</style>