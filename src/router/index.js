import Vue from 'vue'
import Router from 'vue-router'
/* 设置相关页面的联合 */
import IndexPage from '../pages/indexpage.vue'
import detail from '../pages/detail.vue'

/* 设置相关的支付页面的路由 */
import count_page from '../components/all_detail/count.vue'
/* 设置相关的流量分析页面的路由 */
import analysis_page from '../components/all_detail/analysis.vue'
/* 设置相关的流量预测页面的路由 */
import forecast_page from '../components/all_detail/forecast.vue'
/* 设置相关的广告发布的路由 */
import publish_page from '../components/all_detail/publish.vue'

/* 此处设置了index页面的基本路由规则 */
Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/index',
      name: 'indexpage',
      component: IndexPage
    },
    {
      path: '/detail',
      name: 'detailpage',
      component: detail,
      redirect: '/detail/analysis',
      children:[
        {
          path:'publish',
          name: 'publish',
          component: publish_page
        },
        {
          path:'forecast',
          name: 'forecast',
          component: forecast_page
        },
        {
          path:'count',
          name: 'count',
          component: count_page
        },
        {
          path:'analysis',
          name: 'analysis',
          component: analysis_page
        },
      ]
    }
  ]
})
