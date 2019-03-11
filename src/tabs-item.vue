<template>
  <div class="tabs-item" @click="xxx" :class="classes">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'YeziTabsItem',
    inject: ['eventBus'],
    data() {
      return {
        active: false
      }
    },
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      name: {
        type: String | Number,
        required: true
      }
    },
    created() {
      // this.eventBus.$on('update:selected', (name) => {
      //   console.log(name)
      // })
      this.eventBus.$on('update:selected', (name) => {
        this.active = name === this.name;
      })
    },
    computed: {
      classes() {
        return {
          active: this.active
        }
      }
    },
    methods: {
      xxx () {
        this.eventBus.$emit('update:selected', this.name, this)
      }
    }
  }
</script>
<style lang="scss" scoped>
  $item-color: blue;
  .tabs-item {
    flex-shrink: 0;
    padding: 0 2em;
    cursor: pointer;
    height: 100%;
    display: inline-flex;
    align-items: center;
    &.active {
      color: $item-color;
      font-weight: bold;
    }
  }
</style>