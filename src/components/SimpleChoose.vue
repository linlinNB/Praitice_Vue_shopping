<template>
  <div class="simple_choose_total_style">
    <ul>
      <li v-for="(item, index) in this.selectList" v-bind:key="index"
          v-bind:class="{simple_choose_choosed: choosedIndex === index}"
          v-on:click="chooseSelection(index)">
        {{ item.label }}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props:{
      selectList:{
        type: Array,
        default: [{
          label: 'test',
          value: 0
        }]
      }
    },
    data(){
      return {
        choosedIndex: 0
      }
    },
    computed:{
      find_light_position: function (index) {
        this.choosedIndex = index;
        return this.choosedIndex;
      }
    },
    methods:{
      chooseSelection: function (index) {
        let price_Info = new Map();
        price_Info.set('sub_price', this.selectList[this.choosedIndex].value);
        price_Info.set('add_price', this.selectList[index].value);
        this.$store.dispatch ('cl_total_price_action', price_Info);
        this.choosedIndex = index;
      }
    },
    created:function () {
      let price_Info = new Map();
      price_Info.set('sub_price', parseInt(0));
      price_Info.set('add_price', this.selectList[0].value);
      this.$store.dispatch ('cl_total_price_action', price_Info);
    }
  }
</script>

<style scoped>
  .simple_choose_total_style {
    position: relative;
    display: inline-block;
  }

  .simple_choose_choosed{
    border-color: #4fc08d;
    background: #4fc08d;
    color: #fff;
  }

  .simple_choose_total_style ul li {
    display: inline-block;
    cursor: pointer;
    text-align: center;
    height: 25px;
    line-height: 25px;
    padding: 0 8px;
    margin-right: 10px;
    border:#e3e3e3 solid 1px;
    /* CSS 3.0的方法设置圆角边框 */
    border-radius: 25px;
  }
</style>
