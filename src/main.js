// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueX from 'vuex'
import router from './router/index'
import axios from 'axios'

/*此处为了好找，放置自定义的布局文件*/
import mylayout from './components/Layout.vue'

Vue.config.productionTip = false
Vue.use(VueX)
Vue.use(axios)

/* eslint-disable no-new */
/*new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})*/

const price_store = new VueX.Store({
  state: {
    total_price: 0,
    total_number: 1,
    pro_price: 0
  },
  actions:{
    cl_total_price_action ({commit}, price_Info){
      console.log('触发了计算价格的action');
      commit('make_sure_pro_price', price_Info.get('add_price'));
      commit('sub_total_price', price_Info.get('sub_price'));
      commit('add_total_price', price_Info.get('add_price'));
      commit('computed_total_price');
      console.log('触发了计算价格的action');
      /*commit('computed_total_price', price_Info);*/
    },
    computed_total_price_action ({commit}) {
      commit('computed_total_price', number);
    },
    add_total_number_action ({commit}){
      commit('add_total_number');
      commit('computed_total_price');
    },
    sub_total_number_action ({commit}){
      commit('sub_total_number');
      commit('computed_total_price');
    }
  },
  mutations:{
    computed_total_price (state){
      console.log('进行相乘的mutations');
      state.total_price = state.pro_price * state.total_number;
    },
    add_total_price (state, production_price) {
      console.log('触发了计算价格的中相加的处理的mutations');
      state.total_price += parseInt(production_price);
    },
    sub_total_price (state, production_price) {
      state.total_price -= parseInt(production_price);
    },
    add_total_number (state){
      console.log('进行购买数量的添加');
      state.total_number++;
    },
    sub_total_number (state){
      console.log('记性购买数量的减少');
      state.total_number--;
    },
    make_sure_pro_price (state, pro_price) {
      state.pro_price = pro_price;
    }
  }
})

new Vue({
  el:'#app',
  router,
  store: price_store,
  template: '<mylayout/>',
  components: { mylayout }
})

