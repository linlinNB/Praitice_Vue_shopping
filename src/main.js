// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import axios from 'axios'

/*此处为了好找，放置自定义的布局文件*/
import mylayout from './components/Layout.vue'

Vue.config.productionTip = false


Vue.use(axios)

/* eslint-disable no-new */
/*new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})*/

new Vue({
  el:'#app',
  router,
  template: '<mylayout/>',
  components: { mylayout }
})

