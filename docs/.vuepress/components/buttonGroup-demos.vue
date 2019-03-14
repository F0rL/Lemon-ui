<template>
  <div>
    <y-button-group>
      <y-button icon="left">上一页</y-button>
      <y-button>更多</y-button>
      <y-button icon="right" icon-position="right">下一页</y-button>
    </y-button-group>
  </div>
</template>
<script>
  import ButtonGroup from '../../../src/button-group'
  import Button from '../../../src/button'

  export default {
    components: {
      'y-button': Button,
      'y-button-group': ButtonGroup,
    }
  }
</script>