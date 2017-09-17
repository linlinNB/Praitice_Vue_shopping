<template>
  <!-- 设置相关的购买业务的页面 -->
  <div class="sales-board">
    <!-- 页面的标题 -->
    <div>
      <h2>数据统计</h2>
      <p>
        历史资料、科学实验、检验、统计等所获得的和用于科学研究、技术设计、查证、决策等的数值加以统计为解决方案做前期准备
      </p>
    </div>
    <!-- 货物相关属性的选择 -->
    <div class="sales-board-form">
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          产品类型
        </div>
        <div class="sales-board-line-right">
          <!--<p>这里需要抽象成一个组件</p>-->
          <my-simple-choose v-bind:selectList="this.buyTypes">
          </my-simple-choose>
        </div>
      </div>

      <div class="sales-board-line">
        <div class="sales-board-line-left">
          购买数量:
        </div>
        <div class="sales-board-line-right">
          <!--<p>这里需要抽象成一个组件</p>-->
          <my-number-choose></my-number-choose>
        </div>
      </div>

      <div class="sales-board-line">
        <div class="sales-board-line-left">
          有效时间：
        </div>
        <div class="sales-board-line-right">
          半年
        </div>
      </div>
      <!-- 设置相关的价格 -->
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          总价：
        </div>
        <div class="sales-board-line-right">
          {{ this.show_total_price }} 元
        </div>
      </div>
      <!-- 设置购买按钮 -->
      <div class="sales-board-line">
        <div class="sales-board-line-left">&nbsp;</div>
        <div class="sales-board-line-right">
          <div class="button">
            立即购买
          </div>
        </div>
      </div>

    </div>
    <!-- 设置购买的相关产品信息 -->
    <div class="sales-board-des">
      <h2>产品说明</h2>
      <p>历史资料、科学实验、检验、统计等所获得的和用于科学研究、技术设计、查证、决策等的数值加以统计为解决方案做前期准备。</p>

      <!-- 设置相关表格的设置 -->
      <table class="sales-board-table">
        <tbody>
        <tr class="ui-table-row">
          <td class="col-first">
            <div class="intro-pic">
              <label>安全安保</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>办公文教</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>彩票</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>车辆物流</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>成人用品</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>出版传媒</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>电脑硬件</label>
            </div>
          </td>
        </tr>
        <tr class="ui-table-row">
          <td class="col-first">
            <div class="intro-pic">
              <label>电子电工</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>房地产建筑装修</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>分类平台</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>服装鞋帽</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>箱包饰品</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>化工原料制品</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>机械设备</label>
            </div>
          </td>
        </tr>
        <tr class="ui-table-row">
          <td class="col-first">
            <div class="intro-pic">
              <label>家庭日用品</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>家用电器</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>教育培训</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>节能环保</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>金融服务</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>礼品</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>旅游住宿</label>
            </div>
          </td>
        </tr>
        <tr class="ui-table-row">
          <td class="col-first">
            <div class="intro-pic">
              <label>美容化妆</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>母婴护理</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>农林牧渔</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>软件</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>商务服务</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>生活服务</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>食品保健品</label>
            </div>
          </td>
        </tr>
        <tr class="ui-table-row">
          <td class="col-first">
            <div class="intro-pic">
              <label>手机数码</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>通讯服务设备</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>网络服务</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>医疗服务</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>游戏</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>运动休闲娱乐</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>招商加盟</label>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
  import simple_choose from '../SimpleChoose.vue'
  import number_choose from '../NumberChoose.vue'
  export default {
    components:{
      "my-simple-choose": simple_choose,
      "my-number-choose": number_choose
    },
    data(){
      return {
        buyTypes: [
          {
            label: '每月统计',
            value: 200
          },
          {
            label: '每季统计',
            value: 500
          },
          {
            label: '每年统计',
            value: 1000
          }
        ],
        districts: [
          {
            label: '北京',
            value: 2000
          },
          {
            label: '上海',
            value: 3000
          },
          {
            label: '广州',
            value: 4000
          },
          {
            label: '天津',
            value: 5000
          },
          {
            label: '武汉',
            value: 6000
          },
          {
            label: '重庆',
            value: 7000
          },
        ],
        total_number: 0
      }
    },
    methods:{
    },
    computed:{
      show_total_price: function () {
        /* 为什么不直接使用store.state中的数据呢？
         *
          *   因为这样写可以一定程度上解耦合，方便以后页面的修改，DOM结构的变化并不影响数据的变化
          * */
        /*return this.$store.state.total_price;*/
        console.log(this.$store.state.total_price);
        return this.$store.state.total_price;
      }
    }
  }
</script>

<style scoped>
</style>
