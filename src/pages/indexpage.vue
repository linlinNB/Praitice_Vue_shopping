<template>
  <div class="index-title">
    <!-- 主页部分的右半部分 -->
    <div class="index-left">
      <div class="index-left-block">
        <h2>全部产品</h2>

        <template v-for="item in this.productList">
          <h3> {{ item.title }} </h3>
          <ul>
            <li v-for="anotheritem in item.list">
              <a v-bind:href="anotheritem.url">{{ anotheritem.name }}</a>
              <span v-if="anotheritem.hot === true" class="hot-tag">HOT</span>
            </li>
          </ul>

          <!--中间分隔符的样式-->
          <div v-if="item.last != true" class="hr"></div>
        </template>

        <!--
        这里就体现出了差异，原因在于自己书写的组件抽象化程度不够
        <h3>{{ this.productList.app.title }}</h3>
        <ul>
          <li v-for="item in this.productList.app.list">
            {{ item.name }}
          </li>
        </ul>
        -->
      </div>


      <div class="index-left-block lastest-news">
        <h2>{{this.allNewsList.title}}</h2>
        <ul v-for="item in this.allNewsList.newsList">
          <li>
            <a v-bind:href="item.url" class="new-item">
              {{ item.title }}
            </a>
          </li>
        </ul>
      </div>


    </div>

    <!-- 主页部分的右半部分 -->
    <div class="index-right">
      <div>
        <my_silde-show :slides="imageInfo"></my_silde-show>
      </div>


      <!-- 此处设置相关业务的具体显示 -->
      <div class="index-board-list">
        <!--此处写法值得我学习，通过创建不同的作用域，进行不同的业务处理-->
        <div class="index-board-item" v-for="(item, position) in this.boradList"
             v-bind:class="[{'line-last' : position % 2 !== 0}, 'index-board_' + `${position + 1}`]">
          <!--在item的右半部分-->
          <div class="index-board-item-inner">
            <h2>{{ item.title }}</h2>
            <p>{{ item.description }}</p>


            <!-- 注意此处，不是用单纯的button去实现相关的样式 -->
            <div class="index-board-button">
              <!--<p>这是按钮</p>-->
            <router-link v-bind:to="item.url" class="button">立刻购买</router-link>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import my_sildeShow from '../components/SlideShow.vue'

  export default {
    data: function () {
      return {
        //产品页的详细信息
        productList: {
          pc: {
            title: 'PC类产品',
            list: [
              {
                name: '数据统计',
                url: '/detail/count'
              },
              {
                name: '数据预测',
                url: '/detail/forecast'
              },
              {
                name: '流量分析',
                url: '/detail/analysis',
                hot: true
              },
              {
                name: '广告发布',
                url: '/detail/publish'
              }
            ]
          },

          app: {
            title: '应用类产品',
            last: true,
            list: [
              {
                name: '百度管家',
                url: 'http://www.baidu.com',
                hot: true
              },
              {
                name: '产品助手',
                url: 'http://www.baidu.com'
              },
              {
                name: '智能地图',
                url: 'http://www.baidu.com'
              },
              {
                name: '团队语音',
                url: 'http://www.baidu.com'
              }
            ]
          }
        },
        //产品的最新动态
        allNewsList: {
          title: '最新消息',
          newsList: []
        },
        //相关业务
        boradList: [
          {
            title: '开放产品',
            description: '开放产品是一款开放产品',
            url: '/detail/开放产品页面',
            id: 'boraditem_001'
          },
          {
            title: '品牌营销',
            description: '品牌营销帮助你的产品更好地找到定位',
            url: '/detail/品牌营销页面',
            id: 'boreaditem_002'
          },
          {
            title: '使命必达',
            description: '使命必达快速迭代永远保持最前端的速度',
            url: '/detail/使命必达页面',
            id: 'boreaditem-003'
          },
          {
            title: '勇攀高峰',
            description: '帮你勇闯高峰，到达事业的顶峰',
            url: '/detail/勇攀高峰页面',
            id: 'boreaditem_004'
          }
        ],
        imageInfo: [
          {
            id: 'SlideImage_001',
            url: require('../assets/slideImage/pic1.jpg'),
            title: '第1张图片',
            jump: 'http://www.hao123.com'
          },
          {
            id: 'SlideImage_002',
            url: require('../assets/slideImage/pic2.jpg'),
            title: '第2张图片',
            jump: 'http://www.hao123.com'
          },
          {
            id: 'SlideImage_003',
            url: require('../assets/slideImage/pic3.jpg'),
            title: '第3张图片',
            jump: 'http://www.hao123.com'
          },
          {
            id: 'SlideImage_004',
            url: require('../assets/slideImage/pic4.jpg'),
            title: '第4张图片',
            jump: 'http://www.hao123.com'
          }
        ]
      }
    },
    components: {
      my_sildeShow
    },
    created: function () {
      let myworkspace = this;
      axios.get('/api/getNewsList')
        .then(function (response) {
          console.log('请求成功回调的结果: ', response);
          myworkspace.allNewsList.newsList = response.data;
        })
        .catch(function (error) {
          console.log('此次请求的错误： ', error)
        })
    }
  }
</script>

<style scoped>
  .index-title {
    position: relative;
    left: 18%;
  }
  .index-wrap {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
  }

  .index-left {
    float: left;
    width: 300px;
    text-align: left;
  }

  .index-right {
    float: left;
    width: 900px;
  }

  .index-left-block {
    margin: 15px;
    background: #fff;
    box-shadow: 0 0 1px #ddd;
  }

  .index-left-block .hr {
    margin-bottom: 20px;
  }

  .index-left-block h2 {
    background: #4fc08d;
    color: #fff;
    padding: 10px 15px;
    margin-bottom: 20px;
  }

  .index-left-block h3 {
    padding: 0 15px 5px 15px;
    font-weight: bold;
    color: #222;
  }

  .index-left-block ul {
    padding: 10px 15px;
  }

  .index-left-block li {
    padding: 5px;
  }

  .index-board-list {
    overflow: hidden;
  }

  .index-board-item {
    float: left;
    width: 400px;
    background: #fff;
    box-shadow: 0 0 1px #ddd;
    padding: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
  }

  .index-board-item-inner {
    min-height: 125px;
    padding-left: 120px;
  }

  .index-board_1 .index-board-item-inner {
    background: url(../assets/images/1.png) no-repeat;
  }

  .index-board_2 .index-board-item-inner {
    background: url(../assets/images/2.png) no-repeat;
  }

  .index-board_3 .index-board-item-inner {
    background: url(../assets/images/3.png) no-repeat;
  }

  .index-board_4 .index-board-item-inner {
    background: url(../assets/images/4.png) no-repeat;
  }

  .index-board-item h2 {
    font-size: 18px;
    font-weight: bold;
    color: #000;
    margin-bottom: 15px;
  }

  .line-last {
    margin-right: 0;
  }

  .index-board-button {
    margin-top: 20px;
  }

  .lastest-news {
    min-height: 512px;
  }

  .hot-tag {
    background: red;
    color: #fff;
  }

  .new-item {
    display: inline-block;
    width: 230px;
    overflow: hidden;
    text-overflow: ellipsis;
    /*超出省略的相关元素*/
    white-space: nowrap;
  }
</style>
