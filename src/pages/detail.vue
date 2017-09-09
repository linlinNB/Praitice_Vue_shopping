<!--
  此页面设置相关的detail页面的基本布局

  此布局需要注意：
    1.相关View层面的抽象，可以把不同的业务需求抽象成View层面的路由，进行页面级别的处理
    2.对于不同业务需求的View层面的处理，可以继续抽象成为组件层面的抽象
    3.对于相关页面CSS样式级别的重用，需要考虑<style>标签的作用域，进行抽象和整合
    4.对于不同组件之间上下级的层级关系：上层负责定位，子层负责样式、
      尽量不要再父层面上进行除了定位以外的任何装饰效果
    5.对于CSS重用来说，在此基础上，尽量选择使用样式选择器，而不是不同的单独指定样式的结构
    6.对于每个组件，尽量功能单一，不要再分割清楚结构的组件中，使用过多的非功能性的判断
-->
<template>
  <div class="detail-wrap">
    <!-- detail页面中左侧的主要布局-->
    <div data-name="detail_left" class="detail-wrap-left">
        <!-- 此处放置业务代表图片 -->
        <div data-name="detail_left_icon" class="detail-wrap-left-img">
          <!-- 此处放置图片 -->
          <img v-bind:src="getProductIcon"/>
        </div>

        <!-- 此处放置相关业务的选择框 -->
        <div data-name="detail_left_product" class="detail-wrap-left-text">
          <ul v-for="(item, index) in this.productList">
            <!-- 这里有相关的问题：使用tag可以避免前端页面的重复渲染，提高性能 -->
              <router-link v-bind:key="item.id"
                           v-bind:to="item.url"  tag="li" active-class="active">
                {{ item.name }}
              </router-link>
          </ul>
        </div>
    </div>

    <!-- detail页面中右侧主要布局 -->
    <div data-name="detail_right" class="detail-wrap-right">


       <!--此处放置购买相关的业务-->
      <keep-alive>
        <router-view></router-view>
      </keep-alive>

    </div>
  </div>
</template>

<script>
  export default {
    data:function () {
      return {
        productList:[
          {
            name: '数据统计',
            url: 'count',
            active: false
          },
          {
            name: '数据预测',
            url: 'forecast',
            active: false
          },
          {
            name: '流量分析',
            url: 'analysis',
            active: false
          },
          {
            name: '广告发布',
            url: 'publish',
            active: false
          },
        ],
        IconMap: {
          '/detail/count': require('../assets/images/1.png'),
          '/detail/forecast': require('../assets/images/2.png'),
          '/detail/analysis': require('../assets/images/3.png'),
          '/detail/publish': require('../assets/images/4.png')
        }
      }
    },
    computed: {
      getProductIcon: function () {
        console.log('计算属性当中获取的url = ', this.$route.path)
        return this.IconMap[this.$route.path];
      }
    }
  }
</script>

<!-- 为了达到css组件共用，放开<style>的scoped的作用域范围 -->
<style>
  .detail-wrap {
    width: 1200px;
    overflow: hidden;
    margin: 0 auto;
    padding-top: 20px;
    display: flex;
    /* 对于流式布局的宽度设置 */
    flex-direction: row;
    /* 设置流式布局放置不下的情况 */
    flex-wrap: nowrap;
    /* 定义在交叉轴中如何对齐 */
    align-items: flex-start;

  }

  .detail-wrap-left {
    background-color: white;
    width: 200px;
    text-align: center;
  }

  .detail-wrap-right {
    width: 900px;
    margin-left: 100px;
    display: flex;
    flex-direction: column;
  }

  .detail-wrap-left-img {
    margin-top: 20px;
  }

  .detail-wrap-left-text {
    margin-top: 50px;
    margin-bottom: 50px;
    cursor: pointer;
  }

  .detail-wrap-left-text li {
    margin-top: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .detail-wrap-left-text li:active,
  .detail-wrap-left-text li:hover {
    background: #4fc08d;
    color: white;
  }

  .detail-wrap-right-bought {
    background-color: white;
  }

  .detail-wrap-right-productInfo {
    margin-top: 20px;
    background-color: white;
  }


  /* 此处往下的样式采用了CSS层面的抽象，进行四个不同业务共用相同的CSS样式 */
  .sales-board {
    background: #fff;
  }

  .sales-board h2 {
    padding: 10px;
    font-size: 30px;
  }

  .sales-board p {
    padding: 10px 20px;
    line-height: 1.8;
    /* 此设置：乘以当前数字，进而控制行间距 */
    color: #999;
    background: #f7fcff;
  }
    /* 设置提交表单的统一样式 */
  .sales-board-form {
    padding: 30px 20px;
    font-size: 15px;
  }

    /* 设置普通行间类型样式 */
  .sales-board-line {
    clear: both;
    /* 两侧标签都不会出现悬浮属性，如同div标签一样 */
    padding-bottom: 20px;
  }

  .sales-board-line-left {
    display: inline-block;
    width: 100px;
  }

  .sales-board-line-right {
    display: inline-block;
    width: 75%;
  }

  /* 设置产品信息介绍的相关样式 */
  .sales-board-des {
    border-top: 20px solid #f0f2f5;
    padding: 15px 20px;
  }

  .sales-board-des p {
    line-height: 1.6;
  }
  .sales-board-des h2 {
    font-size: 20px;
    padding-bottom: 15px;
  }

  .sales-board-des h3 {
    font-size: 18px;
    font-weight: bold;
    padding: 20px 0 10px 0;
  }
  .sales-board-des li {
    padding: 5px 0;
  }
  .sales-board-table {
    width: 100%;
    margin-top: 20px;
  }
  .sales-board-table th {
    background: #4fc08d;
    color: #fff;
  }
  .sales-board-table td {
    border: 1px solid #f0f2f5;
    padding: 15px;
  }

</style>
