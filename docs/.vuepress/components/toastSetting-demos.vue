<template>
  <div style="padding-top: 16px;">
    <div>
      <y-button @click="onClickButton">设置弹出</y-button>
    </div>
  </div>
</template>
<style scoped>
  * {
    box-sizing: border-box;
  }
</style>
<script>
  import plugin from '../../../src/plugin'
  import Button from '../../../src/button'
  import Vue from 'vue'
  Vue.use(plugin)
  export default {
    components: {
      'y-button' : Button
    },
    methods: {
      onClickButton () {
        this.$toast('<i style="color: red">可支持html<i>', {
          position: 'middle',
          autoClose: 1,
          enableHtml: true,
          closeButton: {
            text: '设置关闭文字',
            callback: () => {
              console.log('回调')
            }
          }
        })
      }
    },
  }
</script>