<template>
  <div class="wrapper" :class="toastClasses">
    <div class="toast" ref="wrapper">
      <div class="message">
        <slot v-if="!enableHtml"></slot>
        <div v-else v-html="$slots.default[0]"></div>
      </div>
      <div class="line" ref="line"></div>
      <span class="close" v-if="closeButton" @click="onClickClose">
      {{closeButton.text}}
      </span>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'YeziToast',
    props: {
      autoClose: {
        type: Boolean,
        default: true
      },
      autoCloseDelay: {
        type: Number,
        default: 50
      },
      closeButton: {
        type: Object,
        default: () => {
          return {
            text: '关闭',
            callback: undefined
          }
        }
      },
      enableHtml: {
        type: Boolean,
        default: false
      },
      position: {
        type: String,
        default: 'top',
        validator(value) {
          return ['top', 'bottom', 'middle'].indexOf(value) >= 0
        }
      }
    },
    created() {
      // console.log(this.closeButton);
      // console.log(this.$slots.default[0]);
    },
    mounted() {
      this.updateStyles()
      this.execAutoClose()
    },
    computed: {
      toastClasses() {
        return (`position-${this.position}`)
      }
    },
    methods: {
      execAutoClose() {
        if(this.autoClose) {
          setTimeout(() => {
            this.close()
          }, this.autoCloseDelay * 1000)
        }
      },
      updateStyles () {
        this.$nextTick(() => {
          this.$refs.line.style.height = `${this.$refs.wrapper.getBoundingClientRect().height}px`
        })
      },
      close() {
        // console.log(this.$slots);
        this.$el.remove()
        this.$emit('close')
        this.$destroy()
      },
      onClickClose() {
        this.close()
        if(this.closeButton && typeof this.closeButton.callback === 'function') {
          this.closeButton.callback()
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  $font-size: 14px;
  $toast-min-height: 40px;
  $toast-bg: rgba(0,0,0,0.75);
  $animation-duration: 300ms;
  @keyframes slide-up {
    0% {opacity: 0; transform: translateY(100%)}
    100% {opacity: 1; transform: translateY(0%)}
  }
  @keyframes slide-down {
    0% {opacity: 0; transform: translateY(-100%)}
    100% {opacity: 1; transform: translateY(0%)}
  }
  @keyframes fade-in {
    0% {opacity: 0;}
    100% {opacity: 1;}
  }
  .wrapper {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    &.position-top {
      top: 0;
      .toast {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        animation: slide-down $animation-duration;
      }
    }
    &.position-bottom {
      bottom: 0;
      .toast {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        animation: slide-up $animation-duration;
      }
    }
    &.position-middle {
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
      animation: fade-in $animation-duration;
    }
  }
  .toast {
    font-size: $font-size;
    min-height: $toast-min-height;
    color: #eee;
    padding: 0 16px;
    line-height: 1.8;
    display: flex;
    align-items: center;
    background: $toast-bg;
    border-radius: 4px;
    box-shadow: 0 0 3px 0 rgba(0,0,0,0.5);
    .message {
      padding: 4px 0;
    }
    .close {
      padding-left: 16px;
      flex-shrink: 0;
    }
    .line {
      border: 1px solid #eee;
      margin-left: 16px;
    }
  }
</style>