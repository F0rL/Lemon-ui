---
title: 基础
sidebarDepth: 2
---

## Button
基础按钮组件，点击触发业务逻辑。

__基础用法__

<button-demos></button-demos>
``` js
data {
  isLoading: false
},
methods: {
  toggle() {
    this.isLoading = !this.isLoading
  }
}

<y-button>default</y-button>
<y-button icon="settings">icon default</y-button>
<y-button icon="settings" icon-position="right">icon right</y-button>
<y-button :loading="true">loading default</y-button>
<y-button icon="settings" :loading="isLoading" @click="toggle">click</y-button>
```
__属性__

组件将被渲染为button标签，因此你可以使用所有的button原生属性。

参数 | 说明 | 类型 | 可选值 | 默认值|
- | :-: | :-: | :-: | -:
icon | icon 图标名 | String | —— | ——| 
position | icon 位置| String | left , right | left|

## ButtonGroup
横向排列的按钮组合。

__基础用法__

<buttonGroup-demos></buttonGroup-demos>
```js
<y-button-group>
    <y-button icon="left">上一页</y-button>
    <y-button>更多</y-button>
    <y-button icon="right" icon-position="right">下一页</y-button>
</y-button-group>
```
