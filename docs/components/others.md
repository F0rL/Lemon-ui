---
title: 其他
sidebarDepth: 2
---

## Toast

__基础用法__

<toast-demos></toast-demos>
``` js
<y-button @click="$toast('点击弹出提示')">上方弹出</y-button>
<y-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</y-button>
<y-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</y-button>
```

__设置弹出__
<toastSetting-demos></toastSetting-demos>
```js
<y-button @click="onClickButton">设置弹出</y-button>

methods: {
 onClickButton () {
  this.$toast('<i style="color: red">可支持html<i>', {
    position: 'middle',
    autoClose: 1,
    closeButton: {
    text: '设置关闭文字',
      callback: () => {
      console.log('回调')
      }
    }
  })
 }
}
```

__可设置属性__
参数 | 说明 | 类型 | 可选值 | 默认值|
- | :-: | :-: | :-: | -
position | 弹框位置 | String | top, bottom, middle | top | 
autoClose | 是否自动关闭或时间(单位：秒)| Boolean, Number | —— | 5 |
text | 点击关闭弹窗处文字 | String | —— | 关闭 |
enableHtml | 设置弹窗文字支持 HTML | Boolean | —— | false |
::: danger
不要随意设置支持 HTML，要确保来源可靠
:::

## Tabs

__基础用法__
<tabs-demos></tabs-demos>
```js
 <y-tabs :selected="selected">
  <y-tabs-head>
    <y-tabs-item name="1">标题1</y-tabs-item>
    <y-tabs-item name="2">标题2</y-tabs-item>
  </y-tabs-head>
  <y-tabs-body>
    <y-tabs-pane name="1">内容内容 1</y-tabs-pane>
    <y-tabs-pane name="2">内容内容 2</y-tabs-pane>
  </y-tabs-body>
</y-tabs>
```
__可设置属性__

参数 | 说明 | 类型 | 可选值 | 默认值|
- | :-: | :-: | :-: | -
name | 标识内容 | String | —— | —— | 
selected | 选择默认显示的内容 | String | —— | —— | 

## Popover

__基础用法__
<popover-1-demos></popover-1-demos>
```js
<div style="padding: 4em 0;">
<y-popover>
  <y-button>上方弹出</y-button>
  <template slot="content">
    弹出内容
  </template>
</y-popover>
<y-popover position="bottom">
  <y-button>下方弹出</y-button>
  <template slot="content">
    弹出内容
  </template>
</y-popover>
<y-popover position="left">
  <y-button>左边弹出</y-button>
  <template slot="content">
    弹出内容
  </template>
</y-popover>
<y-popover position="right">
  <y-button>右边弹出</y-button>
  <template slot="content">
    弹出内容
  </template>
</y-popover>
```
__将触发方式改为hover__
<popover-2-demos></popover-2-demos>
```js
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
```
__可设置属性__
参数 | 说明 | 类型 | 可选值 | 默认值|
- | :-: | :-: | :-: | -
trigger | 触发方式 | String | hover, click | click | 
position | 弹框位置 | String | top, bottom, left, right | top |

## Collapse

__基础用法__
<collaspe-demos></collaspe-demos>
```js
<y-collapse :selected.sync="selectedTab" single>
  <y-collapse-item title="标题1" name="1">内容1</y-collapse-item>
  <y-collapse-item title="标题2" name="2">内容2</y-collapse-item>
  <y-collapse-item title="标题3" name="3">内容3</y-collapse-item>
</y-collapse>
选择展示的标签{{selectedTab}}
```
__可设置属性__
参数 | 说明 | 类型 | 可选值 | 默认值|
- | :-: | :-: | :-: | -
single | 是否只展示一项 | String | —— | —— | 
name | 标识内容 | String | —— | —— |
selectedTab | 展示的标签 | Array | —— | —— |
