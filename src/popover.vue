<template>
  <div class="popover" @click.stop="xxx">
    <div class="content-wrapper" v-if="visiable" @click.stop>
      <slot name="content"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "YeziPopover",
    data() {
      return {visiable: false}
    },
    methods: {
      xxx() {
        this.visiable = !this.visiable
        if (this.visiable === true) {
          this.$nextTick(() => {
            let eventHandler = () => {
              console.log('document 隐藏 popover');
              this.visiable = false
              document.removeEventListener('click', eventHandler)
            }
            document.addEventListener('click', eventHandler)
          })
        }else {
          console.log('vm 隐藏 popover');
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .popover {
    display: inline-block;
    vertical-align: top;
    position: relative;
    .content-wrapper {
      position: absolute;
      bottom: 100%;
      left: 0;
      border: 1px solid red;
      box-shadow: 0 0 3px rgba(0, 0, 0, .5);
    }
  }
</style>