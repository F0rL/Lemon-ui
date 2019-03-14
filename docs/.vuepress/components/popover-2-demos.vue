<template>
  <div style="padding: 3em 0;">
    <y-popover trigger="hover">
      <y-button>上方弹出</y-button>
      <template slot="content">
        弹出内容
      </template>
    </y-popover>
    <y-popover trigger="hover" position="bottom">
      <y-button>下方弹出</y-button>
      <template slot="content">
        弹出内容
      </template>
    </y-popover>
    <y-popover trigger="hover" position="left">
      <y-button>左边弹出</y-button>
      <template slot="content">
        弹出内容
      </template>
    </y-popover>
    <y-popover trigger="hover" position="right">
      <y-button>右边弹出</y-button>
      <template slot="content">
        弹出内容
      </template>
    </y-popover>
  </div>
</template>
<style>
</style>
<style scoped>
</style>
<script>
  import Button from '../../../src/button'
  import Popover from '../../../src/popover'
  export default {
    components: {
      'y-button' : Button,
      'y-popover' : Popover
    },
  }
</script>