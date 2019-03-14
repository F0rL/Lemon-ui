<template>
  <div>
    <y-input v-model="message"></y-input>
    <p>message:{{message}}</p>
  </div>
</template>
<script>
  import Input from '../../../src/input'

  export default {
    components: {
      'y-input': Input,
    },
    data() {
      return {
        message: '双向绑定'
      }
    }
  }
</script>