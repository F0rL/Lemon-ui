<template>
  <div>
    <p>span 分配空间:</p>
    <y-row class="box">
      <y-col class="item" span="8">8</y-col>
      <y-col class="item" span="8">8</y-col>
      <y-col class="item" span="8">8</y-col>
    </y-row>
    <p>align 整体靠向:</p>
    <y-row class="box" align="right">
      <y-col class="item" span="6">6</y-col>
      <y-col class="item" span="6">6</y-col>
      <y-col class="item" span="6">6</y-col>
    </y-row>
    <p>gutter 设置间隙:</p>
    <y-row gutter="20" class="box">
      <y-col span="8"><div class="item" >间隙20px</div></y-col>
      <y-col span="8"><div class="item">间隙20px</div></y-col>
      <y-col span="8"><div class="item">间隙20px</div></y-col>
    </y-row>
    <p>offset 设置空出空间:</p>
    <y-row gutter="20" class="box">
      <y-col span="8"><div class="item" >间隙20px</div></y-col>
      <y-col span="8" offset="6"><div class="item">间隙20px</div></y-col>
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
  p {
    border-bottom: 1px solid rgba(0,0,0,0.3);
  }
  .item:nth-child(2n+1) {
    background-color: #cccccc;
  }
  .item:nth-child(2n) {
    background-color: #eee;
  }
</style>