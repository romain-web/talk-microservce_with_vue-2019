import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/components/Main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
      props: {
        slideUid: 0
      }
    },
    {
      path: '/:slideUid',
      name: 'slide',
      component: Main,
      props: (route) => ({
        slideUid: parseInt(route.params.slideUid)
      })
    }
  ]
})
