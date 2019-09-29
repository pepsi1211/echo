import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Hot from './views/Hot.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',component: Index},
    {path:"/index",component:Index},
    {path:"/rank/hot",component:Hot},
  ]
})
