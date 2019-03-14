<template>
  <div>
    <y-row class="box" gutter="20">
      <y-col span="24" :ipad="{span:12}" :narrow-pc="{span:8}">
        <div class="demo">内容1</div>
      </y-col>
      <y-col span="24" :ipad="{span:12}" :narrow-pc="{span:8}">
        <div class="demo">内容2</div>
      </y-col>
      <y-col span="24" :ipad="{span:12}" :narrow-pc="{span:8}">
        <div class="demo">内容3</div>
      </y-col>
      <y-col span="24" :ipad="{span:12}" :narrow-pc="{span:8}">
        <div class="demo">内容4</div>
      </y-col>
      <y-col span="24" :ipad="{span:12}" :narrow-pc="{span:8}">
        <div class="demo">内容5</div>
      </y-col>
      <y-col span="24" :ipad="{span:12}" :narrow-pc="{span:8}">
        <div class="demo">内容6</div>
      </y-col>
    </y-row>
  </div>
</template>
<script>
  import Row from '../../../src/row'
  import Col from '../../../src/col'

  export default {
    components: {
      'y-row': Row,
      'y-col': Col,
    }
  }
</script>
<style scoped>
  *, *::before, *::after {
    box-sizing: border-box;
  }
  .box {
    text-align: center;
    margin-top: 1em;
  }
  .demo {
    line-height: 2em;
    margin-bottom: 10px;
    background-color: #dddddd;
  }
</style>