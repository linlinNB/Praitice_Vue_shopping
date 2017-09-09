<template>
  <div v-bind:class="[{'dialog-show' : isShow === false},{'dialog-wrap' : isShow === true}]">
    <div data-name="浮动窗覆盖" class="dialog-cover"></div>
    <div data-name="浮动窗内容" class="dialog-content">
      <div data-name="交互窗关闭按钮" class="dialog-close button" v-on:click="close_dialog">
        关闭
      </div>
      <slot>这是默认的插槽</slot>
    </div>

  </div>
</template>

<script>
  export default {
    props: {
      isShow: {
        type: Boolean,
        default: false
      }
    },
    data: function () {
      return {}
    },
    methods: {
      close_dialog: function () {
        console.log('触发了关闭弹窗的按钮')
        this.$emit('goto_close_dialog')
      }
    }
  }
</script>

<style scoped="true">
  .dialog-show {
    display: none;
  }
  .dialog-wrap {
    position: fixed;
    height: 100%;
    width: 100%;
  }
  .dialog-cover {
    opacity: .3;
    background-color: black;
    position: fixed;
    z-index: 5;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
  }
  .dialog-content {
    position: fixed;
    /* 以浏览器窗口为标准 */
    background-color: white;
    z-index: 10;
    /* 设定相关的距离用户的距离 */
    top: 30%;
    left:30%;
    width: 50%;
    min-height: 30%;
    /* 设定最小的宽度 */
    max-height: 40%;
    /* 设定最大的宽度 */
    overflow: visible;
    /* 控制超出文字限定狂堵之后的处理办法 */
    line-height: 30px;
    border:10px solid #4fc08d;
  }
  .dialog-close {
    position: absolute;
    top: 2%;
    right: 5%;
    width: 30px;
    height:20px;
    cursor: pointer;
    /* 设计光标的形状 */
    text-align: inherit;
  }
</style>
