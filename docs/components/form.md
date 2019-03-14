---
title: 表单
sidebarDepth: 2
---

## Input
基础表单组件，支持v-model绑定和原生事件。

__基础用法__

<input-demos></input-demos>
``` js
<y-input value="不可点击" disabled></y-input>
<y-input value="只读" readonly></y-input>
<y-input value="默认"></y-input>
<y-input value="错误" error="姓名不能少于两个字"></y-input>
```

__双向绑定__

<inputModel-demos></inputModel-demos>
```js
data:{
  value: '双向绑定'
}

<y-input v-model="message"></y-input>
<p>{{message}}</p>
```
