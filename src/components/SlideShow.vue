<!--
移动动画的相关难点：
    1.存在某一个时刻，存在于两个图片，分别为旧图片移出，新图片移入


此组件有问题，问题原因：
    1.<img>标签重复占用，导致相关css3动画位置不对，需要自己再看看
-->


<template>
  <div class="slide-show" v-on:mouseover="this.clear_auto_change" v-on:mouseout="this.auto_change">
    <span class="slide-img">
      <a v-bind:href="slides[nowIndex].jump">
        <div class="slide-tran-class">
          <transition name="slide-trans-old">
            <img v-bind:src="slides[nowIndex].url" v-if="translate_image === true"/>
          </transition>
          <transition name="image-change">
            <img v-bind:src="slides[nowIndex].url" v-if="translate_image === false"/>
          </transition>
          </div>
      </a>
    </span>

    <div>
      <h2>{{ this.slides[nowIndex].title }}</h2>
      <ul class="slide-pages">
        <li v-on:click="point_change(prev_change)"><</li>
        <li v-for="(item, position) in this.slides" v-on:click="point_change(position)">
          <a v-bind:class="{'on' : nowIndex === position}">
            {{ position + 1 }}
          </a>
        </li>
        <li v-on:click="point_change(next_change)">></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      slides: {
        type: Array,
        default: []
      }
    },
    data: function () {
      return {
        nowIndex: 0,
        autoChangeId: '',
        translate_image: false
      }
    },
    mounted: function () {
      /*this.auto_change();*/
    },
    computed: {
      prev_change: function () {
        console.log('触发了前一张图片')
        let change_position = this.nowIndex;
        change_position - 1 < 0 ? change_position = 3 : change_position--;
        return change_position;
      },
      next_change: function () {
        let change_position = this.nowIndex;
        change_position + 1 > 3 ? change_position = 0 : change_position++;
        return change_position;
      }
    },
    methods: {
      point_change: function (position) {
        console.log('触发了跳转到指定位置的图片， 跳转的位置 = ', position)
        this.translate_image = true;
        setTimeout(() => {
          this.translate_image = false;
          this.nowIndex = position;
        }, 10)
      },
      auto_change: function () {
        this.autoChangeId = setInterval(() => {
          this.point_change(this.next_change);
        }, 2000);
      },
      clear_auto_change: function () {
        clearInterval(this.autoChangeId);
      },
      auto_control_translateImage: function () {
        setInterval(() => {
          this.translate_image = false;
        }, 100)
      }
    }

  }
</script>

<style scoped="true">
  .img-new-position {
    float: left;
    position: relative;
    margin-left: 0px;
    margin-top: 0px;
  }

  /* 此处设置先关的位移动画，控制相关轮播图的变化 */
  .image-change-enter-active {
    transition: all 2s;
  }

  .image-change-enter {
    transform: translateX(900px);
  }

  .slide-trans-old-leave-active {
    transition: all 2s;
    transform: translateX(-900px);
  }

  .slide-trans-old-leave-to {

  }

  .slide-tran-class {
    display: flex;
    flex-direction: row;
  }

  .slide-show {
    position: relative;
    margin: 15px 15px 15px 0;
    width: 900px;
    height: 500px;
    overflow: hidden;
  }

  .slide-show h2 {
    position: absolute;
    width: 100%;
    height: 100%;
    color: #fff;
    background: #000;
    opacity: .5;
    bottom: 0;
    height: 30px;
    text-align: left;
    padding-left: 15px;
  }

  .slide-img {
    width: 100%;
  }

  .slide-img img {
    top: 0;
    position: relative;
    width: 100%;
  }

  .slide-pages {
    position: absolute;
    bottom: 10px;
    right: 15px;
  }

  .slide-pages li {
    display: inline-block;
    padding: 0 10px;
    cursor: pointer;
    color: #fff;
  }

  .slide-pages li .on {
    text-decoration: underline;
  }
</style>
