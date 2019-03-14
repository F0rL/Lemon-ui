<template>
  <div>
    <p>普通上中下三栏布局</p>
    <y-container class="box">
        <y-header class="header">header</y-header>
        <y-main class="main">main</y-main>
        <y-footer class="footer">footer</y-footer>
    </y-container>
    <p>左右布局，主体部分分为上中下三部分，有侧边栏</p>
    <y-container class="box">
      <y-sider class="sider">sider</y-sider>
      <y-container>
        <y-header class="header">header</y-header>
        <y-main class="main">main</y-main>
        <y-footer class="footer">footer</y-footer>
      </y-container>
    </y-container>
  </div>
</template>
<script>
  import Container from '../../../src/layout'
  import Header from '../../../src/header'
  import Main from '../../../src/content'
  import Sider from '../../../src/sider'
  import Footer from '../../../src/footer'

  export default {
    components: {
      'y-container': Container,
      'y-header': Header,
      'y-main': Main,
      'y-sider': Sider,
      'y-footer': Footer,
    }
  }
</script>
<style scoped>
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  p {
    margin-top: 1em;
    border-bottom: 1px solid rgba(0,0,0,0.3);
  }

  .box {
    margin-top: 1em;
    height: 300px;
  }
  .header {
    background-color: #ccc;
  }
  .main {
    background-color: lightblue;
  }
  .footer {
     background-color: #aaa;
  }
  .sider {
    min-width: 10%;
    background-color: lightgoldenrodyellow;
  }
</style>