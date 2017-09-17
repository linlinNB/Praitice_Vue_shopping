<template>
  <!-- 进行多选组件的学习 -->
  <div class="multipechoose_total_style">
    <ul class="multipechoose_row_style">
      <!-- 进行相关的列表测试 -->
      <li v-for="(item, index) in this.versionList"
          v-bind:key="index"
          v-on:click="pd_choose_flag(index)"
          class='multipechoose_column_style'
          v-bind:class="[{'multipechoose_choosed': choose_flag_map.has(index) === true}]"
        >
        <!-- ,{'multipechoose_column_style': true} -->
        {{ item.label }}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props:{
      versionList:{
        type: Array,
        default:{
          label: 'test',
          value: 'map的默认值'
      }
      }
    },
    data(){
      return {
        choose_flag_map: []
      }
    },
    methods:{
      pd_choose_flag: function (index) {
        console.log('进行相关的事件改变');
        if (this.choose_flag_map.has(index) === true) {
          this.choose_flag_map.delete(index);
          console.log('删除相关的编号');
        } else {
          this.choose_flag_map.add(index);
          console.log('增加相关编号');
        }
      },
      pd_choosed: function (index) {
        console.log("进行判断的结果 = ", this.choose_flag_map.has(index));
        return this.choose_flag_map.has(index);
      }
    },
    computed:{
    },
    /**
     * 初始化相关的数据，choose_float_map是对于按钮多项选择是进行判断样式的相关绑定
     * versionList是对于“媒介”属性的展示
     * 选择在created进行初始化
     */
    created: function () {
      this.choose_flag_map = new Set();
      /*
      for (let [index, item] of this.versionList.entries()){
        this.choose_flag_map.add(index);
      }
      */
    }
  }
</script>

<style scoped>
  .multipechoose_total_style {
    position: relative;
    display: inline-block;

  }

  .multipechoose_row_style {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
  }

  .multipechoose_column_style {
    border-radius: 25px;
    margin-right: 10px;
    border: 1px solid #e3e3e3;
    padding: 0 8px;
    line-height: 25px;
    text-align: center;
  }

  .multipechoose_column_style:hover {
    background: #4fc08d;
    background-color: #4fc08d;
    color: #fff;
  }

  .multipechoose_choosed{
    border-color: #4fc08d;
    background: #4fc08d;
    color: #fff;
  }



</style>
