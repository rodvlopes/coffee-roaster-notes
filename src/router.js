import Vue from 'vue'
import Router from 'vue-router'
import DefaultLayout from './layouts/Default.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',

  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        { path: '', component: () => import('@/pages/Home') },
        { path: 'editNote/:number', component: () => import('@/pages/EditNote'), props: true, name: 'editNote' }
      ]
    },
    { // Always leave this as last one
      path: '*',
      component: () => import('@/pages/404')
    }
  ]
})
