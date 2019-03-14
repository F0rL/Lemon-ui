<template>
  <div style="padding-top: 16px;">
    <y-collapse :selected.sync="selectedTab" single>
      <y-collapse-item title="标题1" name="1">内容1</y-collapse-item>
      <y-collapse-item title="标题2" name="2">内容2</y-collapse-item>
      <y-collapse-item title="标题3" name="3">内容3</y-collapse-item>
    </y-collapse>
    选择展示的标签{{selectedTab}}
  </div>
</template>
<script>
  import Collapse from '../../../src/collapse'
  import CollapseItem from '../../../src/collapse-item'
  export default {
    components: {
      'y-collapse' : Collapse,
      'y-collapse-item' : CollapseItem,
    },
    data(){
      return {
        selectedTab: ['2','1'],
      }
    }
  }
</script>