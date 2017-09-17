<template>
  <div class="select_total_style">
    <!-- 设置“-” -->
    <div class="select_button_style" v-on:click="sub_bought_number">-</div>
    <!-- 设置显示数量 -->
    <div class="select_show_number_style">
      <input type="text" disabled v-bind:value="show_bought_number" class="input_show_style"/>
    </div>
    <!-- 设置“+” -->
    <div class="select_button_style" v-on:click="add_bought_number">+</div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
          bought_number: 0
      }
    },
    methods:{
      add_bought_number: function () {
        parseInt(this.bought_number) >= 10 ? this.bought_number = 1 : this.$store.dispatch('add_total_number_action');
      },
      sub_bought_number: function () {
        parseInt(this.bought_number) <= 1 ? this.bought_number = 10 : this.$store.dispatch('sub_total_number_action');
      }
    },
    computed:{
      show_bought_number: function () {
        this.bought_number = this.$store.state.total_number;
        return this.bought_number;
      }
    }
  }
</script>

<style>
  .select_total_style{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
  }
  .select_button_style {
    display: inline-block;
    /*padding: 5px 5px;*/
    border: 1px solid #e3e3e3;
    height: 25px;
    line-height: 25px;
    text-align: center;
    width: 30px;
    /*flex-grow: 1;*/
  }
  .select_show_number_style {
    display: inline-block;
  }
  .input_show_style {
    border: none;
    text-align: center;
    background: white;
    border-bottom: 1px solid #e3e3e3;
    border-top: 1px solid #e3e3e3;
    height: 23px;
    line-height: 23px;
  }
  .select_button_style:hover {
    background: #4fc08d;
    background-color: #4fc08d;
    color: #fff;
  }
</style>
