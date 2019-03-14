---
title: 快速上手
---
### 使用之前
在使用Yezi-UI之前，我们假设您已经了解Vue、Vue组件、Vue单文件组件的基础知识。
### 推荐使用使用构建工具
``` js
// 引入
import Vue from 'vue';
import Yezi from 'yezi-ui';
Vue.use(Yezi);
```
以上代码便完成了yezi-ui的引入。需要注意的是，样式文件需要单独引入。
### Hello world
``` js
<body>
  <div id="app">
    <y-button>按钮</y-button>
  </div>
</body>
```
### 特别提醒
使用Yezi-ui时，您需要使用border-box盒模型，否则会影响样式。CSS代码示例：
``` js
*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```
