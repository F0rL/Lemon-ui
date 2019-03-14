<template>
  <div style="padding-top: 16px;">
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
  </div>
</template>
<script>
  import Tabs from '../../../src/tabs'
  import TabsBody from '../../../src/tabs-body'
  import TabsHead from '../../../src/tabs-head'
  import TabsItem from '../../../src/tabs-item'
  import TabsPane from '../../../src/tabs-pane'
  export default {
    components: {
      'y-tabs' : Tabs,
      'y-tabs-body' : TabsBody,
      'y-tabs-head' : TabsHead,
      'y-tabs-item' : TabsItem,
      'y-tabs-pane' : TabsPane,
    },
    data () {
      return {
        selected: '1',
      }
    }
  }
</script>