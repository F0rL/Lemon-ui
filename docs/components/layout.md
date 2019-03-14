---
title: 布局
sidebarDepth: 2
---

## Grid
通过基础的24格分栏，快速构建网页布局。

__基础用法__

<grid-demos></grid-demos>
``` js
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
```
__y-row 属性__
参数 | 说明 | 类型 | 可选值 | 默认值|
- | :-: | :-: | :-: | -:
gutter | 栅格的间隙，单位为 px | Number, String | —— | ——| 
align | 横向对齐方式| String | left , right, center | left|
__y-row 属性__
参数 | 说明 | 类型 | 可选值 | 默认值|
- | :-: | :-: | :-: | -:
span | 占据空间，按百分比 | Number, String | —— | ——| 
offset | 空出的空间，按百分比 | Number, String | —— | ——|

__响应式__

同时设置多个配置参数，实现响应式布局
<responsive-demos></responsive-demos>
```js
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
```
参数 | 说明 | 类型 | 可选值 | 默认值|
- | :-: | :-: | :-: | -:
默认方案 | 屏幕宽度小于 577px 执行对应布局 | Object | —— | ——| 
:ipad | 屏幕宽度达到 577px 执行对应布局 | Object | —— | ——| 
:narrowPc | 屏幕宽度达到 769px 执行对应布局 | Object | —— | ——|
:pc | 屏幕宽度达到 993px 执行对应布局 | Object | —— | ——|
:widePc | 屏幕宽度达到 1201px 执行对应布局 | Object | —— | ——|

## Container
容器布局，可快速搭建页面的基本结构，需浏览器支持flex布局。
在使用容器布局时，container组件的子组件只能是header，main，footer，sider或container，
同时，上述子组件的父组件也只能是container。

<container-demos></container-demos>
```js
<p>普通上中下三栏布局</p>
<y-container>
    <y-header>header</y-header>
    <y-main>main</y-main>
    <y-footer>footer</y-footer>
</y-container>
<p>左右布局，主体部分分为上中下三部分，有侧边栏</p>
<y-container>
  <y-sider>sider</y-sider>
  <y-container>
    <y-header>header</y-header>
    <y-main>main</y-main>
    <y-footer>footer</y-footer>
  </y-container>
</y-container>
```