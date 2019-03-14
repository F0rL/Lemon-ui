<template>
  <div>
    <y-input class="item" value="不可点击" disabled></y-input>
    <y-input class="item" value="只读" readonly></y-input>
    <y-input class="item" value="默认"></y-input>
    <y-input class="item" value="错误" error="姓名不能少于两个字"></y-input>
  </div>
</template>
<script>
  import Input from '../../../src/input'

  export default {
    components: {
      'y-input': Input,
    },
  }
</script>
<style scoped>
  .item {
    margin: 10px;
  }
</style>