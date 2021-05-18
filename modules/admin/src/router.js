import Vue from 'vue'
import VueRouter from 'vue-router'

import NotFound from '@shared/views/NotFound'

import Home from '@admin/views/Home'
import About from '@admin/views/About'
import Admin from '@admin/views/Admin'

const routes = [
  { path: '*', component: NotFound },
  { name: 'Home', path: '/', component: Home },
  { name: 'About', path: '/about', component: About },
  { name: 'Admin', path: '/admin', component: Admin }
]

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes
})
